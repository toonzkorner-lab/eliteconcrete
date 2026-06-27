import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Image as ImageIcon, FileText, Download } from 'lucide-react';
import './DetailPage.css';

export default function DetailPage() {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0,0);
    fetch(`/data/${slug}.json`)
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching detail", err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div className="detail-loading">Loading...</div>;
  if (!data) return <div className="detail-loading">Content not found.</div>;

  return (
    <div className="detail-page">
      <div className="container">
        <Link to="/" className="back-btn"><ArrowLeft size={20} /> Back to Solutions</Link>
        
        <div className="detail-header">
          <h1>{data.title.replace(' - Elite Crete Systems', '')}</h1>
        </div>

        <div className="detail-content">
          <div className="text-content">
            {data.content.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        {data.pdfs && data.pdfs.length > 0 && (
          <div className="resources-section">
            <h3><FileText size={20} style={{verticalAlign: 'bottom', marginRight: 8}}/> Technical Resources & Documents</h3>
            <div className="resources-grid">
              {data.pdfs.map((pdf, i) => (
                <a key={i} href={`/data/pdfs/${pdf.filename}`} target="_blank" rel="noopener noreferrer" className="resource-card">
                  <div className="resource-icon">
                    <FileText size={24} color="#0A84FF" />
                  </div>
                  <div className="resource-info">
                    <h4>{pdf.title}</h4>
                    <span className="resource-meta">PDF Document</span>
                  </div>
                  <div className="resource-action">
                    <Download size={18} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {data.images && data.images.length > 0 && (
          <div className="gallery-section">
            <h3><ImageIcon size={20} style={{verticalAlign: 'bottom', marginRight: 8}}/> Image Gallery</h3>
            <div className="gallery-grid">
              {data.images.map((img, i) => (
                <img 
                  key={i} 
                  src={`/data/images/${img}`} 
                  alt={`Gallery ${i}`} 
                  loading="lazy" 
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}