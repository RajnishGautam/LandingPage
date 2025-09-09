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
      description: "We begin with focused discussions to align goals, define objectives, and establish a strong foundation for overall project success." 
    },
    { 
      number: "02", 
      icon: "/process/design.gif",
      staticIcon: "/process/design.png", 
      title: "Design Stage", 
      description: "Our creative team crafts brand-centered designs that unite striking visuals with functional clarity, delivering engaging, optimized, and memorable user experiences" 
    },
    { 
      number: "03", 
      icon: "/process/content.gif",
      staticIcon: "/process/content.png", 
      title: "Content Writing", 
      description: "Expert writers develop clear, compelling content that resonates with your audience, enhances SEO, and effectively communicates your brand message." 
    },
    { 
      number: "04", 
      icon: "/process/development.gif",
      staticIcon: "/process/development.png", 
      title: "Development", 
      description: "Skilled developers transform designs into reality with clean code, advanced technologies, and optimized performance across devices." 
    },
    { 
      number: "05", 
      icon: "/process/animation.gif",
      staticIcon: "/process/animation.png", 
      title: "Animation Stage", 
      description: "We integrate dynamic elements and smooth transitions, enhancing interaction, improving usability, and ensuring memorable user experiences." 
    },
    { 
      number: "06", 
      icon: "/process/assurance.gif",
      staticIcon: "/process/assurance.png", 
      title: "Quality Assurance", 
      description: "Rigorous testing across devices and scenarios ensures flawless functionality, resolving issues and guaranteeing smooth user experiences." 
    },
    { 
      number: "07", 
      icon: "/process/launch.gif",
      staticIcon: "/process/launch.png", 
      title: "Site Launch", 
      description: "We manage deployment seamlessly, ensuring smooth launch, optimized performance, and ongoing support with reliable monitoring." 
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