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
                    <span className="text-brand-orange text-sm font-bold tracking-widest uppercase block mb-2">Encuéntranos</span>
                    <h2 className="font-display text-5xl lg:text-7xl text-white">NUESTRAS SEDES</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Location 1 */}
                    <div className="bg-black/80 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-brand-orange/50 transition-all hover:transform hover:-translate-y-2 group reveal-left">
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h3 className="font-display text-3xl text-white mb-1 group-hover:text-brand-orange transition-colors">
                                    MADRID CENTRO
                                </h3>
                                <p className="text-brand-orange font-bold text-sm tracking-wider">SEDE PRINCIPAL</p>
                            </div>
                            <div className="bg-white/10 p-3 rounded-full text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors transform group-hover:rotate-12">
                                <MapPin className="w-6 h-6" />
                            </div>
                        </div>
                        <div className="space-y-3 text-gray-400 font-body text-sm mb-6">
                            <p className="flex items-center gap-3"><Navigation className="w-4 h-4" /> Calle Falsa 123, 28013 Madrid</p>
                            <p className="flex items-center gap-3"><Clock className="w-4 h-4" /> Lun - Dom: 13:00 - 00:00</p>
                            <p className="flex items-center gap-3"><Phone className="w-4 h-4" /> +34 912 345 678</p>
                        </div>
                        <button className="w-full py-3 border border-white/20 text-white rounded font-bold hover:bg-white hover:text-black transition-all uppercase tracking-widest text-xs">
                            Ver en Mapa
                        </button>
                    </div>

                    {/* Location 2 */}
                    <div className="bg-black/80 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-brand-orange/50 transition-all hover:transform hover:-translate-y-2 group reveal-right delay-100">
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h3 className="font-display text-3xl text-white mb-1 group-hover:text-brand-orange transition-colors">
                                    BARCELONA
                                </h3>
                                <p className="text-gray-500 font-bold text-sm tracking-wider">PRÓXIMAMENTE</p>
                            </div>
                            <div className="bg-white/10 p-3 rounded-full text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors transform group-hover:rotate-12">
                                <MapPin className="w-6 h-6" />
                            </div>
                        </div>
                        <div className="space-y-3 text-gray-400 font-body text-sm mb-6">
                            <p className="flex items-center gap-3"><Navigation className="w-4 h-4" /> Av. Diagonal 404, 08037 BCN</p>
                            <p className="flex items-center gap-3"><Clock className="w-4 h-4" /> Mar - Dom: 13:30 - 23:30</p>
                            <p className="flex items-center gap-3"><Phone className="w-4 h-4" /> +34 932 111 222</p>
                        </div>
                        <button className="w-full py-3 border border-white/20 text-white rounded font-bold hover:bg-white hover:text-black transition-all uppercase tracking-widest text-xs">
                            Ver en Mapa
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Locations;
