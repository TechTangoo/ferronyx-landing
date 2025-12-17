import React from 'react';
import { Button } from "./ui/button";
import logo from '../assets/logo.svg';

const Navbar = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 backdrop-blur-md bg-black/20 border-b border-white/5 supports-[backdrop-filter]:bg-black/20">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <img src={logo} alt="Ferronyx Logo" className="h-8 w-auto" />
                <span className="text-lg font-bold tracking-tight text-white hidden sm:block">Ferronyx</span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
                <button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors">Features</button>
                <button onClick={() => scrollToSection('built-for')} className="hover:text-white transition-colors">Solutions</button>
                <button onClick={() => scrollToSection('faqs')} className="hover:text-white transition-colors">Resources</button>
            </div>

            <div className="flex items-center gap-4">
                <button onClick={() => scrollToSection('contact-footer')} className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                    Contact Sales
                </button>
                <a href="https://dev.ferronyx.com/register" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-white text-black hover:bg-zinc-200 rounded-full px-5 h-9 font-semibold text-sm cursor-pointer">
                        Get Started
                    </Button>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
