import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import ProductGrid from './ProductGrid';
import Story from './Story';
import Footer from './Footer';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Navbar />
            <Hero />
            <Features />
            <ProductGrid />
            <Story />
            <Footer />
        </div>
    );
};

export default LandingPage;
