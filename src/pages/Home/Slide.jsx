import React, { useEffect, useState } from 'react'
import { AiFillPlayCircle, AiFillStar } from 'react-icons/ai'
import Button from '../../components/Button/Button'
import apiConfig from '../../config/apiConfig'
import movieApi from '../../services/movieApi'
import getGenres from '../../utils/getGenres'
function Slide({ item, className }) {
    const [genresList, setGenresList] = useState([])

    useEffect(() => {
        const getGenresList = async () => {
            const data = await movieApi.getGenresMovie()
            data && setGenresList(data.genres)
        }
        getGenresList()
    }, [item])

    return (
        <div
            className='page-container banner-slide  h-[700px] bg-cover mb-10 relative rounded-md'
            style={{ backgroundImage: `url(${apiConfig.orginalImage(item.backdrop_path)})` }}
        >
            <img
                src={apiConfig.orginalImage(item.poster_path)}
                alt={item.title}
                className='absolute top-1/4 w-[300px] h-[450px] object-contain left-32 rounded-lg'
            />
            <div className='absolute z-10 p-10  top-1/3 translate-x-[450px] max-w-[800px] text-white'>
                <h2 className=' font-bold text-[45px] title'>{item.title}</h2>
                <div className='flex flex-col'>
                    <div className='flex items-center gap-x-3 mb-8 mt-4 text-[16px]'>
                        <span>Release year: {item.release_date}</span>
                        <span>|</span>
                        <span className='flex items-center gap-x-2'>
                            Vote: {item.vote_average}
                            <AiFillStar color='yellow' />
                        </span>
                    </div>
                    <div className='flex items-center gap-x-3 mb-8 mt-4 text-[16px]'>
                        {getGenres(item, genresList).map((genre) => (
                            <span key={genre.id} className='py-2 px-4 border border-white rounded-md text-white'>
                                {genre.name}
                            </span>
                        ))}
                    </div>
                </div>
                <Button size='medium'>
                    Watch Now
                    <AiFillPlayCircle fontSize='20px' />
                </Button>
            </div>
        </div>
    )
}

export default Slide
