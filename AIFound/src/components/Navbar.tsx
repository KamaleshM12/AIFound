import React, { useState } from 'react';
import { LayoutGrid, VectorSquare, Home, Briefcase, Settings } from 'lucide-react';

const navLinks = [
  { id: 'results', icon: <Home size={24} />, label: 'Home' },
  { id: 'hero', icon: <LayoutGrid size={24} />, label: 'Dashboard' },
  { id: 'features', icon: <VectorSquare size={24} />, label: 'Cart' },
  { id: 'about', icon: <Briefcase size={24} />, label: 'Work' },
];

const Navbar: React.FC = () => {
  // State to track the currently active link, defaulting to 'hero'
  const [activeLink, setActiveLink] = useState('hero');

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">INDEX</div>

        {/* --- DESKTOP NAVIGATION --- */}
        <ul className="nav-menu">
          <li><a href="#hero">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#results">Results</a></li>
          <li><a href="#about">About</a></li>
        </ul>

        {/* --- MOBILE NAVIGATION (The floating pill) --- */}
        <div className="mobile-nav-container">
          {navLinks.map((link, index) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              // Conditionally add the 'active' class
              className={`mobile-nav-link mobile-nav-link-${index + 1} ${activeLink === link.id ? 'active' : ''}`}
              // Update the active link on click
              onClick={() => setActiveLink(link.id)}
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
          <div className="nav-indicator"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
