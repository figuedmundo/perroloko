import React from 'react';
import { FaLeaf, FaFire, FaHome } from 'react-icons/fa';

const Features = () => {
    const features = [
        {
            icon: <FaLeaf />,
            title: "100% Natural",
            desc: "Sin conservantes ni aditivos extraños."
        },
        {
            icon: <FaFire />,
            title: "Ahumado en Barro",
            desc: "Sabor auténtico y textura irresistible."
        },
        {
            icon: <FaHome />,
            title: "Empresa Familiar",
            desc: "Hecho con amor en Cochabamba."
        }
    ];

    return (
        <section className="features-section">
            <div className="container">
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .features-section {
          padding: 4rem 0;
          background-color: white;
          border-radius: 50px;
          margin: 2rem 1rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          text-align: center;
        }

        .feature-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .feature-icon {
          font-size: 2.5rem;
          color: var(--color-terracotta);
          background-color: var(--color-cream);
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.5rem;
        }

        .feature-card h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .feature-card p {
          color: var(--color-brown);
          opacity: 0.8;
          max-width: 250px;
        }

        @media (min-width: 768px) {
          .features-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          
          .features-section {
            margin: 4rem 2rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Features;
