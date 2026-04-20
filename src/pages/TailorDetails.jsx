import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const TailorDetails = () => {
  const { id } = useParams();
  const [tailor, setTailor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTailor = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/tailors/${id}`);
        setTailor(res.data);
        setLoading(false);
      } catch (err) {
        setError('Could not fetch tailor details.');
        setLoading(false);
      }
    };
    fetchTailor();
  }, [id]);

  if (loading) return <div style={{textAlign: 'center', marginTop: '50px'}}>Loading Profile...</div>;
  if (error) return <div className="error-msg">{error}</div>;
  if (!tailor) return <div>Tailor not found</div>;

  // Generate the same Avatar as the list page
  // 👇 UPDATED COLORS: Blue Text on Light Blue Background
const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(tailor.name)}&background=EBF5FF&color=4A90E2&size=300&font-size=0.35&bold=true`;

  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', padding: '0 20px' }}>
      
      {/* Back Button */}
      <Link to="/tailors" style={{ textDecoration: 'none', color: '#666', marginBottom: '20px', display: 'inline-block' }}>
        &larr; Back to Tailors
      </Link>

      <div className="card" style={{ 
        display: 'flex', 
        flexDirection: 'row', // Side by side layout
        flexWrap: 'wrap',     // Wraps on mobile
        padding: '0',         // Remove default padding to control layout manually
        overflow: 'hidden'
      }}>
        
        {/* LEFT COLUMN: Profile Info */}
        <div style={{ 
          flex: '1', 
          minWidth: '300px', 
          backgroundColor: '#FAFAFA', 
          padding: '40px 30px', 
          borderRight: '1px solid #eee',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img 
            src={avatarUrl} 
            alt={tailor.name} 
            style={{ 
              width: '150px', 
              height: '150px', 
              borderRadius: '50%', 
              border: '4px solid #fff',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              marginBottom: '20px'
            }} 
          />
          
          <h2 style={{ color: 'var(--text-main)', margin: '0 0 10px 0' }}>{tailor.name}</h2>
          
          <p style={{ color: 'var(--text-muted)', marginBottom: '5px' }}>
             📍 {tailor.location}
          </p>

          <div style={{ 
            background: '#fff', 
            padding: '8px 15px', 
            borderRadius: '20px', 
            border: '1px solid #eee',
            marginTop: '15px',
            fontSize: '0.9rem',
            color: '#555'
          }}>
            ✂️ <strong>{tailor.experience} Years</strong> Experience
          </div>

          <div style={{ marginTop: '30px', width: '100%' }}>
            <p style={{ fontSize: '0.9rem', color: '#888', marginBottom: '5px' }}>Starting Price</p>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.8rem', margin: '0' }}>
              Rs. {tailor.price}
            </h3>
          </div>
        </div>

        {/* RIGHT COLUMN: Details & Action */}
        <div style={{ flex: '1.5', padding: '40px', minWidth: '300px' }}>
          
          <h3 style={{ borderBottom: '2px solid var(--border-soft)', paddingBottom: '10px', marginBottom: '15px', color: 'var(--text-main)' }}>
            About the Tailor
          </h3>
          <p style={{ lineHeight: '1.7', color: '#555', marginBottom: '30px' }}>
            {tailor.description || "This tailor has not provided a detailed description yet."}
          </p>

          <h3 style={{ borderBottom: '2px solid var(--border-soft)', paddingBottom: '10px', marginBottom: '15px', color: 'var(--text-main)' }}>
            Specializations
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
              {tailor.skills.map((s, index) => (
                <span key={index} style={{ 
                  background: 'var(--bg-body)', 
                  padding: '8px 15px', 
                  borderRadius: '6px', 
                  color: 'var(--text-main)',
                  fontSize: '0.9rem',
                  border: '1px solid #E5E0DA'
                }}>
                  {s}
                </span>
              ))}
          </div>

          {/* NEW BUTTON NAME */}
          <Link 
            to={`/book/${id}`} 
            className="btn-primary" 
            style={{ 
              display: 'block', 
              textAlign: 'center', 
              padding: '16px', 
              fontSize: '1.1rem',
              width: '100%' 
            }}
          >
            Request Service
          </Link>
          <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#999', marginTop: '10px' }}>
            No payment required until you confirm the order.
          </p>
        </div>

      </div>
    </div>
  );
};

export default TailorDetails;