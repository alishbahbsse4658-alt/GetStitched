// src/Components/Features.jsx
import React, { useState } from 'react'; // <--- Ensure useState is imported
import { Shirt, Ruler, Truck, Zap } from 'lucide-react';

// Reusable component for each feature card
const FeatureCard = ({ icon: Icon, title, description }) => {
    // State to track hover status
    const [isHovered, setIsHovered] = useState(false); // <--- useState for hover effect

    const cardStyle = {
        padding: '2rem',
        borderRadius: '1rem',
        backgroundColor: 'rgba(18, 58, 94, 0.5)',
        border: '1px solid var(--color-card-bg)',
        // Apply conditional box shadow based on hover state
        boxShadow: isHovered 
            ? '0 15px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(230, 182, 92, 0.4)'
            : '0 5px 15px rgba(0, 0, 0, 0.3)',
        // Smooth cubic-bezier transition for professional feel
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)', 
        // Move the card up by 8px on hover
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)', 
        cursor: 'pointer',
        height: '100%', // Ensure cards in the grid are the same height
        display: 'flex',
        flexDirection: 'column',
    };

    const iconBoxStyle = {
        display: 'inline-flex',
        padding: '1rem',
        borderRadius: '0.75rem',
        backgroundColor: 'rgba(230, 182, 92, 0.15)',
        marginBottom: '1.5rem',
        border: '1px solid rgba(230, 182, 92, 0.3)',
        transition: 'all 0.3s ease',
        color: 'var(--color-accent-gold)',
    };

    return (
        <div 
            style={cardStyle} 
            className="feature-card-outline"
            onMouseEnter={() => setIsHovered(true)} // Handle mouse enter
            onMouseLeave={() => setIsHovered(false)} // Handle mouse leave
        >
            <div style={iconBoxStyle}>
                <Icon style={{ width: '2rem', height: '2rem' }} />
            </div>
            
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-foreground)', marginBottom: '0.75rem' }}>
                {title}
            </h3>
            
            <p style={{ color: 'var(--color-muted)', lineHeight: '1.6' }}>
                {description}
            </p>
        </div>
    );
};

const featuresData = [
    {
        icon: Shirt,
        title: 'Custom Fabric Selection',
        description: 'Choose from hundreds of premium fabrics, from local cottons to imported silks, perfectly matched to your design specifications.',
    },
    {
        icon: Ruler,
        title: 'Digital Measurement & Fit',
        description: 'Use our AI-assisted tool or book a precise in-person measurement session for a guaranteed perfect fit, every single time.',
    },
    {
        icon: Truck,
        title: 'Doorstep Pickup & Delivery',
        description: 'Enjoy the ultimate convenience with free pickup of measurements and final delivery of your garment right to your home.',
    },
    {
        icon: Zap,
        title: 'Fast Track Alterations',
        description: 'Need a quick fix? Our network of tailors offers urgent alteration services with guaranteed turnaround times for your peace of mind.',
    },
];

const Features = () => {
    return (
        <section style={{ 
            position: 'relative', 
            padding: '5rem 0', 
            backgroundColor: 'var(--color-secondary-bg)' 
        }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
                
                <p style={{ fontSize: '1rem', color: 'var(--color-accent-gold)', fontWeight: '600', marginBottom: '0.5rem' }}>
                    THE GETSTITCHED ADVANTAGE
                </p>
                <h2 style={{ 
                    fontSize: '2.5rem', 
                    fontWeight: '700', 
                    marginBottom: '3rem', 
                    color: 'var(--color-foreground)' 
                }}>
                    Why Choose Our Service?
                </h2>

                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                    gap: '2rem' 
                }}>
                    {featuresData.map((feature, index) => (
                        <FeatureCard 
                            key={index} 
                            icon={feature.icon} 
                            title={feature.title} 
                            description={feature.description} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;