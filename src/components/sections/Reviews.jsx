import React from 'react';
import { Star } from 'lucide-react';

const reviewsData = [
    {
        name: "Carlos P.",
        initials: "CP",
        time: "hace 2 días",
        text: "Literalmente la mejor hamburguesa que he probado en Madrid. El pan brioche es otro nivel."
    },
    {
        name: "Marta G.",
        initials: "MG",
        time: "hace 1 semana",
        text: "El sitio tiene un rollo increíble, muy oscuro y elegante. La carne se deshace en la boca."
    },
    {
        name: "Javier R.",
        initials: "JR",
        time: "hace 3 semanas",
        text: "Muy buenas burgers, aunque hay que reservar porque siempre está lleno. Vale la pena la espera."
    },
    {
        name: "Ana S.",
        initials: "AS",
        time: "hace 1 mes",
        text: "La salsa secreta es adictiva. No sé qué le ponen pero necesito botes para llevar a casa."
    }
];

const ReviewCard = ({ review }) => (
    <div className="w-80 md:w-96 bg-[#0f0f0f] p-6 rounded-xl border border-white/5 flex flex-col justify-between shrink-0 hover:border-brand-orange/30 transition-colors cursor-pointer">
        <div className="mb-4 text-brand-orange flex gap-1">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className="fill-current w-4 h-4" />
            ))}
        </div>
        <p className="text-gray-300 font-body italic mb-6">"{review.text}"</p>
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center font-bold text-white">
                {review.initials}
            </div>
            <div>
                <p className="text-white font-bold text-sm">{review.name}</p>
                <p className="text-xs text-gray-500">{review.time}</p>
            </div>
        </div>
    </div>
);

const Reviews = () => {
    // Duplicate data for infinite scroll
    const reviews = [...reviewsData, ...reviewsData];

    return (
        <section id="reviews" className="py-20 bg-black overflow-hidden border-t border-white/5 relative">
            <div className="container mx-auto px-4 mb-12 text-center reveal-up">
                <h2 className="font-display text-4xl lg:text-5xl text-white mb-2">LA OPINIÓN DE LA CALLE</h2>
                <p className="text-brand-orange font-bold tracking-widest text-sm uppercase">Reseñas Reales</p>
            </div>

            {/* Gradient masks */}
            <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

            <div className="flex gap-6 w-max animate-scroll hover:[animation-play-state:paused] px-4 reveal-in">
                {reviews.map((review, index) => (
                    <ReviewCard key={index} review={review} />
                ))}
            </div>
        </section>
    );
};

export default Reviews;
