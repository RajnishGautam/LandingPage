import React, { useState, useEffect } from 'react';
import './ProcessSection.css';

const ProcessSection = () => {
  const [activeCard, setActiveCard] = useState(0); 
  const [currentSlide, setCurrentSlide] = useState(0); 
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  const processSteps = [
    { number: "01", icon: "🎯", title: "Kickoff Meeting", description: "Description for step 1." },
    { number: "02", icon: "⚡", title: "Design Stage", description: "Description for step 2." },
    { number: "03", icon: "🎨", title: "Content Writing", description: "Description for step 3." },
    { number: "04", icon: "⚙️", title: "Development", description: "Description for step 4." },
    { number: "05", icon: "🚀", title: "Animation", description: "Description for step 5." },
    { number: "06", icon: "📊", title: "Quality Assurance", description: "Description for step 6." },
    { number: "07", icon: "✨", title: "Site Launch", description: "Description for step 7." }
  ];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCardClick = (index) => {
    if (windowWidth > 1024) setActiveCard(index);
  };

  const handlePrevSlide = () => {
    if (windowWidth <= 1024 && windowWidth > 480) {
      setCurrentSlide(prev => prev > 0 ? prev - 1 : processSteps.length - 2);
    } else if (windowWidth <= 480) {
      setCurrentSlide(prev => prev > 0 ? prev - 1 : processSteps.length - 1);
    }
  };

  const handleNextSlide = () => {
    if (windowWidth <= 1024 && windowWidth > 480) {
      setCurrentSlide(prev => prev < processSteps.length - 2 ? prev + 1 : 0);
    } else if (windowWidth <= 480) {
      setCurrentSlide(prev => prev < processSteps.length - 1 ? prev + 1 : 0);
    }
  };

  // const getVisibleCards = () => {
  //   if (windowWidth > 1024) return processSteps;
  //   else if (windowWidth > 480) return processSteps.slice(currentSlide, currentSlide + 2);
  //   else return [processSteps[currentSlide]];
  // };
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
            Our Process <span className="process-section__highlight">Steps</span>
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
              >
                <div className={`process-section__card-content ${activeCard === index ? 'active-content' : 'collapsed-content'}`}>
                  <div className="process-section__step-number">{step.number}</div>
                  <div className="process-section__step-icon">{step.icon}</div>
                  <h3 className="process-section__step-title">{step.title}</h3>
                  <div className="process-section__step-description">
                    <p>{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tablet/Mobile Stack */}
        {windowWidth <= 1024 && (
          <div className="process-section__slider">
            <div className="process-section__slider-row">
              {getVisibleCards().map((step, index) => (
                <div key={index} className="process-section__slider-card active">
                  <div className="process-section__card-content active-content">
                    <div className="process-section__step-number">{step.number}</div>
                    <div className="process-section__step-icon">{step.icon}</div>
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
