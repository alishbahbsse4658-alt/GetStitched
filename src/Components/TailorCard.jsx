import React from 'react';
import { Link } from 'react-router-dom';

const TailorCard = ({ tailor }) => {
  // Generate a random-looking avatar based on the name using UI Avatars API
  // This ensures every tailor gets a picture without needing image uploads
  // 👇 UPDATED COLORS: Blue Text on Light Blue Background
const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(tailor.name)}&background=EBF5FF&color=4A90E2&size=200&font-size=0.35&bold=true`;

  return (
    <div className="card" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100%', // Forces full height of grid cell
      padding: '0',   // Remove default padding to let image sit flush if desired
      overflow: 'hidden'
    }}>
      
      {/* 1. Image Section */}
      <div style={{ 
        width: '100%', 
        height: '200px', 
        backgroundColor: '#f9f9f9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid #eee'
      }}>
        <img 
          src={avatarUrl} 
          alt={tailor.name} 
          style={{ 
            width: '120px', 
            height: '120px', 
            borderRadius: '50%', 
            objectFit: 'cover',
            border: '4px solid #fff',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
          }} 
        />
      </div>

      {/* 2. Content Section */}
      <div style={{ 
        padding: '20px', 
        flex: 1, // Pushes button to bottom
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <h3 style={{ 
            margin: '0 0 5px 0', 
            color: 'var(--text-main)', 
            fontSize: '1.25rem' 
        }}>
            {tailor.name}
        </h3>
        
        <p style={{ 
            color: 'var(--text-muted)', 
            fontSize: '0.9rem', 
            marginBottom: '15px',
            fontWeight: '500'
        }}>
            📍 {tailor.location}
        </p>
        
        {/* Skills Tags */}
        <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '8px', 
            marginBottom: '20px' 
        }}>
          {tailor.skills.slice(0, 3).map((skill, index) => (
            <span key={index} style={{ 
              backgroundColor: '#F5F5F0', 
              color: '#555',
              padding: '4px 10px', 
              borderRadius: '20px', 
              fontSize: '0.75rem',
              border: '1px solid #E5E0DA'
            }}>
              {skill}
            </span>
          ))}
          {tailor.skills.length > 3 && (
            <span style={{ fontSize: '0.75rem', color: '#888', alignSelf: 'center' }}>
                +{tailor.skills.length - 3} more
            </span>
          )}
        </div>

        {/* Price Tag */}
        <div style={{ marginTop: 'auto', marginBottom: '20px' }}>
             <p style={{ fontSize: '0.9rem', color: '#888', marginBottom: '2px' }}>Starting from</p>
             <h4 style={{ color: 'var(--primary)', fontSize: '1.2rem', margin: 0 }}>
                Rs. {tailor.price}
             </h4>
        </div>

        {/* Button */}
        <Link to={`/tailors/${tailor._id}`} className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default TailorCard;