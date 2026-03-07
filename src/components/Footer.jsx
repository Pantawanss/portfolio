import { Link } from "react-router-dom";
import { profile } from "../data/data";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__left">
            <div className="footer__logo">{profile.navName}<span>.</span></div>
            <p className="footer__bio">{profile.title}</p>
          </div>
          <div className="footer__links">
            <Link to="/projects">ผลงาน</Link>
            <Link to="/blog">บทความ</Link>
            <Link to="/contact">ติดต่อ</Link>
            <Link to="/resume">Resume</Link>
          </div>
          <div className="footer__social">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.instagram.com/ee_aarth04/" target="_blank" rel="noreferrer">Instagram ↗</a>
            <a href={`mailto:${profile.email}`}>Email ↗</a>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} {profile.name}</span>
        
        </div>
      </div>
    </footer>
  );
}
