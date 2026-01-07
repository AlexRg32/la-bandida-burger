/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    black: '#050505',
                    charcoal: '#121212',
                    orange: '#FF5500', // Neon Orange
                    orangeGlow: '#FF8844',
                }
            },
            fontFamily: {
                display: ['Anton', 'sans-serif'],
                body: ['Manrope', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 8s ease-in-out infinite',
                'steam': 'steam 4s ease-out infinite',
                'pulse-glow': 'pulseGlow 2s infinite',
                'scroll': 'scroll 40s linear infinite',
                'fade-in': 'fadeIn 1s ease-out forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
                    '50%': { transform: 'translateY(-20px) rotate(5deg)' },
                },
                steam: {
                    '0%': { opacity: '0', transform: 'translateY(0) scale(1)' },
                    '50%': { opacity: '0.5', transform: 'translateY(-20px) scale(1.5)' },
                    '100%': { opacity: '0', transform: 'translateY(-40px) scale(2)' },
                },
                pulseGlow: {
                    '0%, 100%': { boxShadow: '0 0 15px rgba(255, 85, 0, 0.2)' },
                    '50%': { boxShadow: '0 0 30px rgba(255, 85, 0, 0.6)' },
                },
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        }
    },
    plugins: [],
}
