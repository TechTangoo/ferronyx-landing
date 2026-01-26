import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.svg';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToSection = (id) => {
        if (location.pathname !== '/') {
            // Navigate to home page with hash
            navigate('/#' + id);
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setMobileMenuOpen(false);
    };

    const handleLogoClick = () => {
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/');
        }
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-6 py-4 transition-all duration-300 bg-[#050505]/80 backdrop-blur-md border-b border-white/[0.05]">
                <div className="flex items-center gap-3 cursor-pointer" onClick={handleLogoClick}>
                    <img src={logo} alt="Ferronyx Logo" className="h-8 w-auto opacity-90" />
                    <span className="text-lg font-semibold tracking-tight text-white hidden sm:block">Ferronyx</span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-zinc-400">
                    <button onClick={() => scrollToSection('features')} className={`hover:text-white transition-colors ${location.hash === '#features' ? 'font-semibold text-white' : ''}`}>Features</button>
                    <Link to="/use-cases" className={`hover:text-white transition-colors ${location.pathname === '/use-cases' ? 'font-semibold text-white' : ''}`}>Use Cases</Link>
                    <Link to="/blog" className={`hover:text-white transition-colors ${location.pathname.startsWith('/blog') ? 'font-semibold text-white' : ''}`}>Blog</Link>
                    {/* <Link to="/case-studies" className={`hover:text-white transition-colors ${location.pathname.startsWith('/case-studies') ? 'font-semibold text-white' : ''}`}>Case Studies</Link> */}
                    <Link to="/about" className={`hover:text-white transition-colors ${location.pathname === '/about' ? 'font-semibold text-white' : ''}`}>About</Link>
                    <Link to="/pricing" className={`hover:text-white transition-colors ${location.pathname === '/pricing' ? 'font-semibold text-white' : ''}`}>Pricing</Link>
                </div>

                <div className="flex items-center gap-4">
                    {/* Get Started - Always visible */}
                    <a href="https://dev.ferronyx.com" target="_blank" rel="noopener noreferrer">
                        <button className="text-sm font-medium bg-white text-black px-4 py-2 rounded-lg hover:bg-zinc-200 transition-colors">
                            Get Started
                        </button>
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Drawer */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setMobileMenuOpen(false)}
                    />

                    {/* Menu Panel */}
                    <div className="absolute top-[73px] right-0 left-0 bg-[#0A0A0B]/95 backdrop-blur-xl border-b border-white/[0.05] shadow-2xl">
                        <div className="flex flex-col p-6 space-y-4">
                            <button
                                onClick={() => scrollToSection('features')}
                                className={`text-left text-base font-medium text-zinc-300 hover:text-white transition-colors py-3 border-b border-white/[0.05]
                                    ${location.hash === '#features' ? 'font-semibold text-white' : ''}`}
                            >
                                Features
                            </button>
                            <Link
                                to="/use-cases"
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-left text-base font-medium text-zinc-300 hover:text-white transition-colors py-3 border-b border-white/[0.05]
                                    ${location.pathname === '/use-cases' ? 'font-semibold text-white' : ''}`}
                            >
                                Use Cases
                            </Link>
                            <Link
                                to="/blog"
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-left text-base font-medium text-zinc-300 hover:text-white transition-colors py-3 border-b border-white/[0.05]
                                    ${location.pathname.startsWith('/blog') ? 'font-semibold text-white' : ''}`}

                            >
                                Blog
                            </Link>
                            {/* <Link
                                to="/case-studies"
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-left text-base font-medium text-zinc-300 hover:text-white transition-colors py-3 border-b border-white/[0.05]
                                    ${location.pathname.startsWith('/case-studies') ? 'font-semibold text-white' : ''}`}
                            >
                                Case Studies
                            </Link> */}
                            <Link
                                to="/about"
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-left text-base font-medium text-zinc-300 hover:text-white transition-colors py-3
                                    ${location.pathname === '/about' ? 'font-semibold text-white' : ''}`}
                            >
                                About
                            </Link>
 <Link
                                to="/pricing"
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-left text-base font-medium text-zinc-300 hover:text-white transition-colors py-3 border-b border-white/[0.05]
                                    ${location.pathname === '/pricing' ? 'font-semibold text-white' : ''}`}
                            >
                                Pricing
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
