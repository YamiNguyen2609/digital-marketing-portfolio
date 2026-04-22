'use client';
import Image from 'next/image';
import { useState } from 'react';

const projects = [
  { id: 1, title: 'Gourmania',  category: 'Applications',    img: '/images/gourmania.png' },
  { id: 2, title: 'Nurot',     category: 'Web Development',  img: '/images/nurot.png'    },
  { id: 3, title: 'Lorex',     category: 'Web Development',  img: '/images/lorex.png'    },
  { id: 4, title: 'Canva',     category: 'UI/UX Design',     img: '/images/canva.png'    },
  { id: 5, title: 'Klama',     category: 'Web Development',  img: '/images/klama.png'    },
  { id: 6, title: 'Elemento',  category: 'Applications',    img: '/images/gourmania.png' },
  { id: 7, title: 'Alpha',     category: 'Web Development',  img: '/images/nurot.png'    },
  { id: 8, title: 'Micro',     category: 'UI/UX Design',     img: '/images/canva.png'    },
  { id: 9, title: 'Omega',     category: 'UI/UX Design',     img: '/images/lorex.png'    },
];

const filters = ['All', 'Applications', 'UI/UX Design', 'Web Development'];

export default function PortfolioPage() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

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
              src={p.img}
              alt={p.title}
              width={400}
              height={300}
              style={{ objectFit: 'cover' }}
            />
            <div className="portfolio-info">
              <div className="portfolio-category">{p.category}</div>
              <div className="portfolio-title">{p.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
