import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apiConfig from '../../config/apiConfig'
import movieApi from '../../services/movieApi'

function Cast() {
    const { movieId } = useParams()
    const [cast, setCast] = useState([])
    useEffect(() => {
        const getCastMovie = async () => {
            const data = await movieApi.getCastMovie(movieId)
            setCast(data.cast.slice(0, 4))
            console.log(data.cast.slice(0, 4))
        }
        getCastMovie()
    }, [movieId])

    return (
        <div className='max-w-[900px] mx-auto mb-16'>
            <h2 className='text-white font-semibold text-4xl mb-12 text-center'>Cast</h2>
            <div className='grid grid-cols-4 gap-x-6'>
                {cast.map((item) => (
                    <div key={item.id} className='flex flex-col gap-y-5'>
                        <img
                            src={apiConfig.orginalImage(item.profile_path)}
                            alt={item.name}
                            className='w-full h-[220px] object-cover rounded-lg'
                        />
                        <h3 className='text-white text-xl'>{item.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cast
