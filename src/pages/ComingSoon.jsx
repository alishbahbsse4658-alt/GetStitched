import React from 'react';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '60vh', 
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ 
        fontSize: '4rem', 
        color: 'var(--primary)', 
        marginBottom: '10px',
        fontWeight: 'bold'
      }}>
        Coming Soon
      </h1>
      <p style={{ 
        fontSize: '1.2rem', 
        color: 'var(--text-muted)', 
        marginBottom: '30px',
        maxWidth: '500px'
      }}>
        We are working to bring you this feature. Stay tuned for updates!
      </p>
      
      <Link to="/" className="btn-primary">
        Return Home
      </Link>
    </div>
  );
};

export default ComingSoon;