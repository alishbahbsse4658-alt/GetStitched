// src/Components/Hero.jsx (UPDATED CODE WITH NEW TAGLINE)
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger fade-in animation on mount
        setIsVisible(true);
    }, []);

    const primaryButton = {
        position: 'relative',
        padding: '1rem 2rem',
        color: 'var(--color-background)',
        fontWeight: '700',
        background: 'linear-gradient(to right, var(--color-accent-gold), #FFD98A)',
        borderRadius: '0.5rem',
        overflow: 'hidden',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        transition: 'all 0.3s ease',
    };

    const secondaryButton = {
        padding: '1rem 2rem',
        color: 'var(--color-foreground)',
        fontWeight: '700',
        border: '2px solid rgba(230, 182, 92, 0.4)',
        borderRadius: '0.5rem',
        textDecoration: 'none',
        textAlign: 'center',
        transition: 'all 0.3s ease',
    };

    return (
        <section style={{ 
            position: 'relative', 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            overflow: 'hidden', 
            paddingTop: '80px',
            background: 'linear-gradient(to bottom right, #05060A, #0B1C2D, #123A5E)',
        }}>
            
            {/* Floating particles */}
            <div style={{ position: 'absolute', inset: 0 }}>
                {Array(20).fill(0).map((_, i) => (
                    <div
                        key={i}
                        style={{
                            position: 'absolute',
                            width: '4px',
                            height: '4px',
                            backgroundColor: 'var(--color-accent-gold)',
                            borderRadius: '50%',
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 2}s`,
                            opacity: 0.3 + Math.random() * 0.3,
                        }}
                    ></div>
                ))}
            </div>

            <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 1rem 5rem 1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}>
                    {/* Left Content */}
                    <div className={isVisible ? "animate-fade-in-up" : "opacity-0"} style={{ transitionDelay: '0ms' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', backgroundColor: 'rgba(18, 58, 94, 0.4)', border: '1px solid rgba(142, 197, 255, 0.3)', borderRadius: '9999px', backdropFilter: 'blur(4px)', marginBottom: '2rem' }}>
                            <Sparkles style={{ width: '1rem', height: '1rem', color: 'var(--color-accent-gold)' }} />
                            <span style={{ fontSize: '0.875rem', color: 'var(--color-accent-blue)', fontWeight: '500' }}>Premium Tailoring Services</span>
                        </div>

                        <h1 style={{ fontSize: '4.5rem', fontWeight: '700', lineHeight: '1.2', margin: '0 0 0.5rem 0' }}> {/* Reduced margin-bottom */}
                            <span className="text-white-gradient">
                                Perfect Fit,
                            </span>
                            <br />
                            <span className="text-gold-gradient">
                                Every Stitch
                            </span>
                        </h1>
                        
                        {/* New Tagline Added Here */}
                        <h2 style={{ fontSize: '2rem', fontWeight: '500', lineHeight: '1.2', margin: '0 0 2rem 0' }}>
                            <span className="text-white-gradient">Where precision, </span>
                            <span className="text-gold-gradient">Meets Perfection</span>
                        </h2>
                        {/* End New Tagline */}


                        <p style={{ fontSize: '1.25rem', color: 'var(--color-muted)', lineHeight: '1.6', maxWidth: '35rem', marginBottom: '2.5rem' }}>
                            Connect with master tailors, book appointments instantly, and experience the art of custom clothing
                            crafted just for you.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Link
                                to="/tailors"
                                style={primaryButton}
                                className="button-shine"
                                onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 0 30px rgba(230, 182, 92, 0.6)'}
                                onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
                            >
                                Find Tailors
                                <ArrowRight style={{ width: '1.25rem', height: '1.25rem', transition: 'transform 0.3s ease' }} />
                            </Link>

                            <Link
                                to="/book"
                                style={secondaryButton}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--color-accent-gold)';
                                    e.currentTarget.style.backgroundColor = 'rgba(230, 182, 92, 0.1)';
                                    e.currentTarget.style.boxShadow = '0 0 25px rgba(230, 182, 92, 0.3)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(230, 182, 92, 0.4)';
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                Book Appointment
                            </Link>
                        </div>

                        {/* Stats */}
                        <div style={{ display: 'flex', gap: '1.5rem', paddingTop: '2rem', marginTop: '2rem', borderTop: '1px solid var(--color-card-bg)' }}>
                            {[{ value: "500+", label: "Expert Tailors" }, { value: "10K+", label: "Happy Customers" }, { value: "50K+", label: "Orders Completed" }].map((stat, index) => (
                                <div
                                    key={index}
                                    style={{ textAlign: 'center', padding: '1rem', borderRadius: '0.5rem', backgroundColor: 'rgba(11, 28, 45, 0.5)', border: '1px solid rgba(18, 58, 94, 0.5)' }}
                                >
                                    <div style={{ fontSize: '1.875rem', fontWeight: '700', color: 'var(--color-accent-gold)' }}>{stat.value}</div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--color-muted)', marginTop: '0.25rem' }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Logo (Only on large screens, simplified for CSS/React structure) */}
                    <div className={isVisible ? "animate-fade-in-up" : "opacity-0"} style={{ transitionDelay: '300ms', display: 'none' }}>
                        {/* ... Logo rendering logic (omitted here as it overlaps in the Next.js version) */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;