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
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-6 py-4 transition-all duration-300 bg-[#050505]/80 backdrop-blur-md border-b border-white/[0.05] overflow-x-hidden">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <img src={logo} alt="Ferronyx Logo" className="h-8 w-auto opacity-90" />
                <span className="text-lg font-semibold tracking-tight text-white hidden sm:block">Ferronyx</span>
            </div>

            <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-zinc-400">
                <button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors">Features</button>
                <button onClick={() => scrollToSection('built-for')} className="hover:text-white transition-colors">Solutions</button>
                <button onClick={() => scrollToSection('faqs')} className="hover:text-white transition-colors">Resources</button>
            </div>

            {/* CTAs removed - they're in dashboard header now */}
            <div className="flex items-center gap-4">
                <a href="https://dev.ferronyx.com/register" target="_blank" rel="noopener noreferrer">
                    <button className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                        Sign In
                    </button>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;