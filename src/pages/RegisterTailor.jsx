import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterTailor = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '', 
    experience: '', 
    price: '', 
    location: '', 
    description: ''
  });

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [message, setMessage] = useState('');

  const skillOptions = [
    "Shalwar Kameez", "Kurta / Panjabi", "Saree Blouse", "Lehnga / Bridal",
    "Maxi / Gown", "Sherwani", "Pant Coat / Suits", "Abaya", "Alteration",
    "Uniforms", "Kids Wear"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSkillSelect = (e) => {
    const skill = e.target.value;
    if (skill && !selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
    e.target.value = "";
  };

  const removeSkill = (skillToRemove) => {
    setSelectedSkills(selectedSkills.filter(skill => skill !== skillToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    if (selectedSkills.length === 0) {
      setMessage("Please select at least one skill.");
      return;
    }
    if (Number(formData.price) < 700) {
      setMessage("Minimum starting price must be Rs. 700.");
      return;
    }

    try {
      // 👇 FIX IS HERE: Convert strings to numbers before sending
      const payload = {
        name: formData.name,
        location: formData.location,
        price: Number(formData.price),         // <-- CONVERT TO NUMBER
        experience: Number(formData.experience), // <-- CONVERT TO NUMBER
        description: formData.description,
        skills: selectedSkills
      };
      // 👆 END OF FIX

      await axios.post(`${import.meta.env.VITE_API_URL}/api/tailors`, payload);
      
      alert('Registration Successful! You are now listed.');
      navigate('/tailors');
    } catch (error) {
      console.error("Registration Error:", error.response?.data || error.message);
      setMessage(error.response?.data?.message || 'Registration failed. Please check inputs.');
    }
  };

  return (
    <div className="container" style={{ maxWidth: '600px', marginTop: '40px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: 'var(--primary)', fontWeight: '700' }}>
        Tailor Registration
      </h2>
      
      {message && <div className="error-msg">{message}</div>}
      
      <form className="card" onSubmit={handleSubmit} style={{ padding: '30px' }}>
        
        <div style={{ marginBottom: '15px' }}>
            <label>Full Name</label>
            <input type="text" name="name" className="form-control" required onChange={handleChange} />
        </div>

        <div style={{ marginBottom: '15px' }}>
            <label>City / Location</label>
            <input type="text" name="location" className="form-control" required onChange={handleChange} />
        </div>

        <div style={{ marginBottom: '20px' }}>
            <label>Skills (Select to Add)</label>
            <select className="form-control" onChange={handleSkillSelect} defaultValue="">
                <option value="" disabled>-- Select a Skill --</option>
                {skillOptions.map((skill, index) => <option key={index} value={skill}>{skill}</option>)}
            </select>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '10px' }}>
                {selectedSkills.map((skill, index) => (
                    <span key={index} style={{ background: '#F5F5F0', padding: '5px 12px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {skill}
                        <button type="button" onClick={() => removeSkill(skill)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#B85C5C', fontWeight: 'bold' }}>×</button>
                    </span>
                ))}
            </div>
        </div>

        <div style={{ display: 'flex', gap: '15px' }}>
            <div style={{ flex: 1, marginBottom: '15px' }}>
                <label>Experience (Years)</label>
                <input type="number" name="experience" className="form-control" min="0" required onChange={handleChange} />
            </div>
            <div style={{ flex: 1, marginBottom: '15px' }}>
                <label>Starting Price (Rs)</label>
                <input type="number" name="price" className="form-control" min="700" placeholder="Min 700" required onChange={handleChange} />
            </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
            <label>About Your Services</label>
            <textarea name="description" rows="3" className="form-control" placeholder="Briefly describe your expertise..." onChange={handleChange}></textarea>
        </div>
        
        <button type="submit" className="btn-primary" style={{ width: '100%' }}>Register Now</button>
      </form>
    </div>
  );
};

export default RegisterTailor;