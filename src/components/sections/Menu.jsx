import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuCategories = {
    starters: {
        title: "ENTRANTES",
        subtitle: "PARA COMPARTIR",
        items: [
            {
                title: "CROQUETAS",
                price: "1,50",
                unit: "ud",
                desc: "De jamón ibérico, carrillera o cecina.",
                img: "/assets/croquetas.jpg"
            },
            {
                title: "ALITAS DE POLLO",
                price: "9,00",
                desc: "Crujientes con salsa bourbon.",
                img: "/assets/alitas.jpg"
            },
            {
                title: "TACO DE OREJA",
                price: "3,90",
                unit: "ud",
                desc: "Oreja de cerdo con mayonesa de lima y cebolla morada encurtida.",
                img: "/assets/taco.jpg"
            },
            {
                title: "PATATAS BACON CHEESE",
                price: "9,00",
                desc: "Nuestras patatas caseras con salsa de queso y bacon crujiente.",
                img: "/assets/baconcheese.jpg"
            },
            {
                title: "TORREZNOS",
                price: "8,90",
                desc: "Crujientes y jugosos, al estilo clásico.",
                img: "/assets/torrezno.jpeg"
            },
            {
                title: "NACHOS BANDIDOS",
                price: "11,90",
                desc: "Totopos caseros con guacamole, queso fundido, pico de gallo y jalapeños.",
                img: "/assets/nachos.jpg",
                badge: "Top"
            },
            {
                title: "COSTILLAR BBQ",
                price: "15,90",
                desc: "Costillar de cerdo a baja temperatura con salsa barbacoa.",
                img: "/assets/costillar.jpg"
            }
        ]
    },
    burgers: {
        title: "BURGERS",
        subtitle: "LAS PROTAGONISTAS",
        items: [
            {
                title: "LA BANDIDA",
                price: "12,90",
                desc: "Carne de vaca madurada 45 días, queso cheddar, queso gouda, mayo kimchi y guanciale italiano.",
                img: "/assets/bandida.jpg",
                badge: "Top Ventas"
            },
            {
                title: "LA TRUFADA",
                price: "13,90",
                desc: "Carne de vaca madurada 21 días, carillera, mayonesa trufada y cheddar ahumado.",
                img: "/assets/trufada.jpg",
                badge: "Recomendada"
            },
            {
                title: "LA CABRAMELIZADA",
                price: "13,00",
                desc: "Carne de vaca madurada 21 días, queso de cabra, mermelada de pimientos, mantequilla tostada, Monterey Jack y cebolla caramelizada.",
                img: "/assets/cabramelizada.jpg"
            },
            {
                title: "LA XMAS",
                price: "12,00",
                desc: "Carne de vaca madurada 21 días, rúcula, queso brie y salsa de turrón.",
                img: "/assets/xmas.jpg"
            },
            {
                title: "LA CLÁSICA",
                price: "13,90",
                desc: "Carne de vaca madurada 45 días, lechuga, tomate, bacon, queso gouda, queso edam y cebolla a la plancha.",
                img: "/assets/clasica.jpg"
            },
            {
                title: "LA MALLORQUINA",
                price: "13,90",
                desc: "Carne de vaca madurada 21 días, crema suave de sobrasada, cebolla caramelizada, queso Mahón y miel.",
                img: "/assets/mallorquina.jpg"
            },
            {
                title: "LA VEGGIE",
                price: "13,90",
                desc: "Hamburguesa vegetal Beyond, berenjena, tomate, cebolla morada, queso vegano, pimientos asados y lechuga.",
                img: "/assets/veggie.jpg",
                badge: "Vegetariana"
            }
        ]
    },
    desserts: {
        title: "POSTRES",
        subtitle: "DULCE FINAL",
        items: [
            {
                title: "TORRIJA DE BRIOCHE",
                price: "5,90",
                desc: "Caramelizada con helado.",
                img: "/assets/torrija.jpg"
            },
            {
                title: "TARTA DE QUESO",
                price: "5,50",
                desc: "Tradicional al horno.",
                img: "/assets/tartaqueso.jpg"
            },
            {
                title: "TARTA DE LOTUS",
                price: "6,50",
                desc: "Tarta de queso de galleta Lotus.",
                img: "/assets/lotus.webp",
                badge: "Top"
            }
        ]
    }
};

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('burgers');

    return (
        <section id="menu" className="py-24 relative bg-[#050505] overflow-hidden scroll-mt-32">
            {/* Background Decorative Text */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.02] flex items-center justify-center select-none">
                <span className="font-display text-[30vw] leading-none whitespace-nowrap">LA BANDIDA</span>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-brand-orange font-bold tracking-[0.3em] uppercase text-sm mb-4"
                    >
                        {menuCategories[activeCategory].subtitle}
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-12"
                    >
                        {menuCategories[activeCategory].title}
                    </motion.h2>

                    {/* Category Selector */}
                    <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                        {Object.keys(menuCategories).map((key) => (
                            <button
                                key={key}
                                onClick={() => setActiveCategory(key)}
                                className={`px-8 py-3 rounded-xl font-display tracking-widest text-lg transition-all duration-500 relative ${activeCategory === key
                                        ? 'text-white'
                                        : 'text-gray-500 hover:text-gray-300'
                                    }`}
                            >
                                {activeCategory === key && (
                                    <motion.div 
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-brand-orange rounded-xl -z-10 shadow-[0_0_20px_rgba(255,85,0,0.3)]"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {menuCategories[key].title}
                            </button>
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
                    >
                        {menuCategories[activeCategory].items.map((item, index) => (
                            <motion.div
                                key={`${activeCategory}-${index}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="group relative bg-[#0f0f0f] rounded-3xl overflow-hidden border border-white/5 hover:border-brand-orange/20 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col h-full"
                            >
                                {item.badge && (
                                    <div className="absolute top-4 left-4 bg-brand-orange text-black text-xs font-black px-3 py-1.5 rounded uppercase tracking-wider z-20">
                                        {item.badge}
                                    </div>
                                )}

                                {/* Image Container */}
                                <div className="relative overflow-hidden w-full h-64">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent z-10 opacity-40 group-hover:opacity-20 transition-opacity duration-500" />
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter grayscale-[0.2] group-hover:grayscale-0"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Content Container */}
                                <div className="p-8 relative z-20 flex flex-col flex-grow">
                                    <div className="flex justify-between items-baseline mb-3">
                                        <h3 className="font-display text-white group-hover:text-brand-orange transition-colors duration-300 text-2xl">
                                            {item.title}
                                        </h3>
                                        <div className="flex flex-col items-end flex-shrink-0 ml-4">
                                            <span className="font-display text-white text-xl">
                                                {item.price}<span className="text-brand-orange">€</span>
                                            </span>
                                            {item.unit && <span className="text-[10px] text-gray-500 uppercase tracking-widest -mt-1">{item.unit}</span>}
                                        </div>
                                    </div>

                                    <p className="font-body text-gray-300 text-sm leading-relaxed mb-6 group-hover:text-white transition-colors duration-300 flex-grow">
                                        {item.desc}
                                    </p>

                                    <div className="h-0.5 w-12 bg-white/10 group-hover:bg-brand-orange group-hover:w-full transition-all duration-500" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Footer Notes */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 flex flex-col items-center gap-4 text-center"
                >
                    <div className="w-12 h-px bg-brand-orange/50" />
                    <p className="text-gray-500 text-xs tracking-widest uppercase flex flex-wrap justify-center gap-x-8 gap-y-2">
                        <span>Pan Sin Gluten +1,00€</span>
                        <span>Patatas Fritas +1,00€</span>
                        <span>Sweet Potatoes +2,00€</span>
                    </p>
                    <div className="w-12 h-px bg-brand-orange/50" />
                </motion.div>
            </div>
        </section>
    );
};

export default Menu;
