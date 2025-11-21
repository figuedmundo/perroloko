import React from 'react';

const HeroSection = () => {
    return (
        <section className="hero" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '60px 5%',
            position: 'relative',
            minHeight: '80vh',
            justifyContent: 'space-between'
        }}>
            <style>{`
        @media (min-width: 768px) {
          .hero {
            flex-direction: row !important;
            text-align: left !important;
          }
          .hero-content {
            width: 45%;
          }
          .hero-image-wrapper {
            width: 50%;
          }
        }
        @keyframes morph {
            0% { border-radius: 45% 55% 60% 40% / 50% 60% 40% 50%; }
            50% { border-radius: 60% 40% 40% 60% / 40% 50% 50% 60%; }
            100% { border-radius: 45% 55% 60% 40% / 50% 60% 40% 50%; }
        }
      `}</style>

            <div className="hero-content">
                <h1 style={{
                    fontSize: '3.5rem',
                    lineHeight: 1.1,
                    color: 'var(--color-smoke)',
                    marginBottom: '20px'
                }}>Del Horno de Barro <br /><span style={{ color: 'var(--color-barro)' }}>A Su Corazón</span></h1>
                <p style={{
                    fontSize: '1.2rem',
                    marginBottom: '30px',
                    lineHeight: 1.6
                }}>Somos una familia creando premios honestos. Huesos ahumados artesanalmente y comida deshidratada real para el consentido de la casa.</p>
                <a href="#shop" style={{
                    backgroundColor: 'transparent',
                    color: 'var(--color-barro)',
                    border: '2px solid var(--color-barro)',
                    padding: '15px 35px',
                    fontSize: '1rem',
                    fontWeight: 700,
                    borderRadius: '50px',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    textDecoration: 'none'
                }}>
                    Ver Productos <i className="fas fa-arrow-right"></i>
                </a>
            </div>

            <div className="hero-image-wrapper" style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '40px'
            }}>
                <div style={{
                    backgroundColor: 'var(--color-accent)',
                    borderRadius: '45% 55% 60% 40% / 50% 60% 40% 50%',
                    width: '400px',
                    height: '400px',
                    position: 'absolute',
                    zIndex: -1,
                    opacity: 0.2,
                    animation: 'morph 8s ease-in-out infinite'
                }}></div>
                <img src="https://images.unsplash.com/photo-1582798358481-d199fb7347bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&png=1" alt="Hueso Ahumado" style={{
                    width: '100%',
                    maxWidth: '450px',
                    filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.2))',
                    transform: 'rotate(15deg)',
                    transition: 'transform 0.5s'
                }} />

                <svg viewBox="0 0 100 100" style={{
                    position: 'absolute',
                    right: '-20px',
                    bottom: '50px',
                    width: '40px',
                    zIndex: -1
                }}>
                    <path d="M20,20 L80,80 M80,20 L20,80" stroke="#D95D39" strokeWidth="8" strokeLinecap="round" />
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;
