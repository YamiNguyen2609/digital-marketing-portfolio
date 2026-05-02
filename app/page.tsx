'use client';

import { useData } from '@/context/DataContext';

export default function AboutPage() {
  const { data, loading } = useData();

  const services = data?.services || [];

  const clients = data?.clients?.map(c => c.name) || [];
  const personal = data?.personal;

  if (loading) {
    return (
      <div className="page-card">
        <div className="loading-placeholder">Loading...</div>
      </div>
    );
  }

  return (
    <div className="page-card">
      <h2 className="section-title">About Me</h2>

      <div className="about-bio">
        {personal?.bio || ''}
      </div>

      {/* What I'm Doing */}
      <h3 className="section-title" style={{ fontSize: '1.1rem', marginBottom: '20px' }}>What I'm Doing</h3>
      <div className="what-doing-grid">
        {services.map((s, idx) => (
          <div key={idx} className="service-card">
            <div className="service-icon"><i className={`fa fa-${s.icon}`} /></div>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </div>
        ))}
      </div>

      {/* Clients */}
      <h3 className="section-title" style={{ fontSize: '1.1rem', marginBottom: '20px' }}>Clients</h3>
      <div className="clients-grid">
        {clients.map((c) => (
          <div key={c} className="client-badge">{c}</div>
        ))}
      </div>

      <div className="focus-vission-grid">
        <div className="focus-vission-card left">
          <h3 className="section-title" style={{ fontSize: '1.1rem', marginBottom: '20px' }}>Focus</h3>
          <p className="about-bio">{personal?.focus || ''}</p>
        </div>
        <div className="focus-vission-card right">
          <h3 className="section-title" style={{ fontSize: '1.1rem', marginBottom: '20px' }}>Vision</h3>
          <p className="about-bio">{personal?.vision || ''}</p>
        </div>
      </div>

    </div>
  );
}