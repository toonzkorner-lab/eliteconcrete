import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import './CardGrid.css';

export default function CardGrid() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const revealRef = useScrollReveal();

  useEffect(() => {
    fetch('/data/catalog.json')
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load catalog", err);
        setLoading(false);
      });
  }, []);

  const getCategory = (url) => {
    const products = ['microcement', 'epoxy', 'mma', 'polyurethanes', 'sealants', 'coatings', 'cement', 'stains', 'densifiers', 'self-levelers'];
    const lowerUrl = url.toLowerCase();
    if (products.some(k => lowerUrl.includes(k))) return 'Products';
    if (lowerUrl.includes('elitecrete')) return 'General';
    return 'Industries';
  };

  const filteredItems = items.filter(item => {
    const cat = getCategory(item.url);
    return filter === 'All' || cat === filter;
  });

  // Reset to page 1 if filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <section className="section" id="products">
      <div className="container reveal" ref={revealRef}>
        <div className="section-header">
          <h2>Our Solutions</h2>
          <p>Discover high-performance floor systems tailored for specialized environments.</p>
        </div>

        <div className="controls">
          <div className="filters">
            {['All', 'Products', 'Industries'].map(f => (
              <button 
                key={f} 
                className={`filter-btn ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="loading">Loading content...</div>
        ) : (
          <>
            <div className="grid">
              {currentItems.map(item => (
                <Link to={`/item/${item.file.replace('.json', '')}`} key={item.file} className="card">
                  <div className="card-img-wrap">
                    <img src={item.primary_image ? `/data/images/${item.primary_image}` : "https://via.placeholder.com/400x300?text=No+Image"} 
                         onError={(e) => e.target.src="https://via.placeholder.com/400x300?text=View"} 
                         alt={item.title} loading="lazy" />
                    <div className="card-overlay">
                      <span className="card-btn">Learn More</span>
                    </div>
                  </div>
                  <div className="card-content">
                    <h3>{item.title.replace(' - Elite South Texas', '')}</h3>
                    <span className="badge">{getCategory(item.url)}</span>
                  </div>
                </Link>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="pagination">
                <button 
                  className="page-btn" 
                  disabled={currentPage === 1} 
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                >
                  Previous
                </button>
                <span className="page-info">
                  Page {currentPage} of {totalPages}
                </span>
                <button 
                  className="page-btn" 
                  disabled={currentPage === totalPages} 
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}