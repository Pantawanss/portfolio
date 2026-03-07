import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "../data/data";
import "./ProjectDetail.css";

function ImageSlider({ images, title }) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="detail__img">
        <span>📁 {title}</span>
      </div>
    );
  }

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="detail__slider">
      <img src={images[current]} alt={`slide-${current}`} className="detail__slider-img" />
      {images.length > 1 && (
        <>
          <button className="slider-btn slider-btn--left" onClick={prev}>‹</button>
          <button className="slider-btn slider-btn--right" onClick={next}>›</button>
          <div className="slider-counter">{current + 1} / {images.length}</div>
          <div className="slider-dots">
            {images.map((_, i) => (
              <span key={i} className={`slider-dot ${i === current ? "active" : ""}`} onClick={() => setCurrent(i)} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="page-wrapper">
        <div className="container" style={{ textAlign: "center", paddingTop: "80px" }}>
          <h2>ไม่พบผลงานนี้</h2>
          <Link to="/projects" className="btn btn-primary" style={{ marginTop: "24px" }}>
            ← กลับไปหน้าผลงาน
          </Link>
        </div>
      </div>
    );
  }

  const images = Array.isArray(project.image)
    ? project.image
    : project.image ? [project.image] : [];

  const currentIndex = projects.findIndex((p) => p.id === id);
  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  return (
    <div className="page-wrapper">
      <div className="container">

        <button onClick={() => navigate(-1)} className="back-btn">
          ← กลับไปหน้าผลงาน
        </button>

        <div className="detail__header fade-up fade-up-1">
          <div className="detail__meta">
            <span className="tag">{project.type}</span>
            <span className="tag">{project.year}</span>
            <span className="tag">{project.category}</span>
          </div>
          <h1 className="detail__title">{project.title}</h1>
          <p className="detail__desc">{project.description}</p>
        </div>

        <div className="fade-up fade-up-2">
          <ImageSlider images={images} title={project.title} />
        </div>

        <div className="detail__grid fade-up fade-up-2">
          <div className="detail__main">
            <h2 className="detail__section-title">รายละเอียดโปรเจกต์</h2>
            <p className="detail__long-desc">{project.longDescription}</p>
          </div>

          <div className="detail__sidebar">
            <div className="sidebar-card">
              <div className="sidebar-row">
                <span className="sidebar-label">บทบาท</span>
                <span className="sidebar-value">{project.role}</span>
              </div>
              <div className="sidebar-row">
                <span className="sidebar-label">ปี</span>
                <span className="sidebar-value">{project.year}</span>
              </div>
              <div className="sidebar-row">
                <span className="sidebar-label">ประเภท</span>
                <span className="sidebar-value">{project.type}</span>
              </div>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-label" style={{ marginBottom: "10px" }}>Tech Stack</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {project.tech.map((t) => (
                  <span key={t} className="tag tag-accent">{t}</span>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ justifyContent: "center" }}>
                  GitHub ↗
                </a>
              )}
              {project.demo ? (
                <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ justifyContent: "center" }}>
                  ดู Demo ↗
                </a>
              ) : (
                <div className="btn btn-outline" style={{ justifyContent: "center", opacity: 0.5, cursor: "default" }}>
                  ยังไม่มี Demo
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="detail__nav">
          {prevProject ? (
            <Link to={`/projects/${prevProject.id}`} className="detail__nav-btn detail__nav-btn--prev">
              <span className="detail__nav-label">← ก่อนหน้า</span>
              <span className="detail__nav-title">{prevProject.title}</span>
            </Link>
          ) : <div />}
          {nextProject ? (
            <Link to={`/projects/${nextProject.id}`} className="detail__nav-btn detail__nav-btn--next">
              <span className="detail__nav-label">ถัดไป →</span>
              <span className="detail__nav-title">{nextProject.title}</span>
            </Link>
          ) : <div />}
        </div>

      </div>
    </div>
  );
}