// src/Components/CTA.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('cta');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    }
  }, []);

  const sectionStyle = {
    position: 'relative',
    padding: '5rem 0',
    overflow: 'hidden',
    backgroundColor: '#0B1C2D',
    background: 'linear-gradient(to bottom right, #0B1C2D, #123A5E, #0B1C2D)',
  };

  const primaryButton = {
    position: 'relative',
    padding: '1.25rem 2.5rem',
    color: 'var(--color-background)',
    fontWeight: '700',
    fontSize: '1.125rem',
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
    padding: '1.25rem 2.5rem',
    color: 'var(--color-foreground)',
    fontWeight: '700',
    fontSize: '1.125rem',
    border: '2px solid rgba(230, 182, 92, 0.4)',
    borderRadius: '0.5rem',
    textDecoration: 'none',
    textAlign: 'center',
    transition: 'all 0.3s ease',
  };

  return (
    <section id="cta" style={sectionStyle}>
      {/* Animated particles */}
      <div style={{ position: 'absolute', inset: 0 }}>
        {Array(30).fill(0).map((_, i) => (
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
              opacity: 0.2 + Math.random() * 0.3,
            }}
          ></div>
        ))}
      </div>

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '960px', margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
        <div className={isVisible ? "animate-fade-in-up" : "opacity-0"}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', backgroundColor: 'rgba(230, 182, 92, 0.1)', border: '1px solid rgba(230, 182, 92, 0.3)', borderRadius: '9999px', backdropFilter: 'blur(4px)', marginBottom: '2rem', transition: 'all 0.3s ease' }}>
            <Sparkles style={{ width: '1rem', height: '1rem', color: 'var(--color-accent-gold)' }} />
            <span style={{ fontSize: '0.875rem', color: 'var(--color-accent-gold)', fontWeight: '500' }}>Start Your Journey</span>
          </div>

          <h2 style={{ fontSize: '3.75rem', fontWeight: '700', lineHeight: '1.2', marginBottom: '1.5rem' }}>
            <span className="text-white-gradient">
              Ready to Get
            </span>
            <br />
            <span className="text-gold-gradient">
              Perfectly Stitched?
            </span>
          </h2>

          <p style={{ fontSize: '1.25rem', color: 'var(--color-muted)', maxWidth: '42rem', margin: '0 auto 2.5rem auto', lineHeight: '1.6' }}>
            Join thousands of satisfied customers who trust GetStitched for their custom tailoring needs. Book your
            first appointment today and experience the difference.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link
              to="/register"
              style={primaryButton}
              className="button-shine"
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 0 40px rgba(230, 182, 92, 0.6)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Create Account
              <ArrowRight style={{ width: '1.25rem', height: '1.25rem', transition: 'transform 0.3s ease' }} />
            </Link>

            <Link
              to="/tailors"
              style={secondaryButton}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-accent-gold)';
                e.currentTarget.style.backgroundColor = 'rgba(230, 182, 92, 0.1)';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(230, 182, 92, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(230, 182, 92, 0.4)';
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Browse Tailors
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;