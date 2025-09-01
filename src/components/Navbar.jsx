import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      {/* Logo on left */}
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>

      {/* WhatsApp CTA on right */}
      <div className="cta">
        <a
          href="https://wa.me/917838649867"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          WhatsApp Now
        </a>
      </div>
    </header>
  );
}

export default Navbar;