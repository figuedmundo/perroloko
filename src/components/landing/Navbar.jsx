import React from 'react';
import { FaShoppingBag, FaBars } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <div className="logo">
                    Hueso<span className="text-terracotta">Loko</span>
                </div>

                <div className="nav-links hidden-mobile">
                    <a href="#shop">Shop</a>
                    <a href="#story">Our Story</a>
                    <a href="#contact">Contact</a>
                </div>

                <div className="nav-actions">
                    <div className="cart-icon">
                        <FaShoppingBag size={24} color="var(--color-brown)" />
                        <span className="cart-badge">2</span>
                    </div>
                    <button className="mobile-menu-btn hidden-desktop">
                        <FaBars size={24} color="var(--color-brown)" />
                    </button>
                </div>
            </div>

            <style jsx>{`
        .navbar {
          position: sticky;
          top: 0;
          background-color: rgba(255, 248, 240, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          padding: 1rem 0;
          box-shadow: 0 2px 20px rgba(74, 64, 58, 0.05);
        }

        .navbar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--color-brown);
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          font-weight: 600;
        }

        .nav-links a {
          position: relative;
          transition: color 0.2s;
        }

        .nav-links a:hover {
          color: var(--color-terracotta);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .cart-icon {
          position: relative;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .cart-icon:hover {
          transform: scale(1.1);
        }

        .cart-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background-color: var(--color-terracotta);
          color: white;
          font-size: 0.7rem;
          font-weight: bold;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-menu-btn {
          background: none;
          padding: 0;
        }

        @media (min-width: 768px) {
          .hidden-desktop {
            display: none;
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
