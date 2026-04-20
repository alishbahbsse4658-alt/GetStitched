// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import TailorList from './pages/TailorList';
import TailorDetails from './pages/TailorDetails';
import RegisterTailor from './pages/RegisterTailor.jsx';
import RegisterCustomer from './pages/RegisterCustomer';
import Booking from './pages/Booking';
import ComingSoon from './pages/ComingSoon'; 
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
       <ScrollToTop />
      <div className="app-container">
        <NavBar />
        
        {/* 👇 UPDATED: Removed inline styles. CSS handles the height now. */}
        <main> 
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Other Pages wrapped in container */}
            <Route path="/about" element={<div className="container"><About /></div>} />
            <Route path="/tailors" element={<div className="container"><TailorList /></div>} />
            <Route path="/tailors/:id" element={<div className="container"><TailorDetails /></div>} />
            <Route path="/register-tailor" element={<div className="container"><RegisterTailor /></div>} />
            <Route path="/register-customer" element={<div className="container"><RegisterCustomer /></div>} />
            <Route path="/book/:id" element={<div className="container"><Booking /></div>} />
            <Route path="/contact" element={<div className="container"><ComingSoon /></div>} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;