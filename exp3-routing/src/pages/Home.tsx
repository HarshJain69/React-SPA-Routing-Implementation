import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <div className="page-header">
        <h1>Welcome to React Routing</h1>
        <p>This is the home page showcasing React Router DOM v6 with TypeScript</p>
      </div>
      
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h2>Features Demonstrated:</h2>
        <div className="stats-grid" style={{ marginTop: '2rem' }}>
          <div className="stat-card">
            <h4>Basic Routing</h4>
            <p>✓</p>
          </div>
          <div className="stat-card">
            <h4>Dynamic Routes</h4>
            <p>✓</p>
          </div>
          <div className="stat-card">
            <h4>Nested Routes</h4>
            <p>✓</p>
          </div>
          <div className="stat-card">
            <h4>Protected Routes</h4>
            <p>✓</p>
          </div>
        </div>
        
        <div style={{ marginTop: '3rem' }}>
          <h3>Quick Navigation</h3>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            <Link to="/about" className="product-link">About Us</Link>
            <Link to="/products" className="product-link">View Products</Link>
            <Link to="/contact" className="product-link">Contact</Link>
            <Link to="/login" className="product-link">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;