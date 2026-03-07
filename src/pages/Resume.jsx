import { profile, skills, projects } from "../data/data";
import "./Resume.css";

export default function Resume() {
  return (
    <div className="page-wrapper">
      <div className="container">

        <div className="resume__top fade-up fade-up-1">
          <div>
            <p className="section-label">Resume</p>
            <h1 className="resume__heading">ประวัติย่อ</h1>
            <p className="resume__sub">อัปเดตล่าสุด: กุมภาพันธ์ 2567</p>
          </div>
          <a href="/Resume สหโชค อาภัสรพรหม.pdf" download className="btn btn-primary">
            ⬇ ดาวน์โหลด PDF
          </a>
        </div>

        {/* Resume Preview */}
        <div className="resume-doc fade-up fade-up-2">

          {/* Header */}
          <div className="resume-doc__header">
            <div>
              <h2 className="resume-doc__name">{profile.name}</h2>
              <p className="resume-doc__title">{profile.title}</p>
            </div>
            <div className="resume-doc__contact">
              <span>📧 {profile.email}</span>
              <span>📍 {profile.location}</span>
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>

          {/* Education */}
          <div className="resume-section">
            <h3 className="resume-section__title">การศึกษา</h3>
            {profile.education.map((edu, i) => (
              <div key={i} className="resume-item">
                <div className="resume-item__left">
                  <div className="resume-item__title">{edu.school}</div>
                  <div className="resume-item__sub">{edu.degree} · สาขา{edu.field}</div>
                </div>
                <div className="resume-item__right">
                  <div className="resume-item__period">{edu.year}</div>
                  {edu.gpa && <div className="resume-item__note">GPA {edu.gpa}</div>}
                </div>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="resume-section">
            <h3 className="resume-section__title">ผลงาน / โปรเจกต์</h3>
            {projects.map((proj) => (
              <div key={proj.id} className="resume-item resume-item--project">
                <div className="resume-item__left">
                  <div className="resume-item__title">{proj.title}</div>
                  <div className="resume-item__sub">{proj.role}</div>
                  <p className="resume-item__desc">{proj.description}</p>
                  <div className="resume-item__tech">
                    {proj.tech.map((t) => <span key={t} className="tag tag-accent">{t}</span>)}
                  </div>
                </div>
                <div className="resume-item__right">
                  <div className="resume-item__period">{proj.year}</div>
                  <div className="resume-item__note">{proj.type}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="resume-section">
            <h3 className="resume-section__title">ทักษะ</h3>
            <div className="resume-skills">
              <div className="resume-skill-row">
                <span className="resume-skill-label">Languages</span>
                <span>{skills.languages.join(", ")}</span>
              </div>
              <div className="resume-skill-row">
                <span className="resume-skill-label">Frameworks</span>
                <span>{skills.frameworks.join(", ")}</span>
              </div>
              <div className="resume-skill-row">
                <span className="resume-skill-label">Tools</span>
                <span>{skills.tools.join(", ")}</span>
              </div>
              <div className="resume-skill-row">
                <span className="resume-skill-label">Databases</span>
                <span>{skills.databases.join(", ")}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
