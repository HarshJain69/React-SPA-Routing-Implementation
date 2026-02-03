import React from 'react';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
  const products = [
    { id: '1', name: 'Product A', description: 'Amazing Product A' },
    { id: '2', name: 'Product B', description: 'Fantastic Product B' },
    { id: '3', name: 'Product C', description: 'Incredible Product C' },
    { id: '4', name: 'Product D', description: 'Outstanding Product D' },
  ];

  return (
    <div className="products-page">
      <h1>Our Products</h1>
      <p>Explore our amazing product collection!</p>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <Link to={`/products/${product.id}`} className="nav-link">
              View Details
            </Link>
          </div>
        ))}
      </div>
      <Link to="/" className="nav-link">← Back to Home</Link>
    </div>
  );
};

export default Products;