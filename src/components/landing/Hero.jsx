import React from 'react';
import { FaBone, FaPaw, FaStar } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Full.<span className="text-primary">filled.</span>™</h1>
          <p className="hero-subtitle">
            Healthy, Hefty, Hundred<br />
            calorie snacks for your dog.
          </p>
          <button className="btn-outline">SHOP NOW &raquo;</button>
        </div>

        <div className="hero-visual">
          {/* Main Blob Background */}
          <svg className="blob-bg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#F4B942" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.6,32.2C59,42.9,47.1,51.4,34.8,58.3C22.5,65.2,9.8,70.5,-1.9,73.8C-13.6,77.1,-24.3,78.4,-35.3,73.6C-46.3,68.8,-57.6,57.9,-66.6,45.4C-75.6,32.9,-82.3,18.8,-83.4,4.2C-84.5,-10.4,-80,-25.5,-70.8,-37.8C-61.6,-50.1,-47.7,-59.6,-33.8,-66.9C-19.9,-74.2,-6,-79.3,6.4,-90.4L18.8,-101.5" transform="translate(100 100)" />
          </svg>

          <img
            src="https://images.unsplash.com/photo-1582798358481-d199fb7347bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Happy Dog with Treat"
            className="hero-image"
          />

          {/* Decorative Scribbles */}
          <svg className="scribble scribble-1" viewBox="0 0 100 100">
            <path d="M10,50 Q30,20 50,50 T90,50" fill="none" stroke="var(--color-barro)" strokeWidth="5" strokeLinecap="round" />
          </svg>
          <svg className="scribble scribble-2" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="10" fill="var(--color-accent)" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          padding: 6rem 0;
          position: relative;
          overflow: visible;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4rem;
        }

        .hero-text {
          text-align: center;
          z-index: 2;
        }

        .hero-text h1 {
          font-size: 5rem;
          line-height: 0.9;
          margin-bottom: 1.5rem;
          color: var(--color-text);
        }

        .hero-subtitle {
          font-size: 1.5rem;
          margin-bottom: 2.5rem;
          color: var(--color-text);
          font-weight: 500;
          line-height: 1.4;
        }

        .hero-visual {
          position: relative;
          width: 100%;
          max-width: 500px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .blob-bg {
          position: absolute;
          width: 160%;
          height: 160%;
          z-index: -1;
          top: -30%;
          left: -30%;
        }

        .hero-image {
          width: 100%;
          height: auto;
          border-radius: 50%; /* Circle crop */
          border: 4px solid white;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          z-index: 1;
          background-color: white;
        }

        .scribble {
          position: absolute;
          width: 80px;
          height: 80px;
          z-index: 2;
        }

        .scribble-1 { top: -20px; right: 0; transform: rotate(15deg); }
        .scribble-2 { bottom: 0; left: -20px; width: 40px; height: 40px; }

        @media (min-width: 968px) {
          .hero-content {
            flex-direction: row;
            text-align: left;
            justify-content: space-between;
          }

          .hero-text {
            align-items: flex-start;
            text-align: left;
            max-width: 50%;
          }

          .hero-text h1 {
            font-size: 6rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
