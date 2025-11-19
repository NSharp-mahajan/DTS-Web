import React, { useEffect } from 'react'
import '../styles/ProjectModal.css'

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  if (!project) return null

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Blurred Background Image */}
        <div 
          className="modal-background-blur"
          style={{ backgroundImage: `url(${project.image})` }}
        />

        {/* Depth Glow Layers */}
        <div className="modal-depth-glow" />
        <div className="modal-depth-glow-secondary" />

        {/* Close Button */}
        <button className="modal-close-button" onClick={onClose} aria-label="Close modal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Modal Content */}
        <div className="modal-content">
          <div className="modal-content-inner">
            <h1 className="modal-title">{project.title}</h1>
            
            <p className="modal-description">{project.description}</p>

            <div className="modal-team-section">
              <div className="modal-team-label">Team</div>
              <div className="modal-team-name">{project.team}</div>
            </div>

            {project.members && project.members.length > 0 && (
              <div className="modal-members-section">
                <div className="modal-members-label">Team Members</div>
                <div className="modal-members-grid">
                  {project.members.map((member, index) => (
                    <div key={index} className="modal-member-avatar">
                      <img src={member} alt={`Team member ${index + 1}`} />
                      <div className="member-avatar-glow" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-visit-button"
            >
              <span>Visit Live Project</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
