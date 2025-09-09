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
          href="https://calendly.com/punto7x"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          Schedule Appointment
        </a>
      </div>
    </header>
  );
}

export default Navbar;