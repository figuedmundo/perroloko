import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container footer-content">
                <div className="footer-brand">
                    <h3>HuesoLoko</h3>
                    <p>Del horno de barro a su corazón.</p>
                </div>

                <div className="footer-socials">
                    <a href="#" className="social-icon"><FaInstagram /></a>
                    <a href="#" className="social-icon"><FaFacebook /></a>
                    <a href="#" className="social-icon"><FaWhatsapp /></a>
                </div>

                <div className="footer-copy">
                    <p>&copy; {new Date().getFullYear()} HuesoLoko. Todos los derechos reservados.</p>
                </div>
            </div>

            <style jsx>{`
        .footer {
          background-color: var(--color-brown);
          color: var(--color-cream);
          padding: 4rem 0 2rem;
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 2rem;
        }

        .footer-brand h3 {
          color: var(--color-terracotta);
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .footer-socials {
          display: flex;
          gap: 1.5rem;
        }

        .social-icon {
          font-size: 1.5rem;
          color: white;
          transition: color 0.2s;
        }

        .social-icon:hover {
          color: var(--color-terracotta);
        }

        .footer-copy {
          margin-top: 2rem;
          font-size: 0.9rem;
          opacity: 0.6;
          border-top: 1px solid rgba(255,255,255,0.1);
          width: 100%;
          padding-top: 2rem;
        }
      `}</style>
        </footer>
    );
};

export default Footer;
