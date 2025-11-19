import React from 'react'
import '../styles/Heads.css'
import pranjalImg from '../assets/Pranjal.jpg'
import natanshImg from '../assets/natansh.png'
import kashviImg from '../assets/kashvi.jpg'
import vihanImg from '../assets/vihan.jpg'
import dikshaImg from '../assets/Diksha.jpg'
import smarthImg from '../assets/smarth.jpg'

const heads = [
  {
    role: 'Organizing Head',
    name: 'Pranjal Raheja',
    image: pranjalImg,
    linkedin: '#'
  },
  {
    role: 'Technical Head',
    name: 'Natansh Mahajan',
    image: natanshImg,
    linkedin: '#'
  },
  {
    role: 'Content Head',
    name: 'Kashvi Soni',
    image: kashviImg,
    linkedin: '#'
  },
  {
    role: 'Outreach Sponsors Head',
    name: 'Vihan Gossain',
    image: vihanImg,
    linkedin: '#'
  },
  {
    role: 'Outreach Promotion Head',
    name: 'Diksha Aggarwal',
    image: dikshaImg,
    linkedin: '#'
  },
  {
    role: 'Social Media Head',
    name: 'Vanshika',
    image: 'https://via.placeholder.com/400x450?text=Vanshika',
    linkedin: '#'
  },
  {
    role: 'Graphics Head',
    name: 'Smarth Aneja',
    image: smarthImg,
    position: 'center 15%',
    linkedin: '#'
  }
]

const Heads = () => {
  return (
    <section className="heads-section">
      <div className="heads-container">
        <div className="heads-header">
          <h2 className="heads-title">Guiding the Future of DTS</h2>
          <p className="heads-subtitle">
            A team of dedicated leaders shaping direction, strengthening culture, and enabling transformative ideas.
          </p>
        </div>
        <div className="heads-grid">
          {heads.map((head, index) => (
            <article
              className={`head-card ${index === 2 ? 'head-card-center' : ''}`}
              key={head.name}
              style={{ animationDelay: `${0.15 + index * 0.12}s` }}
            >
              <div className="head-frame">
                <div
                  className="head-image"
                  style={{
                    backgroundImage: `url(${head.image})`,
                    backgroundPosition: head.position || 'center'
                  }}
                />
              </div>
              <h3 className="head-role">{head.role}</h3>
              <p className="head-name">{head.name}</p>
              <a href={head.linkedin} aria-label={`${head.name} LinkedIn`} className="head-link">
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

export default Heads

