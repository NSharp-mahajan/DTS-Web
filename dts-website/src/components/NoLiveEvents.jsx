import React, { useRef } from 'react'
import '../styles/NoLiveEvents.css'

const floatingDots = Array.from({ length: 8 })
const holographicOrbs = Array.from({ length: 3 })

const NoLiveEvents = () => {
  const cardRef = useRef(null)

  const handleMouseMove = (event) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const offsetX = event.clientX - rect.left - rect.width / 2
    const offsetY = event.clientY - rect.top - rect.height / 2
    cardRef.current.style.setProperty('--tilt-x', `${-(offsetY / rect.height) * 6}deg`)
    cardRef.current.style.setProperty('--tilt-y', `${(offsetX / rect.width) * 6}deg`)
    cardRef.current.style.setProperty('--glare-x', `${(offsetX / rect.width) * 30}px`)
    cardRef.current.style.setProperty('--glare-y', `${(offsetY / rect.height) * 30}px`)
  }

  const resetTilt = () => {
    if (!cardRef.current) return
    cardRef.current.style.setProperty('--tilt-x', '0deg')
    cardRef.current.style.setProperty('--tilt-y', '0deg')
    cardRef.current.style.setProperty('--glare-x', '0px')
    cardRef.current.style.setProperty('--glare-y', '0px')
  }

  return (
    <section className="no-live-events">
      <div
        className="nle-card"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
      >
        <div className="nle-space-gradient" />
        <div className="nle-scan-wave" />
        <div className="nle-glass-highlight" />
        <div className="nle-glass-reflection nle-glass-reflection--top" />
        <div className="nle-glass-reflection nle-glass-reflection--bottom" />
        <div className="nle-grid-overlay" />
        <div className="nle-circuit-overlay" />
        <div className="nle-ring nle-ring--left" />
        <div className="nle-ring nle-ring--right" />
        <div className="nle-orbit nle-orbit--top" />
        <div className="nle-orbit nle-orbit--bottom" />
        <div className="nle-border-streak" />
        {floatingDots.map((_, index) => (
          <span key={`dot-${index}`} className={`nle-dot nle-dot-${index + 1}`} />
        ))}
        {holographicOrbs.map((_, index) => (
          <span key={`orb-${index}`} className={`nle-orb nle-orb-${index + 1}`} />
        ))}

        <div className="nle-content">
          <p className="nle-latest-badge">LIVE FEED • DTS</p>
          <h2 className="nle-heading">
            <span>No Live Events</span>
            <span className="nle-caret">▋</span>
          </h2>
          <p className="nle-subheading">
            Stay tuned for our upcoming events! Meanwhile, explore our past events to see what we’ve been
            working on.
          </p>
          <div className="nle-divider" />
          <div className="nle-status-pulse">
            <span className="nle-pulse-dot" />
            <span className="nle-status-text">Signal awaiting next transmission</span>
          </div>
          <div className="nle-transmission-tagline">
            • SIGNAL AWAITING NEXT TRANSMISSION •
          </div>
          <div className="nle-soundwave">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </section>
  )
}

export default NoLiveEvents

