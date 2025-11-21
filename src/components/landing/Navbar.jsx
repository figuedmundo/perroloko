import React from 'react';
import { FaShoppingBag, FaBars, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="nav-left hidden-mobile">
          <a href="#shop" className="nav-link">SHOP</a>
          <a href="#story" className="nav-link">ABOUT US</a>
          <a href="#contact" className="nav-link">FAQ</a>
        </div>

        <div className="logo">
          HUESO<span className="text-primary">LOKO</span>
        </div>

        <div className="nav-actions">
          <button className="icon-btn">
            <FaSearch size={20} />
          </button>
          <div className="cart-container">
            <button className="icon-btn cart-btn">
              <FaShoppingBag size={20} />
            </button>
            <span className="cart-badge">1</span>
          </div>
          <button className="mobile-menu-btn hidden-desktop">
            <FaBars size={24} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: sticky;
          top: 0;
          background-color: var(--color-bg);
          z-index: 1000;
          padding: 1.5rem 0;
          border-bottom: 2px solid rgba(74, 44, 42, 0.1);
        }

        .navbar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-left {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 0.05em;
          color: var(--color-text);
          transition: color 0.2s;
        }

        .nav-link:hover {
          color: var(--color-primary);
        }

        .logo {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 800;
          color: var(--color-text);
          letter-spacing: -0.05em;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .icon-btn {
          background: none;
          color: var(--color-text);
          padding: 8px;
          border-radius: 50%;
          transition: background 0.2s;
        }

        .icon-btn:hover {
          background-color: rgba(0,0,0,0.05);
        }

        .cart-container {
          position: relative;
        }

        .cart-btn {
          color: var(--color-primary);
        }

        .cart-badge {
          position: absolute;
          top: 0;
          right: 0;
          background-color: var(--color-text);
          color: white;
          font-size: 0.7rem;
          font-weight: bold;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--color-bg);
        }

        .mobile-menu-btn {
          background: none;
          padding: 0;
          color: var(--color-text);
        }

        @media (max-width: 768px) {
          .logo {
            position: static;
            transform: none;
          }
          
          .hidden-desktop {
            display: block;
          }
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
