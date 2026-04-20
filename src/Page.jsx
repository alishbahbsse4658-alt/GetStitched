// src/Page.jsx (Home Component)

import React from 'react';
import Hero from './Components/Hero'; // Assuming this is your main visual banner
import TailorsPreview from './Tailors'; // New component for tailor showcase
import ServicesPreview from './Components/ServicesPage'; // New component for services showcase
import ReviewsPreview from './Components/ReviewsPage'; // Optional: Add a reviews preview

const HomePage = () => {
    return (
        <div style={{ backgroundColor: 'var(--color-background)', minHeight: '100vh' }}>
            {/* 1. Main Banner/Hero Section */}
            <Hero /> 

            {/* 2. Tailors Preview Section */}
            {/* This section encourages users to visit the /tailors page */}
            <TailorsPreview />

            {/* 3. Services Preview Section */}
            {/* This section encourages users to visit the /services page */}
            <ServicesPreview />
            
            {/* 4. Optional: Reviews Preview */}
            <ReviewsPreview />

            {/* You can add more sections here (e.g., How It Works, CTA) */}
        </div>
    );
};

export default HomePage;