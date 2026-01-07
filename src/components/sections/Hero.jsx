import React, { useEffect } from 'react';
import { PlayCircle, ChevronDown } from 'lucide-react';
import Particles from '../ui/Particles';

const Hero = () => {
    useEffect(() => {
        const handleMouseMove = (e) => {
            requestAnimationFrame(() => {
                const parallaxElements = document.querySelectorAll('.parallax-element');
                const x = (window.innerWidth - e.pageX * 2) / 100;
                const y = (window.innerHeight - e.pageY * 2) / 100;

                parallaxElements.forEach(el => {
                    const speed = el.getAttribute('data-speed') || 1;
                    el.style.transform = `translateX(${x * speed}px) translateY(${y * speed}px)`;
                });
            });
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const scrollToMenu = () => {
        const menu = document.getElementById('menu');
        if (menu) menu.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="relative min-h-screen flex items-center justify-center overflow-hidden parallax-container">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30 z-0"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow"></div>
            <div
                className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse-glow"
                style={{ animationDelay: '2s' }}
            ></div>

            <Particles />

            {/* Main Content Grid */}
            <div className="relative z-20 container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full pt-20">

                {/* Text Content */}
                <div className="order-2 lg:order-1 text-center lg:text-left space-y-6 reveal-left" data-speed="0.2">
                    <div className="inline-flex items-center gap-2 border border-brand-orange/30 bg-brand-orange/5 px-4 py-1 rounded-full text-brand-orange text-xs font-bold tracking-[0.2em] mb-4 hover:bg-brand-orange/10 transition-colors cursor-default">
                        <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
                        NUEVA CARTA GOURMET
                    </div>

                    <h1 className="font-display text-7xl lg:text-[9rem] leading-[0.85] text-white uppercase drop-shadow-2xl">
                        Sabor <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-500 text-glow hover:text-white transition-colors duration-500 cursor-default">
                            Auténtico
                        </span>
                    </h1>

                    <p className="font-body text-gray-400 text-lg lg:text-xl max-w-md mx-auto lg:mx-0 leading-relaxed reveal-up delay-100">
                        Carne 100% Angus seleccionada, ingredientes frescos de primera calidad y nuestra pasión por la cocina. Una experiencia única en cada bocado.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6 reveal-up delay-200">
                        <button
                            onClick={scrollToMenu}
                            className="px-8 py-4 bg-white text-black font-display text-xl tracking-wider rounded hover:bg-brand-orange hover:text-white transition-all duration-300 hover:scale-105 shadow-xl"
                        >
                            VER EL MENÚ
                        </button>
                        <button className="px-8 py-4 border border-white/20 text-white font-display text-xl tracking-wider rounded hover:border-brand-orange hover:text-brand-orange transition-all duration-300 flex items-center gap-2 justify-center group hover:scale-105">
                            <PlayCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            VER VIDEO
                        </button>
                    </div>
                </div>

                {/* Visual Content (Burger) */}
                <div className="order-1 lg:order-2 relative flex justify-center items-center h-[50vh] lg:h-auto group perspective-1000 reveal-zoom delay-200">
                    {/* Text behind burger */}
                    <span
                        className="absolute text-[12rem] lg:text-[18rem] font-display text-white/5 select-none z-0 tracking-tighter leading-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 parallax-element"
                        data-speed="0.05"
                    >
                        BURGER
                    </span>

                    {/* Steam Animation */}
                    <div className="absolute top-0 opacity-0 animate-steam w-20 h-40 bg-white/20 blur-[30px] rounded-full z-30 pointer-events-none"></div>
                    <div
                        className="absolute top-10 right-20 opacity-0 animate-steam w-16 h-32 bg-white/10 blur-[25px] rounded-full z-30 pointer-events-none"
                        style={{ animationDelay: '1s' }}
                    ></div>

                    {/* Main Burger Image */}
                    <div className="relative z-10 w-full max-w-lg transform transition-transform duration-700 hover:scale-105 parallax-element" data-speed="0.4">
                        {/* Glow behind burger */}
                        <div className="absolute inset-0 bg-brand-orange/20 blur-[60px] rounded-full transform translate-y-12 animate-pulse-glow"></div>

                        {/* Burger Image */}
                        <img
                            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop"
                            alt="La Bandida Burger"
                            className="relative w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] animate-float mask-gradient"
                        />

                        {/* Floating Badge */}
                        <div
                            className="absolute -top-10 -right-5 lg:-right-20 bg-brand-charcoal p-3 rounded-xl border border-white/10 shadow-xl parallax-element animate-float-delayed backdrop-blur-md"
                            data-speed="0.6"
                        >
                            <div className="flex items-center gap-2">
                                <span className="text-yellow-400">★</span>
                                <span className="font-display text-white text-lg">TOP #1</span>
                            </div>
                        </div>

                        {/* Decorative dots */}
                        <div className="absolute bottom-10 -left-5 lg:-left-10 w-12 h-12 bg-green-500/20 rounded-full blur-sm parallax-element" data-speed="0.5"></div>
                        <div className="absolute top-20 right-10 w-2 h-2 bg-brand-orange rounded-full shadow-[0_0_10px_#FF5500] parallax-element" data-speed="0.8"></div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce cursor-pointer hover:opacity-100 transition-opacity"
                onClick={scrollToMenu}
            >
                <span className="text-[10px] tracking-[0.3em] uppercase">Desliza</span>
                <ChevronDown className="w-4 h-4" />
            </div>
        </header>
    );
};

export default Hero;
