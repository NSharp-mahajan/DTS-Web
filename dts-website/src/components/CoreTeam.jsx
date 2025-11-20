import React from 'react'
import '../styles/CoreTeam.css'
import coreOne from '../assets/dikshit.jpg'
import coreTwo from '../assets/bhavya.jpg'
import coreThree from '../assets/krish.jpg'

const coreTeam = [
  {
    name: 'Dikshit Garg',
    role: 'Core Team Member',
    image: coreOne,
    linkedin: 'https://www.linkedin.com/in/dikshit-garg-0a6702331/'
  },
  {
    name: 'Bhavya Kakkar',
    role: 'Core Team Member',
    image: coreTwo,
    linkedin: 'https://www.linkedin.com/in/bhavya-kakkar-07a703338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  },
  {
    name: 'Krish Kakar',
    role: 'Core Team Member',
    image: coreThree,
    linkedin: '#'
  }
]

const CoreTeam = () => {
  return (
    <section className="core-team">
      <div className="core-team-container">
        <div className="core-team-header">
          <h2 className="core-team-title">Our Core Team</h2>
          <span className="core-team-underline" />
          <p className="core-team-subtitle">
            The passionate individuals who drive creativity, innovation, and execution at DTS.
          </p>
        </div>

        <div className="core-team-row">
          {coreTeam.map((member, index) => (
            <article
              className="core-team-card"
              key={member.name}
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="core-team-portrait">
                <div className="core-team-portrait-glow" />
                <div className="core-team-portrait-outline" />
                <img src={member.image} alt={member.name} className="core-team-portrait-img" />
              </div>
              <h3 className="core-team-name">{member.name}</h3>
              <p className="core-team-role">{member.role}</p>
              <a href={member.linkedin} className="core-team-link" aria-label={`${member.name} LinkedIn`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreTeam

