import React from 'react';

const ProductCard = ({ title, desc, price, img, badge }) => (
    <div className="product-card" style={{
        background: 'var(--color-white)',
        borderRadius: '30px',
        padding: '30px',
        textAlign: 'center',
        position: 'relative',
        transition: 'transform 0.3s',
        border: '2px solid transparent'
    }}>
        <style>{`
      .product-card:hover {
        transform: translateY(-10px);
        border-color: var(--color-accent) !important;
        box-shadow: 0 15px 30px rgba(0,0,0,0.05);
      }
      .btn-add:hover {
        background: var(--color-barro) !important;
      }
    `}</style>
        {badge && (
            <span style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'var(--color-accent)',
                color: 'white',
                padding: '5px 12px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 'bold'
            }}>{badge}</span>
        )}
        <img src={img} alt={title} style={{
            width: '100%',
            height: '200px',
            objectFit: 'contain',
            marginBottom: '20px',
            borderRadius: '15px'
        }} />
        <h3 style={{
            fontSize: '1.5rem',
            marginBottom: '10px',
            color: 'var(--color-smoke)'
        }}>{title}</h3>
        <p style={{
            fontSize: '0.9rem',
            color: '#777',
            marginBottom: '20px'
        }}>{desc}</p>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '15px'
        }}>
            <span style={{
                fontSize: '1.3rem',
                fontWeight: 700,
                color: 'var(--color-barro)'
            }}>${price}</span>
            <button className="btn-add" style={{
                background: 'var(--color-smoke)',
                color: 'white',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.2rem',
                transition: 'background 0.3s'
            }}><i className="fas fa-plus"></i></button>
        </div>
    </div>
);

const ProductsSection = () => {
    return (
        <section id="shop" style={{ padding: '80px 5%' }}>
            <h2 style={{
                textAlign: 'center',
                fontSize: '2.5rem',
                color: 'var(--color-smoke)',
                marginBottom: '50px'
            }}>Nuestros Favoritos</h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '40px'
            }}>
                <ProductCard
                    title="Hueso Ahumado Loko"
                    desc="Cocido 12 horas en horno de barro."
                    price="85.00"
                    img="https://images.unsplash.com/photo-1623366302587-b0d9fa560c43?auto=format&fit=crop&w=500&q=80"
                    badge="Best Seller"
                />
                <ProductCard
                    title="Hígado Chips"
                    desc="Crujiente, nutritivo y lleno de hierro."
                    price="120.00"
                    img="https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&w=500&q=80"
                />
                <ProductCard
                    title="Loko Mix"
                    desc="Variedad deshidratada para entrenamiento."
                    price="150.00"
                    img="https://plus.unsplash.com/premium_photo-1664648063589-c6777c72ce22?auto=format&fit=crop&w=500&q=80"
                    badge="Nuevo"
                />
            </div>
        </section>
    );
};

export default ProductsSection;
