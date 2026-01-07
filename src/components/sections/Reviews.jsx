import React from 'react';
import { Star } from 'lucide-react';

const reviewsData = [
    {
        name: "Carlos P.",
        initials: "C",
        color: "bg-emerald-600",
        time: "hace 2 días",
        rating: 5,
        text: "Literalmente la mejor hamburguesa que he probado en Madrid. El pan brioche es otro nivel.",
        isLocalGuide: true,
        reviewsCount: "12 reseñas"
    },
    {
        name: "Marta G.",
        initials: "M",
        color: "bg-purple-600",
        time: "hace 1 semana",
        rating: 5,
        text: "El sitio tiene un rollo increíble, muy oscuro y elegante. La carne se deshace en la boca.",
        isLocalGuide: false,
        reviewsCount: "4 reseñas"
    },
    {
        name: "Javier R.",
        initials: "J",
        color: "bg-blue-600",
        time: "hace 3 semanas",
        rating: 5,
        text: "Muy buenas burgers, aunque hay que reservar porque siempre está lleno. Vale la pena la espera.",
        isLocalGuide: true,
        reviewsCount: "45 reseñas"
    },
    {
        name: "Ana S.",
        initials: "A",
        color: "bg-orange-600",
        time: "hace 1 mes",
        rating: 5,
        text: "La salsa secreta es adictiva. No sé qué le ponen pero necesito botes para llevar a casa.",
        isLocalGuide: false,
        reviewsCount: "8 reseñas"
    },
    {
        name: "David L.",
        initials: "D",
        color: "bg-red-600",
        time: "hace 2 días",
        rating: 5,
        text: "Espectacular. El servicio de 10 y las patatas con queso son obligatorias.",
        isLocalGuide: true,
        reviewsCount: "28 reseñas"
    }
];

const ReviewCard = ({ review }) => (
    <div className="w-[350px] bg-white rounded-xl p-4 flex flex-col shrink-0 mx-3 shadow-lg hover:shadow-xl transition-shadow cursor-default">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
            <div className="flex gap-3">
                <div className={`w-10 h-10 ${review.color} rounded-full flex items-center justify-center text-white font-medium text-lg`}>
                    {review.initials}
                </div>
                <div>
                    <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                    {review.isLocalGuide && (
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                            Local Guide • {review.reviewsCount}
                        </p>
                    )}
                </div>
            </div>
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
                alt="Google" 
                className="w-5 h-5 opacity-80"
            />
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
            <div className="flex text-[#ffb703]">
                {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="fill-current w-4 h-4" strokeWidth={0} />
                ))}
            </div>
            <span className="text-xs text-gray-500">{review.time}</span>
        </div>

        {/* Body */}
        <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
            {review.text}
        </p>
    </div>
);

const Reviews = () => {
    // Triple data to ensure smooth infinite scroll without gaps
    const reviews = [...reviewsData, ...reviewsData, ...reviewsData];

    return (
        <section id="reviews" className="py-24 bg-black overflow-hidden relative border-t border-white/5">
            <div className="container mx-auto px-4 mb-16 text-center reveal-up">
                <span className="text-brand-orange text-sm font-bold tracking-widest uppercase block mb-2">Social Proof</span>
                <h2 className="font-display text-4xl lg:text-6xl text-white mb-4">LO QUE DICEN DE NOSOTROS</h2>
                <div className="flex items-center justify-center gap-2 text-white/60">
                    <span className="font-bold text-white">4.9</span>
                    <div className="flex text-[#ffb703]">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="fill-current w-4 h-4" strokeWidth={0} />
                        ))}
                    </div>
                    <span>en Google Reviews</span>
                </div>
            </div>

            {/* Carousel Container */}
            <div className="relative w-full">
                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

                {/* Sliding Track */}
                <div className="flex w-max animate-scroll">
                    {reviews.map((review, index) => (
                        <ReviewCard key={index} review={review} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
