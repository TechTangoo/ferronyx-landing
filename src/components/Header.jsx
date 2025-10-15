import React from 'react';
import logo from '../assets/logo2.png';
import Button from './Button';
import { colors } from '../utils/colors';

function Header() {
    return (
        <header className="w-screen flex justify-center">
            <div className='w-[90%]'>
                <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
                    <a href="#" className="flex items-center gap-3">
                        <img src={logo} alt="Rosstack logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
                    </a>

                    <div className="flex items-center gap-6">
                        <a href="#contact" className="bg-white hover:bg-gray-100 text-black font-semibold py-2 px-6 rounded-md">Contact us</a>
                        <a href="#demo" className="text-white font-semibold py-2 px-6 rounded-md border" style={{ borderColor: colors.primary, ':hover': { backgroundColor: `${colors.primary}1a` } }}>Book a demo</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
