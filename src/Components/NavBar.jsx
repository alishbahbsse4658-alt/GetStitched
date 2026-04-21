import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="logo">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <img src={logo} alt="GetStitched" style={{ height: '50px', width: '50px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--primary)', display: 'block' }} />
          <span style={{ color: 'var(--primary)', fontSize: '1.5rem', fontFamily: "'Playfair Display', serif", fontWeight: '700', letterSpacing: '0.5px' }}>
            GetStitched
          </span>
        </Link>
      </div>

      {/* Hamburger Button */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Links */}
      <div className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/tailors" onClick={() => setMenuOpen(false)}>Find Tailors</Link>
        <Link to="/register-customer" onClick={() => setMenuOpen(false)}>Customer</Link>
        <Link to="/register-tailor" className="btn-primary" onClick={() => setMenuOpen(false)} style={{ marginLeft: '30px', color: '#fff' }}>
          Partner With Us
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;