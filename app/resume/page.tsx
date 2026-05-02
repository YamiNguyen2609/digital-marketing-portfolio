'use client'

import { useData } from '@/context/DataContext';

export default function ResumePage() {
  const { data, loading } = useData();

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
  const timelines = data?.timeline || [];

  const skills = data?.skills || [];

  return (
    <div className="page-card">
      <h2 className="section-title">Resume</h2>

      {/* Education */}
      <div className="resume-col">
        <div className="timeline">
          {timelines.map((e) => (
            <div key={e.id} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-period">{e.startDate} - {e.endDate}</div>
              <div className="timeline-role">{e.name}</div>
              <div className="timeline-place">{e.location}</div>
              <div className="timeline-desc">{e.description}</div>
            </div>
          ))}
        </div>
      </div>

      {skills.map((s) => (
        <div className="resume-col">
          <div className="resume-col-title">{s.group} Skills</div>
          <div className="skills-grid">
            {s.items?.map((it) => (
              <div key={it.id} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{it.name}</span>
                  <span className="skill-pct">{it.value}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: `${it.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
