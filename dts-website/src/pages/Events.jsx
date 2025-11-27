import React, { useState, useEffect, useRef } from 'react'
import NoLiveEvents from '../components/NoLiveEvents'
import PremiumPostersGallery from '../components/PremiumPostersGallery'
import '../styles/Events.css'
import acePoster from '../assets/posters/ACE.jpg'
import fusionPoster from '../assets/posters/Fusion.jpg'
import glimpse1 from '../assets/glimpse/glimpse-1.jpg'
import glimpse2 from '../assets/glimpse/glimpse-2.jpg'
import glimpse3 from '../assets/glimpse/glimpse-3.jpg'
import glimpse4 from '../assets/glimpse/glimpse-4.jpg'
import glimpse5 from '../assets/glimpse/glimpse-5.jpg'
import glimpse6 from '../assets/glimpse/glimpse-6.jpg'

const Events = () => {
  // Previous events data
  const previousEvents = [
    {
      id: 1,
      title: 'ACE: Student of the Year',
      description: 'A dynamic two-day event celebrating talent, creativity, and overall excellence among students. Participants competed through multiple rounds testing academic abilities, leadership, teamwork, and problem-solving skills. The event created an energetic atmosphere where students showcased their best, leaving everyone with memorable experiences and a sense of achievement.',
      coverImage: acePoster,
      gallery: [
        glimpse1,
        glimpse2,
        glimpse3,
        glimpse4,
        glimpse5,
        glimpse6
      ]
    },
    {
      id: 2,
      title: 'FusionFest',
      description: 'A 36-hour hackathon where ideas ignite and innovation flourishes. This grand Web3 & MERN Stack hackathon brought together talented developers to unleash their potential through concept design and development rounds. Participants competed for cash prizes worth ₹20,000, internship opportunities, and exciting rewards while building cutting-edge solutions.',
      coverImage: fusionPoster,
      gallery: [
        glimpse1,
        glimpse2,
        glimpse3,
        glimpse4,
        glimpse5,
        glimpse6
      ]
    }
  ]

  return (
    <div className="events-page">
      <NoLiveEvents />
      <PreviousEventsSection events={previousEvents} />
      <PremiumPostersGallery />
    </div>
  )
}

const PreviousEventsSection = ({ events }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="previous-events"
      ref={sectionRef}
      className={`previous-events-section ${isVisible ? 'visible' : ''}`}
    >
      {/* Floating Particles Background */}
      <div className="pe-particles">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="pe-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${10 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Ambient Glow */}
      <div className="pe-ambient-glow" />

      <div className="pe-container">
        {/* Section Header */}
        <div className="pe-header">
          <h2 className="pe-title">Previous Events</h2>
          <p className="pe-subtitle">
            A look back at the moments, experiences, and ideas we've shared together.
          </p>
        </div>

        {/* Events Timeline */}
        <div className="pe-events-timeline">
          {events.map((event, index) => (
            <EventBlock key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

const EventBlock = ({ event, index }) => {
  const [isVisible, setIsVisible] = useState(false)
  const blockRef = useRef(null)

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

    if (blockRef.current) {
      observer.observe(blockRef.current)
    }

    return () => {
      if (blockRef.current) {
        observer.unobserve(blockRef.current)
      }
    }
  }, [])

  return (
    <article
      ref={blockRef}
      className={`pe-event-block ${isVisible ? 'visible' : ''}`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Event Title */}
      <h3 className="pe-event-title">{event.title}</h3>

      {/* Main Content Layout */}
      <div className="pe-event-content">
        {/* Poster Image - 30% (40% for first event) */}
        <div className={`pe-poster-wrapper ${index === 0 ? 'pe-poster-large' : ''}`}>
          <div className="pe-cover-image-wrapper">
            <img
              src={event.coverImage}
              alt={event.title}
              className="pe-cover-image"
            />
            <div className="pe-image-glow" />
          </div>
        </div>

        {/* Right Side - 70% */}
        <div className="pe-right-content">
          {/* Description */}
          <div className="pe-description-wrapper">
            <p className="pe-description">{event.description}</p>
          </div>

          {/* Gallery Carousel */}
          <EventCarousel images={event.gallery} />
        </div>
      </div>
    </article>
  )
}

const EventCarousel = ({ images }) => {
  const carouselRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    // Auto-scroll functionality
    const autoScroll = setInterval(() => {
      if (!isDragging) {
        setCurrentIndex((prev) => {
          const next = prev + 1 >= images.length ? 0 : prev + 1
          carousel.scrollTo({
            left: next * (carousel.offsetWidth / 3),
            behavior: 'smooth'
          })
          return next
        })
      }
    }, 4000)

    return () => clearInterval(autoScroll)
  }, [images.length, isDragging])

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - carouselRef.current.offsetLeft
    const walk = (x - startX) * 2
    carouselRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handlePrev = () => {
    const carousel = carouselRef.current
    if (!carousel) return
    const newIndex = currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    carousel.scrollTo({
      left: newIndex * (carousel.offsetWidth / 3),
      behavior: 'smooth'
    })
  }

  const handleNext = () => {
    const carousel = carouselRef.current
    if (!carousel) return
    const newIndex = currentIndex + 1 >= images.length ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    carousel.scrollTo({
      left: newIndex * (carousel.offsetWidth / 3),
      behavior: 'smooth'
    })
  }

  return (
    <div className="pe-carousel-container">
      <button className="pe-carousel-btn pe-carousel-btn--prev" onClick={handlePrev} aria-label="Previous">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <div
        className="pe-carousel"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="pe-carousel-track">
          {images.map((image, index) => (
            <div key={index} className="pe-carousel-item">
              <img src={image} alt={`Gallery ${index + 1}`} />
              <div className="pe-carousel-item-glow" />
            </div>
          ))}
        </div>
      </div>

      <button className="pe-carousel-btn pe-carousel-btn--next" onClick={handleNext} aria-label="Next">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  )
}

export default Events
