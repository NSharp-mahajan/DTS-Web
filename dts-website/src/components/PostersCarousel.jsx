import React, { useMemo, useState, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import PosterModal from './PosterModal'
import '../styles/PostersCarousel.css'

const PostersCarousel = ({ posters = [] }) => {
  const premiumDeck = useMemo(() => {
    if (!posters.length) return posters
    return posters.length < 6 ? [...posters, ...posters] : posters
  }, [posters])

  const [selectedPoster, setSelectedPoster] = useState(null)
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      align: 'start',
      skipSnaps: false,
      duration: 30
    },
    [AutoScroll({ speed: 1.6, stopOnInteraction: false, stopOnMouseEnter: true })]
  )

  const toggleAutoScroll = useCallback(
    (shouldPlay) => {
      const autoScroll = emblaApi?.plugins()?.autoScroll
      if (!autoScroll) return
      if (shouldPlay) {
        autoScroll.play()
      } else {
        autoScroll.stop()
      }
    },
    [emblaApi]
  )

  const handlePosterClick = (poster) => {
    setSelectedPoster(poster)
    toggleAutoScroll(false)
  }

  const closeModal = () => {
    setSelectedPoster(null)
    toggleAutoScroll(true)
  }

  return (
    <section className="posters-carousel" aria-label="Premium Posters">
      <div className="posters-carousel__backdrop" aria-hidden="true" />
      <div className="posters-carousel__particles" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, idx) => (
          <span
            key={idx}
            className="posters-carousel__particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${10 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      <div className="posters-carousel__header">
        <p className="posters-carousel__eyebrow">Signature Moments</p>
        <h2 className="posters-carousel__title">Premium Posters Gallery</h2>
        <p className="posters-carousel__subtitle">
          A cinematic strip of our most loved showcases, rendered with a futuristic DTS sheen.
        </p>
      </div>

      <div
        className="embla"
        ref={emblaRef}
        onMouseEnter={() => toggleAutoScroll(false)}
        onMouseLeave={() => toggleAutoScroll(true)}
      >
        <div className="embla__gradient embla__gradient--left" aria-hidden="true" />
        <div className="embla__gradient embla__gradient--right" aria-hidden="true" />

        <div className="embla__container">
          {premiumDeck.map((poster, index) => (
            <div className="embla__slide" key={`${poster}-${index}`}>
              <button
                type="button"
                className="poster-card"
                onClick={() => handlePosterClick(poster)}
              >
                <div className="poster-card__glow" />
                <img src={poster} alt={`DTS premium poster ${index + 1}`} loading="lazy" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <PosterModal poster={selectedPoster} onClose={closeModal} />
    </section>
  )
}

export default PostersCarousel

