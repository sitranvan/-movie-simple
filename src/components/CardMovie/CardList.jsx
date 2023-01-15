import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import movieApi from '../../services/movieApi'
import CardItem from './CardItem'
function CardList({ title, type }) {
    const navigate = useNavigate()
    const [movieList, setMoiveList] = useState([])
    useEffect(() => {
        const getMovieList = async () => {
            const data = await movieApi.getMovie(type, { page: 1 })
            setMoiveList(data.results)
        }
        getMovieList()
    }, [])

    const handleSeeAll = () => {
        navigate(`/movie/${type}`)
    }

    return (
        <section className='page-container pb-20'>
            <div className='flex items-center justify-between'>
                <h2 className='capitalize text-white mb-10 text-2xl font-bold '>{title}</h2>
                <h2
                    className='capitalize text-white mb-10 text-2xl font-bold cursor-pointer hover:opacity-90'
                    data-type={type}
                    onClick={handleSeeAll}
                >
                    See All
                </h2>
            </div>
            <div className='card-list '>
                <Swiper grabCursor={true} spaceBetween={20} slidesPerView='auto'>
                    {movieList.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <CardItem key={movie.id} data={movie} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default CardList
