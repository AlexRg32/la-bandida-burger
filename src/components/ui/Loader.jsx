import React, { useEffect, useState } from 'react';

const Loader = () => {
    const [visible, setVisible] = useState(true);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setOpacity(0);
        }, 500); // Start fading

        const timer2 = setTimeout(() => {
            setVisible(false);
        }, 1000); // Remove from DOM

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        }
    }, []);

    if (!visible) return null;

    return (
        <div id="loader" style={{ opacity: opacity }}>
            <div className="text-center relative">
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
