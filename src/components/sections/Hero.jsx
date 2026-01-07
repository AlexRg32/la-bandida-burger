import React from 'react';

const Hero = () => {
    const textContent = "LA BANDIDA  LA BANDIDA  LA BANDIDA  LA BANDIDA ";
    
    // Helper to render a scrolling row
    const ScrollingRow = ({ direction = 'left', outline = false }) => (
        <div className="w-full overflow-hidden">
            <div className={`flex w-max ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}>
                {/* First set */}
                <h1 className={`text-[9rem] lg:text-[12rem] font-display font-black tracking-tighter leading-[0.85] whitespace-nowrap px-4 ${outline ? 'text-transparent stroke-white' : 'text-white'}`}>
                    {textContent}
                </h1>
                {/* Duplicate set for infinite scroll */}
                <h1 className={`text-[9rem] lg:text-[12rem] font-display font-black tracking-tighter leading-[0.85] whitespace-nowrap px-4 ${outline ? 'text-transparent stroke-white' : 'text-white'}`}>
                    {textContent}
                </h1>
            </div>
        </div>
    );

    return (
        <section className="relative h-screen w-full bg-black overflow-hidden flex flex-col justify-center z-10">
            {/* Inline Styles for Animation & Text Rendering */}
            <style>{`
                @keyframes scroll-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes scroll-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .animate-scroll-left {
                    animation: scroll-left 30s linear infinite;
                }
                .animate-scroll-right {
                    animation: scroll-right 30s linear infinite;
                }
                .stroke-white {
                    -webkit-text-stroke: 2px white;
                }
            `}</style>
            
            {/* Row 1: Left, Filled */}
            <ScrollingRow direction="left" outline={false} />
            
            {/* Row 2: Right, Outlined */}
            <ScrollingRow direction="right" outline={true} />
            
            {/* Row 3: Left, Filled */}
            <ScrollingRow direction="left" outline={false} />
            
            {/* Row 4: Right, Outlined */}
            <ScrollingRow direction="right" outline={true} />

        

            {/* Centered Hero Image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                <img 
                    src="/assets/hero.png" 
                    alt="La Bandida Burger" 
                    className="w-[80vw] max-w-none lg:w-220 lg:max-w-full lg:h-220 object-contain drop-shadow-[0_0_50px_rgba(255,255,255,0.2)]"
                />
            </div>

            {/* Gradient Overlay for depth (Optional but nice) */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-transparent to-black/20 pointer-events-none"></div>
        </section>
    );
};

export default Hero;
