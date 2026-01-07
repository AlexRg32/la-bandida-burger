import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const menuCategories = {
    starters: {
        title: "PARA COMPARTIR",
        items: [
            {
                title: "CROQUETAS",
                price: "1,50€/ud",
                desc: "De jamón ibérico, carrillera o cecina.",
                img: "https://images.unsplash.com/photo-1560611588-163f295eb145?q=80&w=600&auto=format&fit=crop"
            },
            {
                title: "ALITAS DE POLLO",
                price: "9,00€",
                desc: "Crujientes con salsa bourbon.",
                img: "https://images.unsplash.com/photo-1527477396000-64bc618e7d38?q=80&w=600&auto=format&fit=crop"
            },
            {
                title: "TACO DE OREJA",
                price: "3,90€/ud",
                desc: "Oreja de cerdo con mayonesa de lima y cebolla morada encurtida.",
                img: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=600&auto=format&fit=crop"
            },
            {
                title: "PATATAS BACON CHEESE",
                price: "9,00€",
                desc: "Nuestras patatas caseras con salsa de queso y bacon crujiente.",
                img: "https://images.unsplash.com/photo-1573080496987-a2267714856b?q=80&w=600&auto=format&fit=crop"
            },
            {
                title: "TORREZNOS",
                price: "8,90€",
                desc: "Crujientes y jugosos, al estilo clásico.",
                img: "https://images.unsplash.com/photo-1549480017-d76466a4b7e8?q=80&w=600&auto=format&fit=crop"
            },
            {
                title: "NACHOS BANDIDOS",
                price: "11,90€",
                desc: "Totopos caseros con guacamole, queso fundido, pico de gallo y jalapeños.",
                img: "https://images.unsplash.com/photo-1582234372732-404a3eaff980?q=80&w=600&auto=format&fit=crop"
            },
            {
                title: "COSTILLAR BBQ",
                price: "15,90€",
                desc: "Costillar de cerdo a baja temperatura con salsa barbacoa.",
                img: "https://images.unsplash.com/photo-1544025162-d76690b67f14?q=80&w=600&auto=format&fit=crop"
            }
        ]
    },
    burgers: {
        title: "BURGERS",
        items: [
            {
                title: "LA BANDIDA",
                price: "12,90€",
                desc: "Carne de vaca madurada 45 días, queso cheddar, queso gouda, mayo kimchi y guanciale italiano.",
                img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop",
                badge: "Top Ventas"
            },
            {
                title: "LA TRUFADA",
                price: "13,90€",
                desc: "Carne de vaca madurada 21 días, carillera, mayonesa trufada y cheddar ahumado.",
                img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=600&auto=format&fit=crop",
                badge: "Recomendada"
            },
            {
                title: "LA CABRAMELIZADA",
                price: "13,00€",
                desc: "Carne de vaca madurada 21 días, queso de cabra, mermelada de pimientos, mantequilla tostada, Monterey Jack y cebolla caramelizada.",
                img: "https://images.unsplash.com/photo-1636233512217-10643b4d4519?q=80&w=600&auto=format&fit=crop"
            },
            {
                title: "LA XMAS",
                price: "12,00€",
                desc: "Carne de vaca madurada 21 días, rúcula, queso brie y salsa de turrón.",
                img: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600&auto=format&fit=crop"
            },
            {
                title: "LA CLÁSICA",
                price: "13,90€",
                desc: "Carne de vaca madurada 45 días, lechuga, tomate, bacon, queso gouda, queso edam y cebolla a la plancha.",
                img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=600&auto=format&fit=crop"
            },
            {
                title: "LA MALLORQUINA",
                price: "13,90€",
                desc: "Carne de vaca madurada 21 días, crema suave de sobrasada, cebolla caramelizada, queso Mahón y miel.",
                img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=600&auto=format&fit=crop"
            },
            {
                title: "LA VEGGIE",
                price: "13,90€",
                desc: "Hamburguesa vegetal Beyond, berenjena, tomate, cebolla morada, queso vegano, pimientos asados y lechuga.",
                img: "https://images.unsplash.com/photo-1520072959219-c595dc3f3db4?q=80&w=600&auto=format&fit=crop",
                badge: "Vegetariana"
            }
        ]
    },
    desserts: {
        title: "POSTRES",
        items: [
            {
                title: "TORRIJA DE BRIOCHE",
                price: "5,90€",
                desc: "Caramelizada con helado.",
                img: "https://images.unsplash.com/photo-1590520665518-ff3ea04bba29?q=80&w=600&auto=format&fit=crop"
            },
            {
                title: "TARTA DE QUESO",
                price: "5,50€",
                desc: "Tradicional al horno.",
                img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=600&auto=format&fit=crop"
            },
            {
                title: "TARTA DE LOTUS",
                price: "6,50€",
                desc: "Tarta de queso de galleta Lotus.",
                img: "https://images.unsplash.com/photo-1541300971032-4753c15aa527?q=80&w=600&auto=format&fit=crop",
                badge: "Top"
            }
        ]
    }
};

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('burgers');

    return (
        <section id="menu" className="py-24 relative bg-black min-h-screen">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 reveal-up">
                    <span className="text-brand-orange text-sm font-bold tracking-widest uppercase block mb-2">Descubre</span>
                    <h2 className="font-display text-5xl lg:text-7xl text-white mb-8">NUESTRA CARTA</h2>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {Object.keys(menuCategories).map((key) => (
                            <button
                                key={key}
                                onClick={() => setActiveCategory(key)}
                                className={`px-6 py-2 rounded-full font-display tracking-wider text-lg transition-all duration-300 ${activeCategory === key
                                        ? 'bg-brand-orange text-white shadow-[0_0_20px_rgba(255,85,0,0.4)]'
                                        : 'border border-white/20 text-gray-400 hover:text-white hover:border-white'
                                    }`}
                            >
                                {menuCategories[key].title}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {menuCategories[activeCategory].items.map((item, index) => (
                        <div
                            key={`${activeCategory}-${index}`}
                            className="group relative bg-[#0f0f0f] rounded-2xl overflow-hidden border border-white/5 hover:border-brand-orange/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,85,0,0.1)] animate-fade-in"
                        >
                            {/* Hotfix: Force key change to re-trigger animation on filtered items if needed, though key includes category */}

                            {item.badge && (
                                <div className="absolute top-4 right-4 bg-brand-orange px-3 py-1 rounded text-xs font-bold uppercase text-black z-20 shadow-lg">
                                    {item.badge}
                                </div>
                            )}

                            {/* Image Container */}
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent z-10 opacity-60"></div>
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    loading="lazy"
                                />
                            </div>

                            <div className="p-6 relative z-20 -mt-10">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-display text-2xl text-white group-hover:text-brand-orange transition-colors">
                                        {item.title}
                                    </h3>
                                    <span className="font-display text-xl text-brand-orange whitespace-nowrap ml-4">
                                        {item.price}
                                    </span>
                                </div>

                                <p className="font-body text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">
                                    {item.desc}
                                </p>

                                <button className="w-full py-2 border border-white/10 rounded font-display tracking-widest text-sm hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 group-hover:border-brand-orange/50">
                                    <Plus className="w-4 h-4" /> AÑADIR
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {activeCategory === 'burgers' && (
                    <div className="text-center mt-12 text-gray-500 text-sm">
                        <p>* Pan Sin Gluten +1€</p>
                        <p className="mt-2">Patatas fritas +1€ | Sweet potatoes +2€</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Menu;
