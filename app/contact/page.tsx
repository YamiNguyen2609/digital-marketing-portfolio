'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="page-card">
      <h2 className="section-title">Contact</h2>

      <div className="contact-grid">
        {/* Info cards */}
        <div className="contact-info-cards">
          <div className="contact-info-card">
            <div className="contact-info-card-icon">📍</div>
            <div>
              <div className="contact-info-card-label">Location</div>
              <div className="contact-info-card-val">San Francisco, USA</div>
            </div>
          </div>
          <div className="contact-info-card">
            <div className="contact-info-card-icon">✉</div>
            <div>
              <div className="contact-info-card-label">Email</div>
              <div className="contact-info-card-val">ricardo@example.com</div>
            </div>
          </div>
          <div className="contact-info-card">
            <div className="contact-info-card-icon">📞</div>
            <div>
              <div className="contact-info-card-label">Phone</div>
              <div className="contact-info-card-val">+1 (070) 123-4567</div>
            </div>
          </div>
          <div className="contact-info-card">
            <div className="contact-info-card-icon">💬</div>
            <div>
              <div className="contact-info-card-label">WhatsApp</div>
              <div className="contact-info-card-val">555 000 555</div>
            </div>
          </div>

          {/* Map placeholder */}
          <div style={{
            background: '#252533', border: '1px solid #2a2a38', borderRadius: 14,
            height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#555', fontSize: '0.85rem', marginTop: 4,
          }}>
            🗺 San Francisco, USA
          </div>
        </div>

        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="contact-name">Full Name</label>
              <input id="contact-name" className="form-input" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="contact-email">Email</label>
              <input id="contact-email" className="form-input" name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="contact-subject">Subject</label>
            <input id="contact-subject" className="form-input" name="subject" value={form.subject} onChange={handleChange} placeholder="Project inquiry" required />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="contact-message">Message</label>
            <textarea id="contact-message" className="form-textarea" name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project..." required />
          </div>

          <button id="contact-submit" type="submit" className="form-submit">
            {sent ? '✓ Sent!' : <><span>✉</span> Send Message</>}
          </button>
        </form>
      </div>
    </div>
  );
}
