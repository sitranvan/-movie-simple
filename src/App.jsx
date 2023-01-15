import { Route, Routes } from 'react-router-dom'
import Header from './layouts/Header'
import AllMovie from './pages/AllMovie/AllMovie'
import Detail from './pages/Detail/Detail'
import Home from './pages/Home/Home'

function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/movie' element={<AllMovie />} />
                <Route path='/movie/:movieId' element={<Detail />} />
                <Route path='/movie/now_playing' element={<AllMovie />} />
                <Route path='/movie/top_rated' element={<AllMovie />} />
                <Route path='/movie/upcoming' element={<AllMovie />} />
                <Route path='/movie/popular' element={<AllMovie />} />
                <Route path='/movie/search/:keyword' element={<AllMovie />} />
            </Routes>
        </div>
    )
}

export default App
