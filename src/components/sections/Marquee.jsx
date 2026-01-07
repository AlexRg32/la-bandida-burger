import React from 'react';

const Marquee = () => {
    const text = "BEST BURGERS IN TOWN • SMASH IT • LA BANDIDA • NO BULLSHIT • PURE TASTE • ";

    return (
        <section className="relative w-full bg-brand-orange py-3 overflow-hidden -rotate-1 z-20 border-y-4 border-black">
            <div className="flex w-max animate-scroll-left">
                {[...Array(4)].map((_, i) => (
                    <h2 key={i} className="text-4xl md:text-6xl font-display font-black text-black tracking-tighter whitespace-nowrap px-4">
                        {text}
                    </h2>
                ))}
            </div>
            
            <style>{`
                @keyframes scroll-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll-left {
                    animation: scroll-left 20s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default Marquee;
