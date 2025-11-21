import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--color-smoke)',
            color: 'white',
            textAlign: 'center',
            padding: '40px 5%'
        }}>
            <div style={{ marginBottom: '20px' }}>
                <a href="#" style={{ color: 'white', margin: '0 10px', textDecoration: 'none', opacity: 0.7, transition: 'opacity 0.3s' }}>Instagram</a>
                <a href="#" style={{ color: 'white', margin: '0 10px', textDecoration: 'none', opacity: 0.7, transition: 'opacity 0.3s' }}>Facebook</a>
                <a href="#" style={{ color: 'white', margin: '0 10px', textDecoration: 'none', opacity: 0.7, transition: 'opacity 0.3s' }}>Whatsapp</a>
            </div>
            <p>&copy; 2024 HuesoLoko. Hecho con amor y barro.</p>
        </footer>
    );
};

export default Footer;
