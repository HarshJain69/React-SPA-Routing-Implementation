import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>We are a company demonstrating routing concepts in React SPA.</p>
      <p>This page showcases basic routing functionality.</p>
      <Link to="/" className="nav-link">← Back to Home</Link>
    </div>
  );
};

export default About;