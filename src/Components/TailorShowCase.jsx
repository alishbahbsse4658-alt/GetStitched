// src/Components/TailorShowcase.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, ArrowRight } from 'lucide-react';

const TailorShowcase = () => {
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

    const element = document.getElementById('tailors-showcase');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    }
  }, []);

  const tailors = [
    {
      id: 1,
      name: "Ahmed Tailoring",
      specialty: "Wedding & Formal Wear",
      location: "Lahore, Pakistan",
      rating: 4.9,
      reviews: 152,
      experience: "15 years",
      image: "/assets/professional-tailor-shop.jpg", // Path changed to match directory structure
    },
    {
      id: 2,
      name: "Elite Stitching",
      specialty: "Custom Suits & Shirts",
      location: "Karachi, Pakistan",
      rating: 4.8,
      reviews: 203,
      experience: "12 years",
      image: "/assets/elegant-tailoring-studio.jpg",
    },
    {
      id: 3,
      name: "Royal Alterations",
      specialty: "Traditional & Modern",
      location: "Islamabad, Pakistan",
      rating: 4.9,
      reviews: 178,
      experience: "20 years",
      image: "/assets/luxury-tailor-workshop.jpg",
    },
  ];

  const cardBaseStyle = {
    position: 'relative',
    backgroundColor: 'rgba(18, 58, 94, 0.5)',
    border: '1px solid var(--color-card-bg)',
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
    zIndex: 1,
    borderRadius: '1rem',
    overflow: 'hidden',
  };

  const imageContainerStyle = {
    position: 'relative',
    height: '256px',
    overflow: 'hidden',
  };

  const ctaButtonStyle = {
    display: 'inline-flex', 
    alignItems: 'center', 
    gap: '0.5rem', 
    padding: '1rem 2rem', 
    color: 'var(--color-foreground)', 
    fontWeight: '700', 
    border: '2px solid rgba(230, 182, 92, 0.4)', 
    borderRadius: '0.5rem', 
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  };

  return (
    <section id="tailors-showcase" style={{ position: 'relative', padding: '5rem 0', overflow: 'hidden' }}>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <div className={isVisible ? "animate-fade-in-up" : "opacity-0"} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>
            <span className="text-gold-gradient">Featured Tailors</span>
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-muted)', maxWidth: '42rem', margin: '0 auto' }}>Meet our master craftsmen with years of expertise</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          {tailors.map((tailor, index) => {
            const [isHovered, setIsHovered] = useState(false);

            return (
              <Link
                key={tailor.id}
                to={`/tailors/${tailor.id}`}
                className={`section-outline ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ ...cardBaseStyle, animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div style={imageContainerStyle}>
                  <img
                    src={tailor.image}
                    alt={tailor.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease', transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11, 28, 45, 0.6), transparent)', opacity: 0.6 }}></div>
                </div>

                <div style={{ padding: '1.5rem', spaceY: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: isHovered ? 'var(--color-accent-gold)' : 'var(--color-foreground)', marginBottom: '0.5rem', transition: 'color 0.3s ease' }}>
                      {tailor.name}
                    </h3>
                    <p style={{ color: 'var(--color-accent-blue)', fontWeight: '500' }}>{tailor.specialty}</p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-muted)', marginTop: '0.5rem' }}>
                    <MapPin style={{ width: '1rem', height: '1rem' }} />
                    <span style={{ fontSize: '0.875rem' }}>{tailor.location}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', marginTop: '1rem', borderTop: '1px solid var(--color-card-bg)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Star style={{ width: '1rem', height: '1rem', fill: 'var(--color-accent-gold)', color: 'var(--color-accent-gold)' }} />
                        <span style={{ color: 'var(--color-foreground)', fontWeight: '700' }}>{tailor.rating}</span>
                      </div>
                      <span style={{ color: 'var(--color-muted)', fontSize: '0.875rem' }}>({tailor.reviews} reviews)</span>
                    </div>
                    <ArrowRight style={{ width: '1.25rem', height: '1.25rem', color: 'var(--color-accent-gold)', transition: 'transform 0.3s ease', transform: isHovered ? 'translateX(8px)' : 'translateX(0)' }} />
                  </div>

                  <div style={{ paddingTop: '0.5rem' }}>
                    <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', fontSize: '0.75rem', fontWeight: '500', color: 'var(--color-accent-gold)', backgroundColor: 'rgba(230, 182, 92, 0.1)', border: '1px solid rgba(230, 182, 92, 0.3)', borderRadius: '9999px' }}>
                      {tailor.experience} experience
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link
            to="/tailors"
            style={ctaButtonStyle}
            onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-accent-gold)';
                e.currentTarget.style.backgroundColor = 'rgba(230, 182, 92, 0.1)';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(230, 182, 92, 0.4)';
                e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(230, 182, 92, 0.4)';
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            View All Tailors
            <ArrowRight style={{ width: '1.25rem', height: '1.25rem' }} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TailorShowcase;