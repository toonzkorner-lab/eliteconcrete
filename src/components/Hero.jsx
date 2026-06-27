import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Hero.css';

export default function Hero() {
  const revealRef = useScrollReveal();

  return (
    <header className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content reveal" ref={revealRef}>
        <h1 className="hero-title animate-up">The Benchmark in <span className="text-gradient">Resinous Flooring</span></h1>
        <p className="hero-subtitle animate-up delay-1">Engineered for extreme durability, designed for flawless aesthetics. The ultimate floor coating solutions for industrial, commercial, and residential spaces.</p>
        <div className="hero-actions animate-up delay-2">
          <a href="#products" className="btn btn-primary">Explore Products</a>
          <a href="#contact" className="btn btn-secondary">Request a Quote</a>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span className="mouse"><span className="wheel"></span></span>
      </div>
    </header>
  );
}