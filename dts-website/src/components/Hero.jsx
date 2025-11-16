import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const [showTagline, setShowTagline] = useState(false);
  const tagline = 'IMAGINATION – INVENTION – INNOVATION';
  const [displayedTagline, setDisplayedTagline] = useState('');

  useEffect(() => {
    // Start tagline animation after heading appears
    const timer = setTimeout(() => {
      setShowTagline(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showTagline) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < tagline.length) {
        setDisplayedTagline(tagline.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [showTagline, tagline]);

  return (
    <section className="hero">
      {/* Animated Background Particles */}
      <div className="particles">
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
      </div>

      {/* Gradient Overlay Layer */}
      <div className="gradient-layer"></div>

      {/* Vignette Effect */}
      <div className="vignette"></div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-heading">
          <span className="shimmer-text">WELCOME TO THE DESIGN THINKING SOCIETY</span>
        </h1>
        
        <p className="hero-tagline">
          {displayedTagline}
          <span className="cursor">|</span>
        </p>
        
        <p className="hero-description">
          Design Thinking Society fosters creativity, innovation, and collaborative problem-solving. 
          We empower students to transform ideas into impactful solutions using design thinking methodologies.
        </p>
        
        <div className="hero-buttons">
          <button className="btn-primary">Explore Teams</button>
          <button className="btn-secondary">Upcoming Events</button>
        </div>
      </div>

      {/* Floating Scroll Arrow */}
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
