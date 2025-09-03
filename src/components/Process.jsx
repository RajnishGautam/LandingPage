import React, { useState, useEffect } from 'react';

import './ProcessSection.css';

const ProcessSection = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  const processSteps = [
    { 
      number: "01", 
      icon: "/process/goodwill.gif",
      staticIcon: "/process/goodwill.png", 
      title: "Kickoff Meeting", 
      description: "We start with a comprehensive discussion to understand your vision, goals, and requirements. This initial phase sets the foundation for the entire project by aligning expectations and defining clear objectives." 
    },
    { 
      number: "02", 
      icon: "/process/design.gif",
      staticIcon: "/process/design.png", 
      title: "Design Stage", 
      description: "Our creative team crafts stunning visual concepts and user interfaces that reflect your brand identity. We focus on creating designs that are both aesthetically pleasing and functionally optimized for user experience." 
    },
    { 
      number: "03", 
      icon: "/process/content.gif",
      staticIcon: "/process/content.png", 
      title: "Content Writing", 
      description: "Professional copywriters develop compelling, SEO-optimized content that resonates with your target audience. Every word is carefully chosen to communicate your message effectively and drive engagement." 
    },
    { 
      number: "04", 
      icon: "/process/development.gif",
      staticIcon: "/process/development.png", 
      title: "Development", 
      description: "Our skilled developers bring the designs to life using cutting-edge technologies and best practices. We ensure clean, efficient code that delivers optimal performance across all devices and platforms." 
    },
    { 
      number: "05", 
      icon: "/process/animation.gif",
      staticIcon: "/process/animation.png", 
      title: "Animation Stage", 
      description: "We add dynamic elements and smooth transitions that enhance user interaction and create memorable experiences. These animations are carefully crafted to improve usability without compromising performance." 
    },
    { 
      number: "06", 
      icon: "/process/assurance.gif",
      staticIcon: "/process/assurance.png", 
      title: "Quality Assurance", 
      description: "Rigorous testing across multiple browsers, devices, and scenarios ensures flawless functionality. Our QA process identifies and resolves any issues before launch, guaranteeing a smooth user experience." 
    },
    { 
      number: "07", 
      icon: "/process/launch.gif",
      staticIcon: "/process/launch.png", 
      title: "Site Launch", 
      description: "We handle the complete deployment process, ensuring your website goes live smoothly with optimal performance. Post-launch support and monitoring guarantee everything runs perfectly from day one." 
    }
  ];

const [, setGifTimestamps] = useState({});
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCardClick = (index) => {
    if (windowWidth > 1024) {
      setActiveCard(index);
      // Reset GIF for active card
      setGifTimestamps(prev => ({
        ...prev,
        [index]: Date.now()
      }));
    }
  };

  const handleCardHover = (index) => {
    if (windowWidth > 1024) {
      setActiveCard(index);
      // Reset GIF for active card
      setGifTimestamps(prev => ({
        ...prev,
        [index]: Date.now()
      }));
    }
  };

  const handlePrevSlide = () => {
    if (windowWidth <= 1024 && windowWidth > 480) {
      setCurrentSlide(prev => prev > 0 ? prev - 1 : processSteps.length - 4);
    } else if (windowWidth <= 480) {
      setCurrentSlide(prev => prev > 0 ? prev - 1 : processSteps.length - 1);
    }
  };

  const handleNextSlide = () => {
    if (windowWidth <= 1024 && windowWidth > 480) {
      setCurrentSlide(prev => prev < processSteps.length - 4 ? prev + 1 : 0);
    } else if (windowWidth <= 480) {
      setCurrentSlide(prev => prev < processSteps.length - 1 ? prev + 1 : 0);
    }
  };

  const getVisibleCards = () => {
    if (windowWidth > 1024) return processSteps;
    else if (windowWidth >= 768 && windowWidth <= 1024) {
      return processSteps.slice(currentSlide, currentSlide + 4);
    } else if (windowWidth > 480 && windowWidth < 768) {
      return processSteps.slice(currentSlide, currentSlide + 2);
    } else {
      return [processSteps[currentSlide]];
    }
  };

  return (
    <section className="process-section">
      <div className="process-section__container">
        <div className="process-section__header">
          <h2 className="process-section__title">
            OUR <span className="process-section__highlight">PIPELINE</span>
          </h2>
        </div>

        {/* Desktop Accordion */}
        {windowWidth > 1024 && (
          <div className="process-section__cards-container">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`process-section__card ${activeCard === index ? 'process-section__card--active' : 'process-section__card--collapsed'}`}
                onClick={() => handleCardClick(index)}
                onMouseEnter={() => handleCardHover(index)}
              >
                <div className={`process-section__card-content ${activeCard === index ? 'active-content' : 'collapsed-content'}`}>
                  <div className="process-section__step-number">{step.number}</div>
                  <div className="process-section__step-icon">
                    <img 
                      src={activeCard === index ? step.icon : step.staticIcon} 
                      alt={step.title} 
                      className="process-section__icon-img"
                    />
                  </div>
                  <h3 className="process-section__step-title">{step.title}</h3>
                  <div className="process-section__step-description">
                    <p>{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tablet/Mobile Slider */}
        {windowWidth <= 1024 && (
          <div className="process-section__slider">
            <div className="process-section__slider-row">
              {getVisibleCards().map((step, index) => (
                <div key={index} className="process-section__slider-card active">
                  <div className="process-section__card-content active-content">
                    <div className="process-section__step-number">{step.number}</div>
                    <div className="process-section__step-icon">
                      <img src={step.icon} alt={step.title} className="process-section__icon-img" />
                    </div>
                    <h3 className="process-section__step-title">{step.title}</h3>
                    <div className="process-section__step-description">
                      <p>{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="process-section__slider-controls">
              <button className="process-section__slider-btn" onClick={handlePrevSlide}>‹</button>
              <button className="process-section__slider-btn" onClick={handleNextSlide}>›</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProcessSection;