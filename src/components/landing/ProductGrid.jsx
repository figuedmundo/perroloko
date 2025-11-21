import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "12 Brownies Pack",
      flavor: "Chocolate & Chip",
      price: "$36.00",
      image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Peanut Butter",
      flavor: "Crunchy Delight",
      price: "$24.00",
      image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Oatmeal Cookies",
      flavor: "Soft Baked",
      price: "$28.00",
      image: "https://images.unsplash.com/photo-1618923860186-85a1b988444e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section className="product-section" id="shop">
      <div className="container">
        <h2 className="section-title">Our <span className="text-primary">Favorites</span></h2>

        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="card-image-container">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="card-content">
                <div className="rating">★★★★★ <span className="reviews">8 Reviews</span></div>
                <h3>{product.name}</h3>
                <div className="flavor-tag">{product.flavor}</div>

                <div className="card-actions">
                  <div className="quantity-selector">
                    <button className="qty-btn"><FaMinus size={10} /></button>
                    <span>1</span>
                    <button className="qty-btn"><FaPlus size={10} /></button>
                  </div>
                  <button className="add-to-cart-btn">
                    ADD - {product.price}
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
          font-size: 3rem;
          margin-bottom: 4rem;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
        }

        .product-card {
          background: white;
          border-radius: 30px;
          padding: 1.5rem;
          border: 2px solid var(--color-text);
          box-shadow: var(--shadow-hard);
          transition: transform 0.2s;
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-hover);
        }

        .card-image-container {
          height: 220px;
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 1.5rem;
          border: 2px solid #eee;
        }

        .card-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .rating {
          color: var(--color-secondary);
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          font-weight: bold;
        }

        .reviews {
          color: var(--color-text);
          opacity: 0.7;
          font-weight: normal;
          margin-left: 0.5rem;
        }

        .card-content h3 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }

        .flavor-tag {
          display: inline-block;
          background-color: #FDF0D5;
          color: var(--color-text);
          padding: 4px 12px;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .card-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }

        .quantity-selector {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-weight: bold;
          font-family: var(--font-heading);
        }

        .qty-btn {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 1px solid var(--color-text);
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text);
        }

        .qty-btn:hover {
          background-color: var(--color-primary);
          color: white;
          border-color: var(--color-primary);
        }

        .add-to-cart-btn {
          flex: 1;
          background-color: white;
          border: 2px solid var(--color-text);
          border-radius: 50px;
          padding: 10px;
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--color-text);
          box-shadow: 2px 2px 0px var(--color-text);
          transition: all 0.2s;
        }

        .add-to-cart-btn:hover {
          background-color: var(--color-text);
          color: white;
          transform: translate(-1px, -1px);
          box-shadow: 4px 4px 0px rgba(0,0,0,0.1);
        }
      `}</style>
    </section>
  );
};

export default ProductGrid;
