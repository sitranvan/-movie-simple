import React, { Fragment, useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import { RiSearchLine } from 'react-icons/ri'
import useDebounce from '../../hooks/useDebounce'
import movieApi from '../../services/movieApi'

function Search({ setMoiveList }) {
    const navigate = useNavigate()
    const [query, setQuery] = useState('')
    const [resultKeyword, setResultKeyword] = useState([])
    const queryDebounce = useDebounce(query, 300)
    const handleSearch = async (e) => {
        e.preventDefault()
        const data = await movieApi.searchMovie({ query })
        setMoiveList(data.results)
        navigate(`/movie/search/${query}`)
        localStorage.setItem('search', JSON.stringify(data.results))
    }

    useEffect(() => {
        const getKeyword = async () => {
            const data = query !== '' && (await movieApi.getKeywordMovie({ query: queryDebounce }))
            setResultKeyword(data.results)
        }
        getKeyword()
    }, [queryDebounce])

    const handleSelectKeyword = (name) => {
        const e = new Event('submit')
        setQuery(name)
        handleSearch(e)
        setQuery('')
        setResultKeyword([])
    }

    return (
        <div className='w-[500px] relative'>
            <form onSubmit={handleSearch}>
                <div className='relative'>
                    <input
                        type='text'
                        className='w-full py-2 border-none outline-none text-[16px] rounded-md px-5 '
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder='Enter search keywords...'
                    />
                    {query !== '' && resultKeyword && resultKeyword.length > 0 && (
                        <div className='absolute top-full left-0 w-[400px] rounded-md border-t-gray-200 border py-2  shadow-md bg-white h-auto z-10 max-h-[265px] overflow-auto search-box'>
                            {resultKeyword.map((result) => (
                                <p
                                    onClick={() => handleSelectKeyword(result.name)}
                                    key={result.id}
                                    className='text-gray-500 flex items-center gap-x-2 cursor-pointer hover:bg-gray-100 px-5 py-1'
                                >
                                    <RiSearchLine />
                                    <span className='text'>{result.name}</span>
                                </p>
                            ))}
                        </div>
                    )}
                </div>
                <Button size='small' className='absolute right-0 top-0 h-full rounded-r-md rounded-l-none'>
                    <BiSearch color='white' fontSize={'20px'} />
                </Button>
            </form>
        </div>
    )
}

export default Search
