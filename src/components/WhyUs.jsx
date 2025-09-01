import React, { useState } from 'react'
import {
  Users,
  Target,
  Award,
  TrendingUp,
  Globe,
  Zap,
  X,
} from 'lucide-react'

const WhyUs3DCards = () => {
  const [selectedCard, setSelectedCard] = useState(null)

  const cards = [
    {
      id: 1,
      title: 'Why Us',
      subtitle: 'Excellence Redefined',
      icon: <Target className="w-8 h-8" />,
      gradient: 'from-purple-600 via-pink-600 to-blue-600',
      facts: [
        { icon: <TrendingUp className="w-6 h-6" />, label: 'Success Rate', value: '99.8%' },
        { icon: <Users className="w-6 h-6" />, label: 'Happy Clients', value: '50+' },
        { icon: <Award className="w-6 h-6" />, label: 'Faster Delivery', value: '3x Speed' },
        { icon: <Globe className="w-6 h-6" />, label: 'Global Reach', value: '5+ Countries' },
      ],
      description:
        'We deliver exceptional results through innovative solutions, cutting-edge technology, and unwavering commitment to excellence. Our proven track record speaks for itself.',
    },
    {
      id: 2,
      title: 'Who We Are',
      subtitle: 'Visionary Leaders',
      icon: <Users className="w-8 h-8" />,
      gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
      facts: [
        { icon: <Users className="w-6 h-6" />, label: 'Expert Team', value: '20+' },
        { icon: <Globe className="w-6 h-6" />, label: 'Years Experience', value: '5+' },
        { icon: <Zap className="w-6 h-6" />, label: 'Projects Completed', value: '500+' },
        { icon: <Award className="w-6 h-6" />, label: 'Industry Recognition', value: 'Top 1%' },
      ],
      description:
        'A dynamic team of innovators, strategists, and creators who transform ideas into reality. We are passionate professionals dedicated to pushing boundaries and exceeding expectations.',
    },
    {
      id: 3,
      title: "Our Process",
      subtitle: 'Innovation at Core',
      icon: <Award className="w-8 h-8" />,
      gradient: 'from-orange-600 via-red-600 to-pink-600',
      facts: [
        { icon: <Zap className="w-6 h-6" />, label: 'Researched Planning', value: 'Plan' },
        { icon: <Target className="w-6 h-6" />, label: 'Out Of Box Design', value: 'Design' },
        { icon: <Globe className="w-6 h-6" />, label: '3x Speed Process', value: 'Develop' },
        { icon: <TrendingUp className="w-6 h-6" />, label: 'Fastest Deployment', value: 'Deliver' },
      ],
      description:
        "Our unique blend of creativity, technology, and strategic thinking sets us apart. We don't just meet expectations—we redefine what's possible in our industry.",
    },
  ]

  const handleCardClick = (cardId) => setSelectedCard(cardId)
  const handleBack = () => setSelectedCard(null)

  return (
    <div className="whyus-main-container">

      {/* Main content */}
      <div className="whyus-content">
        {/* Header section */}
        <div className="whyus-section-header">
          <h2 className="whyus-section-title">DESIGN - STRATEGY - GROWTH <span className='highlight-text'>WITHOUT LIMITS.</span></h2>
        </div>

        {/* Cards container */}
        <div className={`whyus-cards-container ${selectedCard ? 'whyus-expanded' : ''}`}>
          {!selectedCard ? (
            // Grid of cards view
            <div className="whyus-cards-grid">
              {cards.map((card, index) => (
                <div
                  key={card.id}
                  className={`whyus-floating-card whyus-card-${index + 1}`}
                  onClick={() => handleCardClick(card.id)}
                >
                  <div className="whyus-card-glow"></div>
                  <div className="whyus-card-content">
                    <div className={`whyus-card-icon bg-gradient-to-r ${card.gradient}`}>
                      {card.icon}
                    </div>
                    <h3 className="whyus-card-title">{card.title}</h3>
                    <div className="whyus-card-hover-effect">
                      <span>Click to explore</span>
                    </div>
                  </div>
                  <div className="whyus-card-reflection"></div>
                </div>
              ))}
            </div>
          ) : (
            // Expanded modal view
            <div className="whyus-expanded-overlay" onClick={handleBack}>
              {cards.map(
                (card) =>
                  selectedCard === card.id && (
                    <div
                      key={card.id}
                      className="whyus-expanded-card"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Close button */}
                      <div className="whyus-close-button-container">
                        <button className="whyus-close-button" onClick={handleBack}>
                          <X className="w-6 h-6" />
                        </button>
                      </div>

                      {/* Left side - Header and description */}
                      <div className="whyus-expanded-left">
                        <div className="whyus-expanded-header">
                          <div className={`whyus-expanded-icon bg-gradient-to-r ${card.gradient}`}>
                            {card.icon}
                          </div>
                          <div className="whyus-expanded-text">
                            <h3 className="whyus-expanded-title">{card.title}</h3>
                            <p className="whyus-expanded-subtitle">{card.subtitle}</p>
                          </div>
                        </div>
                        <div className="whyus-expanded-description-container">
                          <p className="whyus-expanded-description">{card.description}</p>
                        </div>
                      </div>

                      {/* Right side - Facts grid */}
                      <div className="whyus-expanded-right">
                        <div className="whyus-facts-grid">
                          {card.facts.map((fact, index) => (
                            <div key={index} className="whyus-fact-card">
                              <div className="whyus-fact-icon">{fact.icon}</div>
                              <div className="whyus-fact-content">
                                <span className="whyus-fact-value">{fact.value}</span>
                                <span className="whyus-fact-label">{fact.label}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Complete CSS styles */}
      <style>{`
        .whyus-main-container {
          min-height: fit-content;
          max-height: fit-content;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 5rem 1rem 0rem;
          transition: all 0.3s ease;
          background: #000000;
          color: #ffffff;
        }

        

        .whyus-content {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .whyus-section-header {
          text-align: center;
          margin-bottom: 3rem;
          animation: whyus-fadeInUp 1s ease-out;
        }

        .whyus-section-title {
          font-family: 'sarabun';
          font-size: 1.8rem;
          letter-spacing: 0.2rem;
          font-weight: normal;
          margin-bottom: 1rem;
          text-align: center;
          color: #ffffff;
        }

        .whyus-cards-container {
          position: relative;
          min-height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .whyus-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          width: 100%;
          max-width: 1200px;
          justify-items: center;
        }

        .whyus-floating-card {
          width: 100%;
          max-width: 380px;
          height: 200px;
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.03);
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.03) 0%,
            rgba(255, 255, 255, 0.06) 100%
          );
          border: 1px solid rgba(255, 255, 255, 0.15);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          animation: whyus-cardFloat 4s ease-in-out infinite;
        }

        .whyus-card-1 { animation-delay: 0s; }
        .whyus-card-2 { animation-delay: 0.5s; }
        .whyus-card-3 { animation-delay: 1s; }

        @keyframes whyus-cardFloat {
          0%, 100% {
            transform: translateY(0px) rotateY(0deg);
          }
          50% {
            transform: translateY(-10px) rotateY(5deg);
          }
        }

        .whyus-card-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0.25),
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0.25)
          );
          transform: rotate(-45deg);
          transition: all 0.6s ease;
          opacity: 0;
          pointer-events: none;
        }

        .whyus-floating-card:hover .whyus-card-glow {
          opacity: 1;
          animation: whyus-shimmer 2s ease-in-out infinite;
        }

        @keyframes whyus-shimmer {
          0% {
            transform: rotate(-45deg) translateX(-100%);
          }
          100% {
            transform: rotate(-45deg) translateX(100%);
          }
        }

        .whyus-card-content {
          position: relative;
          z-index: 2;
          padding: 2rem 1.5rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          justify-content: center;
        }

        .whyus-card-icon {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #8e1616;
          margin-bottom: 1rem;
          position: relative;
          animation: whyus-iconPulse 2s ease-in-out infinite;
          font-size: 1.8rem;
        }

        @keyframes whyus-iconPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .whyus-card-title {
          font-size: 1.5rem;
          font-weight: normal;
          letter-spacing: 0.2rem;
          font-family: 'sarabun';
          margin-bottom: 0.5rem;
          line-height: 1.2;
          color: white;
        }

        .whyus-card-hover-effect {
          position: absolute;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0;
          transition: all 0.3s ease;
        }

        .whyus-floating-card:hover .whyus-card-hover-effect {
          opacity: 1;
          animation: whyus-bounce 1s ease-in-out infinite;
        }

        @keyframes whyus-bounce {
          0%, 100% {
            transform: translateX(-50%) translateY(0px);
          }
          50% {
            transform: translateX(-50%) translateY(-8px);
          }
        }

        .whyus-card-hover-effect span {
          background: #8e1616;
          color: white;
          padding: 0.2rem 0.6rem;
          border-radius: 16px;
          font-size: 1rem;
          font-family: 'sarabun';
          font-weight: normal;
          white-space: nowrap;
        }

        .whyus-card-reflection {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 40%;
          background: linear-gradient(
            to top,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          pointer-events: none;
        }

        .whyus-expanded-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(10px);
        }

        .whyus-close-button-container {
          position: absolute;
          top: -15px;
          right: -15px;
          z-index: 100;
        }

        .whyus-close-button {
          background: #8e1616;
          border: none;
          border-radius: 20%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          color: white;
          font-weight: 700;
          font-size: 1.2rem;
          padding:0;
        }

        .whyus-close-button:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 24px rgba(142, 22, 22, 0.4);
        }

        .whyus-expanded-card {
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 2rem;
          animation: whyus-expandIn 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          gap: 2rem;
          min-height: 400px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          max-width: 90vw;
          width: 100%;
          max-width: 1000px;
        }

        @keyframes whyus-expandIn {
          from {
            scale: 0.8;
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            scale: 1;
            opacity: 1;
            transform: translateY(0);
          }
        }

        .whyus-expanded-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .whyus-expanded-right {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .whyus-expanded-header {
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }

        .whyus-expanded-icon {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #8e1616;
          font-size: 1.5rem;
          animation: whyus-iconRotate 3s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes whyus-iconRotate {
          0%, 100% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.1);
          }
        }

        .whyus-expanded-text {
          flex: 1;
          min-width: 0;
        }

        .whyus-expanded-title {
          font-size: 1.8rem;
          font-weight: normal;
          background: linear-gradient(135deg, #D84040, #8e1616);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.2;
        }

        .whyus-expanded-subtitle {
          font-size: 1.5rem;
          line-height: 1.4;
          font-weight: normal;
          font-family: 'sarabun';
          opacity: 1.8; 
          letter-spacing: 0.1rem;
          color: #ffffff;
        }

        .whyus-expanded-description-container {
          flex: 1;
          display: flex;
          align-items: center;
        }

        .whyus-expanded-description {
          font-size: 1.5rem;
          line-height: 1;
          font-weight: normal;
          color: rgba(255, 255, 255, 0.9);
        }

        .whyus-facts-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, auto);
          gap: 1rem;
          width: 100%;
        }

        .whyus-fact-card {
          backdrop-filter: blur(10px);
          border-radius: 14px;
          padding: 1rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          transition: all 0.3s ease;
          animation: whyus-factSlideIn 0.6s ease-out;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .whyus-fact-card:nth-child(1) { animation-delay: 0.1s; }
        .whyus-fact-card:nth-child(2) { animation-delay: 0.2s; }
        .whyus-fact-card:nth-child(3) { animation-delay: 0.3s; }
        .whyus-fact-card:nth-child(4) { animation-delay: 0.4s; }

        .whyus-fact-card:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 8px 24px rgba(142, 22, 22, 0.3);
        }

        .whyus-fact-icon {
          width: 36px;
          height: 36px;
          background: #D84040;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          animation: whyus-iconSpin 4s linear infinite;
          flex-shrink: 0;
        }

        @keyframes whyus-iconSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .whyus-fact-content {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .whyus-fact-value {
          font-size: 1.7rem;
          font-family: 'sarabun';
          font-weight: normal;
          line-height: 1;
          color: white;
        }

        .whyus-fact-label {
          font-size: 1rem;
          font-family: 'sarabun';
          font-weight: 600;
          opacity: 1.8;
          letter-spacing: 0.05rem;
          line-height: 1;
          color: rgba(255, 255, 255, 1);
        }

        @keyframes whyus-fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes whyus-factSlideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .whyus-main-container {
            padding: 1.5rem;
          }
          
          .whyus-section-title {
            font-size: 2.2rem;
          }
          
          .whyus-cards-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
          }
          
          .whyus-floating-card {
            height: 200px;
          }
          
          .whyus-expanded-card {
            padding: 1.5rem;
            gap: 1.5rem;
            width:90%;
          }
          
          .whyus-orb-1 { width: 120px; height: 120px; }
          .whyus-orb-2 { width: 80px; height: 80px; }
          .whyus-orb-3 { width: 60px; height: 60px; }
          .whyus-orb-4 { width: 70px; height: 70px; }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .whyus-main-container {
            min-height: 80vh;
            padding: 1rem;
          }
          
          .whyus-section-header {
            margin-bottom: 2rem;
          }
          
          .whyus-section-title {
            font-size: 1.8rem;
            margin-bottom: 0.5rem;
          }
          
          .whyus-cards-container {
            min-height: auto;
            margin-bottom: 1.5rem;
          }
          
          .whyus-cards-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            max-width: 100%;
          }
          
          .whyus-floating-card {
            max-width: 100%;
            height: 180px;
          }
          
          .whyus-floating-card:hover {
            transform: translateY(-15px) scale(1.02);
          }
          
          .whyus-card-content {
            padding: 1.5rem 1rem;
          }
          
          .whyus-card-icon {
            width: 60px;
            height: 60px;
            font-size: 1.5rem;
            margin-bottom: 0.8rem;
          }
          
          .whyus-card-title {
            font-size: 1.3rem;
            margin-bottom: 0.4rem;
          }
          
          .whyus-expanded-card {
            flex-direction: column;
            gap: 1.5rem;
            min-height: 300px;
            padding: 1.5rem;
            width:90%
          }
          
          .whyus-expanded-header {
            gap: 1rem;
          }
          
          .whyus-expanded-icon {
            width: 60px;
            height: 60px;
            font-size: 1.3rem;
          }
          
          .whyus-expanded-title {
            font-size: 1.5rem;
          }
          
          .whyus-expanded-subtitle {
            font-size: 0.9rem;
          }
          
          .whyus-expanded-description {
            font-size: 0.95rem;
          }
          
          .whyus-facts-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.8rem;
          }
          
          .whyus-fact-card {
            padding: 0.8rem;
          }
          
          .whyus-fact-icon {
            width: 32px;
            height: 32px;
          }
          
          .whyus-fact-value {
            font-size: 1.1rem;
          }
          
          .whyus-fact-label {
            font-size: 0.65rem;
          }
          
          .whyus-close-button-container {
            top: -10px;
            right: -10px;
          }
          
          .whyus-close-button {
            width: 36px;
            height: 36px;
            font-size: 1rem;
          }
          
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .whyus-main-container {
            padding: 1.8rem;
          }
          
          .whyus-section-title {
            font-size: 1rem;
            letter-spacing: 0.2rem;
            margin-bottom: 0.2rem;
            margin-top: -1rem;
          }
          
          .whyus-floating-card {
            height: 120px;
          }
          
          .whyus-card-content {
            padding: 0rem 0rem;
          }
          
          .whyus-card-icon {
            width: 50px;
            height: 50px;
            font-size: 1.3rem;
          }
          
          .whyus-card-title {
            font-size: 1.2rem;
            font-weight: normal;
            letter-spacing: 0.1rem;
          }
          
          .whyus-floating-card:hover .whyus-card-hover-effect {
            display: none;
          }
          
          .whyus-expanded-card {
            padding: 1rem;
            gap: 1rem;
            width:90%;
          }
          
          .whyus-expanded-icon {
            width: 50px;
            height: 50px;
          }
          
          .whyus-expanded-title {
            font-size: 1.3rem;
          }
          
          .whyus-expanded-subtitle {
            font-size: 0.85rem;
          }
          
          .whyus-expanded-description {
            font-size: 0.9rem;
          }
          
          .whyus-fact-card {
            padding: 0.2rem;
            gap: 0.6rem;
          }
          
          .whyus-fact-icon {
            width: 28px;
            height: 28px;
          }
          
          .whyus-fact-value {
            font-size: 1rem;
          }
          
          .whyus-fact-label {
            font-size: 0.6rem;
          }
          
          .whyus-orb-1 { width: 60px; height: 60px; }
          .whyus-orb-2 { width: 40px; height: 40px; }
          .whyus-orb-3 { width: 30px; height: 30px; }
          .whyus-orb-4 { width: 35px; height: 35px; }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .whyus-floating-card:hover {
            transform: none;
          }
          
          .whyus-floating-card:active {
            transform: scale(0.98);
          }
          
          .whyus-fact-card:hover {
            transform: none;
          }
          
          .whyus-fact-card:active {
            transform: scale(0.98);
          }
          
          .whyus-close-button:hover {
            transform: none;
          }
          
          .whyus-close-button:active {
            transform: scale(0.95);
          }
        }

        /* Reduced motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          
          .whyus-orb {
            animation: none;
          }
          
          .whyus-floating-card {
            animation: none;
          }
          
          .whyus-card-icon {
            animation: none;
          }
          
          .whyus-expanded-icon {
            animation: none;
          }
          
          .whyus-fact-icon {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}

export default WhyUs3DCards