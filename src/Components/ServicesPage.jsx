// src/Components/Features.jsx
import React, { useEffect, useState } from 'react';
import { Search, Calendar, MapPin, CreditCard, Package, Star } from 'lucide-react';

const Features = () => {
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

    const element = document.getElementById('features');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    }
  }, []);

  const features = [
    {
      icon: Search,
      title: 'Find Expert Tailors',
      description: 'Search by location, expertise, and ratings to find the perfect tailor for your needs.',
      color: 'linear-gradient(to bottom right, #E6B65C, #FFD98A)',
    },
    {
      icon: Calendar,
      title: 'Easy Booking',
      description: 'Book appointments instantly with real-time availability and automated confirmations.',
      color: 'linear-gradient(to bottom right, #8EC5FF, #123A5E)',
    },
    {
      icon: MapPin,
      title: 'Location Tracking',
      description: 'Discover nearby tailors with integrated maps and detailed location information.',
      color: 'linear-gradient(to bottom right, #E6B65C, #8EC5FF)',
    },
    {
      icon: Package,
      title: 'Order Tracking',
      description: 'Track your orders in real-time from measurement to final delivery with live updates.',
      color: 'linear-gradient(to bottom right, #FFD98A, #E6B65C)',
    },
    {
      icon: CreditCard,
      title: 'Secure Payments',
      description: 'Multiple payment options including Easypaisa, JazzCash, and bank transfers.',
      color: 'linear-gradient(to bottom right, #123A5E, #8EC5FF)',
    },
    {
      icon: Star,
      title: 'Reviews & Ratings',
      description: 'Read authentic reviews and ratings from verified customers to make informed decisions.',
      color: 'linear-gradient(to bottom right, #E6B65C, #FFD98A)',
    },
  ];

  const cardBaseStyle = {
    padding: '2rem',
    borderRadius: '1rem',
    backgroundColor: 'rgba(18, 58, 94, 0.5)',
    border: '1px solid var(--color-card-bg)',
    backdropFilter: 'blur(4px)',
    position: 'relative',
    zIndex: 1,
    cursor: 'pointer',
  };

  const iconContainerStyle = (color) => ({
    display: 'inline-flex',
    padding: '1rem',
    borderRadius: '0.75rem',
    background: color,
    marginBottom: '1.5rem',
    transition: 'all 0.5s ease',
  });

  return (
    <section id="features" style={{ 
        position: 'relative', 
        padding: '5rem 0', 
        overflow: 'hidden', 
        background: 'linear-gradient(to bottom, #05060A, #0B1C2D, #05060A)' 
    }}>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <div className={isVisible ? "animate-fade-in-up" : "opacity-0"} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>
            <span className="text-gold-gradient">Everything You Need</span>
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-muted)', maxWidth: '42rem', margin: '0 auto' }}>
            A complete platform designed for seamless tailoring experiences
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            // Local state to manage individual hover effects
            const [isHovered, setIsHovered] = useState(false);

            return (
              <div
                key={index}
                id={`feature-${index}`}
                className={`section-outline ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ ...cardBaseStyle, animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div style={{ position: 'relative', zIndex: 10 }}>
                  <div 
                    style={{ ...iconContainerStyle(feature.color), transform: isHovered ? 'scale(1.1)' : 'scale(1)', boxShadow: isHovered ? '0 0 30px rgba(230, 182, 92, 0.4)' : 'none' }}
                  >
                    <Icon style={{ width: '1.5rem', height: '1.5rem', color: 'var(--color-background)' }} />
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: isHovered ? 'var(--color-accent-gold)' : 'var(--color-foreground)', marginBottom: '0.75rem', transition: 'color 0.3s ease' }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: 'var(--color-muted)', lineHeight: '1.6' }}>{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;