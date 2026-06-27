import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Plane, Car, HeartPulse, Building2 } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './IndustryHighlight.css';

const industries = [
  {
    id: 'fire-rescue',
    title: 'Fire, Rescue & EMS',
    icon: <Flame size={24} />,
    description: 'Heavy-duty apparatus and constant foot traffic require flooring that can withstand extreme abuse. Our industrial-grade epoxy and urethane systems offer unmatched durability, chemical resistance, and slip-resistance for firehouses and EMS facilities.',
    image: 'https://images.unsplash.com/photo-1616422285623-131f421ce7f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    link: '/item/industrial'
  },
  {
    id: 'aviation',
    title: 'Aviation & Aerospace',
    icon: <Plane size={24} />,
    description: 'Aircraft hangars demand high-performance coatings that resist Skydrol, jet fuel, and hot-tire pickup. We provide light-reflective, seamless surfaces that make maintenance easy while ensuring maximum safety.',
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    link: '/item/industrial'
  },
  {
    id: 'automotive',
    title: 'Automotive & Showrooms',
    icon: <Car size={24} />,
    description: 'From the high-gloss elegance of a showroom to the rugged durability required in the service bays, our customized flooring systems deliver striking aesthetics without compromising on performance.',
    image: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    link: '/item/retail-and-commercial'
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Medical',
    icon: <HeartPulse size={24} />,
    description: 'Sterile environments need seamless, non-porous flooring that prevents bacterial growth. Our specialized coatings ensure hygienic, easy-to-clean surfaces ideal for hospitals, clinics, and labs.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    link: '/item/retail-and-commercial'
  },
  {
    id: 'commercial',
    title: 'Commercial Spaces',
    icon: <Building2 size={24} />,
    description: 'Create a lasting first impression. Our fluid-applied architectural flooring systems, including Microcement and decorative epoxy, provide limitless design possibilities for retail stores, offices, and restaurants.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    link: '/item/retail-and-commercial'
  }
];

export default function IndustryHighlight() {
  const [activeTab, setActiveTab] = useState(industries[0]);
  const revealRef = useScrollReveal();

  return (
    <section className="industry-section">
      <div className="container reveal" ref={revealRef}>
        <div className="section-header">
          <h2>Specialized Industry Solutions</h2>
          <p>Engineered performance for every environment.</p>
        </div>

        <div className="industry-layout">
          <div className="industry-tabs">
            {industries.map((ind) => (
              <button
                key={ind.id}
                className={`industry-tab ${activeTab.id === ind.id ? 'active' : ''}`}
                onClick={() => setActiveTab(ind)}
              >
                <span className="tab-icon">{ind.icon}</span>
                <span className="tab-title">{ind.title}</span>
              </button>
            ))}
          </div>

          <div className="industry-content-wrapper">
            <div className="industry-image-container">
              <img src={activeTab.image} alt={activeTab.title} className="industry-image" />
              <div className="industry-overlay"></div>
            </div>
            <div className="industry-details">
              <h3>{activeTab.title}</h3>
              <p>{activeTab.description}</p>
              <Link to={activeTab.link} className="industry-link">
                Explore Solutions <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
