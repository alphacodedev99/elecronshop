import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/elecronlogo.png';
import InputComponents from './InputComponents';

// icons
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';

function NavbarComponent() {

    const { user } = useSelector((state) => state.userStore);
    const { totalProducts } = useSelector((state) => state.cartStore);
    const { favoriteTotal } = useSelector((state) => state.favoriteStore);


    return (
        <div className='bg-mainBlue h-[100px] px-[15px] md:px-0'>
            <div className='container mx-auto flex justify-between items-center h-[100px]'>
                <Link to='/'>
                    <img src={logo} alt="elecronLogo" />
                </Link>

                <InputComponents />

                <div className='flex gap-7'>
                    {localStorage.hasOwnProperty('elUser') ? <div>
                        <Link to='/profile'>
                            <img src={user.image} alt="" className='w-[50px] rounded-full border border-mainYellow object-cover' />
                        </Link>
                    </div> : <div className='flex items-center gap-1'>
                        <FaUser className='text-[#fff] text-2xl cursor-pointer' />
                        <Link to='/login' className='text-[#fff] text-lg'>Sign In</Link>
                    </div>}


                    <div className='flex items-center gap-1'>
                        <Link to='/favoriteProducts'>
                            <FaHeart className='text-[#fff] text-2xl cursor-pointer' />
                        </Link>
                        <span className='bg-mainYellow text-[#fff] rounded-full px-[5px]'>{favoriteTotal}</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <FaShoppingCart className='text-[#fff] text-2xl cursor-pointer' />
                        <span className='bg-mainYellow text-[#fff] rounded-full px-[5px]'>{totalProducts ? totalProducts : 0}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarComponent