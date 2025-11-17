import React, { useEffect, useRef, useState } from 'react';
import '../styles/FloatingGallery.css';

// Import gallery images
import glimpse1 from '../assets/glimpse/glimpse-1.jpg';
import glimpse2 from '../assets/glimpse/glimpse-2.jpg';
import glimpse3 from '../assets/glimpse/glimpse-3.jpg';
import glimpse4 from '../assets/glimpse/glimpse-4.jpg';
import glimpse5 from '../assets/glimpse/glimpse-5.jpg';
import glimpse6 from '../assets/glimpse/glimpse-6.jpg';
import glimpse7 from '../assets/glimpse/glimpse-7.jpg';

const FloatingGallery = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const cardRefs = useRef([]);

  // Intersection Observer to trigger animation when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
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

  // 3D tilt effect for individual cards
  const handleCardMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.setProperty('--mouse-x', rotateY);
    card.style.setProperty('--mouse-y', rotateX);
  };

  const handleCardMouseLeave = (index) => {
    const card = cardRefs.current[index];
    if (card) {
      card.style.setProperty('--mouse-x', 0);
      card.style.setProperty('--mouse-y', 0);
    }
  };

  // Gallery images
  const images = [
    { id: 1, src: glimpse1, alt: 'DTS Event 1', delay: 0 },
    { id: 2, src: glimpse2, alt: 'DTS Workshop', delay: 0.2 },
    { id: 3, src: glimpse3, alt: 'DTS Team Collaboration', delay: 0.4 },
    { id: 4, src: glimpse4, alt: 'DTS Innovation Session', delay: 0.6 },
    { id: 5, src: glimpse5, alt: 'DTS Creative Challenge', delay: 0.8 },
    { id: 6, src: glimpse6, alt: 'DTS Community Event', delay: 1.0 },
    { id: 7, src: glimpse7, alt: 'DTS Design Sprint', delay: 1.2 }
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <section 
      className="floating-gallery" 
      ref={sectionRef}
      data-visible={isVisible}
    >
      {/* Background Particles */}
      <div className="gallery-particles">
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
      </div>

      {/* Ambient Glow */}
      <div className="ambient-glow"></div>

      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="gallery-heading">
            A Glimpse of <span className="highlight">Design Thinking Society</span>
          </h2>
          <p className="gallery-subtext">
            A curated collection of moments that reflect our energy, innovation, and collaborative spirit — 
            captured through experiences, creativity, and community.
          </p>
        </div>

        <div className="gallery-scroll-container">
          <div 
            className="gallery-track"
            ref={trackRef}
          >
            {duplicatedImages.map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className="floating-card"
                ref={(el) => {
                  if (index < images.length) {
                    cardRefs.current[index] = el;
                  }
                }}
                onMouseMove={(e) => {
                  const actualIndex = index % images.length;
                  handleCardMouseMove(e, actualIndex);
                }}
                onMouseLeave={() => {
                  const actualIndex = index % images.length;
                  handleCardMouseLeave(actualIndex);
                }}
                style={{
                  '--float-delay': `${(index % images.length) * 0.2}s`,
                  '--mouse-x': 0,
                  '--mouse-y': 0
                }}
              >
                <div className="card-image-wrapper">
                  <img src={image.src} alt={image.alt} className="gallery-image" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloatingGallery;
