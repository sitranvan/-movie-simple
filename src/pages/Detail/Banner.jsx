import React, { Fragment } from 'react'
import apiConfig from '../../config/apiConfig'

function Banner({ data }) {
    return (
        <Fragment>
            <div className='page-container h-[650px] relative banner-slide'>
                <div className='absolute inset-0  rounded-lg'></div>
                <div
                    className='w-full h-full bg-cover bg-no-repeat rounded-lg'
                    style={{ backgroundImage: `url(${apiConfig.orginalImage(data.backdrop_path)})` }}
                ></div>
            </div>
            <div className='h-[450px] flex justify-center mx-auto -mt-[200px] relative pb-10 rounded-xl'>
                <img
                    className='h-full object-contain rounded-xl'
                    src={apiConfig.orginalImage(`${data.poster_path}`)}
                    alt={data.original_title}
                />
            </div>
        </Fragment>
    )
}

export default Banner
