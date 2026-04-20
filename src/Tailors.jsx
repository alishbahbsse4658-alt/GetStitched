// src/Tailors.jsx
import React, { useState, useEffect } from 'react';
import SearchBar from './Components/SearchBar';
import TailorCard from './Components/TailorCard';

const TailorsPage = () => {
  const [tailors, setTailors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/tailors")
      .then(res => res.json())
      .then(data => setTailors(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <section style={{ position: 'relative', padding: '10rem 0 5rem 0', minHeight: '100vh', backgroundColor: 'var(--color-background)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '2rem', textAlign: 'center' }}>
          <span className="text-gold-gradient">Find Your Perfect Tailor</span>
        </h1>
        
        <SearchBar />

        <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {tailors.map((tailor) => (
            <TailorCard key={tailor._id} tailor={tailor} />
          ))}
        </div>

        {tailors.length === 0 && (
          <p style={{ textAlign: 'center', color: 'var(--color-muted)', marginTop: '3rem', fontSize: '1.25rem' }}>No tailors found.</p>
        )}
      </div>
    </section>
  );
};

export default TailorsPage;
