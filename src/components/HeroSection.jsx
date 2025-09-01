import React from "react";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* Background */}
      <div className="hero-background" />

      {/* Particles */}
      <div className="particles-container">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917838649867"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="whatsapp-icon" />
      </a>

      {/* Main Content */}
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title-line1">Forjando Tu</h1>
          <h1 className="hero-title-line2">Destino Web con</h1>
          <h1 className="hero-title-line3">
             <span className="highlight-text">Diseños</span> Impactantes
          </h1>
        </div>

        <p className="hero-subtitle">
          No solo creamos sitios web; construimos
          <br />
          sitios que convierten a tus visitantes en clientes.
        </p>

        <a
          href="https://wa.me/917838649867" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="cta-button">
            <span>Get A Quote</span>
            <ArrowRight className="cta-arrow" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
