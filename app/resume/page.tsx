export default function ResumePage() {
  const education = [
    { period: '2019 — 2023', role: 'University School of the Arts', place: 'New York, USA', desc: 'Aspiring artist with a strong passion for visual arts and design. Developed artistic abilities and collaborated with like-minded individuals.' },
    { period: '2016 — 2019', role: 'New York Academy of Art', place: 'New York, USA', desc: 'Enhanced skills in fine arts through a rigorous program focusing on classical techniques and contemporary practices.' },
    { period: '2013 — 2016', role: 'High School of Art and Design', place: 'New York, USA', desc: 'Developed artistic skills and explored diverse creative disciplines in a dedicated arts high school environment.' },
  ];

  const experience = [
    { period: '2018 — Present', role: 'Creative Director', place: 'Creative Agency Co.', desc: 'Innovative Creative Director with 10+ years of experience leading creative teams and developing compelling visual narratives for top brands.' },
    { period: '2016 — 2018', role: 'Art Director', place: 'DesignStudio Inc.', desc: 'Led design projects and managed creative teams. Delivered innovative visual solutions that enhanced brand identity and engaged target audiences.' },
    { period: '2013 — 2016', role: 'Web Designer', place: 'Digital Craft Ltd.', desc: 'Designed user-friendly and visually appealing websites, proficient in both front-end and back-end development best practices.' },
  ];

  const designSkills  = [
    { name: 'Figma',          pct: 90 },
    { name: 'Adobe XD',       pct: 85 },
    { name: 'Photoshop',      pct: 80 },
    { name: 'Illustrator',    pct: 75 },
    { name: 'Sketch',         pct: 70 },
    { name: 'InVision',       pct: 65 },
  ];

  const codingSkills = [
    { name: 'HTML / CSS',     pct: 95 },
    { name: 'JavaScript',     pct: 88 },
    { name: 'React / Next.js',pct: 82 },
    { name: 'TypeScript',     pct: 75 },
    { name: 'Node.js',        pct: 65 },
    { name: 'SQL',            pct: 60 },
  ];

  return (
    <div className="page-card">
      <h2 className="section-title">Resume</h2>

      {/* Education */}
      <div className="resume-col">
        <div className="resume-col-title"><span>🎓</span> Education</div>
        <div className="timeline">
          {education.map((e) => (
            <div key={e.role} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-period">{e.period}</div>
              <div className="timeline-role">{e.role}</div>
              <div className="timeline-place">{e.place}</div>
              <div className="timeline-desc">{e.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="resume-col">
        <div className="resume-col-title"><span>💼</span> Experience</div>
        <div className="timeline">
          {experience.map((e) => (
            <div key={e.role} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-period">{e.period}</div>
              <div className="timeline-role">{e.role}</div>
              <div className="timeline-place">{e.place}</div>
              <div className="timeline-desc">{e.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="resume-col">
        <div className="resume-col-title"><span>🎨</span> Design Skills</div>
        <div className="skills-grid">
          {designSkills.map((s) => (
            <div key={s.name} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{s.name}</span>
                <span className="skill-pct">{s.pct}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: `${s.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="resume-col">
        <div className="resume-col-title"><span>💻</span> Coding Skills</div>
        <div className="skills-grid">
          {codingSkills.map((s) => (
            <div key={s.name} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{s.name}</span>
                <span className="skill-pct">{s.pct}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: `${s.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
