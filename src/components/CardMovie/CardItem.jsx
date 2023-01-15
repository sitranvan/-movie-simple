import React from 'react'
import { AiFillPlayCircle, AiFillStar } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import apiConfig from '../../config/apiConfig'
import Button from '../Button/Button'

function CardItem({ data }) {
    const navigate = useNavigate()
    const handleDetailMovie = () => {
        navigate(`/movie/${data.id}`)
    }
    return (
        <div className='rounded-lg p-3 bg-slate-800 text-white cursor-pointer' onClick={handleDetailMovie}>
            <img
                className='w-full h-[300px] object-cover rounded-lg'
                src={apiConfig.orginalImage(data.backdrop_path)}
                alt={data.title}
            />
            <h3 className='text-white text-xl font-bold mb-3 mt-5 title'>{data.title}</h3>
            <div className='flex items-center justify-between text-sm opacity-50 mb-8'>
                <span>{data.release_date}</span>
                <span className='flex items-center gap-x-1'>
                    {data.vote_average}
                    <AiFillStar color='yellow' />
                </span>
            </div>
            <Button size='large'>
                Watch Now
                <AiFillPlayCircle fontSize='20px' />
            </Button>
        </div>
    )
}

export default CardItem
