import React from 'react';
import '../styles/Teams.css';
import gurvinderImg from '../assets/glimpse/Gurvinder.png';
import rajGourangImg from '../assets/glimpse/Raj_Gourang.png';
import CoreTeam from '../components/CoreTeam';
import Heads from '../components/Heads';

const Teams = () => {
  // Pillars/Faculty Data
  const pillars = [
    {
      name: "Gurvinder Singh",
      role: "Associate Prof. & DTS Lead",
      image: gurvinderImg,
      linkedin: "https://www.linkedin.com/in/dr-gurvinder-singh-ab8b7929/"
    },
    {
      name: "Dr. Raj Gaurang Tiwari",
      role: "Prof. & Dean, CSE",
      image: rajGourangImg,
      linkedin: "https://www.linkedin.com/in/dr-raj-gaurang-tiwari-b5097216/"
    }
  ];

  return (
    <div className="teams-page">
      <section className="teams-hero">
        <div className="teams-container">
          <h1 className="teams-hero-heading">Pillars of DTS</h1>
          <h2 className="teams-hero-subheading">
            Meet the mentors, pillars, and innovators who guide our vision.
          </h2>
          <p className="teams-hero-description">
            At the Design Thinking Society, our strength lies in creativity, empathy, and innovation. 
            Each pillar represents a core value — problem-solving, collaboration, and human-centered design. 
            Together, we're shaping the future of thoughtful and meaningful experiences.
          </p>
        </div>
      </section>

      {/* Pillars / Faculty Section */}
      <section className="teams-pillars">
        <div className="teams-container">
          <div className="pillars-grid">
            {pillars.map((pillar, index) => (
              <div 
                key={index} 
                className="pillar-card"
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                <div className="pillar-polygon-frame">
                  <div className="polygon-glow"></div>
                  <div className="polygon-outline"></div>
                  <img 
                    src={pillar.image} 
                    alt={pillar.name}
                    className="pillar-image"
                  />
                </div>
                <h3 className="pillar-name">{pillar.name}</h3>
                <p className="pillar-role">{pillar.role}</p>
                <a 
                  href={pillar.linkedin} 
                  className="pillar-linkedin"
                  aria-label={`${pillar.name} LinkedIn`}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CoreTeam />
      <Heads />
    </div>
  );
};

export default Teams;
