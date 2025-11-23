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
        <header className="w-screen flex justify-center sticky top-0 z-50 backdrop-blur-xl" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
            <div className="w-full max-w-7xl mx-auto">
                <div className="flex items-center justify-between h-16 px-6 sm:px-8 border-b" style={{ borderColor: colors.border }}>
                    <a href="#" className="flex items-center gap-3">
                        <img
                            src={logo}
                            alt="ferronyx logo"
                            className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
                        />
                    </a>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={scrollToFooter}
                            className="hidden sm:block text-sm font-medium py-2 px-5 rounded-md transition-colors duration-200 cursor-pointer"
                            style={{
                                color: colors.textSecondary,
                                backgroundColor: 'transparent'
                            }}
                        >
                            Contact
                        </button>
                        <button
                            onClick={scrollToFooter}
                            className="text-sm font-medium py-2 px-5 rounded-md transition-colors duration-200 cursor-pointer"
                            style={{
                                backgroundColor: colors.primary,
                                color: 'white'
                            }}
                        >
                            Book Demo
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
