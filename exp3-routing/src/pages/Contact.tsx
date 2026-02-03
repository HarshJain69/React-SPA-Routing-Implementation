import React from 'react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Get in touch with us!</p>
      <div className="contact-info">
        <p>Email: contact@example.com</p>
        <p>Phone: (555) 123-4567</p>
        <p>Address: 123 React Router Lane</p>
      </div>
      <Link to="/" className="nav-link">← Back to Home</Link>
    </div>
  );
};

export default Contact;