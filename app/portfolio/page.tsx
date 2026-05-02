'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useData } from '@/context/DataContext';


export default function PortfolioPage() {
  const { data, loading } = useData();
  const [active, setActive] = useState('All');

  const portfolios = data?.portfolio || [];

  const filters = ['All', ...portfolios.map((p) => p.group)];

  const filtered = active === 'All' ? portfolios.map((p) => p.items).flat() : portfolios.filter((p) => p.group === active).map((p) => p.items).flat();

  if (loading) {
    return (
      <aside className="sidebar">
        <div className="sidebar-avatar-wrap">
          <div className="loading-placeholder" />
        </div>
        <h1 className="sidebar-name">Loading...</h1>
      </aside>
    );
  }

  return (
    <div className="page-card">
      <h2 className="section-title">Portfolio</h2>

      {/* Filters */}
      <div className="portfolio-filters">
        {filters.map((f) => (
          <button
            key={f}
            className={`filter-btn${active === f ? ' active' : ''}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="portfolio-grid">
        {filtered.map((p) => (
          <div key={p.id} className="portfolio-item">
            <Image
              className="portfolio-thumb"
              src={p.image}
              alt={p.name}
              width={400}
              height={300}
              style={{ objectFit: 'cover' }}
            />
            <div className="portfolio-info">
              <div className="portfolio-category">{p.category}</div>
              <div className="portfolio-title">{p.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
