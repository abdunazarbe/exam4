import React from 'react';
import location from '../../assets/svgs/lokatsiya.svg'
import search from '../../assets/svgs/icon.svg'
import korzinka from '../../assets/svgs/korzinka.svg'
import { NavLink } from 'react-router-dom';
import { Routes, Route, useParams } from 'react-router-dom';




function Header() {
    return (
        <header>
            <div className="container">
                <div className='flex justify-between items-center p-[20px]'>
                    <div className='flex items-center gap-2'>
                        <img src={location} alt="logo" className='hover:scale-130' />
                        <p className='hover:text-green-600 active:underline'>Tashkent</p>
                    </div>

                    <div className='flex items-center gap-5'>
                        <img src={search} alt="search" className='hover:scale-110' />
                        <img src={korzinka} alt="korzinka" className='hover:scale-110' />
                    </div>
                </div>

                <nav className='flex justify-center p-[20px] items-center gap-x-[60px]'>
                    <NavLink to="/flowers" className='text-base font-normal hover:text-green-600 active:underline '>Flowers</NavLink>
                    <NavLink to="Plants" className='text-base font-normal  hover:text-green-600 active:underline' >Plants</NavLink>
                    <NavLink to="/gifts" className='text-base font-normal  hover:text-green-600 active:underline'>Gifts</NavLink>
                    <NavLink to="/NoPage" className='text-base font-normal  hover:text-green-600 active:underline'>Discounts</NavLink>
                    <NavLink to="/about" className='text-base font-normal hover:text-green-600  active:underline'>About us</NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;

