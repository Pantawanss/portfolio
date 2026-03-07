# Portfolio Website — React + Vite

## 🗂️ โครงสร้างไฟล์

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx              ← จุดเริ่มต้น
    ├── App.jsx               ← Routing ทั้งหมด
    ├── data/
    │   └── data.js           ← ⭐ แก้ข้อมูลของคุณที่นี่
    ├── styles/
    │   └── global.css        ← CSS หลัก (สี, font, ปุ่ม)
    ├── components/
    │   ├── Navbar.jsx / .css ← เมนูด้านบน
    │   └── Footer.jsx / .css ← ส่วนล่าง
    └── pages/
        ├── Home.jsx / .css         → /
        ├── About.jsx / .css        → /about
        ├── Projects.jsx / .css     → /projects
        ├── ProjectDetail.jsx / .css → /projects/:id
        ├── Blog.jsx / .css         → /blog
        ├── BlogDetail.jsx / .css   → /blog/:id
        ├── Contact.jsx / .css      → /contact
        └── Resume.jsx / .css       → /resume
```

## 🚀 วิธีรันโปรเจกต์

```bash
# 1. ติดตั้ง dependencies
npm install

# 2. รัน development server
npm run dev

# 3. เปิดเบราว์เซอร์ไปที่
http://localhost:5173
```

## ✏️ วิธีแก้ข้อมูลของตัวเอง

เปิดไฟล์ `src/data/data.js` แล้วแก้ข้อมูลได้เลยครับ:

- **profile** — ชื่อ, bio, email, GitHub, LinkedIn
- **skills** — ทักษะและเครื่องมือที่ใช้
- **projects** — ผลงานแต่ละชิ้น
- **blogs** — บทความที่เขียน

## 🎨 วิธีเปลี่ยนสีธีม

เปิดไฟล์ `src/styles/global.css` แล้วแก้ที่ `:root { ... }`:

```css
--accent: #c8622a;    /* สีหลัก (ปัจจุบันเป็นส้มอิฐ) */
--text: #1c1c1a;      /* สีตัวอักษร */
--bg: #fafaf8;        /* สีพื้นหลัง */
```

## 🌐 วิธี Deploy (เผยแพร่เว็บ)

**Vercel (แนะนำ — ฟรี):**
1. Push โค้ดขึ้น GitHub
2. ไปที่ vercel.com แล้ว import project
3. เว็บจะ deploy อัตโนมัติ

**Netlify:**
```bash
npm run build
# แล้ว drag & drop โฟลเดอร์ dist/ ไปที่ netlify.com
```

## 📧 เชื่อมต่อ Contact Form

ไฟล์ `src/pages/Contact.jsx` มี comment บอกไว้ว่า
ต้องเชื่อมต่อกับ service เช่น:
- **EmailJS** (ฟรี, ง่าย) — emailjs.com
- **Formspree** (ฟรี) — formspree.io
