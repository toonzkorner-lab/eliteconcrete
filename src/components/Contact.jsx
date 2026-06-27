import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: 'Microcement',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', company: '', interest: 'Microcement', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get in Touch</h2>
          <p>Ready to transform your surfaces? Contact our experts for consultations, product info, or project estimates.</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <Phone className="info-icon" />
              <div>
                <h3>Call Us</h3>
                <p><a href="tel:210-612-5947">210-612-5947</a></p>
                <span className="info-subtext">Mon-Fri, 8am-5pm CST</span>
              </div>
            </div>
            
            <div className="info-card">
              <Mail className="info-icon" />
              <div>
                <h3>Email Us</h3>
                <p><a href="mailto:carlos.pena@elitecrete.com">carlos.pena@elitecrete.com</a></p>
                <span className="info-subtext">We'll respond within 24 hours</span>
              </div>
            </div>
            
            <div className="info-card">
              <MapPin className="info-icon" />
              <div>
                <h3>Headquarters</h3>
                <p>10811 Perrin Beitel Rd<br/>San Antonio, TX</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {isSuccess ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. One of our specialists will be in contact with you shortly.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="(555) 123-4567" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="interest">Area of Interest</label>
                  <select id="interest" name="interest" value={formData.interest} onChange={handleChange}>
                    <option value="Microcement">Microcement</option>
                    <option value="Epoxy Coatings">Epoxy Coatings</option>
                    <option value="Polyurethane">Polyurethane Systems</option>
                    <option value="Industrial">Industrial Flooring</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" required rows="4" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..."></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
