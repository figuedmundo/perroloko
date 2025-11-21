import React from 'react';
import { FaFireAlt } from 'react-icons/fa';

const Story = () => {
    return (
        <section className="story-section" id="story">
            <div className="container story-container">
                <div className="story-content">
                    <div className="icon-badge">
                        <FaFireAlt />
                    </div>
                    <h2>Lo que nos hace <span className="text-mustard">Lokos</span></h2>
                    <p>
                        En HuesoLoko, no usamos hornos industriales. Usamos un <strong>Horno de Barro</strong> tradicional,
                        construido a mano, que le da a nuestros premios un sabor ahumado inigualable.
                    </p>
                    <p>
                        Cada hueso se cocina lentamente con leña de árboles frutales, manteniendo los nutrientes
                        y logrando esa textura crujiente que a tu perro le encanta. Sin químicos, sin prisas.
                    </p>
                </div>
            </div>

            {/* Background doodles */}
            <div className="bg-doodle doodle-1"></div>
            <div className="bg-doodle doodle-2"></div>

            <style jsx>{`
        .story-section {
          background-color: var(--color-terracotta);
          color: white;
          padding: 6rem 0;
          position: relative;
          overflow: hidden;
          margin-top: 4rem;
        }

        .story-container {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
        }

        .story-content {
          max-width: 700px;
          text-align: center;
        }

        .icon-badge {
          font-size: 3rem;
          color: var(--color-mustard);
          margin-bottom: 1.5rem;
          animation: flicker 2s infinite alternate;
        }

        .story-content h2 {
          color: white;
          font-size: 3rem;
          margin-bottom: 2rem;
        }

        .story-content p {
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          line-height: 1.8;
          opacity: 0.95;
        }

        .bg-doodle {
          position: absolute;
          border: 2px dashed rgba(255,255,255,0.1);
          border-radius: 50%;
          z-index: 1;
        }

        .doodle-1 {
          width: 300px;
          height: 300px;
          top: -50px;
          left: -50px;
        }

        .doodle-2 {
          width: 400px;
          height: 400px;
          bottom: -100px;
          right: -100px;
        }

        @keyframes flicker {
          0% { opacity: 0.8; transform: scale(1); }
          100% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>
        </section>
    );
};

export default Story;
