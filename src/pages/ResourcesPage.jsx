import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FileText, Download, Folder } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import './ResourcesPage.css';

export default function ResourcesPage() {
  const { slug } = useParams();
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0,0);
    fetch('/data/resources.json')
      .then(res => res.json())
      .then(data => {
        setResources(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load resources", err);
        setLoading(false);
      });
  }, [slug]);

  const displayedResources = slug 
    ? resources.filter(r => r.slug === slug) 
    : resources;

  return (
    <div className="resources-page">
      <SEOHead title={slug && displayedResources.length > 0 ? displayedResources[0].category + ' Resources' : 'Technical Resources'} description="Download technical data sheets, color charts, and specifications for Elite South Texas products." path={slug ? '/resources/' + slug : '/resources'} />
      <div className="resources-header">
        <h1>{slug && displayedResources.length > 0 ? `${displayedResources[0].category} Resources` : 'Technical Resources'}</h1>
        <p>{slug ? `Download technical data and specifications for ${displayedResources[0]?.category}.` : 'Select a category below to view its available technical data sheets, color charts, and specifications.'}</p>
      </div>

      {loading ? (
        <div className="resources-loading">Loading documents...</div>
      ) : resources.length === 0 ? (
        <div className="resources-loading">No documents available at this time.</div>
      ) : slug ? (
        <div className="resources-container">
          {displayedResources.length === 0 ? (
            <div className="resources-loading">No documents found for this category.</div>
          ) : (
            <div className="documents-grid">
              {displayedResources[0].pdfs.map((pdf, i) => (
                <a key={i} href={`/data/pdfs/${pdf.filename}`} target="_blank" rel="noopener noreferrer" className="document-card">
                  <div className="document-icon">
                    <FileText size={28} color="#0A84FF" />
                  </div>
                  <div className="document-info">
                    <h4>{pdf.title}</h4>
                    <span className="document-meta">PDF Document</span>
                  </div>
                  <div className="document-action">
                    <Download size={20} />
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="documents-grid">
          {resources.map((category, idx) => (
            <Link to={`/resources/${category.slug}`} key={idx} className="document-card">
              <div className="document-icon" style={{background: 'rgba(255,159,10,0.1)'}}>
                <Folder size={28} color="#FF9F0A" />
              </div>
              <div className="document-info">
                <h4>{category.category}</h4>
                <span className="document-meta">{category.pdfs.length} Documents</span>
              </div>
              <div className="document-action">
                <FileText size={20} />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
