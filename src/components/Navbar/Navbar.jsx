import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <ul>
        <li><a href="#hero">Inici</a></li>
        <li><a href="#details">Detalls</a></li>
        <li><a href="#timeline">Horari</a></li>
        <li><a href="#rsvp">Confirmació</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
