import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Booking = () => {
  const { id } = useParams(); // Tailor ID
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  
  // 👇 FIX: Use a ref to track if the alert has already been shown
  const alertShown = useRef(false); 

  const [formData, setFormData] = useState({
    stitchingType: '',
    deliveryDate: '',
    notes: ''
  });

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    
    if (!userId) {
      // 👇 FIX: Only show alert if it hasn't been shown yet
      if (!alertShown.current) {
        alert("Please register as a customer before booking!");
        alertShown.current = true; // Mark as shown
        navigate('/register-customer');
      }
    } else {
      setCurrentUser(userId);
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const bookingData = {
        customer: currentUser,
        tailor: id,
        ...formData
      };

      await axios.post('http://localhost:5000/api/bookings', bookingData);
      alert("Request Sent Successfully!");
      navigate('/tailors');
    } catch (error) {
      alert("Booking failed. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="container" style={{ maxWidth: '600px', marginTop: '40px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: 'var(--primary)', fontWeight: '700' }}>
        Request Service
      </h2>
      
      <form className="card" onSubmit={handleSubmit} style={{ padding: '30px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Type of Service</label>
          <select name="stitchingType" className="form-control" required onChange={handleChange}>
            <option value="">Select Type</option>
            <option value="Suit">Suit / Pant Coat</option>
            <option value="Shalwar Kameez">Shalwar Kameez</option>
            <option value="Kurta">Kurta</option>
            <option value="Alteration">Alteration / Repair</option>
            <option value="Bridal">Bridal / Fancy Wear</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Required Delivery Date</label>
          <input type="date" name="deliveryDate" className="form-control" required onChange={handleChange} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Measurements / Notes</label>
          <textarea 
            name="notes" 
            rows="4" 
            className="form-control" 
            placeholder="Enter your measurements or describe specific requirements..." 
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="btn-primary" style={{ width: '100%', fontSize: '1.1rem' }}>
          Confirm Request
        </button>
      </form>
    </div>
  );
};

export default Booking;