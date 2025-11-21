import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-content">
        <div className="footer-links">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Whatsapp</a>
        </div>
        <p>&copy; {new Date().getFullYear()} HuesoLoko. Hecho con amor y barro.</p>
      </div>

      <style jsx>{`
        .footer {
          background-color: var(--color-smoke);
          color: white;
          text-align: center;
          padding: 40px 5%;
        }

        .footer-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }

        .footer-links {
            margin-bottom: 20px;
        }
        .footer-links a {
            color: white;
            margin: 0 10px;
            text-decoration: none;
            opacity: 0.7;
            font-family: var(--font-heading);
            font-weight: 700;
        }
        .footer-links a:hover { opacity: 1; }
      `}</style>
    </footer>
  );
};

export default Footer;
