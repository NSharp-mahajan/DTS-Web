import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import dtsLogo from '../assets/dts-logo.png';
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (location.pathname === '/contact') {
      setActiveLink('Contact Us');
    } else if (location.pathname === '/events') {
      setActiveLink('Events');
    } else if (location.pathname === '/projects') {
      setActiveLink('Projects');
    } else if (location.pathname === '/teams') {
      setActiveLink('Teams');
    } else if (location.pathname === '/') {
      setActiveLink('Home');
    }
    // Close menu when route changes
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', type: 'route', to: '/' },
    { label: 'Teams', type: 'route', to: '/teams' },
    { label: 'Events', type: 'route', to: '/events' },
    { label: 'Projects', type: 'route', to: '/projects' },
    { label: 'Contact Us', type: 'route', to: '/contact' },
  ];

  const handleLinkClick = (label) => {
    setActiveLink(label);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={dtsLogo} alt="DTS Logo" className="logo-left" />
        <div className="dts-text-container">
          <span className="dts-text">Design Thinking Society</span>
          <span className="university-text">Chitkara University</span>
        </div>
      </div>
      
      <button 
        className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        {navLinks.map((link) => {
          if (link.type === 'route') {
            return (
              <Link
                key={link.label}
                to={link.to}
                className={`nav-link ${activeLink === link.label ? 'active' : ''}`}
                onClick={() => handleLinkClick(link.label)}
              >
                {link.label}
              </Link>
            );
          }

          return (
            <a
              key={link.label}
              href={link.href}
              className={`nav-link ${activeLink === link.label ? 'active' : ''}`}
              onClick={() => handleLinkClick(link.label)}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
