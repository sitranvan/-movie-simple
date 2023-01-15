import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import movieApi from '../../services/movieApi'

function Trailler() {
    const { movieId } = useParams()
    const [traillers, setTraillers] = useState([])
    useEffect(() => {
        const getVideoMovie = async () => {
            const data = await movieApi.getVideoMovie(movieId)
            setTraillers(data.results.slice(0, 4))
        }
        getVideoMovie()
    }, [movieId])

    return (
        <div className='max-w-[1000px] mx-auto'>
            <h2 className='text-white font-semibold text-4xl  mb-14 text-center '>Movie Trailler</h2>

            {traillers.map((trailler) => (
                <div key={trailler.id} className='flex flex-col mb-12'>
                    <h3 className='text-white text-2xl mb-8'>{trailler.name}</h3>
                    <iframe
                        className='object-cover rounded-lg'
                        width='100%'
                        height='550'
                        src={`https://www.youtube.com/embed/${trailler.key}`}
                        title='YouTube video player'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        allowFullScreen
                    ></iframe>
                </div>
            ))}
        </div>
    )
}

export default Trailler
