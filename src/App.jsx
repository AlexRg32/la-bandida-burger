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
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
    // Activate scroll reveal animations
    useScrollReveal();

    return (
        <div className="antialiased selection:bg-brand-orange selection:text-white bg-brand-black text-white">
            <Loader />
            <Navbar />
            <main>
                <Hero />
                <div className="relative bg-black z-30 -mt-12">
                    <Marquee />
                </div>
                {/* <Stats /> removed as per user request */}
                <Menu />
                <About />
                <Locations />
                <Reviews />
            </main>
            <Footer />
        </div>
    );
}

export default App;
