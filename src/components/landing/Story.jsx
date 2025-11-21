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
          <h2>What makes us <span className="text-secondary">Loko?</span></h2>
          <p>
            At HuesoLoko, we don't use industrial ovens. We use a traditional <strong>Clay Oven</strong>,
            hand-built to give our treats an unmatched smoky flavor.
          </p>
          <p>
            Each bone is slow-cooked with fruit tree wood, locking in nutrients
            and achieving that crunchy texture your dog loves. No chemicals, no rush.
          </p>
          <button className="btn-story">READ OUR STORY</button>
        </div>
      </div>

      {/* Background doodles */}
      <svg className="bg-doodle doodle-1" viewBox="0 0 100 100">
        <path d="M10,50 Q30,20 50,50 T90,50" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
      </svg>

      <style jsx>{`
        .story-section {
          background-color: var(--color-barro);
          color: white;
          padding: 8rem 0;
          position: relative;
          overflow: hidden;
          margin-top: 6rem;
          clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
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
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .icon-badge {
          font-size: 3rem;
          color: var(--color-secondary);
          margin-bottom: 2rem;
          background: rgba(255,255,255,0.1);
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .story-content h2 {
          color: white;
          font-size: 3.5rem;
          margin-bottom: 2rem;
        }

        .story-content p {
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
          line-height: 1.8;
          opacity: 0.95;
          font-weight: 500;
        }

        .btn-story {
          margin-top: 2rem;
          background: white;
          color: var(--color-primary);
          padding: 15px 40px;
          border-radius: 50px;
          font-weight: 800;
          font-size: 1rem;
          border: 2px solid rgba(0,0,0,0.1);
          box-shadow: 4px 4px 0px rgba(0,0,0,0.2);
          transition: all 0.2s;
        }

        .btn-story:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0px rgba(0,0,0,0.2);
        }

        .bg-doodle {
          position: absolute;
          width: 300px;
          height: 300px;
          z-index: 1;
        }

        .doodle-1 {
          top: 10%;
          left: -5%;
          transform: rotate(-15deg);
        }
      `}</style>
    </section>
  );
};

export default Story;
