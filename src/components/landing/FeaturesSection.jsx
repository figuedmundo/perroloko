import React from 'react';

const FeaturesSection = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            padding: '40px 5%',
            backgroundColor: 'white',
            borderRadius: '20px',
            margin: '0 5%',
            boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-barro)', fontWeight: 700, fontSize: '0.9rem', margin: '10px' }}>
                <i className="fas fa-fire"></i> Ahumado Tradicional
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-barro)', fontWeight: 700, fontSize: '0.9rem', margin: '10px' }}>
                <i className="fas fa-leaf"></i> 100% Natural
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-barro)', fontWeight: 700, fontSize: '0.9rem', margin: '10px' }}>
                <i className="fas fa-bone"></i> Hecho en Familia
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-barro)', fontWeight: 700, fontSize: '0.9rem', margin: '10px' }}>
                <i className="fas fa-paw"></i> Sin Conservadores
            </div>
        </div>
    );
};

export default FeaturesSection;
