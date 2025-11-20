import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Projects.css'
import ProjectModal from '../components/ProjectModal'
import cyberCopImage from '../assets/Projects/CyberCop.png'
import blueGuardImage from '../assets/Projects/BlueGuard.jpg'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  // Project data
  const projects = [
    {
      id: 1,
      title: 'CyberCop',
      description: 'Complete cybersecurity protection suite with AI-powered threat detection, incident reporting, and community-driven security solutions.',
      team: 'Natansh Mahajan',
      image: cyberCopImage,
      liveLink: 'https://cybercop-safe-space.vercel.app/',
      linkedinLink: 'https://www.linkedin.com/in/natansh-mahajan-287b19316/',
      githubLink: 'https://github.com/NSharp-mahajan/cybercop-safe-space',
      members: []
    },
    {
      id: 2,
      title: 'BlueGuard',
      description: 'A flood monitoring software and Early warning platform.',
      team: 'Dikshit Garg',
      image: blueGuardImage,
      liveLink: null,
      linkedinLink: 'https://www.linkedin.com/in/dikshit-garg-0a6702331/',
      members: []
    }
  ]

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-main">OUR PROJECTS</span>
          </h1>
          <p className="hero-subtitle">
            Showcasing innovative solutions crafted by the talented members of DTS.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid-section">
        <div className="projects-grid-container">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <CTASection />

      {/* Full-Screen Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}

const CTASection = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="projects-cta-section">
      {/* Background Particles */}
      <div className="cta-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="cta-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Gradient Glow Background */}
      <div className="cta-gradient-bg" />

      {/* Content */}
      <div className={`cta-content ${isVisible ? 'visible' : ''}`}>
        <h2 className="cta-title">
          More Drops Coming Soon.
        </h2>
        <p className="cta-subtitle">
          If you want to build with us or pitch something exciting, reach out via our Contact Form.
        </p>
        <Link to="/contact" className="cta-button">
          <span>Contact Us</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  )
}

const ProjectCard = ({ project, index, onClick }) => {
  return (
    <article
      className="project-card"
      onClick={onClick}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image Section - 70% */}
      <div className="card-image-section">
        <img 
          src={project.image}
          alt={project.title}
          className="card-image"
        />
      </div>

      {/* Info Section - 30% */}
      <div className="card-info-section">
        <h3 className="card-title">{project.title.toUpperCase()}</h3>
        <p className="card-description">{project.description}</p>
        <div className="card-team">
          <span className="made-by-label">Made By</span>
          <span className="team-name">{project.team}</span>
        </div>
        
        {/* Links at Bottom Left */}
        <div className="card-links">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
              onClick={(e) => e.stopPropagation()}
              aria-label={`Visit ${project.title} live project`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
          {project.linkedinLink && (
            <a
              href={project.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link linkedin"
              onClick={(e) => e.stopPropagation()}
              aria-label={`View ${project.title} on LinkedIn`}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link github"
              onClick={(e) => e.stopPropagation()}
              aria-label={`View ${project.title} on GitHub`}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default Projects
