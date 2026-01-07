import React, { useEffect, useState } from 'react';

const Loader = () => {
    const [visible, setVisible] = useState(true);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setOpacity(0);
        }, 1000); // Start fading

        const timer2 = setTimeout(() => {
            setVisible(false);
        }, 2000); // Remove from DOM

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        }
    }, []);

    if (!visible) return null;

    return (
        <div id="loader" style={{ opacity: opacity }}>
            <div className="text-center relative flex flex-col items-center">
                <img 
                    src="/assets/mascota.png" 
                    alt="Loading..." 
                    className="w-32 h-32 object-contain mb-6 animate-pulse drop-shadow-[0_0_15px_rgba(255,85,0,0.5)]"
                />
                <h1 className="font-display text-6xl text-brand-orange animate-pulse tracking-widest relative z-10">
                    LA BANDIDA
                </h1>
                <div className="absolute inset-0 blur-xl bg-brand-orange/20 animate-pulse"></div>
                <p className="font-body text-gray-500 text-sm mt-2 tracking-[0.5em]">
                    PREPARANDO LA PARRILLA
                </p>
            </div>
        </div>
    );
};

export default Loader;
