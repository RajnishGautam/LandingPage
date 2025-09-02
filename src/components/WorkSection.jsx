import React from "react";
import "./WorkSection.css";

const workData = [
  {
    id: 1,
    company: "Dr. Gamaliel",
    image: "/previews/site1.jpg",
    link: "https://drgamaliel.com/",
  },
  {
    id: 2,
    company: "MARLO PROJECT",
    image: "/previews/site2.png",
    link: "https://marloproject.com/",
  },
  {
    id: 3,
    company: "FARMERJ",
    image: "/previews/site3.jpg",
    link: "https://www.farmerj.com/",
  },
  {
    id: 4,
    company: "JBPHS",
    image: "/previews/site4.jpg",
    link: "https://jbphs.co.uk/",
  },
];

const WorkSection = () => {
  return (
    <section className="work-section">
      <h2 className="work-title">OUR <span className="highlight-text">WORKS</span></h2>
      <div className="work-grid">
        {workData.map((item) => (
          <div className="work-card" key={item.id}>
            <div className="preview-box">
              <img
                src={item.image}
                alt={item.company}
                className="scroll-preview"
              />
            </div>
            <h3 className="company-name">{item.company}</h3>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="visit-link"
            >
              Visit Website <span className="arrow">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
