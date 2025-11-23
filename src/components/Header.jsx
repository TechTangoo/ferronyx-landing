import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';
import Button from './Button';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToFooter = () => {
        const footerElement = document.getElementById('contact-footer');
        if (footerElement) {
            footerElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        setIsMobileMenuOpen(false);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        setIsMobileMenuOpen(false);
    };

    const navItems = [
        { label: 'Features', action: () => scrollToSection('features') },
        { label: 'Built For', action: () => scrollToSection('builtfor') },
        { label: 'FAQ', action: () => scrollToSection('faq') },
        { label: 'Contact', action: scrollToFooter }
    ];

    return (
        <>
            <header 
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isScrolled 
                        ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-lg' 
                        : 'bg-transparent'
                }`}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
                        {/* Logo */}
                        <a href="#" className="flex items-center gap-3 group">
                            <div className="relative">
                                <img 
                                    src={logo} 
                                    alt="Ferronyx Logo" 
                                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-transform duration-300 group-hover:scale-110" 
                                />
                                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <span className="text-xl font-bold text-foreground hidden sm:block group-hover:text-primary transition-colors duration-300">
                                Ferronyx
                            </span>
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.label}
                                    onClick={item.action}
                                    className="text-muted-foreground hover:text-foreground font-medium transition-all duration-300 relative group"
                                >
                                    {item.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                </button>
                            ))}
                        </nav>

                        {/* Desktop CTA Buttons */}
                        <div className="hidden md:flex items-center gap-4">
                            <Button 
                                variant="ghost" 
                                size="md"
                                onClick={scrollToFooter}
                                className="font-medium"
                            >
                                Contact Us
                            </Button>
                            <Button 
                                variant="default" 
                                size="md"
                                onClick={scrollToFooter}
                                className="font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                Book a Demo
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-foreground hover:text-primary transition-colors duration-300"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMobileMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div className="fixed inset-0 bg-background/80 backdrop-blur-md" onClick={() => setIsMobileMenuOpen(false)} />
                    <div className="relative bg-card border-r border-border w-64 h-full shadow-xl">
                        <div className="p-6 pt-24">
                            <nav className="space-y-4">
                                {navItems.map((item) => (
                                    <button
                                        key={item.label}
                                        onClick={item.action}
                                        className="block w-full text-left text-muted-foreground hover:text-foreground font-medium py-3 px-4 rounded-lg hover:bg-muted transition-all duration-300"
                                    >
                                        {item.label}
                                    </button>
                                ))}
                                <div className="pt-6 space-y-3">
                                    <Button 
                                        variant="ghost" 
                                        size="md" 
                                        className="w-full justify-start"
                                        onClick={scrollToFooter}
                                    >
                                        Contact Us
                                    </Button>
                                    <Button 
                                        variant="default" 
                                        size="md" 
                                        className="w-full justify-start"
                                        onClick={scrollToFooter}
                                    >
                                        Book a Demo
                                    </Button>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            )}
        </> 
    );
}

export default Header;
