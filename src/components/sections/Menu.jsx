import React from 'react';
import { ArrowRight, Plus } from 'lucide-react';

const menuItems = [
    {
        title: "LA PICANTE",
        price: "$14.99",
        desc: "Doble carne smash, jalapeños caramelizados, tocino crujiente y nuestra salsa chipotle casera.",
        img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=600&auto=format&fit=crop",
        badge: "Picante",
        delay: "",
        rotate: "rotate-3",
        badgeColor: "bg-white/10 text-white backdrop-blur"
    },
    {
        title: "LA TRUFADA",
        price: "$18.50",
        desc: "Exquisita crema de trufa negra, queso brie fundido, cebolla al vino tinto y arúgula fresca.",
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop",
        badge: "Recomendada",
        delay: "delay-100",
        rotate: "-rotate-3",
        badgeColor: "bg-brand-orange text-black"
    },
    {
        title: "LA CHEESE LOVER",
        price: "$15.00",
        desc: "Triple queso fundido (Cheddar, Suizo, Blue), aros de cebolla artesanales y salsa BBQ de la casa.",
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600&auto=format&fit=crop",
        badge: null,
        delay: "delay-200",
        rotate: "rotate-2",
        badgeColor: null
    }
];

const Menu = () => {
    return (
        <section id="menu" className="py-24 relative bg-black">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal-up">
                    <div>
                        <span className="text-brand-orange text-sm font-bold tracking-widest uppercase block mb-2">Nuestra Selección</span>
                        <h2 className="font-display text-5xl lg:text-7xl text-white">LAS FAVORITAS</h2>
                    </div>
                    <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                        <span className="font-body text-sm font-bold tracking-widest border-b border-transparent group-hover:border-white pb-1">
                            VER CARTA COMPLETA
                        </span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className={`group relative bg-brand-charcoal rounded-2xl p-6 hover:bg-[#1a1a1a] transition-all duration-500 border border-white/5 hover:border-brand-orange/30 hover:shadow-[0_0_30px_rgba(255,85,0,0.1)] reveal-up ${item.delay}`}
                        >
                            {item.badge && (
                                <div className={`absolute top-4 right-4 px-3 py-1 rounded text-xs font-bold uppercase z-20 ${item.badgeColor}`}>
                                    {item.badge}
                                </div>
                            )}
                            <div className="h-64 flex items-center justify-center -mt-12 mb-4 overflow-visible">
                                <img
                                    src={item.img}
                                    alt="Burger"
                                    className={`w-full h-full object-contain drop-shadow-2xl transform group-hover:scale-110 group-hover:${item.rotate} transition-all duration-500`}
                                />
                            </div>
                            <div className="relative z-10">
                                <h3 className="font-display text-3xl text-white mb-2 group-hover:text-brand-orange transition-colors">
                                    {item.title}
                                </h3>
                                <p className="font-body text-gray-400 text-sm mb-4 line-clamp-2">
                                    {item.desc}
                                </p>
                                <div className="flex justify-between items-center">
                                    <span className="font-display text-2xl text-brand-orange">{item.price}</span>
                                    <button className="bg-white text-black p-2 rounded-full hover:bg-brand-orange hover:text-white transition-all hover:scale-110 hover:shadow-lg">
                                        <Plus className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;
