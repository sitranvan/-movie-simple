import React, { Fragment } from 'react'
import CardList from '../../components/CardMovie/CardList'
import Banner from './Banner'

function Home() {
    return (
        <Fragment>
            <Banner />
            <CardList title='Now playing' type='now_playing' />
            <CardList title='Top Rate' type='top_rated' />
            <CardList title='Upcoming' type='upcoming' />
            <CardList title='Popular' type='popular' />
        </Fragment>
    )
}

export default Home
