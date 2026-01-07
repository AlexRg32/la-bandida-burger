import React from 'react';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';

const Locations = () => {
    return (
        <section id="locations" className="py-24 relative bg-brand-charcoal overflow-hidden">
            {/* Map Placeholder/Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop"
                    alt="Mapa de fondo"
                    className="w-full h-full object-cover grayscale invert opacity-30 mix-blend-overlay animate-pulse-glow"
                    style={{ animationDuration: '10s' }}
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>

            <div className="container mx-auto px-4 relative z-20">
                <div className="text-center mb-16 reveal-zoom">
                    <span className="text-brand-orange text-sm font-bold tracking-widest uppercase block mb-2">Visítanos</span>
                    <h2 className="font-display text-5xl lg:text-7xl text-white">DONDE ESTAMOS</h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Location: Crevillente */}
                    <div className="bg-black/80 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-brand-orange/50 transition-all hover:transform hover:-translate-y-2 group reveal-up">
                        <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-6">
                            <div>
                                <h3 className="font-display text-4xl text-white mb-2 group-hover:text-brand-orange transition-colors">
                                    CREVILLENTE
                                </h3>
                            
                            </div>
                            <div className="bg-white/10 p-4 rounded-full text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors transform group-hover:rotate-12 self-start">
                                <MapPin className="w-8 h-8" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="space-y-2 text-gray-400 font-body text-sm">
                                <p className="text-white font-bold mb-1 flex items-center gap-2">
                                    <Navigation className="w-4 h-4 text-brand-orange" /> DIRECCIÓN
                                </p>
                                <p>Carrer de la Verge del Pilar, 13<br />03330 Crevillent, Alicante</p>
                            </div>

                            <div className="space-y-2 text-gray-400 font-body text-sm">
                                <p className="text-white font-bold mb-1 flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-brand-orange" /> HORARIO
                                </p>
                                <p>Jueves - Domingo<br />19:30 - 23:30</p>
                            </div>

                            <div className="space-y-2 text-gray-400 font-body text-sm">
                                <p className="text-white font-bold mb-1 flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-brand-orange" /> CONTACTO
                                </p>
                                <p>Tel: +34 722 82 90 96<br />labandida@contacto .es</p>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/10 flex justify-center">
                            <button className="px-8 py-3 bg-white text-black font-display tracking-wider rounded hover:bg-brand-orange hover:text-white transition-all duration-300 transform hover:scale-105 shadow-xl">
                                CÓMO LLEGAR
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Locations;
