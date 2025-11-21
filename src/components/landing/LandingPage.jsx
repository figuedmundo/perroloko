import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import ProductsSection from './ProductsSection';
import StorySection from './StorySection';
import Footer from './Footer';

const LandingPage = () => {
    return (
        <div style={{ position: 'relative', overflowX: 'hidden' }}>
            {/* Floating Doodles */}
            <svg viewBox="0 0 100 100" style={{
                position: 'absolute',
                zIndex: -1,
                top: '10%',
                left: '5%',
                width: '50px',
                transform: 'rotate(-15deg)'
            }}>
                <path d="M10,50 Q30,10 50,50 T90,50" fill="none" stroke="#D95D39" strokeWidth="5" strokeLinecap="round" />
            </svg>

            <svg viewBox="0 0 100 100" style={{
                position: 'absolute',
                zIndex: -1,
                top: '15%',
                right: '5%',
                width: '60px'
            }}>
                <circle cx="50" cy="50" r="40" fill="none" stroke="#F0A202" strokeWidth="5" strokeDasharray="10,10" />
            </svg>

            <Header />
            <HeroSection />
            <FeaturesSection />
            <ProductsSection />
            <StorySection />
            <Footer />
        </div>
    );
};

export default LandingPage;
