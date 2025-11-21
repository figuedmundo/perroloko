import React from 'react';

const StorySection = () => {
    return (
        <section id="story" style={{
            backgroundColor: 'var(--color-barro)',
            color: 'white',
            padding: '80px 5%',
            marginTop: '60px',
            borderRadius: '40px 40px 0 0',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <svg viewBox="0 0 200 200" style={{
                position: 'absolute',
                opacity: 0.1,
                width: '200px',
                top: '20px',
                left: '-50px',
                transform: 'rotate(45deg)'
            }}>
                <path d="M10,100 C50,0 150,0 190,100" fill="none" stroke="white" strokeWidth="5" />
            </svg>

            <div style={{
                maxWidth: '800px',
                margin: '0 auto',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1
            }}>
                <h2 style={{
                    fontSize: '2.5rem',
                    marginBottom: '20px'
                }}>Lo que nos hace "Lokos"</h2>
                <p style={{
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    opacity: 0.9
                }}>En HuesoLoko no usamos máquinas industriales. Usamos nuestras manos y un horno de barro tradicional que ha estado en nuestra familia por generaciones. Creemos que tu perro merece comida real: ahumada lento, sin químicos, y con todo el sabor que solo la leña y el barro pueden dar.</p>
            </div>
        </section>
    );
};

export default StorySection;
