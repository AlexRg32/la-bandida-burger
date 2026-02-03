import React, { useEffect, useState } from 'react';


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [mobileMenuOpen]);

    const navLinks = [
        { name: 'MENÚ', href: '#menu' },
        { name: 'EL ORIGEN', href: '#about' },
        { name: 'UBICACIÓN', href: '#locations' },
        { name: 'RESEÑAS', href: '#reviews' },
    ];

    return (
        <nav
            id="navbar"
            className={`fixed w-full z-50 transition-all duration-300 px-6 lg:px-12 flex justify-between items-center border-b border-white/5 ${scrolled || mobileMenuOpen
                ? 'bg-brand-bgMain/80 py-4 backdrop-blur-md'
                : 'bg-brand-bgMain/20 py-6'
                }`}
        >
            <div className="flex items-center gap-2 group cursor-pointer relative z-50">
                <div className="relative h-12 w-12"> {/* Placeholder to keep layout spacing */}
                    <img
                        src="/assets/logo.png"
                        alt="La Bandida"
                        className="absolute top-1/2 -translate-y-1/2 left-0  mt-2 h-52 w-auto max-w-none object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                    />
                </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-12 font-body text-base font-bold tracking-[0.2em] text-gray-400">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="relative hover:text-white transition-all duration-300 group"
                    >
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-burgundy transition-all duration-300 group-hover:w-full"></span>
                    </a>
                ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
                className="md:hidden text-white relative z-50 p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
            >
                <div className="space-y-2">
                    <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                    <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                </div>
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 w-screen h-[100dvh] bg-brand-bgMain/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="flex flex-col items-center gap-8">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`relative font-display text-4xl lg:text-5xl text-transparent stroke-white hover:text-white hover:stroke-none transition-all duration-300 tracking-wider group ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            style={{
                                WebkitTextStroke: '1px white',
                                transitionDelay: mobileMenuOpen ? `${index * 100}ms` : '0ms'
                            }}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
