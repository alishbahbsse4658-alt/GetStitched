// src/Components/TailorProfile.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const TailorProfile = () => {
    const { id } = useParams(); // Get the ID from the URL

    return (
        <div style={{ position: 'relative', padding: '10rem 1rem 5rem 1rem', minHeight: '100vh', backgroundColor: 'var(--color-background)', color: 'var(--color-foreground)' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--color-accent-gold)' }}>
                    Tailor Profile
                </h1>
                <p style={{ fontSize: '1.5rem', color: 'var(--color-muted)', marginTop: '1rem' }}>
                    Viewing profile for Tailor ID: <span style={{ color: 'var(--color-accent-blue)' }}>{id}</span>
                </p>
                <div style={{ padding: '2rem', marginTop: '2rem', borderRadius: '0.5rem', backgroundColor: 'var(--color-secondary-bg)', border: '1px solid var(--color-card-bg)' }}>
                    <p>This page will contain detailed information, portfolio, and a booking form for the selected tailor.</p>
                </div>
            </div>
        </div>
    );
};

export default TailorProfile;