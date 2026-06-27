import React, { useEffect } from 'react';
import Contact from '../components/Contact';
import SEOHead from '../components/SEOHead';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead 
        path="/contact" 
        title="Contact Us" 
        description="Get in touch with Elite Crete Systems for consultations, product info, or project estimates."
      />
      <Contact />
    </>
  );
}
