import React from 'react';
import logo from '../assets/logo.svg';
import Button from './Button';
import { colors } from '../utils/colors';

function Header() {
    const scrollToFooter = () => {
        const footerElement = document.getElementById('contact-footer');
        if (footerElement) {
            footerElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <header className="w-screen flex justify-center">
            <div className='w-[90%]'>
                <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
                    <a href="#" className="flex items-center gap-3">
                        <img src={logo} alt="ferronyx logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
                    </a>

                    <div className="flex items-center gap-6">
                        {/* <button
                            onClick={scrollToFooter}
                            className="bg-white hover:bg-gray-100 text-black font-semibold py-2 px-6 rounded-md transition-colors duration-200 cursor-pointer"
                        >
                            Contact us
                        </button>
                        <button
                            onClick={scrollToFooter}
                            className={`text-white font-semibold py-2 px-6 rounded-md border transition-colors duration-200 cursor-pointer`}
                            style={{ borderColor: colors.primary }}
                        >
                            Book a demo
                        </button> */}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
