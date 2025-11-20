import React from 'react'
import '../styles/NoLiveEvents.css'

const highlights = [
  {
    label: 'Next drop',
    detail: 'Final touches underway. Watch this space.',
    accent: 'Coming soon'
  },
  {
    label: 'Announcements',
    detail: 'Instagram • LinkedIn • Campus boards',
    accent: '@designthinkingsociety'
  },
  {
    label: 'Need info?',
    detail: 'Reach us via the contact page or talk to the core team.',
    accent: 'We reply fast'
  }
]

const NoLiveEvents = () => {
  return (
    <section className="no-live-events">
      <div className="nle-card">
        <p className="nle-eyebrow">
          <span className="nle-status-dot" aria-hidden="true" />
          Live events offline
        </p>

        <h2 className="nle-title">We&apos;re preparing the next experience</h2>
        <p className="nle-summary">
          There isn&apos;t a live session right now, but the team is actively curating the next DTS
          experience. Browse previous highlights or stay connected for the announcement.
        </p>

        <div className="nle-grid">
          {highlights.map((item) => (
            <article key={item.label} className="nle-grid-item">
              <p className="nle-grid-label">{item.label}</p>
              <p className="nle-grid-detail">{item.detail}</p>
              <span className="nle-grid-accent">{item.accent}</span>
            </article>
          ))}
        </div>

        <div className="nle-footer">
          <div className="nle-footer-status">
            <span className="nle-footer-pulse" aria-hidden="true" />
            Next announcement drops shortly
          </div>
          <a href="#previous-events" className="nle-footer-link">
            Browse previous events
          </a>
        </div>
      </div>
    </section>
  )
}

export default NoLiveEvents

