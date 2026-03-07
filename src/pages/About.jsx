import { FaInstagram, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { profile, skills, experiences, activities } from "../data/data";
import "./About.css";

const skillCategories = [
  { label: "ภาษาโปรแกรม", items: skills.languages },
  { label: "Framework & Library", items: skills.frameworks },
  { label: "เครื่องมือ", items: skills.tools },
  { label: "ฐานข้อมูล", items: skills.databases },
  { label: "Soft Skills", items: skills.soft },
];

export default function About() {
  return (
    <div className="page-wrapper">
      <div className="container">

        <p className="section-label fade-up fade-up-1">เกี่ยวกับฉัน</p>
        <h1 className="about__heading fade-up fade-up-2">สวัสดีครับ</h1>

        <div className="about__grid">
          {/* LEFT */}
          <div className="about__left fade-up fade-up-2">
            <div className="about__avatar">
              <div className="about__avatar">
  <img src="/Avatar/avatar.jpg" alt="avatar" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
</div>
              <span>{profile.nickname.charAt(0)}</span>
            </div>
            <div className="about__contact-card">
              <div className="about__contact-row">
                  <FaEnvelope size={15} style={{ flexShrink: 0 }} />
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                    </div>
              <div className="about__contact-row">
                <FaMapMarkerAlt size={15} />
                <span>{profile.location}</span>
              </div>
              <div className="about__contact-row">
                <FaGithub size={15} />
                <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              </div>
              <div className="about__contact-row">
                <FaInstagram size={15} />
                <a href="https://www.instagram.com/ee_aarth04/" target="_blank" rel="noreferrer">Instagram</a>
              </div>
            </div>

            {/* ปุ่มดาวน์โหลด Resume */}
            <a href="/Resume สหโชค อาภัสรพรหม.pdf" download className="btn btn-primary">
             ⬇ ดาวน์โหลด Resume
            </a>
          </div>

          {/* RIGHT */}
          <div className="about__right fade-up fade-up-3">
            <div className="about__bio-box">
              <p>{profile.bio}</p>
              <p style={{ marginTop: "16px", color: "var(--muted)", fontSize: "15px" }}>
                ปัจจุบันกำลังศึกษาอยู่ที่ {profile.education[0].school} สาขา {profile.education[0].field}
                มีความสนใจในด้าน Full-Stack Development และ UI/UX Design
                และกำลังมองหาโอกาสใหม่ๆ ทั้งงาน Freelance และ Internship ครับ
              </p>
            </div>

            {/* การศึกษา */}
            <div className="about__section">
              <h2 className="about__section-title">การศึกษา</h2>
              {profile.education.map((edu, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-body">
                    <div className="timeline-year">{edu.year}</div>
                    <div className="timeline-school" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <img src="/VRU.png" alt="university logo" style={{ width: "24px", height: "24px", objectFit: "contain", flexShrink: 0 }} />
                      <span>{edu.school}</span>
                    </div>
                    <div className="timeline-degree">{edu.degree} สาขา {edu.field}</div>
                    {edu.gpa && <div className="timeline-gpa">เกรดเฉลี่ย {edu.gpa}</div>}
                  </div>
                </div>
              ))}
            </div>

            {/* ประสบการณ์ทำงาน */}
            {experiences && experiences.length > 0 && (
              <div className="about__section">
                <h2 className="about__section-title">ประสบการณ์ทำงาน</h2>
                {experiences.map((exp) => (
                  <div key={exp.id} className="timeline-item">
                    <div className="timeline-dot" />
                    <div className="timeline-body">
                      <div className="timeline-year">{exp.year}</div>
                      <div className="timeline-school">{exp.company}</div>
                      <div className="timeline-degree">{exp.position}</div>
                      <div style={{ fontSize: "13px", color: "var(--muted)", marginTop: "4px", lineHeight: "1.6" }}>
                        {exp.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* กิจกรรม */}
            {activities && activities.length > 0 && (
              <div className="about__section">
                <h2 className="about__section-title">กิจกรรม</h2>
                {activities.map((act) => (
                  <div key={act.id} className="timeline-item">
                    <div className="timeline-dot" />
                    <div className="timeline-body">
                      <div className="timeline-year">{act.year}</div>
                      <div className="timeline-school">{act.title}</div>
                      <div style={{ fontSize: "13px", color: "var(--muted)", marginTop: "4px", lineHeight: "1.6" }}>
                        {act.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>

        <div className="divider" />

        {/* ทักษะ */}
        <div className="fade-up fade-up-2">
          <p className="section-label">ทักษะ</p>
          <h2 className="about__section-title" style={{ fontSize: "28px", marginBottom: "32px" }}>
            เครื่องมือที่ใช้งานได้
          </h2>
          <div className="skills-grid">
            {skillCategories.map((cat) => (
              <div key={cat.label} className="skill-group">
                <div className="skill-group__label">{cat.label}</div>
                <div className="skill-group__tags">
                  {cat.items.map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="divider" />

        {/* CTA */}
        <div className="about__cta fade-up fade-up-1">
          <p>สนใจดูผลงานหรือร่วมงานด้วยกัน?</p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link to="/projects" className="btn btn-primary">ดูผลงาน →</Link>
            <Link to="/contact" className="btn btn-outline">ติดต่อผม</Link>
          </div>
        </div>

      </div>
    </div>
  );
}