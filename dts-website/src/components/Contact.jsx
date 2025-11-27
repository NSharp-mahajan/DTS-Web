import React, { useState, useEffect, useRef } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success'); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const showToastMessage = (message, type = 'success') => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        // Success
        showToastMessage('Your message has been delivered! 🚀', 'success');
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Error from server
        showToastMessage(data.message || 'Something went wrong. Please try again.', 'error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      showToastMessage('Failed to send message. Please check your connection and try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const contactRef = useRef(null);
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
      { threshold: 0.2 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <section className="contact-section" ref={contactRef}>
      {/* Toast Notification */}
      {showToast && (
        <div className={`contact-toast ${toastType}`}>
          <div className="toast-content">
            <div className="toast-icon">
              {toastType === 'success' ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              )}
            </div>
            <span className="toast-message">{toastMessage}</span>
          </div>
          <button 
            className="toast-close" 
            onClick={() => setShowToast(false)}
            aria-label="Close notification"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      )}

      <div className="contact-container">
        <div className={`contact-content ${isVisible ? 'visible' : ''}`}>
          {/* Left Side - Contact Info */}
          <div className="contact-info">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-subtitle">
              Reach out for collaborations, event proposals, or general queries. We're happy to help.
            </p>

            <div className="info-blocks">
              <div className="info-block">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="info-content">
                  <h3 className="info-label">Email</h3>
                  <p className="info-text">design.thinking@chitkara.edu.in</p>
                </div>
              </div>

              <div className="info-block">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="info-content">
                  <h3 className="info-label">Phone</h3>
                  <p className="info-text">+91 89509 52858</p>
                </div>
              </div>

              <div className="info-block">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="info-content">
                  <h3 className="info-label">Address</h3>
                  <p className="info-text">Chitkara University, Patiala, India</p>
                </div>
              </div>
            </div>

            <div className="contact-social-links">
              <p className="contact-social-label">Connect with us</p>
              <div className="contact-social-actions">
                <a
                  href="https://www.instagram.com/design_thinking_chitkara/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-btn instagram"
                  aria-label="Design Thinking Society Instagram"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="6" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <circle cx="17.5" cy="6.5" r="1.25" />
                  </svg>
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/company/design-thinking-cuiet/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-btn linkedin"
                  aria-label="Design Thinking Society LinkedIn"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-input"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-input"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  className="form-textarea"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="btn-spinner"></span>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
