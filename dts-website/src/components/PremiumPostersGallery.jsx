import React, { useMemo } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoscroll from 'embla-carousel-auto-scroll'
import '../styles/PremiumPostersGallery.css'

const loadPosterImages = () => {
  const modules = import.meta.glob(
    '../assets/otherPosters/*.{png,jpg,jpeg,JPG,JPEG,webp,avif}',
    {
      eager: true,
      import: 'default'
    }
  )

  return Object.keys(modules)
    .sort()
    .map((key) => modules[key])
}

const posterImages = loadPosterImages()

const PremiumPostersGallery = () => {
  const posters = useMemo(() => posterImages, [])
  const particleSeeds = useMemo(
    () =>
      Array.from({ length: 12 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${6 + Math.random() * 10}px`,
        delay: `${Math.random() * 4}s`,
        duration: `${10 + Math.random() * 6}s`
      })),
    []
  )

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      containScroll: 'trimSnaps',
      dragFree: true
    },
    [
      Autoscroll({
        speed: 1.5,
        delay: 0,
        playOnInit: true,
        stopOnMouseEnter: true,
        stopOnInteraction: false
      })
    ]
  )

  if (!posters.length) {
    return null
  }

  return (
    <section className="premium-posters-section">
      <div className="ppg-ambient-glow" />
      <div className="ppg-floating-particles">
        {particleSeeds.map((particle, index) => (
          <span
            key={`particle-${index}`}
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDelay: particle.delay,
              animationDuration: particle.duration
            }}
          />
        ))}
      </div>

      <div className="ppg-shell">
        <div className="ppg-header">
          <p className="ppg-eyebrow">Design Thinking Society</p>
          <h2>Previous Event Poster Gallery</h2>
          <p>
            Relive the flagship DTS experiences through archived posters from our most
            loved sessions, showcases, and hackathons.
          </p>
        </div>

        <div className="ppg-carousel" ref={emblaRef}>
          <div className="ppg-track">
            {posters.map((poster, index) => (
              <div className="ppg-slide" key={poster + index}>
                <div className="ppg-card">
                  <img src={poster} alt={`DTS poster ${index + 1}`} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PremiumPostersGallery

