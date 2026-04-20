// src/Components/Testimonials.jsx
import React, { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
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

    const element = document.getElementById('testimonials');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    }
  }, []);

  const testimonials = [
    {
      name: 'Fatima Khan',
      role: 'Wedding Client',
      content: 'GetStitched helped me find the perfect tailor for my wedding dress. The booking process was seamless and the results were absolutely stunning!',
      rating: 5,
      avatar: '/assets/woman-portrait.png',
    },
    {
      name: 'Ali Raza',
      role: 'Business Professional',
      content: 'I use GetStitched for all my business suits. The quality is exceptional and the online tracking feature keeps me updated every step of the way.',
      rating: 5,
      avatar: '/assets/thoughtful-man-portrait.png',
    },
    {
      name: 'Sara Ahmed',
      role: 'Fashion Designer',
      content: 'As a designer, I need reliable tailors. GetStitched connects me with skilled professionals who understand my vision perfectly.',
      rating: 5,
      avatar: '/assets/professional-woman-diverse.png',
    },
  ];

  const cardBaseStyle = {
    padding: '2rem',
    borderRadius: '1rem',
    backgroundColor: 'rgba(18, 58, 94, 0.5)',
    border: '1px solid var(--color-card-bg)',
    position: 'relative',
    zIndex: 1,
    cursor: 'pointer',
  };
  
  const renderStars = (rating) => (
    <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem' }}>
      {[...Array(rating)].map((_, i) => (
        <Star
          key={i}
          style={{
            width: '1.25rem',
            height: '1.25rem',
            fill: 'var(--color-accent-gold)',
            color: 'var(--color-accent-gold)',
            transition: 'all 0.3s ease',
            animation: `sparkle ${1 + i * 0.2}s ease-in-out infinite`,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
  );


  return (
    <section id="testimonials" style={{ 
        position: 'relative', 
        padding: '5rem 0', 
        overflow: 'hidden', 
        background: 'linear-gradient(to bottom, #05060A, #0B1C2D, #05060A)'
    }}>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <div className={isVisible ? "animate-fade-in-up" : "opacity-0"} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>
            <span className="text-gold-gradient">Client Stories</span>
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-muted)', maxWidth: '42rem', margin: '0 auto' }}>Hear from our satisfied customers</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {testimonials.map((testimonial, index) => {
            const [isHovered, setIsHovered] = useState(false);

            return (
              <div
                key={index}
                className={`section-outline ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ ...cardBaseStyle, animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: 'rgba(230, 182, 92, 0.2)' }}>
                  <Quote style={{ width: '3rem', height: '3rem' }} />
                </div>

                {renderStars(testimonial.rating)}

                <p style={{ color: 'var(--color-foreground)', lineHeight: '1.6', marginBottom: '1.5rem', position: 'relative', zIndex: 10 }}>
                  "{testimonial.content}"
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-card-bg)' }}>
                  <div style={{ position: 'relative', width: '3rem', height: '3rem', borderRadius: '50%', overflow: 'hidden', border: `2px solid ${isHovered ? 'var(--color-accent-gold)' : 'rgba(230, 182, 92, 0.3)'}`, transition: 'border-color 0.3s ease' }}>
                    <img src={testimonial.avatar} alt={testimonial.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <div style={{ color: 'var(--color-foreground)', fontWeight: '700' }}>{testimonial.name}</div>
                    <div style={{ color: 'var(--color-muted)', fontSize: '0.875rem' }}>{testimonial.role}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;