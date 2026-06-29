import React, { useState, useEffect } from 'react';
import { ImageIcon } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import './GalleryPage.css';

export default function GalleryPage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    window.scrollTo(0,0);
    fetch('/data/gallery.json')
      .then(res => res.json())
      .then(data => {
        setImages(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load gallery", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="gallery-page">
      <SEOHead 
        title="Project Gallery" 
        description="Explore hundreds of high-performance flooring installations by Elite South Texas across commercial, industrial, and residential projects."
        path="/gallery"
      />
      <div className="gallery-header">
        <h1>Project Gallery</h1>
        <p>Explore hundreds of high-performance flooring installations across various industries.</p>
      </div>

      {loading ? (
        <div className="gallery-loading">Loading gallery...</div>
      ) : (
        <>
          <div className="gallery-masonry">
            {images.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((img, i) => (
              <div className="gallery-item" key={(currentPage - 1) * itemsPerPage + i}>
                <img 
                  src={`/data/images/${img}`} 
                  alt={`Elite South Texas flooring project ${(currentPage - 1) * itemsPerPage + i + 1}`} 
                  loading="lazy"
                  width="400"
                  height="300"
                  onError={(e) => { e.target.parentElement.style.display = 'none'; }}
                />
              </div>
            ))}
          </div>

          {Math.ceil(images.length / itemsPerPage) > 1 && (
            <div className="pagination-controls">
              <button 
                className="page-btn"
                disabled={currentPage === 1} 
                onClick={() => { setCurrentPage(prev => prev - 1); window.scrollTo(0,0); }}
              >
                Previous
              </button>
              <span className="page-info">
                Page {currentPage} of {Math.ceil(images.length / itemsPerPage)}
              </span>
              <button 
                className="page-btn"
                disabled={currentPage === Math.ceil(images.length / itemsPerPage)} 
                onClick={() => { setCurrentPage(prev => prev + 1); window.scrollTo(0,0); }}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
