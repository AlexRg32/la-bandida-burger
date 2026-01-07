import React from 'react';

const Stats = () => {
    return (
        <section className="border-y border-white/5 bg-brand-charcoal/50 py-10 relative overflow-hidden backdrop-blur-sm">
            <div className="container mx-auto px-4 flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-0">
                <div className="text-center px-6 border-r border-white/10 last:border-0 reveal-up">
                    <h3 className="font-display text-4xl text-white group-hover:text-brand-orange transition-colors">
                        4.9<span className="text-brand-orange text-2xl">★</span>
                    </h3>
                    <p className="text-xs text-gray-500 tracking-widest uppercase mt-1">Calificación</p>
                </div>
                <div className="text-center px-6 border-r border-white/10 last:border-0 reveal-up delay-100">
                    <h3 className="font-display text-4xl text-white">
                        15<span className="text-brand-orange text-2xl">min</span>
                    </h3>
                    <p className="text-xs text-gray-500 tracking-widest uppercase mt-1">Delivery Promedio</p>
                </div>
                <div className="text-center px-6 border-r border-white/10 last:border-0 reveal-up delay-200">
                    <h3 className="font-display text-4xl text-white">
                        100<span className="text-brand-orange text-2xl">%</span>
                    </h3>
                    <p className="text-xs text-gray-500 tracking-widest uppercase mt-1">Carne Angus</p>
                </div>
                <div className="text-center px-6 hidden lg:block reveal-up delay-300">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Uber_Eats_2020_logo.svg/2560px-Uber_Eats_2020_logo.svg.png"
                        className="h-6 grayscale opacity-50 hover:opacity-100 transition-all hover:scale-105"
                        alt="Uber Eats"
                    />
                </div>
            </div>
        </section>
    );
};

export default Stats;
