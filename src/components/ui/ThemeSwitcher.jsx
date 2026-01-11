import React, { useState, useEffect } from 'react';
import { Palette } from 'lucide-react';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('red');

    const toggleTheme = () => {
        const newTheme = theme === 'red' ? 'black' : 'red';
        setTheme(newTheme);
        if (newTheme === 'black') {
            document.documentElement.classList.add('theme-black');
        } else {
            document.documentElement.classList.remove('theme-black');
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className={`fixed bottom-8 right-8 z-[100] ${theme === 'red' ? 'bg-black' : 'bg-brand-burgundy'} border border-white/10 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group flex items-center gap-3 px-6`}
            title="Cambiar Tema"
        >
            <Palette className="w-5 h-5" />
            <span className="font-display tracking-widest text-sm">
                VERSIÓN {theme === 'red' ? 'NEGRA' : 'ROJA'}
            </span>
            
            {/* Subtle pulse animation */}
            <span className="absolute inset-0 rounded-full bg-brand-burgundy animate-ping opacity-20 pointer-events-none group-hover:hidden"></span>
        </button>
    );
};

export default ThemeSwitcher;
