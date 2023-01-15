import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apiConfig from '../../config/apiConfig'
import movieApi from '../../services/movieApi'
import Banner from './Banner'
import Cast from './Cast'
import Content from './Content'
import Trailler from './Trailler'

function Detail() {
    const { movieId } = useParams()
    const [movieDetail, setMovieDetail] = useState([])
    useEffect(() => {
        const getDetailMovie = async () => {
            const data = await movieApi.getDetail(movieId)
            setMovieDetail(data)
            console.log(data)
        }
        getDetailMovie()
    }, [movieId])

    return (
        <div className='pb-10'>
            <Banner data={movieDetail} />
            <Content data={movieDetail} />
            <Cast />
            <Trailler />
        </div>
    )
}

export default Detail
