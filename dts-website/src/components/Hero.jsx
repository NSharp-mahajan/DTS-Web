import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-heading">WELCOME TO THE DESIGN THINKING SOCIETY</h1>
        <p className="hero-tagline">IMAGINATION – INVENTION – INNOVATION</p>
        <p className="hero-description">
          Design Thinking Society is a vibrant community dedicated to fostering creativity, 
          innovation, and problem-solving excellence. We empower minds to transform ideas into 
          impactful solutions through collaborative thinking and cutting-edge methodologies.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Explore Teams</button>
          <button className="btn-secondary">Upcoming Events</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

