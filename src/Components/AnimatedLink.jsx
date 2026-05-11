// src/Components/AnimatedLink.jsx (NEW FILE)
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AnimatedLink = ({ path, label }) => {
    const location = useLocation();
    const isActive = location.pathname === path;

    // --- BASE LINK STYLES ---
    const linkContainerStyle = {
        position: 'relative',
        textDecoration: 'none',
        padding: '0.75rem 1rem',
        fontSize: '1.05rem',
        fontWeight: isActive ? '800' : '500',
        color: isActive ? 'var(--color-accent-gold)' : 'var(--color-foreground)',
        transition: 'color 0.3s ease, transform 0.3s ease',
        display: 'inline-block',
        boxSizing: 'border-box',
    };

    // --- ANIMATED UNDERLINE STYLES ---
    const underlineStyle = {
        position: 'absolute',
        bottom: '0',
        left: '50%', // Start from the middle for a balanced look, or '0' for pure left-to-right
        height: '3px',
        backgroundColor: 'var(--color-accent-gold)',
        // The key to the animation: the width transitions
        width: isActive ? '100%' : '0', 
        transform: 'translateX(-50%)', // Pull back to center if starting from 50%
        transition: 'width 0.6s cubic-bezier(0.23, 1, 0.32, 1)', // Smooth animation timing
    };

    // --- HOVER EFFECT STYLES (for INACTIVE links) ---
    const handleMouseOver = (e) => {
        if (!isActive) {
            e.currentTarget.style.color = 'var(--color-accent-gold)';
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.01)';
            
            // Highlight the underline on hover
            const underline = e.currentTarget.querySelector('.nav-underline');
            if (underline) {
                underline.style.width = '100%';
                underline.style.backgroundColor = 'var(--color-accent-gold)';
            }
        }
    };

    const handleMouseOut = (e) => {
        if (!isActive) {
            e.currentTarget.style.color = 'var(--color-foreground)';
            e.currentTarget.style.transform = 'translateY(0) scale(1)';

            // Hide the underline on mouse out
            const underline = e.currentTarget.querySelector('.nav-underline');
            if (underline) {
                underline.style.width = '0';
            }
        }
    };

    return (
        <Link
            to={path}
            style={linkContainerStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            {label}
            {/* The element that creates the animated underline */}
            <span 
                className="nav-underline"
                style={underlineStyle} 
            />
        </Link>
    );
};

export default AnimatedLink;