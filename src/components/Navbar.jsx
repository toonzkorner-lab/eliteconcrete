import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [catalogItems, setCatalogItems] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/catalog.json')
      .then(res => res.json())
      .then(data => setCatalogItems(data))
      .catch(err => console.error(err));
  }, []);

  const filteredItems = catalogItems.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <Link to="/" className="logo-link" onClick={() => window.scrollTo(0,0)} aria-label="Elite Crete Systems - Home">
          <img src="/logo.jpg" alt="Elite Crete Systems" className="nav-logo" />
        </Link>
        <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => { window.scrollTo(0,0); setMobileOpen(false); }}>Home</Link>
          <div className="nav-dropdown">
            <a href="/#products" onClick={() => setMobileOpen(false)}>Products</a>
            <div className="dropdown-menu">
              <Link to="/item/microcement" onClick={() => { window.scrollTo(0,0); setMobileOpen(false); }}>Microcement</Link>
              <Link to="/item/polyurethanes-polyaspartics-and-polyurea-coatings" onClick={() => { window.scrollTo(0,0); setMobileOpen(false); }}>Polyurethanes</Link>
              <Link to="/item/epoxy-clear-pigmented-coatings" onClick={() => { window.scrollTo(0,0); setMobileOpen(false); }}>Epoxy</Link>
            </div>
          </div>
          <div className="nav-dropdown">
            <a href="#solutions" onClick={(e) => { e.preventDefault(); }}>Solutions</a>
            <div className="dropdown-menu">
              <Link to="/item/fire-rescue-ems" onClick={() => { window.scrollTo(0,0); setMobileOpen(false); }}>Fire Rescue & EMS</Link>
              <Link to="/item/aviation-and-aerospace" onClick={() => { window.scrollTo(0,0); setMobileOpen(false); }}>Aviation & Aerospace</Link>
              <Link to="/item/automotive" onClick={() => { window.scrollTo(0,0); setMobileOpen(false); }}>Automotive</Link>
              <Link to="/item/healthcare" onClick={() => { window.scrollTo(0,0); setMobileOpen(false); }}>Healthcare</Link>
              <Link to="/item/retail-and-commercial" onClick={() => { window.scrollTo(0,0); setMobileOpen(false); }}>Commercial Spaces</Link>
            </div>
          </div>
          <div className="nav-dropdown">
            <a href="/#industries" onClick={() => setMobileOpen(false)}>Industries</a>
            <div className="dropdown-menu">
              <Link to="/item/retail-and-commercial" onClick={() => { window.scrollTo(0,0); setMobileOpen(false); }}>Commercial</Link>
              <Link to="/item/industrial" onClick={() => { window.scrollTo(0,0); setMobileOpen(false); }}>Industrial</Link>
              <Link to="/item/residential-interior" onClick={() => { window.scrollTo(0,0); setMobileOpen(false); }}>Residential</Link>
            </div>
          </div>
          <Link to="/gallery" onClick={() => { window.scrollTo(0,0); setMobileOpen(false); }}>Gallery</Link>
          <div className="nav-dropdown">
            <Link to="/resources" onClick={() => { window.scrollTo(0,0); setMobileOpen(false); }}>Resources</Link>
            <div className="dropdown-menu">
              <Link to="/resources/microcement" onClick={() => { window.scrollTo(0,0); setMobileOpen(false); }}>Microcement Docs</Link>
              <Link to="/resources/industrial" onClick={() => { window.scrollTo(0,0); setMobileOpen(false); }}>Industrial Docs</Link>
              <Link to="/resources/epoxy-clear-pigmented-coatings" onClick={() => { window.scrollTo(0,0); setMobileOpen(false); }}>Epoxy Docs</Link>
            </div>
          </div>
          
          <div className="search-wrapper" onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) {
              setShowDropdown(false);
            }
          }}>
            <form className="nav-search" onSubmit={(e) => {
              e.preventDefault();
              if (searchQuery.trim()) {
                navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
                setSearchQuery('');
                setShowDropdown(false);
                setMobileOpen(false);
              }
            }}>
              <Search size={18} color="#A0A0A5" />
              <input 
                type="text" 
                placeholder="Search..." 
                value={searchQuery}
                onFocus={() => setShowDropdown(true)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowDropdown(true);
                }}
              />
            </form>
            {showDropdown && searchQuery.trim() && (
              <div className="search-dropdown">
                {filteredItems.length > 0 ? (
                  filteredItems.map(item => (
                    <Link 
                      key={item.file} 
                      to={`/item/${item.file.replace('.json', '')}`}
                      className="search-dropdown-item"
                      onClick={() => {
                        setSearchQuery('');
                        setShowDropdown(false);
                        setMobileOpen(false);
                      }}
                    >
                      <img 
                        src={item.primary_image ? `/data/images/${item.primary_image}` : "https://via.placeholder.com/40x40"} 
                        alt="" 
                      />
                      <span>{item.title.replace(' - Elite Crete Systems', '')}</span>
                    </Link>
                  ))
                ) : (
                  <div className="search-dropdown-empty">No products found</div>
                )}
              </div>
            )}
          </div>

          <a href="#contact" className="btn btn-primary nav-btn" onClick={() => setMobileOpen(false)}>Contact Us</a>
        </div>
        <button className="mobile-menu-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle mobile menu" aria-expanded={mobileOpen}>
          {mobileOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
        </button>
      </div>
    </nav>
  );
}