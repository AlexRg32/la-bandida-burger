import React, { useEffect, useRef } from 'react';

const Particles = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        container.innerHTML = ''; // Clear previous if any
        const particleCount = 20;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            const size = Math.random() * 4 + 1;

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.background = Math.random() > 0.5 ? '#FF5500' : '#ffffff';
            particle.style.opacity = Math.random() * 0.5 + 0.1;
            particle.style.position = 'absolute';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.borderRadius = '50%';
            particle.style.filter = `blur(${Math.random()}px)`;

            // Add floating animation
            particle.style.animation = `float ${5 + Math.random() * 5}s infinite ease-in-out ${Math.random() * 5}s`;

            container.appendChild(particle);
        }
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 pointer-events-none z-10"
            id="particles"
        />
    );
};

export default Particles;
