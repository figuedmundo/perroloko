import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-content">
        <div className="footer-brand">
          <h3>Hueso<span className="text-primary">Loko</span></h3>
          <p>From the clay oven to their heart.</p>
        </div>

        <div className="footer-socials">
          <a href="#" className="social-icon"><FaInstagram /></a>
          <a href="#" className="social-icon"><FaFacebook /></a>
          <a href="#" className="social-icon"><FaWhatsapp /></a>
        </div>

        <div className="footer-links">
          <a href="#">Shop</a>
          <a href="#">About Us</a>
          <a href="#">FAQ</a>
          <a href="#">Terms</a>
        </div>

        <div className="footer-copy">
          <p>&copy; {new Date().getFullYear()} HuesoLoko. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: var(--color-bg);
          color: var(--color-text);
          padding: 6rem 0 3rem;
          border-top: 2px solid var(--color-text);
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 2.5rem;
        }

        .footer-brand h3 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .footer-brand p {
          font-size: 1.1rem;
          opacity: 0.8;
        }

        .footer-socials {
          display: flex;
          gap: 1.5rem;
        }

        .social-icon {
          font-size: 1.8rem;
          color: var(--color-text);
          transition: color 0.2s, transform 0.2s;
        }

        .social-icon:hover {
          color: var(--color-primary);
          transform: scale(1.2);
        }

        .footer-links {
          display: flex;
          gap: 2rem;
          font-weight: 700;
          font-family: var(--font-heading);
        }

        .footer-links a:hover {
          text-decoration: underline;
          color: var(--color-primary);
        }

        .footer-copy {
          margin-top: 2rem;
          font-size: 0.9rem;
          opacity: 0.6;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
