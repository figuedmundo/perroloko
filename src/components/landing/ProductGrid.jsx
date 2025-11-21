import React from 'react';
import { FaPlus } from 'react-icons/fa';

const ProductGrid = () => {
    const products = [
        {
            id: 1,
            name: "Costillas Ahumadas",
            price: "45 Bs",
            image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 2,
            name: "Patitas de Pollo",
            price: "30 Bs",
            image: "https://images.unsplash.com/photo-1589924691195-41432c84c161?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 3,
            name: "Mix de Hígado",
            price: "35 Bs",
            image: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 4,
            name: "Orejas de Cerdo",
            price: "40 Bs",
            image: "https://images.unsplash.com/photo-1623366302587-bca021d6616e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
    ];

    return (
        <section className="product-section" id="shop">
            <div className="container">
                <h2 className="section-title">Nuestros <span className="text-terracotta">Favoritos</span></h2>

                <div className="product-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="card-image">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="card-content">
                                <h3>{product.name}</h3>
                                <div className="card-footer">
                                    <span className="price">{product.price}</span>
                                    <button className="add-btn">
                                        <FaPlus />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .product-section {
          padding: 4rem 0;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .product-card {
          background: white;
          border-radius: 30px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.08);
        }

        .card-image {
          height: 250px;
          overflow: hidden;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .product-card:hover .card-image img {
          transform: scale(1.1);
        }

        .card-content {
          padding: 1.5rem;
        }

        .card-content h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .price {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          color: var(--color-terracotta);
          font-weight: 700;
        }

        .add-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--color-brown);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s;
        }

        .add-btn:hover {
          background-color: var(--color-terracotta);
          transform: rotate(90deg);
        }
      `}</style>
        </section>
    );
};

export default ProductGrid;
