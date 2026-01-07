import React from 'react';
import { Flame, MapPin, Phone, Mail, ArrowRight, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black py-16 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 reveal-up">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <Flame className="text-brand-orange w-6 h-6" />
                            <span className="font-display text-2xl tracking-wider text-white">LA BANDIDA</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Hamburguesas gourmet elaboradas con pasión. La mejor calidad de ingredientes para ofrecerte el sabor más auténtico de la ciudad.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-display text-white text-xl mb-6 tracking-wide">NAVEGACIÓN</h4>
                        <ul className="space-y-4 text-gray-500 text-sm font-semibold tracking-wider">
                            <li><a href="#" className="hover:text-brand-orange transition-colors">INICIO</a></li>
                            <li><a href="#menu" className="hover:text-brand-orange transition-colors">CARTA</a></li>
                            <li><a href="#locations" className="hover:text-brand-orange transition-colors">UBICACIÓN</a></li>
                            <li><a href="#reviews" className="hover:text-brand-orange transition-colors">RESEÑAS</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display text-white text-xl mb-6 tracking-wide">CONTACTO</h4>
                        <ul className="space-y-4 text-gray-500 text-sm font-semibold tracking-wider">
                            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-1 flex-shrink-0" /> <span className="flex-1">Carrer de la Verge del Pilar, 13<br/>03330 Crevillent, Alicante</span></li>
                            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +34 722 82 90 96</li>
                            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> labandida@contacto.es</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display text-white text-xl mb-6 tracking-wide">BOLETÍN</h4>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Tu email"
                                className="bg-white/5 border border-white/10 text-white px-4 py-3 w-full focus:outline-none focus:border-brand-orange rounded-l-md font-body text-sm transition-colors"
                            />
                            <button className="bg-brand-orange text-white px-4 rounded-r-md hover:bg-white hover:text-black transition-colors">
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 reveal-up delay-100">
                    <p className="text-gray-600 text-xs">© {new Date().getFullYear()} La Bandida Burgers. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-500 hover:text-brand-orange transition-colors hover:scale-125 transform">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-brand-orange transition-colors hover:scale-125 transform">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a 
                            href="https://wa.me/34722829096?text=Hola!%20Quiero%20hacer%20un%20pedido%20en%20La%20Bandida" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-500 hover:text-brand-orange transition-colors hover:scale-125 transform"
                        >
                            <MessageCircle className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
