import React from 'react'
import '../styles/PostersCarousel.css'

const PosterModal = ({ poster, onClose }) => {
  if (!poster) return null

  const handleBackdropClick = (event) => {
    if (event.target.dataset.modal === 'backdrop') {
      onClose?.()
    }
  }

  return (
    <div
      className="poster-modal"
      data-modal="backdrop"
      role="dialog"
      aria-label="Poster preview"
      aria-modal="true"
      onClick={handleBackdropClick}
    >
      <div className="poster-modal__glow" aria-hidden="true" />
      <div className="poster-modal__content">
        <button className="poster-modal__close" type="button" onClick={onClose} aria-label="Close preview">
          <span />
          <span />
        </button>
        <img src={poster} alt="Poster fullscreen preview" loading="lazy" />
      </div>
    </div>
  )
}

export default PosterModal

