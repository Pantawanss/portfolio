import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/data";
import "./Projects.css";

const filters = ["ทั้งหมด", "Class Workshops", "Activities"];

export default function Projects() {
  const [active, setActive] = useState("ทั้งหมด");

  const filtered = active === "ทั้งหมด"
    ? projects
    : projects.filter((p) => p.type === active);

  return (
    <div className="page-wrapper">
      <div className="container">

        <p className="section-label fade-up fade-up-1">ผลงาน</p>
        <h1 className="projects__heading fade-up fade-up-2">ผลงานในชั้นเรียนและกิจกรรมที่เข้าร่วม</h1>
        <p className="projects__sub fade-up fade-up-3">
          ผลงานทั้งหมดจากรายวิชา และโปรเจกต์ส่วนตัวที่ทำเพื่อฝึกทักษะ
        </p>

        {/* Filter */}
        <div className="projects__filter fade-up fade-up-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`filter-btn ${active === f ? "filter-btn--active" : ""}`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects__grid">
          {filtered.map((proj, i) => (
            <Link
              to={`/projects/${proj.id}`}
              key={proj.id}
              className={`proj-card card fade-up fade-up-${(i % 3) + 1}`}
            >
              <div className="proj-card__header">
                <span className="proj-card__num">{proj.id}</span>
                <div style={{ display: "flex", gap: "6px" }}>
                  <span className="tag">{proj.type}</span>
                  <span className="tag">{proj.year}</span>
                </div>
              </div>
              <div className="proj-card__body">
                <h2 className="proj-card__title">{proj.title}</h2>
                <p className="proj-card__desc">{proj.description}</p>
                <div className="proj-card__tech">
                  {proj.tech.map((t) => (
                    <span key={t} className="tag tag-accent">{t}</span>
                  ))}
                </div>
              </div>
              <div className="proj-card__footer">
                <span className="proj-card__role">🧑‍💻 {proj.role}</span>
                <span className="proj-card__cta">ดูรายละเอียด →</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
