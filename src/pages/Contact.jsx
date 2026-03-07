import { FaInstagram, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { profile } from "../data/data";
import "./Contact.css";

const SERVICE_ID  = "service_1fgg2vv";
const TEMPLATE_ID = "template_eyzun75";
const PUBLIC_KEY  = "Mg3Z5yUrHdQT1CxpT";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          subject:    form.subject,
          message:    form.message,
        },
        PUBLIC_KEY
      );
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError("ส่งไม่สำเร็จ กรุณาลองใหม่อีกครั้งครับ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="container">

        <p className="section-label fade-up fade-up-1">ติดต่อ</p>
        <h1 className="contact__heading fade-up fade-up-2">มาคุยกันเถอะ</h1>
        <p className="contact__sub fade-up fade-up-3">
          สนใจจ้างงาน ร่วมโปรเจกต์ หรืออยากพูดคุยเรื่อง IT ก็ติดต่อมาได้เลยครับ
        </p>

        <div className="contact__grid">

          {/* FORM */}
          <div className="contact__form-wrap fade-up fade-up-2">
            {sent ? (
              <div className="sent-box">
                <div className="sent-icon">✉️</div>
                <h2>ส่งข้อความแล้ว!</h2>
                <p>ผมจะติดต่อกลับภายใน 24-48 ชั่วโมงครับ</p>
                <button className="btn btn-outline" onClick={() => setSent(false)}>
                  ส่งข้อความใหม่
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>ชื่อ-นามสกุล</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="คุณ..."
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>เรื่องที่ต้องการติดต่อ</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="เช่น สนใจจ้างทำเว็บไซต์, ขอ internship..."
                    required
                  />
                </div>
                <div className="form-group">
                  <label>ข้อความ</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="รายละเอียดเพิ่มเติม..."
                    required
                  />
                </div>

                {error && (
                  <p style={{ color: "red", fontSize: "13px", marginTop: "-8px" }}>{error}</p>
                )}

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                  disabled={loading}
                >
                  {loading ? "กำลังส่ง..." : "ส่งข้อความ →"}
                </button>
              </form>
            )}
          </div>

          {/* INFO */}
          <div className="contact__info fade-up fade-up-3">

            {profile.available && (
              <div className="available-badge" style={{ marginBottom: "24px" }}>
                <span className="dot" />
                พร้อมรับงานแล้วครับ
              </div>
            )}

            <div className="contact-info-card">
              <h3>ช่องทางติดต่อ</h3>
              <div className="contact-info-rows">

                <a href={`mailto:${profile.email}`} className="contact-info-row">
                  <span className="contact-info-icon"><FaEnvelope size={18} /></span>
                  <div>
                    <div className="contact-info-label">Email</div>
                    <div className="contact-info-value">{profile.email}</div>
                  </div>
                </a>

                <a href={profile.github} target="_blank" rel="noreferrer" className="contact-info-row">
                  <span className="contact-info-icon"><FaGithub size={18} /></span>
                  <div>
                    <div className="contact-info-label">GitHub</div>
                    <div className="contact-info-value">@Pantawanss</div>
                  </div>
                </a>

                <a href="https://www.instagram.com/ee_aarth04/" target="_blank" rel="noreferrer" className="contact-info-row">
                  <span className="contact-info-icon"><FaInstagram size={18} /></span>
                  <div>
                    <div className="contact-info-label">Instagram</div>
                    <div className="contact-info-value">@ee_arth04</div>
                  </div>
                </a>

                <div className="contact-info-row">
                  <span className="contact-info-icon"><FaMapMarkerAlt size={18} /></span>
                  <div>
                    <div className="contact-info-label">ที่อยู่</div>
                    <div className="contact-info-value">{profile.location}</div>
                  </div>
                </div>

              </div>
            </div>

            <div className="contact-note">
              <strong>⏱ เวลาตอบกลับ</strong>
              <p>ปกติตอบภายใน 24-48 ชั่วโมงครับ หากเร่งด่วนสามารถ DM ผ่าน Instagram ได้เลย</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}