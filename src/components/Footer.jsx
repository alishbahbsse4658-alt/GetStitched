import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container footer-content">
        
        {/* Column 1: Brand Info */}
        <div className="footer-section">
          <h2 className="footer-logo">GetStitched</h2>
          <p className="footer-text">
            Experience the perfect fit. Connect with expert local tailors for custom stitching, alterations, and design consultations at your doorstep.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/tailors">Find a Tailor</Link></li>
            <li><Link to="/register-tailor">Join as Tailor</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          
          <Link to="/contact" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '15px' }}>
            <p className="footer-contact-link">
              Have questions?
            </p>
          </Link>

          <p className="footer-contact">support@getstitched.com</p>
          <p className="footer-contact">+92 300 123 4567</p>
          
          {/* Social Icons Container */}
          <div className="social-icons">
             {/* Facebook */}
             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon-link">
                <div className="icon-circle facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </div>
             </a>

             {/* Instagram */}
             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon-link">
                <div className="icon-circle instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
             </a>

             {/* WhatsApp */}
             <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="icon-link">
                <div className="icon-circle whatsapp">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </div>
             </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} GetStitched. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;