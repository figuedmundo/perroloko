import React from 'react';

const Header = () => {
    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 5%',
            backgroundColor: 'var(--color-cream)',
            position: 'sticky',
            top: 0,
            zIndex: 100
        }}>
            <a href="#" style={{
                fontSize: '2rem',
                fontWeight: 700,
                color: 'var(--color-barro)',
                textDecoration: 'none',
                letterSpacing: '-1px',
                fontFamily: 'var(--font-display)'
            }}>HuesoLoko.</a>

            <nav className="hidden-mobile" style={{ display: 'flex', gap: '30px' }}>
                <a href="#shop" style={{
                    textDecoration: 'none',
                    color: 'var(--color-smoke)',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    transition: 'color 0.3s'
                }}>Tienda</a>
                <a href="#story" style={{
                    textDecoration: 'none',
                    color: 'var(--color-smoke)',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    transition: 'color 0.3s'
                }}>Historia</a>
                <a href="#contact" style={{
                    textDecoration: 'none',
                    color: 'var(--color-smoke)',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    transition: 'color 0.3s'
                }}>Contacto</a>
            </nav>

            <div style={{ position: 'relative', fontSize: '1.2rem', cursor: 'pointer' }}>
                <i className="fas fa-shopping-bag"></i>
                <span style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-8px',
                    background: 'var(--color-barro)',
                    color: 'white',
                    fontSize: '0.7rem',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontWeight: 'bold'
                }}>2</span>
            </div>
        </header>
    );
};

export default Header;
