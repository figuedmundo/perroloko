import React from 'react';
import { FaLeaf, FaFire, FaHome } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaLeaf />,
      title: "100% Natural",
      desc: "No preservatives, just pure goodness."
    },
    {
      icon: <FaFire />,
      title: "Clay Oven Smoked",
      desc: "Authentic flavor, irresistible texture."
    },
    {
      icon: <FaHome />,
      title: "Family Owned",
      desc: "Made with love in Cochabamba."
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
          margin: 2rem 0;
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
          gap: 1.5rem;
        }

        .feature-icon {
          font-size: 2.5rem;
          color: var(--color-primary);
          background-color: white;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--color-text);
          box-shadow: var(--shadow-hard);
          transition: transform 0.2s;
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .feature-card h3 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }

        .feature-card p {
          color: var(--color-text);
          font-size: 1.1rem;
          max-width: 250px;
          line-height: 1.4;
        }

        @media (min-width: 768px) {
          .features-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default Features;
