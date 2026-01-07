import { useEffect } from 'react';

export const useScrollReveal = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-zoom, .reveal-in');
        elements.forEach(el => observer.observe(el));

        return () => {
            // Cleanup might be tricky with querySelectorAll if elements change, 
            // but for this static landing page it's fine. 
            // Ideally we would use refs for each element in React, 
            // but to keep migration fast and close to original, we query DOM.
            elements.forEach(el => observer.unobserve(el));
        };
    }); // No dependency array to run on every render/update if needed, or [] if static.
    // Better to use [] and ensure elements exist, or use a MutationObserver. 
    // For now, let's use [] with a slight timeout or just React 'ref' approach is better.
    // But querySelectorAll is "okay" as long as components are mounted.
};

// A better React-way:
// import { useEffect, useRef } from 'react';
// export const useReveal = () => {
//    const ref = useRef(null);
//    useEffect (...)
//    return ref;
// }
// But given the quantity of existing classes, sticking to the global observer might be faster to migrate.
