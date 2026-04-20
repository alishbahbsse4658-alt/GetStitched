import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterCustomer = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', location: '' });
  const [message, setMessage] = useState(null);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setIsError(false);

    try {
      const res = await axios.post('http://localhost:5000/api/users', formData);
      localStorage.setItem('userId', res.data._id);
      localStorage.setItem('userName', res.data.name);
      
      setIsError(false);
      setMessage(`Welcome ${res.data.name}! Redirecting...`);
      
      setTimeout(() => {
        navigate('/tailors');
      }, 1500);

    } catch (error) {
      setIsError(true);
      setMessage(error.response?.data?.message || 'Registration failed. Please check your connection.');
    }
  };

  return (
    // 👇 FIX: Removed 'container' class and 'marginTop'. 
    // Now it uses only the parent spacing, which removes the huge gap.
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '20px', // Reduced bottom margin
        color: 'var(--primary)', 
        fontWeight: '700' 
      }}>
        Customer Sign Up
      </h2>
      
      {message && (
        <div style={{
          padding: '15px',
          borderRadius: '6px',
          marginBottom: '20px',
          backgroundColor: isError ? '#FFBABA' : '#DFF2BF',
          color: isError ? '#D8000C' : '#270',
          textAlign: 'center',
          fontWeight: '500'
        }}>
          {message}
        </div>
      )}
      
      <form className="card" onSubmit={handleSubmit} style={{ padding: '30px' }}>
        
        <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#666', fontSize: '0.9rem' }}>Full Name</label>
            <input 
              type="text" 
              name="name" 
              className="form-control" 
              placeholder="e.g. Sarah Khan"
              required 
              onChange={handleChange} 
            />
        </div>

        <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#666', fontSize: '0.9rem' }}>Email Address</label>
            <input 
              type="email" 
              name="email" 
              className="form-control" 
              placeholder="name@example.com"
              required 
              onChange={handleChange} 
            />
        </div>

        <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#666', fontSize: '0.9rem' }}>Phone Number</label>
            <input 
              type="tel" 
              name="phone" 
              className="form-control" 
              placeholder="0300-1234567"
              onChange={handleChange} 
            />
        </div>

        <div style={{ marginBottom: '25px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#666', fontSize: '0.9rem' }}>City / Location</label>
            <input 
              type="text" 
              name="location" 
              className="form-control" 
              placeholder="e.g. Lahore"
              required 
              onChange={handleChange} 
            />
        </div>
        
        <button type="submit" className="btn-primary" style={{ width: '100%', fontSize: '1rem', padding: '12px' }}>
          Create Account
        </button>
      </form>
    </div>
  );
};

export default RegisterCustomer;