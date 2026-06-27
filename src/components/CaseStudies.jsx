import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import './CaseStudies.css';

const caseStudies = [
  {
    id: 1,
    title: 'Midwest Fire Station Upgrade',
    category: 'Fire Rescue & EMS',
    description: 'A fire station located in a mid-sized city was experiencing rapid deterioration of its apparatus bay floors. We installed an engineered multi-layer resinous protective floor coating to extend the life of the concrete while enhancing safety.',
    image: '/data/images/18-Sanibel-Fire-blue-Stout-5.jpg',
    link: '/item/fire-rescue-ems'
  },
  {
    id: 2,
    title: 'NASA Processing Facility',
    category: 'Aviation & Aerospace',
    description: 'An ultra high performance, self-leveling resinous coating engineered to provide impact protection and resist Skydrol fluids in a heavy-duty aerospace environment.',
    image: '/data/images/@NASA-2.jpg',
    link: '/item/aviation-and-aerospace'
  },
  {
    id: 3,
    title: 'High-Traffic Auto Showroom',
    category: 'Automotive',
    description: 'Transforming an outdated concrete floor into a high-gloss, reflective showroom masterpiece using our custom metallic epoxy system, offering extreme durability and an incredible aesthetic.',
    image: '/data/images/Automotive.jpg',
    link: '/item/automotive'
  }
];

export default function CaseStudies() {
  const revealRef = useScrollReveal();

  return (
    <section className="case-studies-section">
      <div className="container reveal" ref={revealRef}>
        <div className="section-header">
          <h2>Featured Case Studies</h2>
          <p>Real-world applications of Elite Crete Systems' high-performance flooring.</p>
        </div>

        <div className="cs-grid">
          {caseStudies.map((cs) => (
            <Link to={cs.link} key={cs.id} className="cs-card">
              <div className="cs-image-wrap">
                <img src={cs.image} alt={cs.title} loading="lazy" />
                <div className="cs-overlay">
                  <span className="cs-btn">Read Case Study</span>
                </div>
              </div>
              <div className="cs-content">
                <span className="cs-category">{cs.category}</span>
                <h3>{cs.title}</h3>
                <p>{cs.description}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="cs-footer">
          <Link to="/gallery" className="btn btn-primary">View Full Gallery</Link>
        </div>
      </div>
    </section>
  );
}
