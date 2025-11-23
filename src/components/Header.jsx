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
        <header className="w-screen flex justify-center sticky top-0 z-50 backdrop-blur-lg">
            <div className="w-[90%]">
                <div className="glass flex items-center justify-between h-20 px-6 sm:px-8 lg:px-10 rounded-2xl mt-4 mx-4">
                    <a href="#" className="flex items-center gap-3 group">
                        <img
                            src={logo}
                            alt="ferronyx logo"
                            className="w-12 h-12 sm:w-14 sm:h-14 object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                    </a>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={scrollToFooter}
                            className="glass hidden sm:block text-white font-semibold py-2 px-6 rounded-xl border-0 transition-all duration-300 hover:scale-105 cursor-pointer"
                            style={{ color: colors.primaryLight }}
                        >
                            Contact us
                        </button>
                        <button
                            onClick={scrollToFooter}
                            className="btn-glow font-semibold py-2 px-6 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                            style={{
                                backgroundColor: colors.primary,
                                color: 'white',
                                boxShadow: `0 8px 20px ${colors.glow}`
                            }}
                        >
                            Book a demo
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
