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
    description: 'HERMETIC™ Fire Apparatus Flooring Systems are resinous, fluid-applied floors engineered to improve the durability of fire apparatus bay floors while also providing a slip resistant floor even when wet. They provide high abrasion and impact resistance while improving aesthetics.',
    image: '/data/images/10-Gordon-county-fire-station-reflector-by-Adam-Diskey-1-768x768.jpg',
    link: '/item/fire-rescue-ems'
  },
  {
    id: 'aviation',
    title: 'Aviation & Aerospace',
    icon: <Plane size={24} />,
    description: 'Our Aviation & Aerospace Flooring Systems are ultra high performance, self-leveling, resinous coatings engineered for specialty aerospace floors. Offering impact protection and increasing the strength of the concrete substrate, they provide exceptional resistance to Skydrol fluids and other petrochemicals.',
    image: '/data/images/16-Industrial-hangar-flake-stout-combo-1.jpg',
    link: '/item/aviation-and-aerospace'
  },
  {
    id: 'automotive',
    title: 'Automotive & Showrooms',
    icon: <Car size={24} />,
    description: 'The automotive industry has many different flooring needs such as high durability requirements for production and service areas as well as aesthetic value for showrooms. Our easy to maintain surfaces are abrasion resistant, slip resistant, and protect against petrochemicals.',
    image: '/data/images/18-Toyota-USA-Quartz-1-1.jpg',
    link: '/item/automotive'
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Medical',
    icon: <HeartPulse size={24} />,
    description: 'The healthcare industry requires flooring engineered for heavy traffic from portable medical equipment. These specialty seamless flooring systems are non-porous providing an antimicrobial surface that is resistant to chemical and biological fluids and withstands frequent aggressive cleaning.',
    image: '/data/images/10430388_1448855615397629_6757677876344705567_n.jpg',
    link: '/item/healthcare'
  },
  {
    id: 'commercial',
    title: 'Commercial Spaces',
    icon: <Building2 size={24} />,
    description: 'Our fluid-applied architectural flooring systems provide limitless design possibilities for retail stores, offices, and restaurants. Create a lasting first impression while ensuring extreme durability and low maintenance costs over the lifetime of the floor.',
    image: '/data/images/10-Commercial-hotel-by-SBR-Concrete-Polishing-1.jpg',
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
