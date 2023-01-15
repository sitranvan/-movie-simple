import React, { useEffect, useState } from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import movieApi from '../../services/movieApi'
import Slide from './Slide'

function Banner() {
    const [banner, setBanner] = useState([])
    useEffect(() => {
        const getMovieList = async () => {
            const type = 'popular'
            const data = await movieApi.getMovie(type)
            setBanner(data.results.slice(0, 5))
        }
        getMovieList()
    }, [])

    return (
        <div className='page-container banner relative'>
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView='1'
                autoplay={{ delay: 5000 }}
            >
                {banner.map((item) => (
                    <SwiperSlide key={item.id}>
                        {({ isActive }) => <Slide item={item} className={`${isActive ? 'activeSide' : ''}`} />}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Banner
