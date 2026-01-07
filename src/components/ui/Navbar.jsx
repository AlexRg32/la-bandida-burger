import React, { useEffect, useState } from 'react';
import { Flame } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

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

    return (
        <nav
            id="navbar"
            className={`fixed w-full z-50 transition-all duration-300 px-6 lg:px-12 flex justify-between items-center border-b border-white/5 ${scrolled
                    ? 'bg-black/80 py-4 backdrop-blur-md'
                    : 'bg-black/20 py-6'
                }`}
        >
            <div className="flex items-center gap-2 group cursor-pointer">
                <Flame className="text-brand-orange w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-display text-2xl tracking-wider text-white group-hover:text-brand-orange transition-colors">
                    LA BANDIDA
                </span>
            </div>

            <div className="hidden md:flex items-center gap-8 font-body text-sm font-semibold tracking-widest text-gray-400">
                <a href="#menu" className="hover:text-white hover:scale-110 transition-all">MENÚ</a>
                <a href="#locations" className="hover:text-white hover:scale-110 transition-all">UBICACIÓN</a>
                <a href="#reviews" className="hover:text-white hover:scale-110 transition-all">RESEÑAS</a>
            </div>

            <button className="bg-brand-orange hover:bg-white hover:text-black text-white px-6 py-2 rounded-full font-bold font-display tracking-wide text-lg transition-all duration-300 shadow-[0_0_20px_rgba(255,85,0,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:-translate-y-1">
                RESERVAR MESA
            </button>
        </nav>
    );
};

export default Navbar;
