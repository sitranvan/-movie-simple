import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import CardItem from '../../components/CardMovie/CardItem'
import pathValues from '../../data/pathValues'
import movieApi from '../../services/movieApi'

import LoadMore from './LoadMore'
import Search from './Search'
function AllMovie() {
    const [movieList, setMoiveList] = useState([])
    const location = useLocation()

    useEffect(() => {
        const getMovieList = async () => {
            const value = pathValues[location.pathname]
            if (value) {
                let data = await movieApi.getMovie(value)
                setMoiveList(data.results)
            }
        }
        getMovieList()
    }, [location.pathname])

    useEffect(() => {
        if (location.pathname.includes('movie/search')) {
            setMoiveList(JSON.parse(localStorage.getItem('search')))
        }
    }, [location.pathname])

    return (
        <div className='page-container flex items-center flex-col'>
            <div className='flex items-center w-full mb-14 '>
                <Search setMoiveList={setMoiveList} />
            </div>
            <div className='grid grid-cols-4 gap-4'>
                {movieList.map((item) => (
                    <CardItem key={item.id} data={item} />
                ))}
            </div>
            <LoadMore setMoiveList={setMoiveList} movieList={movieList} />
        </div>
    )
}

export default AllMovie
