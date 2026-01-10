import React from 'react';

const About = () => {
    return (
        <section id="about" className="relative bg-[#0a0a0a] min-h-[80vh] flex items-center overflow-hidden py-24 scroll-mt-32">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Text Content */}
                    <div className="order-2 lg:order-1 text-center lg:text-left space-y-8">
                        
                        <h2 className="font-display text-6xl lg:text-8xl text-white leading-[0.9] uppercase animate-fade-in-up delay-100">
                            EL ORIGEN <br />
                            <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '2px white' }}>DE LA BESTIA</span>
                        </h2>

                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-up delay-200">
                            <p>
                                <span className="text-brand-orange font-bold">LA BANDIDA</span> no nació en una sala de juntas. Nació del hambre. Hambre de verdad, de mancharse las manos, de dejar atrás las hamburguesas mediocres que prometen mucho y no saben a nada.
                            </p>
                            <p>
                                Aquí no hay secretos, solo <strong className="text-white">carne madurada 45 días</strong>, fuego real y una obsesión enfermiza por la calidad. Somos la oveja negra. Somos los que hacen ruido.
                            </p>
                            <p className="font-display text-2xl text-white pt-4">
                                #NOBULLSHIT
                            </p>
                        </div>
                    </div>

                    {/* Image / Mascot */}
                    <div className="order-1 lg:order-2 relative flex justify-center">
                        {/* Blob Background Effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-orange/10 blur-[100px] rounded-full"></div>
                        
                        <img 
                            src="/assets/mascota.png" 
                            alt="La Bandida Mascota" 
                            className="relative z-10 w-full max-w-md lg:max-w-xl object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                </div>
            </div>

             {/* Dynamic Background Noise/Texture Overlay */}
             <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </section>
    );
};

export default About;
