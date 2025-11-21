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
    <div className="features-bar">
      {features.map((feature, index) => (
        <div key={index} className="feature">
          <span className="icon">{feature.icon}</span>
          {feature.title}
        </div>
      ))}

      <style jsx>{`
        .features-bar {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          padding: 40px 5%;
          background-color: white;
          border-radius: 20px;
          margin: 0 5%;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          gap: 20px;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--color-barro);
          font-weight: 700;
          font-size: 0.9rem;
          margin: 10px;
          font-family: var(--font-heading);
        }

        .icon {
          font-size: 1.2rem;
        }
      `}</style>
    </div>
  );
};

export default Features;
