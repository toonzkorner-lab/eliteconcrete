import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import '../components/CardGrid.css';

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const searchResults = items.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) || 
    getCategory(item.url).toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main>
      <SEOHead 
        title={`Search Results for "${query}" - Elite Crete Systems`} 
        description={`Search results for ${query} on Elite Crete Systems.`}
      />
      <section className="section" style={{ paddingTop: '8rem', minHeight: '60vh' }}>
        <div className="container">
          <div className="section-header">
            <h2>Search Results</h2>
            <p>
              {loading 
                ? 'Searching...' 
                : `Found ${searchResults.length} result${searchResults.length !== 1 ? 's' : ''} for "${query}"`}
            </p>
          </div>
          
          {!loading && searchResults.length > 0 && (
            <div className="grid">
              {searchResults.map(item => (
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
                    <h3>{item.title.replace(' - Elite Crete Systems', '')}</h3>
                    <span className="badge">{getCategory(item.url)}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
          
          {!loading && searchResults.length === 0 && (
            <div style={{ textAlign: 'center', color: '#A0A0A5', marginTop: '2rem' }}>
              <p>Try checking your spelling or using more general terms.</p>
              <div style={{ marginTop: '2rem' }}>
                <Link to="/" className="btn btn-primary">Return Home</Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
