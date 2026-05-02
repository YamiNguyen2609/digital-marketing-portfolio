'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useData } from '@/context/DataContext';

export default function BlogPage() {
  const { data, loading } = useData();
  const [expandedIds, setExpandedIds] = useState<string[]>([]);

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

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((prevId) => prevId !== id) : [...prev, id]
    );
  };

  return (
    <div className="page-card">
      <h2 className="section-title">Blog</h2>

      <div className="blog-list">
        {data?.achievements.map((p) => {
          const isExpanded = expandedIds.includes(p.id);

          return (
            <article key={p.id} className="blog-card" style={{ flexDirection: 'column' }}>
              <div style={{ display: 'flex', width: '100%' }}>
                <Image
                  className="blog-thumb"
                  src={p.thumbnail}
                  alt={p.brandName}
                  width={160}
                  height={160}
                  style={{ objectFit: 'cover', width: 160, flexShrink: 0 }}
                />
                <div className="blog-body">
                  <div className="blog-cat">{p.brandName}</div>
                  <h3 className="blog-title">{p.brandName}</h3>
                  <p className="blog-excerpt">{p.result}</p>
                  <div className="blog-meta">
                    <span className="blog-date">📅 {p.duration}</span>
                    <span
                      className="blog-read-more"
                      onClick={() => toggleExpand(p.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      {isExpanded ? 'Collapse ↑' : 'Read More →'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Collapsible Image Gallery */}
              {isExpanded && p.images && p.images.length > 0 && (
                <div
                  style={{
                    display: 'flex',
                    gap: '12px',
                    padding: '10px',
                    overflowX: 'auto',
                    flexWrap: 'wrap'
                  }}
                >
                  {p.images.map((imgSrc, idx) => (
                    <div style={{ position: 'relative', flex: '1 1 300px', minWidth: '100px', maxWidth: '100%', aspectRatio: '16 / 9' }}>
                      <Image
                        key={idx}
                        src={imgSrc}
                        width={1000}
                        height={1000}
                        alt={`${p.id} - gallery image ${idx + 1}`}
                        style={{
                          borderRadius: '8px',
                          flexShrink: 0,
                          border: '1px solid var(--card-border)',
                          width: '100%',
                          height: 'auto',
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
