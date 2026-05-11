// src/Login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Lock, ArrowRight } from 'lucide-react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, this is where you'd call your authentication API
        console.log('Login attempt:', { email, password });
        alert('Login functionality is not implemented in this front-end component.');
    };

    const inputContainerStyle = {
        position: 'relative',
        marginBottom: '1.5rem',
        display: 'flex',
        alignItems: 'center',
    };

    const iconStyle = {
        position: 'absolute',
        left: '1rem',
        width: '1.25rem',
        height: '1.25rem',
        color: 'var(--color-muted)',
        zIndex: 10,
    };

    const inputBaseStyle = {
        width: '100%',
        padding: '1rem 1rem 1rem 3rem',
        backgroundColor: 'var(--color-secondary-bg)',
        border: '1px solid var(--color-card-bg)',
        borderRadius: '0.5rem',
        color: 'var(--color-foreground)',
        transition: 'all 0.3s ease',
        fontSize: '1rem',
    };

    const submitButtonStyle = {
        position: 'relative',
        width: '100%',
        padding: '1rem',
        background: 'linear-gradient(to right, var(--color-accent-gold), #FFD98A)',
        color: 'var(--color-background)',
        fontWeight: '700',
        borderRadius: '0.5rem',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        cursor: 'pointer',
        overflow: 'hidden',
        border: 'none',
        fontSize: '1.125rem',
    };

    return (
        <section style={{ 
            position: 'relative', 
            minHeight: '100vh', 
            padding: '10rem 1rem 5rem 1rem',
            backgroundColor: 'var(--color-background)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div 
                className="animate-fade-in-up section-outline"
                style={{
                    maxWidth: '400px',
                    width: '100%',
                    padding: '3rem 2rem',
                    borderRadius: '1rem',
                    backgroundColor: 'rgba(11, 28, 45, 0.9)',
                    border: '1px solid #123A5E',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                }}
            >
                <h2 style={{ 
                    fontSize: '2rem', 
                    fontWeight: '700', 
                    marginBottom: '0.5rem', 
                    textAlign: 'center' 
                }}>
                    <span className="text-gold-gradient">Welcome Back</span>
                </h2>
                <p style={{ 
                    color: 'var(--color-muted)', 
                    textAlign: 'center', 
                    marginBottom: '2rem' 
                }}>
                    Sign in to access your custom tailoring dashboard.
                </p>

                <form onSubmit={handleSubmit}>
                    {/* Email Input */}
                    <div style={inputContainerStyle}>
                        <User style={iconStyle} />
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={inputBaseStyle}
                            className="form-input-glow"
                        />
                    </div>

                    {/* Password Input */}
                    <div style={inputContainerStyle}>
                        <Lock style={iconStyle} />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={inputBaseStyle}
                            className="form-input-glow"
                        />
                    </div>

                    {/* Forgot Password */}
                    <div style={{ textAlign: 'right', marginBottom: '1.5rem' }}>
                        <Link 
                            to="/forgot-password" 
                            style={{ 
                                color: 'var(--color-accent-blue)', 
                                textDecoration: 'none', 
                                fontSize: '0.875rem', 
                                transition: 'color 0.3s ease' 
                            }}
                            onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-accent-gold)'}
                            onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-accent-blue)'}
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        style={submitButtonStyle}
                        className="button-shine"
                        onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 0 30px rgba(230, 182, 92, 0.6)'}
                        onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
                    >
                        Login
                        <ArrowRight style={{ width: '1.25rem', height: '1.25rem' }} />
                    </button>
                </form>

                {/* Register Link */}
                <p style={{ textAlign: 'center', color: 'var(--color-muted)', marginTop: '2rem' }}>
                    Don't have an account?{' '}
                    <Link 
                        to="/register" 
                        style={{ 
                            color: 'var(--color-accent-gold)', 
                            fontWeight: '600', 
                            textDecoration: 'none', 
                            transition: 'color 0.3s ease' 
                        }}
                        onMouseOver={(e) => e.currentTarget.style.color = '#FFD98A'}
                        onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-accent-gold)'}
                    >
                        Register Now
                    </Link>
                </p>
            </div>
            
            <style jsx="true">{`
                .form-input-glow:focus {
                    outline: none;
                    border-color: var(--color-accent-gold);
                    box-shadow: 0 0 10px rgba(230, 182, 92, 0.5);
                }
            `}</style>
        </section>
    );
};

export default LoginPage;