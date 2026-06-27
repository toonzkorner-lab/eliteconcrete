import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import './CaseStudies.css';

const caseStudies = [
  {
    id: 1,
    title: 'National Fire Department Headquarters',
    category: 'Fire Rescue & EMS',
    description: 'A 50,000 sq. ft. apparatus bay required a slip-resistant, highly durable urethane system that could withstand heavy vehicles, dropped tools, and harsh chemical spills.',
    image: 'https://images.unsplash.com/photo-1599709230559-002d0ec77d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/item/industrial'
  },
  {
    id: 2,
    title: 'Premium Auto Dealership',
    category: 'Retail & Commercial',
    description: 'Transforming an outdated concrete floor into a high-gloss, reflective showroom masterpiece using our custom metallic epoxy system.',
    image: 'https://images.unsplash.com/photo-1605810731697-393f6696dbf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/item/retail-and-commercial'
  },
  {
    id: 3,
    title: 'Aviation Hangar Complex',
    category: 'Aviation & Aerospace',
    description: 'Providing a bright, easy-to-maintain, and Skydrol-resistant surface for a multi-jet private aviation facility.',
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/item/industrial'
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
