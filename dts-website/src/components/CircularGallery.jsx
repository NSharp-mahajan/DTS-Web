import React, { useEffect, useRef, useState } from 'react';
import '../styles/CircularGallery.css';

const CircularGallery = () => {
  const carouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  // Track rotation for front/back logic (simplified - updates periodically)
  useEffect(() => {
    if (!carouselRef.current || isHovered) return;

    let currentRotation = 0;
    const updateRotation = () => {
      currentRotation += 1.8; // Approximate rotation per frame (360deg / 20s / 10 updates per second)
      if (currentRotation >= 360) currentRotation = 0;
      setRotation(currentRotation);
    };

    const interval = setInterval(updateRotation, 100);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Placeholder images - replace with actual imports
  const images = [
    { id: 1, alt: 'DTS Event 1' },
    { id: 2, alt: 'DTS Workshop' },
    { id: 3, alt: 'DTS Team Collaboration' },
    { id: 4, alt: 'DTS Innovation Session' },
    { id: 5, alt: 'DTS Creative Challenge' },
    { id: 6, alt: 'DTS Community Event' },
    { id: 7, alt: 'DTS Design Sprint' }
  ];

  const angle = 360 / images.length; // ~51.43 degrees per image

  return (
    <section 
      className="circular-gallery" 
      ref={sectionRef}
      data-visible={isVisible}
    >
      {/* Background Particles */}
      <div className="gallery-particles">
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
            A rotating 3D gallery showcasing moments that define our creativity, community, and innovation.
          </p>
        </div>

        <div 
          className="carousel-wrapper"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="carousel"
            ref={carouselRef}
            data-hovered={isHovered}
          >
            {images.map((image, index) => {
              const imageRotation = index * angle;
              const currentRotation = ((rotation % 360) + 360) % 360;
              const imageAngle = ((imageRotation - currentRotation + 360) % 360);
              const isFront = imageAngle < 90 || imageAngle > 270;
              
              return (
                <div
                  key={image.id}
                  className="carousel-item"
                  style={{
                    '--index': index,
                    '--angle': `${imageRotation}deg`,
                    '--is-front': isFront ? 1 : 0
                  }}
                >
                  <div className="image-wrapper">
                    <div className="image-placeholder">
                      <div className="placeholder-content">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                        <span>Image {image.id}</span>
                      </div>
                    </div>
                    {/* Replace placeholder with: <img src={imageSrc} alt={image.alt} /> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CircularGallery;

