import React, { useState } from 'react';
import dtsLogo from '../assets/dts-logo.png';
import universityLogo from '../assets/university-logo.png';
import '../styles/Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const navLinks = ['Home', 'Teams', 'Events', 'Gallery', 'Contact Us'];

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={dtsLogo} alt="DTS Logo" className="logo-left" />
        <div className="dts-text-container">
          <span className="dts-text">Design Thinking Society</span>
          <span className="university-text">Chitkara University</span>
        </div>
      </div>
      
      <div className="nav-links">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(' ', '-')}`}
            className={`nav-link ${activeLink === link ? 'active' : ''}`}
            onClick={() => handleLinkClick(link)}
          >
            {link}
          </a>
        ))}
      </div>
      
      <div className="navbar-right">
        <img src={universityLogo} alt="Chitkara University Logo" className="logo-right" />
      </div>
    </nav>
  );
};

export default Navbar;
