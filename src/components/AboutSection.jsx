import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        {/* Left side - Image */}
        <div className="about-image">
          <img 
            src="/webdev.gif" 
            alt="Web development illustration showing developers working on websites"
            className="about-img"
          />
        </div>
        
        {/* Right side - Text content */}
        <div className="about-text">
          <h2 className="about-title">
            Develop your dreams 
            <span className="highlighted-text"> digitally</span>
          </h2>
          
          <p className="about-description">
            At <span className="company-name">Punto7X</span>, we are committed to providing 
            exceptional service and support throughout the entire web design and development process. 
            We believe that communication is key, and we will keep you updated every step of the way. 
            Our goal is to deliver a website that not only meets your expectations but exceeds them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;