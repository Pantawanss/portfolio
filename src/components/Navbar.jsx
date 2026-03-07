import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { profile } from "../data/data";
import "./Navbar.css";

const navLinks = [
  { label: "หน้าแรก", path: "/" },
  { label: "เกี่ยวกับฉัน", path: "/about" },
  { label: "ผลงาน", path: "/projects" },
  { label: "ติดต่อ", path: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          {profile.navName}<span>.</span>
        </Link>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`navbar__link ${location.pathname === link.path ? "navbar__link--active" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="btn btn-accent navbar__cta">
          ส่งข้อความ ↗
        </Link>

        <button
          className={`navbar__burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? "navbar__mobile--open" : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`navbar__mobile-link ${location.pathname === link.path ? "active" : ""}`}
          >
            {link.label}
          </Link>
        ))}
        <Link to="/contact" className="btn btn-accent" style={{ marginTop: "8px", justifyContent: "center" }}>
          ส่งข้อความ ↗
        </Link>
      </div>
    </nav>
  );
}
