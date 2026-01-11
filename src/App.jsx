import React from 'react';
import Navbar from './components/ui/Navbar';
import Hero from './components/sections/Hero';
import Marquee from './components/sections/Marquee';
import Menu from './components/sections/Menu';
import About from './components/sections/About';
import Locations from './components/sections/Locations';
import Reviews from './components/sections/Reviews';
import Footer from './components/ui/Footer';
import Loader from './components/ui/Loader';
import ThemeSwitcher from './components/ui/ThemeSwitcher';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
    // Activate scroll reveal animations
    useScrollReveal();

    return (
        <div className="antialiased selection:bg-brand-burgundy selection:text-white bg-brand-bgMain text-white relative">
            <div className="fixed inset-0 pointer-events-none opacity-[0.04] bg-noise z-50"></div>
            <Loader />
            <Navbar />
            <main>
                <Hero />
                <div className="relative bg-brand-bgMain z-30 -mt-12">
                    <Marquee />
                </div>
                {/* <Stats /> removed as per user request */}
                <Menu />
                <About />
                <Locations />
                <Reviews />
            </main>
            <Footer />
            <ThemeSwitcher />
        </div>
    );
}

export default App;
