import React, { Fragment } from 'react'

function Content({ data }) {
    return (
        <Fragment>
            <h2 className='text-center text-3xl font-bold text-white mb-10'>{data.title}</h2>
            <div className='flex items-center gap-x-5 mb-10 justify-center'>
                {data.genres &&
                    data.genres.map((genre) => (
                        <span key={genre.id} className='py-2 px-4 border-primary text-primary border rounded'>
                            {genre.name}
                        </span>
                    ))}
            </div>
            <p className='text-center leading-relaxed max-w-[650px] mx-auto text-white mb-12'>{data.overview}</p>
        </Fragment>
    )
}

export default Content
