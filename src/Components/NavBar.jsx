import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg'; 

const Navbar = () => {
  return (
    <nav>
      {/* 👇 UPDATED LOGO SECTION */}
      <div className="logo">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          
          {/* Circular Logo Image */}
          <img 
            src={logo} 
            alt="GetStitched" 
            style={{ 
              height: '50px',        
              width: '50px',         
              borderRadius: '50%',   
              objectFit: 'cover',
              border: '2px solid var(--primary)', 
              display: 'block'
            }} 
          />

          {/* New Blue Text */}
          <span style={{ 
            color: 'var(--primary)', 
            fontSize: '1.5rem', 
            fontFamily: "'Playfair Display', serif", 
            fontWeight: '700',
            letterSpacing: '0.5px'
          }}>
            GetStitched
          </span>

        </Link>
      </div>

      {/* Links Section */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/tailors">Find Tailors</Link>
        <Link to="/register-customer">Customer</Link>
        <Link to="/register-tailor" className="btn-primary" style={{ marginLeft: '30px', color: '#fff' }}>
          Partner With Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;