import { useEffect } from 'react';

export default function SEOHead({ title, description, path = '' }) {
  const siteTitle = 'Elite Crete Systems';
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} | Premium Resinous & Epoxy Floor Coatings`;
  const metaDescription = description || 'Elite Crete Systems is the global leader in high-performance resinous epoxy, polyurethane, and decorative concrete floor coating systems.';
  const canonical = `https://www.elitecrete.com${path}`;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (name, content, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', metaDescription);
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', metaDescription, 'property');
    setMeta('og:url', canonical, 'property');
    setMeta('twitter:title', fullTitle, 'name');
    setMeta('twitter:description', metaDescription, 'name');

    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonical);
  }, [fullTitle, metaDescription, canonical]);

  return null;
}
