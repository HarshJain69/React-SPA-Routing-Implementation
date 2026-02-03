import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const productData = {
    '1': { name: 'Product A', description: 'Amazing Product A', price: '$99.99' },
    '2': { name: 'Product B', description: 'Fantastic Product B', price: '$149.99' },
    '3': { name: 'Product C', description: 'Incredible Product C', price: '$199.99' },
    '4': { name: 'Product D', description: 'Outstanding Product D', price: '$249.99' },
  };

  const product = productData[id as keyof typeof productData];

  const handleGoBack = () => {
    navigate('/products');
  };

  if (!product) {
    return (
      <div className="product-details">
        <h1>Product Not Found</h1>
        <p>Product with ID "{id}" does not exist.</p>
        <Link to="/products" className="nav-link">← Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <p><strong>Product ID:</strong> {id}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Price:</strong> {product.price}</p>
      <div className="product-actions">
        <button onClick={handleGoBack} className="nav-button">
          ← Back to Products
        </button>
        <Link to="/" className="nav-link">Home</Link>
      </div>
    </div>
  );
};

export default ProductDetails;