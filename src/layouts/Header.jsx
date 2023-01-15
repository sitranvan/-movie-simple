import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/galaxy-logo.png'
import Button from '../components/Button/Button'
function Header() {
    return (
        <header className='flex items-center justify-between gap-x-5 text-white py-8 font-semibold  text-xl page-container'>
            <NavLink to='/'>
                <img src={logo} alt='logo' className='w-[400px] h-full object-cover' />
            </NavLink>
            <div className='flex items-center gap-x-6 flex-1 justify-center'>
                <div className='flex flex-1 justify-center gap-x-6'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/movie/popular'>Movie</NavLink>
                </div>
                <Button size='medium'>Login</Button>
            </div>
        </header>
    )
}

export default Header
