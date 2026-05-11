// src/Components/SearchBar.jsx
import React, { useState } from 'react';
import { Search, MapPin, Sliders, Star } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [rating, setRating] = useState('');

  const specialties = ["Wedding & Formal Wear", "Custom Suits & Shirts", "Traditional & Modern", "Dresses & Gowns", "Casual & Quick Alterations"];

  const handleSearch = (e) => {
    e.preventDefault();
    // Placeholder for actual filtering logic that would be passed up via props
    if (onSearch) {
      onSearch({ searchTerm, location, specialty, rating });
    }
    console.log("Searching with:", { searchTerm, location, specialty, rating });
  };

  const inputBaseStyle = {
    flexGrow: 1,
    padding: '0.75rem 1rem',
    backgroundColor: 'var(--color-secondary-bg)',
    border: '1px solid var(--color-card-bg)',
    borderRadius: '0.5rem',
    color: 'var(--color-foreground)',
    transition: 'all 0.3s ease',
  };

  const buttonStyle = {
    position: 'relative',
    padding: '0.75rem 1.5rem',
    background: 'linear-gradient(to right, var(--color-accent-gold), #FFD98A)',
    color: 'var(--color-background)',
    fontWeight: '700',
    borderRadius: '0.5rem',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
    overflow: 'hidden',
  };

  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '1.5rem', 
      borderRadius: '1rem', 
      backgroundColor: 'rgba(11, 28, 45, 0.7)',
      border: '1px solid #123A5E',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(8px)',
    }}>
      <form onSubmit={handleSearch} style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
        
        {/* Search by Name/Keyword */}
        <div style={{ flex: '2 1 200px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Search style={{ width: '1.25rem', height: '1.25rem', color: 'var(--color-accent-gold)' }} />
          <input
            type="text"
            placeholder="Search by name or keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ ...inputBaseStyle, paddingLeft: '0.5rem' }}
          />
        </div>

        {/* Location Filter */}
        <div style={{ flex: '1 1 150px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <MapPin style={{ width: '1.25rem', height: '1.25rem', color: 'var(--color-accent-gold)' }} />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={{ ...inputBaseStyle, WebkitAppearance: 'none', appearance: 'none' }}
          >
            <option value="">All Locations</option>
            <option value="Lahore">Lahore</option>
            <option value="Karachi">Karachi</option>
            <option value="Islamabad">Islamabad</option>
            {/* Add more locations */}
          </select>
        </div>

        {/* Specialty Filter */}
        <div style={{ flex: '1 1 150px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Sliders style={{ width: '1.25rem', height: '1.25rem', color: 'var(--color-accent-gold)' }} />
          <select
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            style={{ ...inputBaseStyle, WebkitAppearance: 'none', appearance: 'none' }}
          >
            <option value="">All Specialties</option>
            {specialties.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        {/* Rating Filter */}
        <div style={{ flex: '1 1 100px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Star style={{ width: '1.25rem', height: '1.25rem', color: 'var(--color-accent-gold)' }} />
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            style={{ ...inputBaseStyle, WebkitAppearance: 'none', appearance: 'none' }}
          >
            <option value="">Any Rating</option>
            <option value="4.5">4.5 & Up</option>
            <option value="4.0">4.0 & Up</option>
            <option value="3.0">3.0 & Up</option>
          </select>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          style={buttonStyle}
          className="button-shine"
          onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 0 25px rgba(230, 182, 92, 0.6)'}
          onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
        >
          <Search style={{ width: '1.25rem', height: '1.25rem' }} />
          Search
        </button>
      </form>
      
      <style jsx="true">{`
        select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23A1A7B3'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z' clip-rule='evenodd' /%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 1.25em 1.25em;
        }
      `}</style>
    </div>
  );
};

export default SearchBar;