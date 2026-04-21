import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/WhiteBg.png'; 

const Home = () => {
  return (
    <div style={{ 
      backgroundImage: `url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      // 👇 FIX 1: This forces the image to fill the screen (minus navbar)
      minHeight: 'calc(100vh - 80px)', 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      margin: 0,
      padding: 0,
      overflowX: 'hidden'
    }}>
      
      {/* 👇 FIX 2: Removed Dark Overlay so the image is "Clear" */}
      {/* If you need a slight tint, use a very light white overlay instead */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Very subtle light tint (optional)
        zIndex: 1
      }}></div>

      {/* Main Content */}
      <div style={{ 
        position: 'relative', 
        zIndex: 2, 
        textAlign: 'center', 
        padding: '20px',
      }}>
        
         <h1 style={{ 
          color: '#4A90E2', /* Royal Blue */
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(2rem, 8vw, 4.5rem)', 
          marginBottom: '20px', 
          fontWeight: '700',
          letterSpacing: '-1px',
          // 👇 FIX 3: Removed heavy black shadow, used subtle shadow
          textShadow: '0px 2px 10px rgba(0,0,0,0.1)' 
        }}>
          Perfect Fit, Delivered.
        </h1>

        {/* 👇 FIX 4: Changed text to Dark Grey (visible on white bg) */}
        <p style={{ 
          color: '#374151', /* Dark Grey */
          fontFamily: "'Inter', sans-serif",
          fontSize: '1.3rem', 
          marginBottom: '50px', 
          maxWidth: '700px',
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: '1.6',
          fontWeight: '500',
        }}>
          Find trusted local tailors for custom stitching and alterations — crafted perfectly to match your style.
        </p>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          
          {/* Button 1: Solid Blue */}
          <Link to="/tailors" className="btn-primary" style={{ 
            padding: '16px 45px', 
            fontSize: '1.1rem',
            boxShadow: '0 4px 15px rgba(74, 144, 226, 0.3)' 
          }}>
            Find a Tailor
          </Link>
          
          {/* 👇 FIX 5: Changed to Blue Border/Text (visible on white bg) */}
          {/* Button 2: Solid White (High Visibility) */}
          <Link to="/register-tailor" style={{ 
            padding: '16px 45px', 
            fontSize: '1.1rem',
            textDecoration: 'none',
            
            // 👇 FIXED: Solid White Background instead of Transparent
            backgroundColor: '#FFFFFF', 
            color: '#4A90E2',           // Blue Text
            border: '2px solid #4A90E2', // Blue Border
            
            borderRadius: '4px',
            fontWeight: '600',
            fontFamily: "'Inter', sans-serif",
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)' // Soft shadow for lift
          }}
          onMouseOver={(e) => {
            // Hover: Turns Blue with White Text
            e.target.style.background = '#4A90E2'; 
            e.target.style.color = '#FFFFFF';
          }}
          onMouseOut={(e) => {
            // Normal: White with Blue Text
            e.target.style.background = '#FFFFFF';
            e.target.style.color = '#4A90E2';
          }}
          >
            Register as Tailor
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;