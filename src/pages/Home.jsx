import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { profile, projects, skills } from "../data/data";
import "./Home.css";

function CardSlideshow({ images, title }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [images]);

  if (!images || images.length === 0) {
    return (
      <div className="project-card__img">
        <span className="project-card__num">{title}</span>
      </div>
    );
  }

  return (
    <div className="project-card__img card-slideshow">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`slide-${i}`}
          className={`card-slide-img ${i === current ? "active" : ""}`}
        />
      ))}
      {images.length > 1 && (
        <div className="card-slide-dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={`card-slide-dot ${i === current ? "active" : ""}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="home">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            {profile.available && (
              <div className="available-badge fade-up fade-up-1">
                <span className="dot" />
                ว่าง
              </div>
            )}
            <h1 className="hero__name fade-up fade-up-2">
              สวัสดีครับ I'm<br />
              <span>{profile.name}</span>
            </h1>
            <p className="hero__title fade-up fade-up-3">{profile.title}</p>
            <p className="hero__bio fade-up fade-up-3">{profile.bio}</p>
            <div className="hero__actions fade-up fade-up-4">
              <Link to="/projects" className="btn btn-primary">ดูผลงานทั้งหมด →</Link>
              <Link to="/about" className="btn btn-outline">รู้จักผม</Link>
            </div>
          </div>

          <div className="hero__avatar fade-up fade-up-2">
            <div className="avatar-placeholder">
              <img src="/Avatar/avatar.jpg" alt="avatar" style={{
                position: "absolute",
                top: 0, left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }} />
            </div>
            <div className="hero__info-card">
              <div className="info-row"><span>📍</span> {profile.location}</div>
              <div className="info-row"><span>🎓</span> {profile.education[0].field}</div>
              <div className="info-row"><span>💼</span> Open to work</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS SNAPSHOT ── */}
      <section className="home-skills">
        <div className="container">
          <p className="section-label">ทักษะหลัก</p>
          <div className="skills-bar">
            {[...skills.languages, ...skills.frameworks].map((s) => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="home-projects">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="section-label">ผลงานเด่น</p>
              <h2 className="section-title">ผลงานในชั้นเรียน</h2>
            </div>
            <Link to="/projects" className="btn btn-outline">ดูทั้งหมด →</Link>
          </div>
          <div className="projects-grid">
            {featuredProjects.map((proj, i) => (
              <Link
                to={`/projects/${proj.id}`}
                key={proj.id}
                className={`project-card card fade-up fade-up-${i + 1}`}
              >
                <CardSlideshow
                  images={Array.isArray(proj.image) ? proj.image : proj.image ? [proj.image] : []}
                  title={proj.id}
                />
                <div className="project-card__body">
                  <div className="project-card__tech">
                    {proj.tech.map((t) => <span key={t} className="tag tag-accent">{t}</span>)}
                  </div>
                  <h3 className="project-card__title">{proj.title}</h3>
                  <p className="project-card__desc">{proj.description}</p>
                </div>
                <div className="project-card__footer">
                  <span className="project-card__link">ดูรายละเอียด →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="home-cta">
        <div className="container">
          <div className="cta-box">
            <div>
              <h2>สนใจทำงานร่วมกัน?</h2>
              <p>Freelance/Full-time</p>
            </div>
            <div className="cta-box__actions">
              <Link to="/contact" className="btn btn-primary">ติดต่อผม →</Link>
              <Link to="/resume" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}>
                ดู Resume
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}