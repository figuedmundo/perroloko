import React from 'react';
import { FaBone, FaPaw, FaStar } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container hero-content">
                <div className="hero-text">
                    <h1>Del Horno de Barro a su <span className="text-terracotta">Corazón</span></h1>
                    <p>
                        Premios naturales, ahumados artesanalmente y llenos de sabor.
                        Porque tu mejor amigo merece lo mejor de la tradición.
                    </p>
                    <button className="btn-outline">Shop Now</button>
                </div>

                <div className="hero-visual">
                    <div className="blob-shape">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#F0A202" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.6,32.2C59,42.9,47.1,51.4,34.8,58.3C22.5,65.2,9.8,70.5,-1.9,73.8C-13.6,77.1,-24.3,78.4,-35.3,73.6C-46.3,68.8,-57.6,57.9,-66.6,45.4C-75.6,32.9,-82.3,18.8,-83.4,4.2C-84.5,-10.4,-80,-25.5,-70.8,-37.8C-61.6,-50.1,-47.7,-59.6,-33.8,-66.9C-19.9,-74.2,-6,-79.3,6.4,-90.4L18.8,-101.5" transform="translate(100 100)" />
                        </svg>
                    </div>

                    <img
                        src="https://images.unsplash.com/photo-1582798358481-d199fb7347bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Happy Dog with Treat"
                        className="hero-image"
                    />

                    {/* Floating Doodles */}
                    <div className="floating-icon icon-1"><FaBone /></div>
                    <div className="floating-icon icon-2"><FaPaw /></div>
                    <div className="floating-icon icon-3"><FaStar /></div>
                </div>
            </div>

            <style jsx>{`
        .hero-section {
          padding: 4rem 0;
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3rem;
        }

        .hero-text {
          text-align: center;
          max-width: 600px;
          z-index: 2;
        }

        .hero-text h1 {
          font-size: 3rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .hero-text p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          color: var(--color-brown);
          opacity: 0.9;
        }

        .hero-visual {
          position: relative;
          width: 100%;
          max-width: 500px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .blob-shape {
          position: absolute;
          width: 140%;
          height: 140%;
          z-index: -1;
          top: -20%;
          left: -20%;
          animation: float 6s ease-in-out infinite;
        }

        .hero-image {
          width: 100%;
          height: auto;
          border-radius: 30px;
          transform: rotate(-3deg);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          z-index: 1;
        }

        .floating-icon {
          position: absolute;
          color: var(--color-terracotta);
          font-size: 2rem;
          z-index: 2;
          animation: bounce 3s infinite ease-in-out;
        }

        .icon-1 { top: -10%; right: 10%; animation-delay: 0s; transform: rotate(15deg); }
        .icon-2 { bottom: 10%; left: -5%; animation-delay: 1s; color: var(--color-mustard); transform: rotate(-10deg); }
        .icon-3 { top: 40%; right: -10%; animation-delay: 0.5s; font-size: 1.5rem; }

        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @media (min-width: 968px) {
          .hero-content {
            flex-direction: row;
            text-align: left;
            justify-content: space-between;
          }

          .hero-text {
            align-items: flex-start;
            text-align: left;
          }

          .hero-text h1 {
            font-size: 4rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
