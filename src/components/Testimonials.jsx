import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    name: "Diego Uribe",
    role: "Entrepreneur",
    avatar: "/testinomials/diego.jpg",
    rating: 5,
    text: "My website looks amazing and loads so quickly. The SEO has improved my rankings, and SM marketing is bringing real engagement."
  },
  {
    name: "Dr. Gamaliel",
    role: "Pedeatrician",
    avatar: "/testinomials/gamaliel.png",
    rating: 5,
    text: "Punto7x created a professional, user-friendly website for my clinic with excellent service and timely support. Highly recommended."
  },
  {
    name: "Martiza Lopez Palacio",
    role: "Fashion Influencer",
    avatar: "/testinomials/marlo.png",
    rating: 5,
    text: "Punto7x built a modern, responsive website for our business, combining sleek design with excellent functionality and support."
  },
  {
    name: "Yazmin Gallegos",
    role: "SM Influencer",
    avatar: "/testinomials/yazmin.png",
    rating: 5,
    text: "Punto7x crafted smart marketing strategies that boosted our brand visibility and drove consistent customer engagement."
  },
  {
    name: "Enrique Gomez",
    role: "Business Owner",
    avatar: "/testinomials/liam.jpg",
    rating: 5,
    text: "Their marketing solutions are innovative and result-driven, helping us reach new audiences and strengthen overall market presence."
  },
  {
    name: "Jennifer",
    role: "Educator",
    avatar: "/testinomials/jennifer.jpg",
    rating: 5,
    text: "Punto7x delivered effective lead generation campaigns, bringing quality leads and improving our conversion rates significantly over time."
  },
  {
    name: "Veronica",
    role: "SM Influencer",
    avatar: "/testinomials/veronica.jpg",
    rating: 5,
    text: "Punto7x managed my social media marketing with creativity, increasing engagement and building stronger connections online."
  },
  {
    name: "Abraham",
    role: "Dentist",
    avatar: "/testinomials/Abraham.jpg",
    rating: 5,
    text: "Their strategies for lead generation are practical and result-oriented, consistently driving potential customers to our business pipeline."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth >= 481 && window.innerWidth <= 1023);
      setIsMobile(window.innerWidth <= 480);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const prevTestimonial = () => {
    if (isTablet) {
      setCurrentIndex(prev => (prev === 0 ? testimonialsData.length - 2 : prev - 2));
    } else {
      setCurrentIndex(prev => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
    }
  };

  const nextTestimonial = () => {
    if (isTablet) {
      setCurrentIndex(prev => (prev >= testimonialsData.length - 2 ? 0 : prev + 2));
    } else {
      setCurrentIndex(prev => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="header">
          <h2>CLIENT <span className='highlight-text'>TESTIMONIALS</span></h2>
        </div>

        {/* Desktop Grid */}
        <div className="testimonials-grid">
          {testimonialsData.map((t, index) => (
            <div key={index} className="testimonial-card">
              <div className="author">
                <img src={t.avatar} alt={t.name} />
                <div>
                  <p className="name">{t.name}</p>
                  <p className="role">{t.role}</p>
                </div>
              </div>
              <div className="rating">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} className="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="testimonial-text">{t.text}</p>
            </div>
          ))}
        </div>

        {/* Slider for Tablet & Mobile */}
        <div className="testimonials-slider">
          <div className="slider-row">
            {testimonialsData.map((t, index) => {
              let visible = false;
              if (isTablet) {
                visible = index === currentIndex || index === currentIndex + 1;
              } else if (isMobile) {
                visible = index === currentIndex;
              }
              return (
                <div
                  key={index}
                  className={`testimonial-card ${visible ? 'active' : 'hidden'}`}
                >
                  <div className="author">
                    <img src={t.avatar} alt={t.name} />
                    <div>
                      <p className="name">{t.name}</p>
                      <p className="role">{t.role}</p>
                    </div>
                  </div>
                  <div className="rating">
                    {[...Array(t.rating)].map((_, i) => (
                      <svg key={i} className="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="testimonial-text">{t.text}</p>
                </div>
              );
            })}
          </div>

          <div className="testimonials-arrows">
            <button onClick={prevTestimonial}>&lt;</button>
            <button onClick={nextTestimonial}>&gt;</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
