import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TailorCard from '../Components/TailorCard';

const TailorList = () => {
  const [tailors, setTailors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [filterSkill, setFilterSkill] = useState('');

  useEffect(() => {
    const fetchTailors = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/tailors`);
        setTailors(Array.isArray(res.data) ? res.data : []);
        setLoading(false);
      } catch (err) {
        setError('Failed to load tailors. Make sure backend is running.');
        setLoading(false);
      }
    };
    fetchTailors();
  }, []);

  const filteredTailors = tailors.filter(tailor => 
    tailor.name.toLowerCase().includes(search.toLowerCase()) &&
    (filterSkill === '' || tailor.skills.some(skill => skill.toLowerCase().includes(filterSkill.toLowerCase())))
  );

  if (loading) return <div className="loading">Loading Tailors...</div>;
  if (error) return <div className="error-msg">{error}</div>;

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: 'var(--primary)', fontWeight: '700' }}>
        Find Your Perfect Tailor
      </h2>
      
      {/* Search & Filter Section */}
      <div className="card" style={{ 
        marginBottom: '40px', 
        display: 'flex', 
        gap: '15px', 
        flexWrap: 'wrap',
        alignItems: 'center',
        padding: '20px'
      }}>
        <div style={{ flex: 1, minWidth: '250px' }}>
            <input 
            type="text" 
            placeholder="Search by name..." 
            className="form-control"
            style={{ marginBottom: 0 }}
            onChange={(e) => setSearch(e.target.value)}
            />
        </div>
        
        <div style={{ flex: 1, minWidth: '250px' }}>
            <select className="form-control" style={{ marginBottom: 0 }} onChange={(e) => setFilterSkill(e.target.value)}>
            <option value="">All Skills</option>
            <option value="Shalwar Kameez">Shalwar Kameez</option>
            <option value="Kurta">Kurta / Panjabi</option>
            <option value="Saree">Saree Blouse</option>
            <option value="Lehnga">Lehnga / Bridal</option>
            <option value="Maxi">Maxi / Gown</option>
            <option value="Sherwani">Sherwani</option>
            <option value="Suits">Pant Coat / Suits</option>
            <option value="Abaya">Abaya</option>
            <option value="Alteration">Alterations</option>
            </select>
        </div>
      </div>

      {/* Tailor Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '30px',
        alignItems: 'stretch' // Ensures all cards stretch to same height
      }}>
        {filteredTailors.length > 0 ? (
          filteredTailors.map(tailor => (
            <TailorCard key={tailor._id} tailor={tailor} />
          ))
        ) : (
          <p style={{ textAlign: 'center', width: '100%', fontSize: '1.2rem', color: '#888' }}>
            No tailors found matching your criteria.
          </p>
        )}
      </div>
    </div>
  );
};

export default TailorList;