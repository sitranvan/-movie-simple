import React, { Fragment, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Button from '../../components/Button/Button'
import movieApi from '../../services/movieApi'

function LoadMore({ setMoiveList, movieList }) {
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(2)
    const location = useLocation()
    const { keyword } = useParams()

    const handleLoadMore = async () => {
        setPage(page + 1)
        let data = null
        const typeLoad = location.pathname.split('/')[2]
        try {
            setLoading(true)
            if (location.pathname.includes('movie/search')) {
                data = await movieApi.searchMovie({ query: keyword, page })
            } else {
                data = await movieApi.getMovie(typeLoad, { page })
            }
            setMoiveList(movieList.concat(data.results))
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }
    return (
        <Fragment>
            {movieList.length > 0 && (
                <Button size='medium' className='text-white font-semibold my-10' onClick={handleLoadMore}>
                    {loading ? (
                        <div className='w-5 h-5 border-4 mx-auto border-white border-t-4 border-t-transparent rounded-full animate-spin'></div>
                    ) : (
                        'Load More'
                    )}
                </Button>
            )}
        </Fragment>
    )
}

export default LoadMore
