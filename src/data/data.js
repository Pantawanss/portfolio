export const profile = {
  name: "สหโชค อาภัสรพรหม",
  nickname: "เอิร์ธ",
  navName: "Pantawan",
  title: "IT Support, UX/UI Designer, IoT",
  bio: "สวัสดีครับ ปัจจุบันผมกำลังศึกษาอยู่ชั้นปีที่ 4 คณะวิทยาศาสตร์และเทคโนโลยี สาขาเทคโนโลยีสารสนเทศ มหาวิทยาลัยราชภัฏวไลยอลงกรณ์ โดยผมมีความสนใจด้านภาษา C และ C++ สำหรับพัฒนาระบบ IoT บนบอร์ด Arduino มีทักษะการวิเคราะห์ ออกแบบ และทดสอบระบบสารสนเทศ สามารถพัฒนาเว็บเพจด้วย HTML และ CSS พร้อมออกแบบและจัดการฐานข้อมูล อีกทั้งยังมีความสนใจด้านการออกแบบ UX/UI เพื่อให้ระบบตอบโจทย์ผู้ใช้งานจริงครับ",
  email: "sahachok.earth@gmail.com",
  github: "https://github.com/Pantawanss",
  IG: "https://www.instagram.com/ee_aarth04/",
  location: "อ.เมืองปทุมธานี จ.ปทุมธานี 12000",
  phone: "080-050-7151",
  available: true,
  education: [
    {
      school: "มหาวิทยาลัยราชภัฏวไลยอลงกรณ์ ในพระบรมราชูปถัมภ์",
      degree: "วิทยาศาสตรบัณฑิต",
      field: "เทคโนโลยีสารสนเทศ (กลุ่มวิชาเทคโนโลยีดิจิทัล)",
      year: "2562 – ปัจจุบัน",
      gpa: "3.64",
    },
  ],
};

export const skills = {
  languages: ["C", "C++", "HTML", "CSS"],
  frameworks: ["Arduino IDE", "UX/UI Design", "System Analysis"],
  tools: ["Microsoft Word", "Canva", "Photoshop", "Figma", "draw.io", "VS Code"],
  databases: ["Database Design"],
  soft: ["การวิเคราะห์ระบบ", "การทำงานเป็นทีม", "การสื่อสาร", "การแก้ปัญหา"],
};

export const experiences = [
  {
    id: "01",
    company: "กองพัฒนานักศึกษา มรภ. วไลยอลงกรณ์ ในพระบรมราชูปถัมภ์",
    position: "นักศึกษาฝึกงาน",
    year: "2568",
    description: "ทำหน้าที่ถ่ายภาพและเผยแพร่กิจกรรมผ่านสื่อออนไลน์ที่จัดโดยหน่วยงาน พร้อมช่วยงานภายในสำนักงาน",
  },
  {
    id: "02",
    company: "ร้านสะดวกซื้อ เซเว่นอีเลฟเว่น สาขา ลาดพร้าว 80",
    position: "พนักงานพาร์ทไทม์",
    year: "2567",
    description: "ทำหน้าที่ทั่วไปภายในร้าน ทั้งการบริการลูกค้า คิดเงิน เติม/จัดสินค้า และคอยดูแลความสะอาดของร้าน",
  },
];

export const activities = [
  {
    id: "01",
    title: "คณะผู้จัดการแข่งขัน E-Sports ระดับมหาวิทยาลัย",
    year: "2567",
    description: "คณะกรรมการประจำการแข่งขันกีฬาระดับมัธยมศึกษาประจำวินิยาศาสตร์แห่งชาติ (ROV)",
  },
  {
    id: "02",
    title: "คณะผู้จัดงาน SUN Thailand",
    year: "2568",
    description: "รวบรวมคะแนนการแข่งขัน SUN Thailand (Sustainable University Network of Thailand) ประจำปี 2568 ณ มรภ. วไลยอลงกรณ์",
  },
  {
    id: "03",
    title: "การเข้าร่วมการแลกเปลี่ยนทางการศึกษาระหว่างมหาวิทยาลัย",
    year: "2568",
    description: "เข้าร่วมโครงการแลกเปลี่ยนนักศึกษากับมหาวิทยาลัย ITB STIKOM BALI ประเทศอินโดนีเซีย",
  },
];

export const projects = [
  {
    id: "01",
    title: "ระบบ IoT ด้วย Arduino",
    category: "IoT",
    description: "พัฒนาระบบ IoT บนบอร์ด Arduino โดยใช้ภาษา C/C++ สำหรับควบคุมและตรวจสอบข้อมูลจากเซ็นเซอร์",
    longDescription: "โปรเจกต์นี้พัฒนาขึ้นเพื่อศึกษาการทำงานของระบบ IoT โดยใช้บอร์ด Arduino ร่วมกับเซ็นเซอร์ต่างๆ เขียนโปรแกรมด้วยภาษา C/C++ เพื่อควบคุมและรับส่งข้อมูลจากอุปกรณ์ IoT",
    tech: ["C", "C++", "Arduino IDE"],
    role: "Coding (ทำงานเป็นกลุ่ม)",
    type: "Academic",
    github: null,
    demo: null,
    // ⭐ วางรูปไว้ที่ public/projects/iot/ แล้วใส่ชื่อไฟล์ตรงนี้
    image: ["/Projects/iot/1.jpg", "/Projects/iot/2.jpg", "/Projects/iot/3.jpg", "/Projects/iot/4.jpg"],
    year: "2566",
  },
  {
    id: "02",
    title: "ออกแบบ UX/UI ระบบสารสนเทศ",
    category: "UX/UI Design",
    description: "ออกแบบและวิเคราะห์ระบบสารสนเทศ พร้อม UI ที่ตอบโจทย์ผู้ใช้งานจริง",
    longDescription: "วิเคราะห์และออกแบบระบบสารสนเทศโดยใช้หลักการ UX/UI Design สร้าง Prototype ด้วย Figma และทดสอบกับผู้ใช้งานจริงเพื่อปรับปรุงระบบให้ดียิ่งขึ้น",
    tech: ["Figma", "draw.io", "UX/UI Design"],
    role: "UX/UI Designer & System Analyst",
    type: "Academic",
    github: null,
    demo: null,
      image: ["/Projects/UxUiDesign/1.png", "/Projects/UxUiDesign/2.png", "/Projects/UxUiDesign/3.png", "/Projects/UxUiDesign/4.png"],
  },
];

export const blogs = [
  {
    id: "01",
    title: "เริ่มต้นกับ Arduino และ IoT สำหรับมือใหม่",
    category: "IoT",
    date: "1 ม.ค. 2567",
    readTime: "5 นาที",
    summary: "แนะนำการเริ่มต้นพัฒนาระบบ IoT ด้วยบอร์ด Arduino สำหรับผู้ที่สนใจด้านนี้",
    content: `Arduino คืออะไร?\nArduino คือบอร์ดไมโครคอนโทรลเลอร์ที่ใช้งานง่าย เหมาะสำหรับการเริ่มต้นพัฒนาระบบ IoT...\n\nทำไมต้องเรียน IoT:\n1. IoT กำลังเติบโตอย่างรวดเร็ว\n2. ใช้ได้จริงในชีวิตประจำวัน\n3. เปิดโอกาสในการทำงานมากมาย`,
  },
  {
    id: "02",
    title: "หลักการออกแบบ UX/UI ที่ดีสำหรับมือใหม่",
    category: "UX/UI Design",
    date: "15 ก.พ. 2567",
    readTime: "6 นาที",
    summary: "หลักการพื้นฐานของการออกแบบ UX/UI ที่ทำให้ระบบใช้งานง่ายและตอบโจทย์ผู้ใช้",
    content: `UX/UI Design คืออะไร?\nUX คือประสบการณ์ผู้ใช้ ส่วน UI คือส่วนติดต่อผู้ใช้...\n\nหลักการสำคัญ:\n1. ความเรียบง่าย\n2. ความสม่ำเสมอ\n3. การตอบสนองที่รวดเร็ว`,
  },
  {
    id: "03",
    title: "ประสบการณ์แลกเปลี่ยนที่อินโดนีเซีย",
    category: "ประสบการณ์",
    date: "1 มี.ค. 2568",
    readTime: "4 นาที",
    summary: "ประสบการณ์การเข้าร่วมโครงการแลกเปลี่ยนนักศึกษากับมหาวิทยาลัย ITB STIKOM BALI ประเทศอินโดนีเซีย",
    content: `การเดินทางไปอินโดนีเซีย\nเป็นประสบการณ์ที่น่าจดจำมากครับ ได้พบเพื่อนใหม่จากหลายประเทศ...\n\nสิ่งที่ได้เรียนรู้:\n1. การทำงานข้ามวัฒนธรรม\n2. ทักษะภาษาอังกฤษในสถานการณ์จริง\n3. มุมมองใหม่ด้านการศึกษา`,
  },
];