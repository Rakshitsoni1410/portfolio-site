import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  FaSun,
  FaMoon,
  FaGithub,
  FaLinkedin,
  FaHackerrank,
  FaGlobe,
  FaJava,
  FaPython,
  FaDatabase,
  FaJs,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaPhp,
  FaCode,
  FaBars,
  FaTimes,
  FaExternalLinkAlt,
  FaDownload,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaRocket,
  FaMobile,
  FaServer,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaTrophy,
  FaMedal,
  FaStar,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiSpringboot,
  SiTailwindcss,
  SiFlutter,
  SiDjango,
  SiRedux,
  SiSocketdotio,
  SiCoursera,
  SiGeeksforgeeks,
} from "react-icons/si";
/* ─── DATA ──────────────────────────────────────────────────── */

const NAV_LINKS = [
  "About",
  "Skills",
  "Services",
  "Projects",
  "Stats",
  "Timeline",
  "Certifications",
  "Contact",
];

const TYPING_TEXTS = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "Java Spring Boot Dev",
  "Flutter Mobile Dev",
  "Open to Work 🚀",
];

const MARQUEE_ITEMS = [
  "🧠 357+ LeetCode Problems",
  "⭐ Contest Rating 1416",
  "🔥 115-Day Streak",
  "📦 1,009+ GitHub Contributions",
  "🚀 9+ Projects Shipped", // change 7 to 8
  "💸 Bill Splitter — Java + React", // add this
  "💻 MERN Stack Expert",
  "☕ Java Spring Boot",
  "📱 Flutter Mobile Dev",
  "🌐 10+ Technologies",
  "✅ Available for Hire",
];

const SKILLS = [
  {
    cat: "Frontend",
    items: [
      { name: "React.js", icon: <FaReact />, color: "#61dafb" },
      { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
      { name: "Redux Toolkit", icon: <SiRedux />, color: "#764abc" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06b6d4" },
      { name: "HTML5", icon: <FaHtml5 />, color: "#e34f26" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#1572b6" },
      { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952b3" },
    ],
  },
  {
    cat: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs />, color: "#68a063" },
      { name: "Express.js", icon: <FaServer />, color: "#888888" },
      { name: "Spring Boot", icon: <SiSpringboot />, color: "#6db33f" },
      { name: "Java", icon: <FaJava />, color: "#f89820" },
      { name: "Python", icon: <FaPython />, color: "#3776ab" },
      { name: "Django", icon: <SiDjango />, color: "#44b78b" },
      { name: "PHP", icon: <FaPhp />, color: "#777bb4" },
    ],
  },
  {
    cat: "Database & Tools",
    items: [
      { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
      { name: "MySQL", icon: <SiMysql />, color: "#4479a1" },
      { name: "GitHub", icon: <FaGithub />, color: "#6e7681" },
      { name: "JWT Auth", icon: <FaShieldAlt />, color: "#e535ab" },
      { name: "REST APIs", icon: <FaServer />, color: "#0ea5e9" },
      { name: "Git", icon: <FaCode />, color: "#f05032" },
      { name: "Socket.io", icon: <SiSocketdotio />, color: "#010101" },
    ],
  },
  {
    cat: "Mobile",
    items: [
      { name: "Flutter", icon: <SiFlutter />, color: "#02569b" },
      { name: "Dart", icon: <FaCode />, color: "#0175c2" },
      { name: "REST APIs", icon: <FaServer />, color: "#0ea5e9" },
      { name: "Firebase", icon: <FaDatabase />, color: "#ffca28" },
    ],
  },
];

const SERVICES = [
  {
    icon: <FaReact size={26} />,
    color: "#0ea5e9",
    title: "Full Stack Web Apps",
    desc: "End-to-end MERN stack applications — from REST API design to responsive React UI. Scalable, fast, and production-ready.",
  },
  {
    icon: <FaServer size={26} />,
    color: "#8b5cf6",
    title: "Backend API Development",
    desc: "RESTful APIs with Node.js/Express or Java Spring Boot. JWT authentication, role-based access, clean architecture.",
  },
  {
    icon: <FaMobile size={26} />,
    color: "#22c55e",
    title: "Mobile App Development",
    desc: "Cross-platform Flutter apps for Android & iOS. Real-time features, offline-first storage, smooth UX.",
  },
  {
    icon: <FaShieldAlt size={26} />,
    color: "#f59e0b",
    title: "Real-Time Systems",
    desc: "Live features using Socket.io WebSockets — chat apps, ride tracking, live dashboards, notifications.",
  },
  {
    icon: <FaDatabase size={26} />,
    color: "#ec4899",
    title: "Database Design",
    desc: "MongoDB and MySQL schema design, query optimization, and integration with Node.js, Spring Boot, or Django backends.",
  },
  {
    icon: <FaRocket size={26} />,
    color: "#f97316",
    title: "MVP Development",
    desc: "Got an idea? I'll help you build a working MVP fast — full stack, deployed, and ready to demo to investors.",
  },
];

const PROJECTS = [
  {
    title: "Bill Splitter — Full Stack App",
    subtitle: "Java + React · Full Stack",
    icon: "💸",
    status: "Live",
    desc: "Production-grade bill splitting app with JWT auth, group expense tracking, equal/percentage/exact split logic, UPI-style payment simulation with wallet system, activity feed, and budget management. Built with Java Spring Boot + React.js.",
    tech: [
      "Java",
      "Spring Boot",
      "React.js",
      "MySQL",
      "JWT",
      "Socket.io",
      "Vite",
    ],
    color: "#6c63ff",
    github: "https://github.com/Rakshitsoni1410/bill-splitter",
    live: "https://bills-splitters-wise.netlify.app/",
    preview: "billsplitter",
  },
  {
    title: "BillKaro — GST Billing Software",
    subtitle: "MERN Stack · GST Compliant",
    icon: "🧾",
    status: "Live",
    desc: "Full-stack GST billing and invoicing platform for Indian businesses. Auto-generated invoice numbers, CGST/SGST calculation, customer database, khata (credit) ledger tracking, and WhatsApp bill sharing. Built with React, Node.js/Express, and MongoDB.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    color: "#0EA5A0",
    github: "https://github.com/Rakshitsoni1410/bills-software",
    live: "https://bills-software.netlify.app",
    preview: "billkaro",
  },

  {
    title: "Learning Management System",
    subtitle: "MERN · Redux Toolkit",
    icon: "📚",
    status: "Live",
    desc: "Full-featured LMS with course browsing, student enrollment, instructor dashboards, Redux state management, and real-time progress tracking.",
    tech: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB"],
    color: "#0ea5e9",
    github: "https://github.com/Rakshitsoni1410/courseplatform",
    live: "https://nextskilss.netlify.app/",
    preview: "lms",
  },
  {
    title: "Real-Time Ride Booking App",
    subtitle: "Real-time · Socket.io",
    icon: "🚖",
    status: "Completed",
    desc: "Uber-like ride booking with live driver location via WebSockets, JWT-based auth, and real-time booking status flow between rider and driver.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "JWT"],
    color: "#f59e0b",
    github: "https://github.com/Rakshitsoni1410/Get-your-ride",
    live: "https://get-your-rides.netlify.app/",
    preview: "ride",
  },
  {
    title: "Gold Weight Management",
    subtitle: "Business Tool · PDF Export",
    icon: "⚖️",
    status: "Live",
    desc: "Professional tool for gold jewellers to track input/output weight, calculate karat-wise loss per job, and export structured PDF reports.",
    tech: ["React", "Spring Boot", "MySQL", "Tailwind CSS", "Axios"],
    color: "#f97316",
    github: "https://github.com/Rakshitsoni1410/Weight-Management-Software",
    live: "https://weight-management-software.netlify.app",
    preview: "gold",
  },
  {
    title: "Jewellery E-Commerce",
    subtitle: "PHP · MySQL · Tailwind",
    icon: "💍",
    status: "Live",
    desc: "Responsive e-commerce site for a family jewellery business with product catalog, admin upload panel, and PHP/MySQL backend.",
    tech: ["HTML", "Tailwind CSS", "JavaScript", "PHP", "MySQL"],
    color: "#ec4899",
    github: "https://github.com/Rakshitsoni1410/gold-jewellery-websites",
    live: "https://rcsoni.netlify.app",
    preview: "ecommerce",
  },
  {
    title: "Smart Khata Book",
    subtitle: "Flutter · Cross-platform",
    icon: "📒",
    status: "Completed",
    desc: "Cross-platform Flutter mobile app for small businesses to manage credit/debit ledger entries with real-time balance calculation and offline-first local storage.",
    tech: ["Flutter", "Dart"],
    color: "#22c55e",
    github: "https://github.com/Rakshitsoni1410/smartkhatabook",
    live: "https://smartkhatabooks.netlify.app/",
    preview: "khata",
  },
  {
    title: "AI Chatbot Support System",
    subtitle: "Spring Boot · JWT Auth",
    icon: "🤖",
    status: "Completed",
    desc: "Full-stack AI chatbot with JWT auth, role-based access control, Spring Security REST APIs, and real-time chat UI. Built for Gemini/OpenAI API integration.",
    tech: [
      "Java",
      "Spring Boot",
      "React.js",
      "MySQL",
      "JWT",
      "Spring Security",
    ],
    color: "#8b5cf6",
    github: "https://github.com/Rakshitsoni1410/ai-chat-support-system",
    live: "",
    preview: "chatbot",
  },
  {
    title: "Hospital Management System",
    subtitle: "Python · Django · SQLite",
    icon: "🏥",
    status: "Completed",
    desc: "Web-based system for managing patient records, appointments, and hospital staff workflows using Django ORM and admin interface.",
    tech: ["Python", "Django", "HTML", "CSS", "SQLite"],
    color: "#ef4444",
    github: "https://github.com/Rakshitsoni1410/hospital-in-django",
    live: "",
    preview: "hospital",
  },
];
{
  /* ── PROJECT SVG PREVIEWS ── */
}

const ProjectPreview = ({ type, color }) => {
  const c = color;
  const c2 = color + "44";
  const c3 = color + "22";

  const previews = {
    billsplitter: (
      <svg viewBox="0 0 280 140" className="w-full h-full">
        {/* Navbar */}
        <rect width="280" height="140" fill="#0f172a" rx="8" />
        <rect width="280" height="28" fill={c} rx="8" />
        <rect y="20" width="280" height="8" fill={c} />
        <circle cx="16" cy="14" r="5" fill="white" fillOpacity="0.3" />
        <rect
          x="26"
          y="10"
          width="50"
          height="8"
          rx="4"
          fill="white"
          fillOpacity="0.4"
        />
        <rect
          x="200"
          y="10"
          width="40"
          height="8"
          rx="4"
          fill="white"
          fillOpacity="0.25"
        />
        <rect
          x="246"
          y="10"
          width="26"
          height="8"
          rx="4"
          fill="white"
          fillOpacity="0.5"
        />
        {/* Balance card */}
        <rect x="10" y="34" width="130" height="50" rx="8" fill="#1e293b" />
        <rect x="10" y="34" width="130" height="50" rx="8" fill={c3} />
        <text x="20" y="50" fontSize="7" fill={c} fontFamily="monospace">
          YOUR BALANCE
        </text>
        <text
          x="20"
          y="64"
          fontSize="14"
          fill="white"
          fontFamily="monospace"
          fontWeight="bold"
        >
          ₹1,200.00
        </text>
        <text x="20" y="76" fontSize="6" fill="#94a3b8">
          Others owe you
        </text>
        {/* Group card */}
        <rect x="148" y="34" width="124" height="50" rx="8" fill="#1e293b" />
        <text x="158" y="50" fontSize="7" fill="#94a3b8">
          GROUP
        </text>
        <text x="158" y="62" fontSize="9" fill="white" fontWeight="bold">
          Goa Trip 🏖️
        </text>
        <rect x="158" y="66" width="80" height="4" rx="2" fill={c2} />
        <rect x="158" y="66" width="50" height="4" rx="2" fill={c} />
        <text x="158" y="78" fontSize="6" fill="#94a3b8">
          ₹300 / ₹500 budget
        </text>
        {/* Expense list */}
        <rect x="10" y="90" width="260" height="16" rx="4" fill="#1e293b" />
        <rect x="16" y="95" width="16" height="6" rx="3" fill={c2} />
        <text x="36" y="101" fontSize="6" fill="white">
          🍕 Dinner
        </text>
        <text x="200" y="101" fontSize="7" fill={c} fontWeight="bold">
          ₹600
        </text>
        <text x="230" y="101" fontSize="5" fill="#94a3b8">
          by Rakshit
        </text>
        <rect x="10" y="110" width="260" height="16" rx="4" fill="#1e293b" />
        <rect x="16" y="115" width="16" height="6" rx="3" fill="#22c55e33" />
        <text x="36" y="121" fontSize="6" fill="white">
          ✈️ Hotel
        </text>
        <text x="200" y="121" fontSize="7" fill="#22c55e" fontWeight="bold">
          ₹1200
        </text>
        <text x="230" y="121" fontSize="5" fill="#94a3b8">
          by Raj
        </text>
      </svg>
    ),
    billkaro: (
      <svg viewBox="0 0 280 140" className="w-full h-full">
        <rect width="280" height="140" fill="#0f172a" rx="8" />
        <rect width="280" height="28" fill={c} rx="8" />
        <rect y="20" width="280" height="8" fill={c} />
        <text x="16" y="18" fontSize="8" fill="white">
          🧾 BillKaro
        </text>
        <rect
          x="220"
          y="8"
          width="50"
          height="12"
          rx="6"
          fill="white"
          fillOpacity="0.2"
        />
        <text x="228" y="17" fontSize="6.5" fill="white">
          GST Ready
        </text>
        {/* Stats row */}
        <rect x="10" y="34" width="84" height="34" rx="6" fill="#1e293b" />
        <text x="18" y="47" fontSize="6" fill="#94a3b8">
          Total Sales
        </text>
        <text x="18" y="60" fontSize="10" fill={c} fontWeight="bold">
          ₹84,500
        </text>
        <rect x="98" y="34" width="84" height="34" rx="6" fill="#1e293b" />
        <text x="106" y="47" fontSize="6" fill="#94a3b8">
          GST Collected
        </text>
        <text x="106" y="60" fontSize="10" fill="#22c55e" fontWeight="bold">
          ₹9,200
        </text>
        <rect x="186" y="34" width="84" height="34" rx="6" fill="#1e293b" />
        <text x="194" y="47" fontSize="6" fill="#94a3b8">
          Udhaar Pending
        </text>
        <text x="194" y="60" fontSize="10" fill="#ef4444" fontWeight="bold">
          ₹3,150
        </text>
        {/* Invoice rows */}
        <rect x="10" y="72" width="260" height="16" rx="4" fill="#1e293b" />
        <text x="18" y="82" fontSize="6" fill="white">
          SHREETRADERS-20260616-001
        </text>
        <rect x="216" y="76" width="44" height="8" rx="4" fill="#22c55e22" />
        <text x="222" y="82" fontSize="5.5" fill="#22c55e">
          Paid
        </text>
        <rect x="10" y="92" width="260" height="16" rx="4" fill="#1e293b" />
        <text x="18" y="102" fontSize="6" fill="white">
          SHREETRADERS-20260616-002
        </text>
        <rect x="216" y="96" width="44" height="8" rx="4" fill="#ef444422" />
        <text x="220" y="102" fontSize="5.5" fill="#ef4444">
          Udhaar
        </text>
        <rect x="10" y="112" width="260" height="16" rx="4" fill="#1e293b" />
        <text x="18" y="122" fontSize="6" fill="white">
          SHREETRADERS-20260616-003
        </text>
        <rect x="216" y="116" width="44" height="8" rx="4" fill="#22c55e22" />
        <text x="222" y="122" fontSize="5.5" fill="#22c55e">
          Paid
        </text>
        {/* MERN badge */}
        <rect x="10" y="130" width="56" height="9" rx="4.5" fill={c + "22"} />
        <text x="16" y="137" fontSize="5.5" fill={c} fontWeight="bold">
          MERN Stack
        </text>
      </svg>
    ),

    lms: (
      <svg viewBox="0 0 280 140" className="w-full h-full">
        <rect width="280" height="140" fill="#0f172a" rx="8" />
        <rect width="280" height="28" fill={c} rx="8" />
        <rect y="20" width="280" height="8" fill={c} />
        <text x="16" y="18" fontSize="8" fill="white">
          📚 NextSkills LMS
        </text>
        <rect
          x="220"
          y="8"
          width="50"
          height="12"
          rx="6"
          fill="white"
          fillOpacity="0.2"
        />
        <text x="228" y="17" fontSize="6.5" fill="white">
          Dashboard
        </text>
        {/* Course cards */}
        <rect x="10" y="34" width="80" height="60" rx="6" fill="#1e293b" />
        <rect x="10" y="34" width="80" height="28" rx="6" fill={c2} />
        <text x="20" y="52" fontSize="8">
          ⚛️
        </text>
        <text x="16" y="72" fontSize="6" fill="white" fontWeight="bold">
          React Mastery
        </text>
        <rect x="16" y="76" width="50" height="4" rx="2" fill="#334155" />
        <rect x="16" y="76" width="35" height="4" rx="2" fill={c} />
        <text x="16" y="88" fontSize="5" fill="#94a3b8">
          70% complete
        </text>
        <rect x="98" y="34" width="80" height="60" rx="6" fill="#1e293b" />
        <rect x="98" y="34" width="80" height="28" rx="6" fill="#22c55e22" />
        <text x="108" y="52" fontSize="8">
          ☕
        </text>
        <text x="104" y="72" fontSize="6" fill="white" fontWeight="bold">
          Java Spring
        </text>
        <rect x="104" y="76" width="50" height="4" rx="2" fill="#334155" />
        <rect x="104" y="76" width="20" height="4" rx="2" fill="#22c55e" />
        <text x="104" y="88" fontSize="5" fill="#94a3b8">
          40% complete
        </text>
        <rect x="186" y="34" width="84" height="60" rx="6" fill="#1e293b" />
        <rect x="186" y="34" width="84" height="28" rx="6" fill="#8b5cf622" />
        <text x="196" y="52" fontSize="8">
          🐍
        </text>
        <text x="192" y="72" fontSize="6" fill="white" fontWeight="bold">
          Python AI
        </text>
        <rect x="192" y="76" width="50" height="4" rx="2" fill="#334155" />
        <rect x="192" y="76" width="10" height="4" rx="2" fill="#8b5cf6" />
        <text x="192" y="88" fontSize="5" fill="#94a3b8">
          20% complete
        </text>
        {/* Stats bar */}
        <rect x="10" y="100" width="260" height="30" rx="6" fill="#1e293b" />
        <text x="20" y="112" fontSize="6" fill="#94a3b8">
          Students Enrolled
        </text>
        <text x="20" y="123" fontSize="8" fill={c} fontWeight="bold">
          1,240
        </text>
        <text x="110" y="112" fontSize="6" fill="#94a3b8">
          Courses
        </text>
        <text x="110" y="123" fontSize="8" fill="#22c55e" fontWeight="bold">
          24
        </text>
        <text x="180" y="112" fontSize="6" fill="#94a3b8">
          Completion Rate
        </text>
        <text x="180" y="123" fontSize="8" fill="#f59e0b" fontWeight="bold">
          87%
        </text>
      </svg>
    ),

    ride: (
      <svg viewBox="0 0 280 140" className="w-full h-full">
        <rect width="280" height="140" fill="#0f172a" rx="8" />
        {/* Map background */}
        <rect x="0" y="0" width="280" height="140" fill="#1a2744" rx="8" />
        <line
          x1="0"
          y1="40"
          x2="280"
          y2="40"
          stroke="#1e3a6e"
          strokeWidth="8"
        />
        <line
          x1="0"
          y1="80"
          x2="280"
          y2="80"
          stroke="#1e3a6e"
          strokeWidth="8"
        />
        <line
          x1="0"
          y1="120"
          x2="280"
          y2="120"
          stroke="#1e3a6e"
          strokeWidth="8"
        />
        <line
          x1="60"
          y1="0"
          x2="60"
          y2="140"
          stroke="#1e3a6e"
          strokeWidth="8"
        />
        <line
          x1="140"
          y1="0"
          x2="140"
          y2="140"
          stroke="#1e3a6e"
          strokeWidth="8"
        />
        <line
          x1="220"
          y1="0"
          x2="220"
          y2="140"
          stroke="#1e3a6e"
          strokeWidth="8"
        />
        {/* Route */}
        <path
          d="M 50 110 Q 100 60 180 50"
          stroke={c}
          strokeWidth="3"
          fill="none"
          strokeDasharray="6 3"
        />
        {/* Pickup pin */}
        <circle cx="50" cy="110" r="8" fill="#22c55e" />
        <text x="46" y="114" fontSize="8" fill="white">
          A
        </text>
        {/* Dropoff pin */}
        <circle cx="180" cy="50" r="8" fill={c} />
        <text x="176" y="54" fontSize="8" fill="white">
          B
        </text>
        {/* Car */}
        <rect x="105" y="74" width="20" height="12" rx="3" fill={c} />
        <rect x="108" y="70" width="14" height="8" rx="2" fill={c} />
        <circle cx="109" cy="87" r="3" fill="#0f172a" />
        <circle cx="121" cy="87" r="3" fill="#0f172a" />
        {/* Info panel */}
        <rect
          x="10"
          y="95"
          width="100"
          height="38"
          rx="6"
          fill="#0f172a"
          fillOpacity="0.9"
        />
        <text x="18" y="108" fontSize="6" fill="#94a3b8">
          Driver arriving in
        </text>
        <text x="18" y="120" fontSize="12" fill={c} fontWeight="bold">
          3 min
        </text>
        <text x="18" y="128" fontSize="5.5" fill="#94a3b8">
          🚖 Raj Kumar • ⭐ 4.9
        </text>
        {/* Socket badge */}
        <rect
          x="170"
          y="110"
          width="100"
          height="20"
          rx="6"
          fill="#0f172a"
          fillOpacity="0.9"
        />
        <circle cx="182" cy="120" r="4" fill="#22c55e" />
        <text x="190" y="124" fontSize="6" fill="white">
          Live tracking active
        </text>
      </svg>
    ),

    gold: (
      <svg viewBox="0 0 280 140" className="w-full h-full">
        <rect width="280" height="140" fill="#0f172a" rx="8" />
        <rect width="280" height="28" fill={c} rx="8" />
        <rect y="20" width="280" height="8" fill={c} />
        <text x="16" y="18" fontSize="8" fill="white">
          ⚖️ Gold Weight Manager
        </text>
        {/* Stats row */}
        <rect x="10" y="34" width="78" height="36" rx="6" fill="#1e293b" />
        <text x="18" y="47" fontSize="6" fill="#94a3b8">
          Input Weight
        </text>
        <text x="18" y="62" fontSize="11" fill={c} fontWeight="bold">
          245.5g
        </text>
        <rect x="96" y="34" width="78" height="36" rx="6" fill="#1e293b" />
        <text x="104" y="47" fontSize="6" fill="#94a3b8">
          Output Weight
        </text>
        <text x="104" y="62" fontSize="11" fill="#22c55e" fontWeight="bold">
          238.2g
        </text>
        <rect x="182" y="34" width="88" height="36" rx="6" fill="#1e293b" />
        <text x="190" y="47" fontSize="6" fill="#94a3b8">
          Net Loss
        </text>
        <text x="190" y="62" fontSize="11" fill="#ef4444" fontWeight="bold">
          7.3g
        </text>
        {/* Table */}
        <rect x="10" y="76" width="260" height="12" rx="0" fill="#1e293b" />
        <text x="16" y="85" fontSize="6" fill="#94a3b8">
          Job ID
        </text>
        <text x="70" y="85" fontSize="6" fill="#94a3b8">
          Karat
        </text>
        <text x="120" y="85" fontSize="6" fill="#94a3b8">
          Input
        </text>
        <text x="170" y="85" fontSize="6" fill="#94a3b8">
          Output
        </text>
        <text x="220" y="85" fontSize="6" fill="#94a3b8">
          Loss
        </text>
        <rect x="10" y="90" width="260" height="12" rx="0" fill="#0f172a" />
        <text x="16" y="99" fontSize="6" fill="white">
          #001
        </text>
        <text x="70" y="99" fontSize="6" fill={c}>
          22K
        </text>
        <text x="120" y="99" fontSize="6" fill="white">
          50.0g
        </text>
        <text x="170" y="99" fontSize="6" fill="white">
          48.5g
        </text>
        <text x="220" y="99" fontSize="6" fill="#ef4444">
          1.5g
        </text>
        <rect x="10" y="104" width="260" height="12" rx="0" fill="#1e293b" />
        <text x="16" y="113" fontSize="6" fill="white">
          #002
        </text>
        <text x="70" y="113" fontSize="6" fill={c}>
          18K
        </text>
        <text x="120" y="113" fontSize="6" fill="white">
          30.0g
        </text>
        <text x="170" y="113" fontSize="6" fill="white">
          28.8g
        </text>
        <text x="220" y="113" fontSize="6" fill="#ef4444">
          1.2g
        </text>
        {/* Export button */}
        <rect x="186" y="120" width="84" height="14" rx="7" fill={c} />
        <text x="208" y="130" fontSize="6.5" fill="white" fontWeight="bold">
          Export PDF
        </text>
      </svg>
    ),

    ecommerce: (
      <svg viewBox="0 0 280 140" className="w-full h-full">
        <rect width="280" height="140" fill="#0f172a" rx="8" />
        <rect width="280" height="28" fill={c} rx="8" />
        <rect y="20" width="280" height="8" fill={c} />
        <text x="16" y="18" fontSize="8" fill="white">
          💍 RC Soni Jewellers
        </text>
        <rect
          x="240"
          y="8"
          width="30"
          height="12"
          rx="6"
          fill="white"
          fillOpacity="0.2"
        />
        <text x="246" y="17" fontSize="7" fill="white">
          🛒 3
        </text>
        {/* Product grid */}
        <rect x="10" y="34" width="60" height="55" rx="6" fill="#1e293b" />
        <rect x="10" y="34" width="60" height="35" rx="6" fill={c + "33"} />
        <text x="30" y="58" fontSize="18">
          💍
        </text>
        <text x="14" y="78" fontSize="5.5" fill="white">
          Gold Ring
        </text>
        <text x="14" y="86" fontSize="6" fill={c} fontWeight="bold">
          ₹12,500
        </text>
        <rect x="78" y="34" width="60" height="55" rx="6" fill="#1e293b" />
        <rect x="78" y="34" width="60" height="35" rx="6" fill={c + "22"} />
        <text x="98" y="58" fontSize="18">
          📿
        </text>
        <text x="82" y="78" fontSize="5.5" fill="white">
          Necklace
        </text>
        <text x="82" y="86" fontSize="6" fill={c} fontWeight="bold">
          ₹45,000
        </text>
        <rect x="146" y="34" width="60" height="55" rx="6" fill="#1e293b" />
        <rect x="146" y="34" width="60" height="35" rx="6" fill={c + "33"} />
        <text x="166" y="58" fontSize="18">
          ⌚
        </text>
        <text x="150" y="78" fontSize="5.5" fill="white">
          Bracelet
        </text>
        <text x="150" y="86" fontSize="6" fill={c} fontWeight="bold">
          ₹8,200
        </text>
        <rect x="214" y="34" width="56" height="55" rx="6" fill="#1e293b" />
        <rect x="214" y="34" width="56" height="35" rx="6" fill={c + "22"} />
        <text x="231" y="58" fontSize="18">
          👑
        </text>
        <text x="218" y="78" fontSize="5.5" fill="white">
          Crown Set
        </text>
        <text x="218" y="86" fontSize="6" fill={c} fontWeight="bold">
          ₹95,000
        </text>
        {/* Cart summary */}
        <rect x="10" y="96" width="260" height="36" rx="6" fill="#1e293b" />
        <text x="18" y="110" fontSize="6.5" fill="white" fontWeight="bold">
          Order Summary
        </text>
        <text x="18" y="122" fontSize="6" fill="#94a3b8">
          3 items · Gold Ring, Necklace +1
        </text>
        <rect x="196" y="100" width="64" height="24" rx="6" fill={c} />
        <text x="210" y="115" fontSize="7" fill="white" fontWeight="bold">
          Checkout
        </text>
      </svg>
    ),

    khata: (
      <svg viewBox="0 0 280 140" className="w-full h-full">
        {/* Mobile frame */}
        <rect width="280" height="140" fill="#0f172a" rx="8" />
        <rect x="80" y="5" width="120" height="130" rx="12" fill="#1e293b" />
        <rect
          x="80"
          y="5"
          width="120"
          height="130"
          rx="12"
          fill="#1e293b"
          stroke="#334155"
          strokeWidth="1"
        />
        {/* Status bar */}
        <rect x="80" y="5" width="120" height="18" rx="12" fill={c} />
        <rect x="80" y="14" width="120" height="9" fill={c} />
        <text x="110" y="16" fontSize="6" fill="white">
          SmartKhata 📒
        </text>
        {/* Balance */}
        <rect x="88" y="26" width="104" height="30" rx="8" fill={c + "22"} />
        <text x="110" y="38" fontSize="6" fill="#94a3b8">
          Total Balance
        </text>
        <text x="100" y="50" fontSize="12" fill={c} fontWeight="bold">
          ₹24,500
        </text>
        {/* Entries */}
        <rect x="88" y="60" width="104" height="14" rx="4" fill="#0f172a" />
        <circle cx="98" cy="67" r="4" fill="#22c55e33" />
        <text x="105" y="70" fontSize="6" fill="white">
          Ramesh Kumar
        </text>
        <text x="160" y="70" fontSize="6.5" fill="#22c55e" fontWeight="bold">
          +₹500
        </text>
        <rect x="88" y="77" width="104" height="14" rx="4" fill="#0f172a" />
        <circle cx="98" cy="84" r="4" fill="#ef444433" />
        <text x="105" y="87" fontSize="6" fill="white">
          Suresh Patel
        </text>
        <text x="160" y="87" fontSize="6.5" fill="#ef4444" fontWeight="bold">
          -₹200
        </text>
        <rect x="88" y="94" width="104" height="14" rx="4" fill="#0f172a" />
        <circle cx="98" cy="101" r="4" fill="#22c55e33" />
        <text x="105" y="104" fontSize="6" fill="white">
          Mahesh Shah
        </text>
        <text x="160" y="104" fontSize="6.5" fill="#22c55e" fontWeight="bold">
          +₹1,200
        </text>
        {/* Add button */}
        <rect x="116" y="116" width="48" height="14" rx="7" fill={c} />
        <text x="128" y="125" fontSize="7" fill="white" fontWeight="bold">
          + Add
        </text>
      </svg>
    ),
    chatbot: (
      <svg viewBox="0 0 280 140" className="w-full h-full">
        <rect width="280" height="140" fill="#0f172a" rx="8" />
        <rect width="280" height="28" fill={c} rx="8" />
        <rect y="20" width="280" height="8" fill={c} />
        <circle cx="16" cy="14" r="5" fill="white" fillOpacity="0.3" />
        <text x="26" y="18" fontSize="8" fill="white" fontFamily="monospace">
          🤖 AI Support Chat
        </text>
        <rect x="200" y="8" width="12" height="12" rx="6" fill="#22c55e" />
        {/* Chat bubbles */}
        <rect x="10" y="34" width="140" height="20" rx="10" fill="#1e293b" />
        <text x="18" y="46" fontSize="6.5" fill="#94a3b8">
          How can I reset my password?
        </text>
        <rect x="130" y="58" width="140" height="20" rx="10" fill={c} />
        <text x="138" y="70" fontSize="6.5" fill="white">
          Go to Settings → Security
        </text>
        <rect x="10" y="82" width="120" height="20" rx="10" fill="#1e293b" />
        <text x="18" y="94" fontSize="6.5" fill="#94a3b8">
          What are your features?
        </text>
        <rect x="140" y="106" width="130" height="20" rx="10" fill={c} />
        <text x="148" y="118" fontSize="6.5" fill="white">
          I can help with support!
        </text>
        {/* JWT badge */}
        <rect x="10" y="126" width="35" height="10" rx="5" fill={c + "44"} />
        <text x="14" y="133" fontSize="5.5" fill={c} fontWeight="bold">
          JWT Auth
        </text>
        <rect x="50" y="126" width="50" height="10" rx="5" fill="#22c55e22" />
        <text x="54" y="133" fontSize="5.5" fill="#22c55e" fontWeight="bold">
          Spring Security
        </text>
      </svg>
    ),
    hospital: (
      <svg viewBox="0 0 280 140" className="w-full h-full">
        <rect width="280" height="140" fill="#0f172a" rx="8" />
        <rect width="280" height="28" fill={c} rx="8" />
        <rect y="20" width="280" height="8" fill={c} />
        <text x="16" y="18" fontSize="8" fill="white">
          🏥 Hospital Management
        </text>
        {/* Stats */}
        <rect x="10" y="34" width="58" height="30" rx="6" fill="#1e293b" />
        <text x="18" y="47" fontSize="6" fill="#94a3b8">
          Patients
        </text>
        <text x="18" y="58" fontSize="11" fill={c} fontWeight="bold">
          124
        </text>
        <rect x="74" y="34" width="58" height="30" rx="6" fill="#1e293b" />
        <text x="82" y="47" fontSize="6" fill="#94a3b8">
          Appointments
        </text>
        <text x="82" y="58" fontSize="11" fill="#22c55e" fontWeight="bold">
          38
        </text>
        <rect x="138" y="34" width="58" height="30" rx="6" fill="#1e293b" />
        <text x="146" y="47" fontSize="6" fill="#94a3b8">
          Doctors
        </text>
        <text x="146" y="58" fontSize="11" fill="#f59e0b" fontWeight="bold">
          12
        </text>
        <rect x="202" y="34" width="68" height="30" rx="6" fill="#1e293b" />
        <text x="210" y="47" fontSize="6" fill="#94a3b8">
          Beds Free
        </text>
        <text x="210" y="58" fontSize="11" fill="#8b5cf6" fontWeight="bold">
          45
        </text>
        {/* Patient table */}
        <rect x="10" y="70" width="260" height="11" rx="0" fill="#1e293b" />
        <text x="16" y="79" fontSize="6" fill="#94a3b8">
          Patient
        </text>
        <text x="90" y="79" fontSize="6" fill="#94a3b8">
          Doctor
        </text>
        <text x="160" y="79" fontSize="6" fill="#94a3b8">
          Date
        </text>
        <text x="220" y="79" fontSize="6" fill="#94a3b8">
          Status
        </text>
        <rect x="10" y="83" width="260" height="11" rx="0" fill="#0f172a" />
        <text x="16" y="92" fontSize="6" fill="white">
          Raj Patel
        </text>
        <text x="90" y="92" fontSize="6" fill="white">
          Dr. Mehta
        </text>
        <text x="160" y="92" fontSize="6" fill="white">
          06 Jun
        </text>
        <rect x="216" y="85" width="40" height="7" rx="3" fill="#22c55e22" />
        <text x="224" y="91" fontSize="5.5" fill="#22c55e">
          Confirmed
        </text>
        <rect x="10" y="96" width="260" height="11" rx="0" fill="#1e293b" />
        <text x="16" y="105" fontSize="6" fill="white">
          Sita Sharma
        </text>
        <text x="90" y="105" fontSize="6" fill="white">
          Dr. Shah
        </text>
        <text x="160" y="105" fontSize="6" fill="white">
          07 Jun
        </text>
        <rect x="216" y="98" width="40" height="7" rx="3" fill="#f59e0b22" />
        <text x="222" y="104" fontSize="5.5" fill="#f59e0b">
          Pending
        </text>
        <rect x="10" y="109" width="260" height="11" rx="0" fill="#0f172a" />
        <text x="16" y="118" fontSize="6" fill="white">
          Mohan Das
        </text>
        <text x="90" y="118" fontSize="6" fill="white">
          Dr. Verma
        </text>
        <text x="160" y="118" fontSize="6" fill="white">
          08 Jun
        </text>
        <rect x="216" y="111" width="40" height="7" rx="3" fill={c + "22"} />
        <text x="224" y="117" fontSize="5.5" fill={c}>
          Scheduled
        </text>
        {/* Django badge */}
        <rect x="10" y="126" width="38" height="10" rx="5" fill="#44b78b22" />
        <text x="15" y="133" fontSize="5.5" fill="#44b78b" fontWeight="bold">
          Django ORM
        </text>
      </svg>
    ),
  };

  return previews[type] || previews["billsplitter"];
};
const TIMELINE = [
  {
    year: "2022",
    title: "Started BCA",
    sub: "Indus University, Ahmedabad",
    desc: "Began Computer Applications degree — CGPA 7.5. First exposure to programming with C, Java, and HTML.",
    color: "#0ea5e9",
    icon: "🎓",
  },
  {
    year: "2023",
    title: "First Full-Stack Projects",
    sub: "PHP · Django · MySQL",
    desc: "Built Jewellery E-Commerce (PHP/MySQL admin panel with inventory & order tracking) and Hospital Management System (Django ORM for patients, appointments, staff).",
    color: "#8b5cf6",
    icon: "💻",
  },
  {
    year: "2024",
    title: "MERN Stack Deep Dive",
    sub: "React · Redux · Node.js · Socket.io",
    desc: "Shipped an LMS with instructor dashboards and real-time progress tracking, a real-time Uber-style ride booking app with live driver tracking, and BillKaro — a GST billing platform with auto invoice numbering and WhatsApp bill sharing.",
    color: "#22c55e",
    icon: "🚀",
  },
  {
    year: "2024",
    title: "Cross-Platform Development",
    sub: "Flutter · Dart",
    desc: "Built Smart Khata Book — an offline-first credit/debit ledger app for small businesses with real-time balance tracking and AI-powered ERP features.",
    color: "#f59e0b",
    icon: "📱",
  },
  {
    year: "2025",
    title: "Started MCA",
    sub: "GLS University, Ahmedabad · Expected 2027",
    desc: "Pursuing Master of Computer Applications, going deeper into Java, Spring Security, and system design.",
    color: "#ec4899",
    icon: "🏫",
  },
  {
    year: "2025",
    title: "Java / Spring Boot Specialization",
    sub: "Spring Security · JWT · BCrypt",
    desc: "Built Bill Splitter (UPI-style wallet payments, group expense splitting, BCrypt encryption), Gold Weight Management System (karat-wise net loss tracking for jewellers), and an AI Chatbot with role-based access, architected for Gemini/OpenAI integration.",
    color: "#6c63ff",
    icon: "☕",
  },
  {
    year: "Now",
    title: "Open to Work",
    sub: "Full-time · Internship · Freelance",
    desc: "357+ LeetCode problems solved (115-day max streak), 8+ HackerRank certifications. Actively seeking internship/fresher roles in Ahmedabad or remote.",
    color: "#f97316",
    icon: "🎯",
    current: true,
  },
];

/* ─── UPDATED CERTS DATA ─────────────────────────────────────── */
const CERTS = [
  {
    name: "JavaScript (Intermediate)",
    icon: <FaJs />,
    color: "#f7df1e",
    bgColor: "#78680010",
    borderColor: "#f7df1e40",
    link: "https://www.hackerrank.com/certificates/iframe/b04991b66fe0",
    platform: "HackerRank",
    platformColor: "#2ec866",
    platformIcon: <FaHackerrank />,
    badge: "Verified",
  },
  {
    name: "Java (Basic)",
    icon: <FaJava />,
    color: "#f89820",
    bgColor: "#f8982010",
    borderColor: "#f8982040",
    link: "https://www.hackerrank.com/profile/rakshitsoni544",
    platform: "HackerRank",
    platformColor: "#2ec866",
    platformIcon: <FaHackerrank />,
    badge: "Certified",
  },
  {
    name: "Python (Basic)",
    icon: <FaPython />,
    color: "#3776ab",
    bgColor: "#3776ab10",
    borderColor: "#3776ab40",
    link: "https://www.hackerrank.com/profile/rakshitsoni544",
    platform: "HackerRank",
    platformColor: "#2ec866",
    platformIcon: <FaHackerrank />,
    badge: "Certified",
  },
  {
    name: "SQL (Basic & Intermediate)",
    icon: <FaDatabase />,
    color: "#4479a1",
    bgColor: "#4479a110",
    borderColor: "#4479a140",
    link: "https://www.hackerrank.com/profile/rakshitsoni544",
    platform: "HackerRank",
    platformColor: "#2ec866",
    platformIcon: <FaHackerrank />,
    badge: "Certified",
  },
  {
    name: "CSS (Basic)",
    icon: <FaCss3Alt />,
    color: "#1572b6",
    bgColor: "#1572b610",
    borderColor: "#1572b640",
    link: "https://www.hackerrank.com/profile/rakshitsoni544",
    platform: "HackerRank",
    platformColor: "#2ec866",
    platformIcon: <FaHackerrank />,
    badge: "Certified",
  },
  {
    name: "Problem Solving",
    icon: <FaCode />,
    color: "#22c55e",
    bgColor: "#22c55e10",
    borderColor: "#22c55e40",
    link: "https://www.hackerrank.com/profile/rakshitsoni544",
    platform: "HackerRank",
    platformColor: "#2ec866",
    platformIcon: <FaHackerrank />,
    badge: "Certified",
  },
  {
    name: "Complete Bootstrap Course",
    icon: <FaBootstrap />,
    color: "#7952b3",
    bgColor: "#7952b310",
    borderColor: "#7952b340",
    link: "https://media.geeksforgeeks.org/courses/certificates/c217300c0857a36da426f5c32fe45a19.pdf",
    platform: "GeeksforGeeks",
    platformColor: "#2f8d46",
    platformIcon: <SiGeeksforgeeks />,
    badge: "Verified",
  },
  {
    name: "HTML, CSS & JavaScript",
    icon: <FaGlobe />,
    color: "#0056d3",
    bgColor: "#0056d310",
    borderColor: "#0056d340",
    link: "https://coursera.org/verify/QBZAL6TBSX8K",
    platform: "Coursera",
    platformColor: "#0056d3",
    platformIcon: <SiCoursera />,
    badge: "Verified",
  },
];

const SOCIAL = [
  {
    label: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/Rakshitsoni1410",
  },
  {
    label: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/rakshitrsoni1410/",
  },
  {
    label: "LeetCode",
    icon: <FaCode />,
    url: "https://leetcode.com/u/rakshitsoni1410",
  },
  {
    label: "HackerRank",
    icon: <FaHackerrank />,
    url: "https://www.hackerrank.com/profile/rakshitsoni544",
  },
  {
    label: "GFG",
    icon: <FaGlobe />,
    url: "https://www.geeksforgeeks.org/user/rakshituya7/",
  },
];
{/* ── SERVICES ── */}
        {/* Add this helper near your other small utility functions, outside the App component */}
function toComponentTag(title) {
  return title
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join("");
}
/* ─── SKILL ILLUSTRATIONS ────────────────────────────────────── */
function FrontendIllustration() {
  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Browser window */}
      <rect x="6" y="8" width="108" height="64" rx="7" fill="#0f172a" />
      <rect x="6" y="8" width="108" height="20" rx="7" fill="#1e293b" />
      <rect x="6" y="20" width="108" height="8" fill="#1e293b" />
      {/* Traffic lights */}
      <circle cx="17" cy="18" r="3.5" fill="#ef4444" />
      <circle cx="27" cy="18" r="3.5" fill="#f59e0b" />
      <circle cx="37" cy="18" r="3.5" fill="#22c55e" />
      {/* URL bar */}
      <rect x="46" y="13" width="56" height="10" rx="5" fill="#334155" />
      <circle cx="51" cy="18" r="2.5" fill="#64748b" />
      <rect x="56" y="16" width="30" height="4" rx="2" fill="#475569" />
      {/* Code lines */}
      <rect x="14" y="34" width="22" height="3" rx="1.5" fill="#f97316" />
      <rect x="40" y="34" width="30" height="3" rx="1.5" fill="#61dafb" />
      <rect x="74" y="34" width="14" height="3" rx="1.5" fill="#f97316" />
      <rect x="18" y="41" width="35" height="3" rx="1.5" fill="#a78bfa" />
      <rect x="57" y="41" width="20" height="3" rx="1.5" fill="#34d399" />
      <rect x="14" y="48" width="15" height="3" rx="1.5" fill="#f97316" />
      <rect x="33" y="48" width="45" height="3" rx="1.5" fill="#fbbf24" />
      <rect x="14" y="55" width="28" height="3" rx="1.5" fill="#61dafb" />
      <rect x="46" y="55" width="22" height="3" rx="1.5" fill="#a78bfa" />
      {/* React logo small */}
      <circle
        cx="98"
        cy="52"
        r="6"
        fill="none"
        stroke="#61dafb"
        strokeWidth="1.2"
      />
      <ellipse
        cx="98"
        cy="52"
        rx="10"
        ry="4"
        fill="none"
        stroke="#61dafb"
        strokeWidth="0.8"
        opacity="0.6"
      />
      <ellipse
        cx="98"
        cy="52"
        rx="10"
        ry="4"
        fill="none"
        stroke="#61dafb"
        strokeWidth="0.8"
        opacity="0.6"
        transform="rotate(60 98 52)"
      />
      <ellipse
        cx="98"
        cy="52"
        rx="10"
        ry="4"
        fill="none"
        stroke="#61dafb"
        strokeWidth="0.8"
        opacity="0.6"
        transform="rotate(120 98 52)"
      />
      <circle cx="98" cy="52" r="2" fill="#61dafb" />
    </svg>
  );
}

function BackendIllustration() {
  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Server racks */}
      <rect
        x="10"
        y="8"
        width="100"
        height="16"
        rx="4"
        fill="#1e293b"
        stroke="#334155"
        strokeWidth="1"
      />
      <circle cx="20" cy="16" r="3" fill="#22c55e" />
      <rect x="28" y="13" width="40" height="6" rx="3" fill="#334155" />
      <rect x="72" y="13" width="8" height="6" rx="2" fill="#475569" />
      <rect x="84" y="13" width="8" height="6" rx="2" fill="#475569" />
      <rect
        x="96"
        y="14"
        width="6"
        height="4"
        rx="1"
        fill="#22c55e"
        opacity="0.7"
      />

      <rect
        x="10"
        y="28"
        width="100"
        height="16"
        rx="4"
        fill="#1e293b"
        stroke="#334155"
        strokeWidth="1"
      />
      <circle cx="20" cy="36" r="3" fill="#f59e0b" />
      <rect x="28" y="33" width="40" height="6" rx="3" fill="#334155" />
      <rect x="72" y="33" width="8" height="6" rx="2" fill="#475569" />
      <rect x="84" y="33" width="8" height="6" rx="2" fill="#475569" />
      <rect
        x="96"
        y="34"
        width="6"
        height="4"
        rx="1"
        fill="#f59e0b"
        opacity="0.7"
      />

      <rect
        x="10"
        y="48"
        width="100"
        height="16"
        rx="4"
        fill="#1e293b"
        stroke="#334155"
        strokeWidth="1"
      />
      <circle cx="20" cy="56" r="3" fill="#6db33f" />
      <rect x="28" y="53" width="40" height="6" rx="3" fill="#334155" />
      <rect x="72" y="53" width="8" height="6" rx="2" fill="#475569" />
      <rect x="84" y="53" width="8" height="6" rx="2" fill="#475569" />
      <rect
        x="96"
        y="54"
        width="6"
        height="4"
        rx="1"
        fill="#6db33f"
        opacity="0.7"
      />

      {/* Connection lines */}
      <line
        x1="60"
        y1="24"
        x2="60"
        y2="28"
        stroke="#334155"
        strokeWidth="1.5"
        strokeDasharray="2 1"
      />
      <line
        x1="60"
        y1="44"
        x2="60"
        y2="48"
        stroke="#334155"
        strokeWidth="1.5"
        strokeDasharray="2 1"
      />

      {/* Node.js badge */}
      <rect x="10" y="68" width="28" height="8" rx="4" fill="#68a06322" />
      <text
        x="14"
        y="74"
        fontSize="5"
        fill="#68a063"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Node.js
      </text>
      {/* Spring badge */}
      <rect x="42" y="68" width="36" height="8" rx="4" fill="#6db33f22" />
      <text
        x="46"
        y="74"
        fontSize="5"
        fill="#6db33f"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Spring Boot
      </text>
    </svg>
  );
}

function DatabaseIllustration() {
  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* MongoDB cylinder */}
      <ellipse cx="35" cy="16" rx="18" ry="6" fill="#47a248" />
      <rect x="17" y="16" width="36" height="28" fill="#2d6a2e" />
      <ellipse cx="35" cy="44" rx="18" ry="6" fill="#47a248" />
      <ellipse cx="35" cy="16" rx="18" ry="6" fill="#5cba5c" />
      {/* MongoDB shine */}
      <ellipse cx="28" cy="13" rx="5" ry="2" fill="white" opacity="0.15" />
      {/* MongoDB label */}
      <text
        x="22"
        y="32"
        fontSize="5.5"
        fill="white"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Mongo
      </text>

      {/* MySQL cylinder */}
      <ellipse cx="85" cy="16" rx="18" ry="6" fill="#4479a1" />
      <rect x="67" y="16" width="36" height="28" fill="#2a4d6e" />
      <ellipse cx="85" cy="44" rx="18" ry="6" fill="#4479a1" />
      <ellipse cx="85" cy="16" rx="18" ry="6" fill="#5a8fc0" />
      {/* MySQL shine */}
      <ellipse cx="78" cy="13" rx="5" ry="2" fill="white" opacity="0.15" />
      {/* MySQL label */}
      <text
        x="74"
        y="32"
        fontSize="5.5"
        fill="white"
        fontFamily="monospace"
        fontWeight="bold"
      >
        MySQL
      </text>

      {/* Connection arrow */}
      <line
        x1="53"
        y1="30"
        x2="67"
        y2="30"
        stroke="#64748b"
        strokeWidth="1.5"
      />
      <polygon points="65,27 69,30 65,33" fill="#64748b" />

      {/* Tools row */}
      <rect
        x="8"
        y="56"
        width="24"
        height="16"
        rx="4"
        fill="#010101"
        stroke="#333"
        strokeWidth="0.5"
      />
      <text x="12" y="66" fontSize="5" fill="#888" fontFamily="monospace">
        Socket
      </text>
      <text x="14" y="72" fontSize="4.5" fill="#888" fontFamily="monospace">
        .io
      </text>

      <rect
        x="36"
        y="56"
        width="22"
        height="16"
        rx="4"
        fill="#181717"
        stroke="#333"
        strokeWidth="0.5"
      />
      <text x="39" y="67" fontSize="5" fill="#6e7681" fontFamily="monospace">
        GitHub
      </text>

      <rect
        x="62"
        y="56"
        width="18"
        height="16"
        rx="4"
        fill="#000000"
        stroke="#333"
        strokeWidth="0.5"
      />
      <text x="65" y="67" fontSize="5" fill="#e535ab" fontFamily="monospace">
        JWT
      </text>

      <rect
        x="84"
        y="56"
        width="28"
        height="16"
        rx="4"
        fill="#0f1b2d"
        stroke="#333"
        strokeWidth="0.5"
      />
      <text x="86" y="67" fontSize="5" fill="#f05032" fontFamily="monospace">
        Git
      </text>
    </svg>
  );
}

function MobileIllustration() {
  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Phone frame */}
      <rect
        x="35"
        y="4"
        width="50"
        height="72"
        rx="10"
        fill="#1e293b"
        stroke="#334155"
        strokeWidth="1.5"
      />
      {/* Screen */}
      <rect x="39" y="12" width="42" height="56" rx="4" fill="#0f172a" />
      {/* Notch */}
      <rect x="50" y="6" width="20" height="5" rx="2.5" fill="#0f172a" />
      {/* Flutter header */}
      <rect x="39" y="12" width="42" height="14" rx="4" fill="#02569b" />
      <rect x="39" y="18" width="42" height="8" fill="#02569b" />
      <text
        x="45"
        y="21"
        fontSize="6"
        fill="white"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Flutter App
      </text>
      {/* App content */}
      <rect x="43" y="30" width="34" height="8" rx="3" fill="#1e293b" />
      <rect x="46" y="33" width="14" height="2.5" rx="1.5" fill="#54c5f8" />
      <rect x="46" y="37" width="20" height="2" rx="1" fill="#334155" />
      <rect x="43" y="42" width="16" height="16" rx="3" fill="#1e293b" />
      <rect x="62" y="42" width="15" height="16" rx="3" fill="#1e293b" />
      <text x="46" y="52" fontSize="8">
        📱
      </text>
      <text x="64" y="52" fontSize="8">
        ⚡
      </text>
      <rect x="43" y="62" width="34" height="4" rx="2" fill="#02569b" />
      <text x="50" y="65.5" fontSize="4.5" fill="white" fontFamily="monospace">
        Cross Platform
      </text>
      {/* Side buttons */}
      <rect x="33" y="20" width="3" height="8" rx="1.5" fill="#334155" />
      <rect x="33" y="30" width="3" height="8" rx="1.5" fill="#334155" />
      <rect x="84" y="22" width="3" height="12" rx="1.5" fill="#334155" />
      {/* Dart badge */}
      <rect x="8" y="30" width="22" height="10" rx="5" fill="#0175c222" />
      <text
        x="11"
        y="37"
        fontSize="5.5"
        fill="#0175c2"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Dart
      </text>
      {/* Flutter badge */}
      <rect x="90" y="30" width="24" height="10" rx="5" fill="#02569b22" />
      <text
        x="93"
        y="37"
        fontSize="5.5"
        fill="#54c5f8"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Flutter
      </text>
    </svg>
  );
}

function ToolsIllustration() {
  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <circle cx="30" cy="30" r="16" fill="#24292e" />
      <circle cx="30" cy="26" r="8" fill="#f0f6fc" />
      <circle cx="26" cy="24" r="2" fill="#24292e" />
      <circle cx="34" cy="24" r="2" fill="#24292e" />
      <path
        d="M26 30 Q30 34 34 30"
        stroke="#24292e"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="14" cy="54" r="4" fill="#6e7681" />
      <circle cx="30" cy="54" r="4" fill="#6e7681" />
      <circle cx="46" cy="54" r="4" fill="#22c55e" />
      <line
        x1="14"
        y1="50"
        x2="14"
        y2="46"
        stroke="#6e7681"
        strokeWidth="1.5"
      />
      <line
        x1="30"
        y1="50"
        x2="30"
        y2="46"
        stroke="#6e7681"
        strokeWidth="1.5"
      />
      <line
        x1="46"
        y1="50"
        x2="30"
        y2="46"
        stroke="#6e7681"
        strokeWidth="1.5"
        strokeDasharray="3 2"
      />
      <line
        x1="14"
        y1="46"
        x2="30"
        y2="46"
        stroke="#6e7681"
        strokeWidth="1.5"
      />
      <circle cx="85" cy="30" r="18" fill="#1a1a1a" />
      <circle
        cx="85"
        cy="30"
        r="10"
        fill="#1a1a1a"
        stroke="#888"
        strokeWidth="1.5"
      />
      <path d="M82 23 L78 30 L84 30 L81 38 L88 28 L82 28 Z" fill="#888" />
      <circle cx="65" cy="55" r="3.5" fill="#888" />
      <circle cx="80" cy="65" r="3.5" fill="#888" />
      <circle cx="95" cy="55" r="3.5" fill="#888" />
      <circle cx="107" cy="65" r="3.5" fill="#888" />
      <line x1="65" y1="55" x2="80" y2="65" stroke="#444" strokeWidth="1" />
      <line x1="80" y1="65" x2="95" y2="55" stroke="#444" strokeWidth="1" />
      <line x1="95" y1="55" x2="107" y2="65" stroke="#444" strokeWidth="1" />
    </svg>
  );
}

/* ─── SKILL CATEGORY META ────────────────────────────────────── */

const CATEGORY_META = {
  Frontend: {
    gradient: "from-[#0ea5e9] to-[#6366f1]",
    accent: "#61dafb",
    accentBg: "bg-blue-50 dark:bg-blue-950/50",
    accentBorder: "border-blue-200 dark:border-blue-800",
    Illustration: FrontendIllustration,
    label: "UI & Interaction",
    desc: "Crafting responsive, pixel-perfect interfaces with modern frameworks and styling tools.",
  },
  Backend: {
    gradient: "from-[#6db33f] to-[#f89820]",
    accent: "#6db33f",
    accentBg: "bg-green-50 dark:bg-green-950/50",
    accentBorder: "border-green-200 dark:border-green-800",
    Illustration: BackendIllustration,
    label: "Server & Logic",
    desc: "Building scalable APIs, auth systems, and business logic with Node.js, Spring Boot & more.",
  },
  "Database & Tools": {
    gradient: "from-[#47a248] to-[#4479a1]",
    accent: "#47a248",
    accentBg: "bg-emerald-50 dark:bg-emerald-950/50",
    accentBorder: "border-emerald-200 dark:border-emerald-800",
    Illustration: ToolsIllustration,
    label: "Data & DevTools",
    desc: "Designing schemas, optimizing queries, and managing real-time connections & version control.",
  },
  Mobile: {
    gradient: "from-[#02569b] to-[#54c5f8]",
    accent: "#02569b",
    accentBg: "bg-sky-50 dark:bg-sky-950/50",
    accentBorder: "border-sky-200 dark:border-sky-800",
    Illustration: MobileIllustration,
    label: "Cross-platform Apps",
    desc: "Building Android & iOS apps from a single Dart codebase with smooth native performance.",
  },
};

/* ─── HOOKS ──────────────────────────────────────────────────── */

function useTyping(texts, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = texts[idx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplay(current.slice(0, display.length + 1));
          if (display.length + 1 === current.length)
            setTimeout(() => setDeleting(true), pause);
        } else {
          setDisplay(current.slice(0, display.length - 1));
          if (display.length === 0) {
            setDeleting(false);
            setIdx((i) => (i + 1) % texts.length);
          }
        }
      },
      deleting ? speed / 2 : speed,
    );
    return () => clearTimeout(timeout);
  }, [display, deleting, idx, texts, speed, pause]);
  return display;
}

function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const handler = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id.toLowerCase());
        if (el && window.scrollY >= el.offsetTop - 130) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [ids]);
  return active;
}

function useCountUp(target, duration = 1500) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else setCount(Math.floor(start));
        }, 16);
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return [count, ref];
}

function useFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ─── SMALL COMPONENTS ───────────────────────────────────────── */

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, visible] = useFadeIn();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
function useScrollProgress(ref) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    function onScroll() {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height || 1;
      const raw = (vh * 0.8 - rect.top) / total;
      setProgress(Math.min(1, Math.max(0, raw)));
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref]);
  return progress;
}
function StatusBadge({ status }) {
  const map = {
    Live: "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300",
    Completed:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300",
    "In Progress":
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300",
  };
  return (
    <span
      className={`text-xs font-semibold px-3 py-1 rounded-full ${map[status] || map["Completed"]}`}
    >
      {status}
    </span>
  );
}
function TimelineCard({ item, align }) {
  return (
    <div className="relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 pt-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: item.color }}
      />
      <div
        className={`flex items-center gap-2 mb-1 ${align === "right" ? "md:justify-end" : ""}`}
      >
        <span className="text-base">{item.icon}</span>
        <time
          className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
          style={{ background: item.color }}
        >
          {item.year}
        </time>
        {item.current && (
          <span className="text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
            Now
          </span>
        )}
      </div>
      <h3 className="font-bold text-gray-900 dark:text-white text-sm">
        {item.title}
      </h3>
      <p className="text-xs text-gray-400 mb-2">{item.sub}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
        {item.desc}
      </p>
    </div>
  );
}
function StatCard({ value, suffix = "", label, color }) {
  const [count, ref] = useCountUp(value);
  return (
    <div
      ref={ref}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 text-center hover:shadow-md hover:-translate-y-0.5 transition-all"
    >
      <div className="text-3xl font-bold mb-1" style={{ color }}>
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
}

function SafeImg({ src, alt, fallbackText, fallbackLink }) {
  const [broken, setBroken] = useState(false);
  return broken ? (
    <div className="w-full py-8 text-center text-sm text-gray-400 dark:text-gray-500">
      {fallbackText}{" "}
      {fallbackLink && (
        <a
          href={fallbackLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline ml-1"
        >
          View on GitHub →
        </a>
      )}
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className="w-full"
      onError={() => setBroken(true)}
    />
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <FadeIn className="mb-10">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
        {title}
      </h2>
      {subtitle && <p className="text-gray-400 text-sm mt-1">{subtitle}</p>}
      <div className="mt-3 h-1 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
    </FadeIn>
  );
}

/* ─── CUSTOM CURSOR ──────────────────────────────────────────── */
function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", move);
    let raf;
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.15;
      ring.current.y += (pos.current.y - ring.current.y) * 0.15;
      if (dotRef.current) {
        dotRef.current.style.left = pos.current.x + "px";
        dotRef.current.style.top = pos.current.y + "px";
      }
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + "px";
        ringRef.current.style.top = ring.current.y + "px";
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <>
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] hidden md:block"
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#3b82f6",
          transform: "translate(-50%,-50%)",
          transition: "background .2s",
        }}
      />
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] hidden md:block"
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "1.5px solid #3b82f655",
          transform: "translate(-50%,-50%)",
        }}
      />
    </>
  );
}

/* ─── MARQUEE ────────────────────────────────────────────────── */
function Marquee({ items }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden bg-blue-600 dark:bg-blue-700 py-3 select-none">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-8 text-sm font-medium text-white/90 flex-shrink-0"
          >
            {item}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}

/* ─── SKILL PILL ─────────────────────────────────────────────── */
function SkillPill({ skill }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl cursor-default select-none transition-all duration-200"
      style={{
        background: hovered ? skill.color + "25" : skill.color + "12",
        border: `1.5px solid ${hovered ? skill.color + "90" : skill.color + "40"}`,
        transform: hovered ? "translateY(-3px)" : "none",
        boxShadow: hovered ? `0 6px 20px ${skill.color}35` : "none",
      }}
    >
      <span
        style={{
          color: skill.color,
          fontSize: "1.1rem",
          display: "inline-block",
          transform: hovered ? "scale(1.25) rotate(-8deg)" : "scale(1)",
          filter: hovered ? `drop-shadow(0 0 6px ${skill.color}80)` : "none",
          transition: "all 0.2s ease",
        }}
      >
        {skill.icon}
      </span>
      <span
        className="text-sm font-semibold whitespace-nowrap"
        style={{
          color: hovered ? skill.color : "inherit",
        }}
      >
        {skill.name}
      </span>
    </div>
  );
}

/* ─── SKILL CATEGORY CARD ────────────────────────────────────── */
function CategoryCard({ group, index }) {
  const meta = CATEGORY_META[group.cat];
  const { Illustration } = meta;
  return (
    <FadeIn delay={index * 0.1}>
      <div
        className={`rounded-2xl border ${meta.accentBorder} ${meta.accentBg} overflow-hidden`}
      >
        <div className="flex items-stretch">
          <div
            className="flex-shrink-0 w-32 sm:w-40 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0f172a, #1e293b)" }}
          >
            <div
              className={`absolute inset-0 opacity-10 bg-gradient-to-br ${meta.gradient}`}
            />
            <div
              className="relative z-10 p-2 w-full h-full flex items-center justify-center"
              style={{ minHeight: 90 }}
            >
              <Illustration />
            </div>
          </div>
          <div className="flex-1 p-5 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-1">
              <div
                className="h-2 w-2 rounded-full"
                style={{ background: meta.accent }}
              />
              <span
                className="text-[11px] font-bold uppercase tracking-widest"
                style={{ color: meta.accent }}
              >
                {group.cat}
              </span>
            </div>
            <h3 className="text-base font-bold text-gray-900 dark:text-white leading-tight mb-1">
              {meta.label}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-md">
              {meta.desc}
            </p>
          </div>
        </div>
        <div
          className={`h-px mx-5 bg-gradient-to-r ${meta.gradient} opacity-20`}
        />
        <div className="p-5 pt-4 flex flex-wrap gap-3">
          {group.items.map((skill) => (
            <SkillPill key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

/* ─── CERTIFICATE CARD (NEW DESIGN) ─────────────────────────── */
function CertCard({ cert, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <FadeIn delay={index * 0.06}>
      <a
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative flex flex-col bg-white dark:bg-gray-800 rounded-2xl border overflow-hidden transition-all duration-300 h-full"
        style={{
          borderColor: hovered ? cert.color + "80" : undefined,
          boxShadow: hovered ? `0 8px 30px ${cert.color}20` : "none",
          transform: hovered ? "translateY(-4px)" : "none",
        }}
      >
        {/* Top accent bar */}
        <div className="h-1 w-full" style={{ background: cert.color }} />

        {/* Card body */}
        <div className="p-5 flex flex-col flex-1">
          {/* Icon + badge row */}
          <div className="flex items-start justify-between mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform duration-200"
              style={{
                background: cert.color + "18",
                color: cert.color,
                transform: hovered ? "scale(1.1) rotate(-5deg)" : "scale(1)",
              }}
            >
              {cert.icon}
            </div>
            <span
              className="text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1"
              style={{ background: cert.color + "18", color: cert.color }}
            >
              <FaCheckCircle size={8} />
              {cert.badge}
            </span>
          </div>

          {/* Cert name */}
          <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug mb-3 flex-1">
            {cert.name}
          </h3>

          {/* Platform row */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-1.5">
              <span style={{ color: cert.platformColor, fontSize: 13 }}>
                {cert.platformIcon}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                {cert.platform}
              </span>
            </div>
            <div
              className="flex items-center gap-1 text-xs font-medium transition-colors duration-200"
              style={{ color: hovered ? cert.color : "#94a3b8" }}
            >
              View <FaExternalLinkAlt size={8} />
            </div>
          </div>
        </div>
      </a>
    </FadeIn>
  );
}

/* ─── MAIN APP ───────────────────────────────────────────────── */
export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const activeSection = useScrollSpy(NAV_LINKS);
  const timelineTrackRef = useRef(null);
const timelineProgress = useScrollProgress(timelineTrackRef);
  const typedText = useTyping(TYPING_TEXTS);

  const scrollTo = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    const formData = new FormData(e.target);
    formData.append("access_key", "9b19d9ea-91a4-4a42-93b5-e81cf6bcf09e");
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    setSending(false);
    if (data.success) {
      setSent(true);
      e.target.reset();
      setTimeout(() => {
        setSent(false);
        setShowModal(false);
      }, 2500);
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <CustomCursor />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200 transition-colors duration-300">
        {/* ── NAVBAR ── */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
            <span className="font-black text-blue-600 dark:text-blue-400 text-xl tracking-tight">
              RS.
            </span>
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeSection === link
                      ? "bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {link}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                {darkMode ? <FaSun size={13} /> : <FaMoon size={13} />}
              </button>
              <button
                className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-full transition"
                onClick={() => setShowModal(true)}
              >
                <FaEnvelope size={10} /> Hire Me
              </button>
              <button
                className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-800"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <FaTimes size={13} /> : <FaBars size={13} />}
              </button>
            </div>
          </div>
          {menuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-4 py-3 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="text-left px-3 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {link}
                </button>
              ))}
            </div>
          )}
        </nav>

        {/* ── HERO ── */}
        <section className="pt-14 min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950" />
          <div className="absolute top-24 right-10 w-72 h-72 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 left-10 w-64 h-64 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12 w-full">
            <div className="flex-1 text-center md:text-left">
              <FadeIn>
                <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100 dark:border-blue-800">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Open to Work — Ahmedabad · Remote · Immediate Joining
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-3">
                  Rakshit R
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Soni
                  </span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="h-10 mb-4">
                  <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold">
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-base text-gray-500 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">
                  I build real-world web & mobile apps using{" "}
                  <strong className="text-gray-700 dark:text-gray-300">
                    MERN, Java Spring Boot & Flutter
                  </strong>
                  . 8+ projects shipped. 357+ LeetCode problems solved. BCA
                  graduate, MCA pursuing.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
                  <a
                    href="https://hackerrank-resume.s3.us-east-1.amazonaws.com/uploads/22674395/MjI2NzQzOTU=.pdf"
                    download
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white rounded-full shadow font-medium text-sm transition"
                  >
                    <FaDownload size={11} /> Resume
                  </a>
                  <button
                    onClick={() => setShowModal(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95 text-gray-700 dark:text-gray-300 rounded-full font-medium text-sm transition"
                  >
                    <FaEnvelope size={11} /> Contact Me
                  </button>
                  <button
                    onClick={() => scrollTo("Projects")}
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 active:scale-95 text-blue-600 dark:text-blue-400 rounded-full font-medium text-sm transition"
                  >
                    <FaRocket size={11} /> View Projects
                  </button>
                </div>
              </FadeIn>
              <FadeIn delay={0.5}>
                <div className="flex gap-4 justify-center md:justify-start">
                  {SOCIAL.map((s) => (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={s.label}
                      className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:scale-110 text-xl"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={0.2} className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-2xl opacity-25 scale-110" />
                <img
                  src="/Rakshit.webp"
                  alt="Rakshit Soni"
                  className="relative w-52 h-52 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-800"
                />
                <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />{" "}
                  Available
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <Marquee items={MARQUEE_ITEMS} />

        {/* ── ABOUT ── */}
        <section id="about" className="max-w-6xl mx-auto px-4 py-20">
          <SectionTitle title="About Me" />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn className="space-y-4 text-gray-600 dark:text-gray-400 leading-7">
              <p>
                I'm a{" "}
                <strong className="text-gray-900 dark:text-white">
                  Full Stack Developer
                </strong>{" "}
                from Ahmedabad, India — currently pursuing MCA at GLS University
                while building production-grade web applications.
              </p>
              <p>
                My focus is on{" "}
                <strong className="text-gray-900 dark:text-white">
                  MERN stack, Java/Spring Boot
                </strong>{" "}
                backend systems, and real-time applications. I've shipped 8+
                projects across e-commerce, healthcare, education, and fintech
                domains.
              </p>
              <p>
                I solve DSA problems daily on LeetCode —{" "}
                <strong className="text-gray-900 dark:text-white">
                  357+ problems, 1416 contest rating, 115-day streak
                </strong>
                . Consistent practice makes a better engineer.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  { label: "Location", value: "Ahmedabad, India" },
                  { label: "Email", value: "rakshitsoni@gmail.com" },
                  { label: "Notice Period", value: "Immediate" },
                  { label: "Languages", value: "English · Gujarati · Hindi" },
                  { label: "Work Mode", value: "Remote / Hybrid / On-site" },
                  { label: "Status", value: "🟢 Open to Work" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-gray-100 dark:bg-gray-800/80 rounded-xl p-3"
                  >
                    <div className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  num: 8,
                  suffix: "+",
                  label: "Projects Shipped",
                  color: "#0ea5e9",
                },
                {
                  num: 357,
                  suffix: "+",
                  label: "LeetCode Problems",
                  color: "#f59e0b",
                },
                {
                  num: 115,
                  suffix: " days",
                  label: "Max LeetCode Streak",
                  color: "#22c55e",
                },
                {
                  num: 1416,
                  suffix: "",
                  label: "Contest Rating",
                  color: "#8b5cf6",
                },
                {
                  num: 1009,
                  suffix: "+",
                  label: "GitHub Contributions",
                  color: "#ec4899",
                },
                {
                  num: 10,
                  suffix: "+",
                  label: "Technologies",
                  color: "#f97316",
                },
              ].map((s) => (
                <FadeIn key={s.label}>
                  <StatCard
                    value={s.num}
                    suffix={s.suffix}
                    label={s.label}
                    color={s.color}
                  />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" className="bg-white dark:bg-gray-900 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <FadeIn className="mb-10">
              <div className="flex items-end gap-4 flex-wrap">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Skills
                  </h2>
                  <p className="text-gray-400 text-sm mt-1">
                    Technologies I use to build production-ready applications
                  </p>
                  <div className="mt-3 h-1 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                </div>
                <div className="ml-auto mb-1 flex items-center gap-1.5 text-xs font-semibold text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  {SKILLS.reduce((a, g) => a + g.items.length, 0)}+ Technologies
                </div>
              </div>
            </FadeIn>
            <div className="space-y-5">
              {SKILLS.map((group, i) => (
                <CategoryCard key={group.cat} group={group} index={i} />
              ))}
            </div>
            <FadeIn delay={0.4} className="mt-8">
              <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-px">
                <div className="rounded-2xl bg-white dark:bg-gray-900 px-6 py-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Always learning · Currently exploring{" "}
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      AI/ML integration with Spring Boot
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "MERN",
                      "Spring Boot",
                      "Flutter",
                      "DSA",
                      "AI/ML",
                      "Docker",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-medium border border-blue-100 dark:border-blue-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        

{/* ── SERVICES ── */}
<section id="services" className="max-w-6xl mx-auto px-4 py-20">
  <SectionTitle
    title="What I Can Do For You"
    subtitle="Services I offer as a full stack developer"
  />
  <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 list-none">
    {SERVICES.map((s, i) => {
      const tag = toComponentTag(s.title);
      return (
        <FadeIn key={s.title} delay={Math.min(i * 0.08, 0.32)}>
          <li className="relative overflow-hidden bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full">
            {/* watermark bracket, ties the card to "code" as the subject's vernacular */}
            <span
              className="absolute top-4 right-5 font-mono text-3xl font-bold select-none pointer-events-none opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-300"
              style={{ color: s.color }}
              aria-hidden="true"
            >
              {`</>`}
            </span>

            {/* icon: bordered box instead of filled, glows on hover */}
            <div
              className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-4 border-[1.5px] transition-transform duration-300 group-hover:scale-110"
              style={{
                borderColor: s.color + "50",
                background: s.color + "0d",
                color: s.color,
              }}
            >
              {s.icon}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: `0 0 0 4px ${s.color}20, 0 8px 16px -4px ${s.color}40`,
                }}
              />
            </div>

            {/* JSX-style eyebrow tag */}
            <span
              className="font-mono text-[10px] font-semibold tracking-wider uppercase mb-1.5 inline-block"
              style={{ color: s.color }}
            >
              {`<${tag} />`}
            </span>

            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">
              {s.title}
            </h3>
            <span
              className="block h-0.5 w-6 rounded-full mb-3 transition-all duration-300 group-hover:w-12"
              style={{ background: s.color }}
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-6">
              {s.desc}
            </p>
          </li>
        </FadeIn>
      );
    })}
  </ul>

  <FadeIn delay={0.3}>
    <div className="relative mt-10 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.08]"
        aria-hidden="true"
      >
        <pattern id="dots" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.4" fill="white" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
      <div
        className="absolute -top-16 -right-16 w-56 h-56 bg-white/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative">
        <div className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          Currently accepting new projects
        </div>
        <h3 className="text-xl font-bold mb-2">Got a project in mind?</h3>
        <p className="text-blue-100 text-sm mb-5 max-w-md mx-auto">
          I'm available for full-time roles, internships, and freelance
          projects. Let's build something great together.
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-blue-600 rounded-full font-semibold text-sm hover:shadow-lg active:scale-95 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
        >
          <FaEnvelope size={12} /> Let's Talk
        </button>
      </div>
    </div>
  </FadeIn>
</section>
        {/* ── PROJECTS ── */}
        <section id="projects" className="bg-white dark:bg-gray-900 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle
              title="Projects"
              subtitle={`${PROJECTS.length} real-world applications`}
            />
            <div className="grid md:grid-cols-2 gap-6">
              {PROJECTS.map((p, i) => (
                <FadeIn key={i} delay={(i % 2) * 0.1}>
                  <div className="group bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    {/* ── MOCK PREVIEW ── */}
                    <div
                      className="relative h-52 flex items-center justify-center overflow-hidden"
                      style={{ background: p.color + "12" }}
                    >
                      {/* Floating tech icons background */}
                      <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-10 text-4xl select-none pointer-events-none">
                        {p.tech.slice(0, 3).map((t, ti) => (
                          <span
                            key={ti}
                            style={{ color: p.color, fontSize: "2.5rem" }}
                          >
                            {t === "React" || t === "React.js" ? (
                              <FaReact />
                            ) : t === "Node.js" ? (
                              <FaNodeJs />
                            ) : t === "MongoDB" ? (
                              <SiMongodb />
                            ) : t === "Java" || t === "Spring Boot" ? (
                              <FaJava />
                            ) : t === "MySQL" ? (
                              <SiMysql />
                            ) : t === "Flutter" ? (
                              <SiFlutter />
                            ) : t === "Python" ? (
                              <FaPython />
                            ) : t === "Redux" || t === "Redux Toolkit" ? (
                              <SiRedux />
                            ) : t === "Socket.io" ? (
                              <SiSocketdotio />
                            ) : t === "Django" ? (
                              <SiDjango />
                            ) : t === "PHP" ? (
                              <FaPhp />
                            ) : t === "HTML" ? (
                              <FaHtml5 />
                            ) : t === "Tailwind CSS" || t === "Tailwind" ? (
                              <SiTailwindcss />
                            ) : (
                              <FaCode />
                            )}
                          </span>
                        ))}
                      </div>

                      {/* Mock browser window */}
                      <div className="relative w-4/5 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                        {/* Browser bar */}
                        <div
                          className="flex items-center gap-1.5 px-3 py-2 border-b border-gray-100 dark:border-gray-700"
                          style={{ background: p.color }}
                        >
                          <div className="w-2 h-2 rounded-full bg-white opacity-60" />
                          <div className="w-2 h-2 rounded-full bg-white opacity-60" />
                          <div className="w-2 h-2 rounded-full bg-white opacity-60" />
                          <div className="flex-1 h-4 rounded bg-white opacity-20 ml-2" />
                        </div>
                        {/* ── MOCK PREVIEW ── */}
                        <div className="relative h-40 overflow-hidden rounded-t-2xl">
                          <ProjectPreview type={p.preview} color={p.color} />
                          <div className="absolute top-3 right-3">
                            <StatusBadge status={p.status} />
                          </div>
                        </div>
                      </div>

                      {/* Featured star */}
                      {i === 0 && (
                        <div
                          className="absolute top-3 left-3 flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full text-white"
                          style={{ background: p.color }}
                        >
                          <FaStar size={9} /> New
                        </div>
                      )}
                    </div>

                    {/* ── CARD BODY ── */}
                    <div className="p-5 flex flex-col flex-1">
                      {/* Title row */}
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                          style={{ background: p.color + "18" }}
                        >
                          {p.icon}
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug">
                            {p.title}
                          </h3>
                          <p className="text-xs text-gray-400 mt-0.5">
                            {p.subtitle || p.tech.slice(0, 2).join(" · ")}
                          </p>
                        </div>
                      </div>

                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-6 mb-3 flex-1">
                        {p.desc}
                      </p>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {p.tech.map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-medium"
                            style={{
                              background: p.color + "15",
                              color: p.color,
                            }}
                          >
                            <span style={{ fontSize: "0.7rem" }}>
                              {t === "React" || t === "React.js" ? (
                                <FaReact />
                              ) : t === "Node.js" ? (
                                <FaNodeJs />
                              ) : t === "MongoDB" ? (
                                <SiMongodb />
                              ) : t === "Java" || t === "Spring Boot" ? (
                                <FaJava />
                              ) : t === "MySQL" ? (
                                <SiMysql />
                              ) : t === "Flutter" ? (
                                <SiFlutter />
                              ) : t === "Python" ? (
                                <FaPython />
                              ) : t === "Redux" || t === "Redux Toolkit" ? (
                                <SiRedux />
                              ) : t === "Socket.io" ? (
                                <SiSocketdotio />
                              ) : t === "Django" ? (
                                <SiDjango />
                              ) : t === "PHP" ? (
                                <FaPhp />
                              ) : t === "HTML" ? (
                                <FaHtml5 />
                              ) : t === "Tailwind CSS" || t === "Tailwind" ? (
                                <SiTailwindcss />
                              ) : null}
                            </span>
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Action buttons */}
                      <div className="flex gap-2 pt-3 border-t border-gray-100 dark:border-gray-700">
                        {p.github && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition flex-1 justify-center"
                          >
                            <FaGithub size={12} /> Code
                          </a>
                        )}
                        {p.live && (
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-lg text-white transition hover:opacity-90 flex-1 justify-center"
                            style={{ background: p.color }}
                          >
                            <FaExternalLinkAlt size={9} /> Live Demo
                          </a>
                        )}
                        {!p.live && (
                          <span className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-lg text-gray-400 border border-dashed border-gray-200 dark:border-gray-700 flex-1 justify-center">
                            <FaRocket size={9} /> Deploy soon
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section id="stats" className="max-w-6xl mx-auto px-4 py-20">
          <SectionTitle title="GitHub & LeetCode Stats" />
          <FadeIn>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
              GitHub
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                {
                  label: "Total Contributions",
                  value: "1,009+",
                  icon: "📦",
                  color: "#0ea5e9",
                },
                {
                  label: "Public Repos",
                  value: "15+",
                  icon: "💻",
                  color: "#8b5cf6",
                },
                {
                  label: "Current Streak",
                  value: "8 days",
                  icon: "🔥",
                  color: "#ef4444",
                },
                {
                  label: "Longest Streak",
                  value: "13 days",
                  icon: "⚡",
                  color: "#f59e0b",
                },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 text-center hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <div
                    className="text-xl font-bold mb-1"
                    style={{ color: s.color }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs text-gray-400">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
              LeetCode
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                {
                  label: "Problems Solved",
                  value: "357+",
                  icon: "🧠",
                  color: "#ffa116",
                },
                {
                  label: "Contest Rating",
                  value: "1,416",
                  icon: "⭐",
                  color: "#22c55e",
                },
                {
                  label: "Max Streak",
                  value: "115 days",
                  icon: "🔥",
                  color: "#ef4444",
                },
                {
                  label: "Submissions (1yr)",
                  value: "426+",
                  icon: "📈",
                  color: "#06b6d4",
                },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 text-center hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <div
                    className="text-xl font-bold mb-1"
                    style={{ color: s.color }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs text-gray-400">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 mb-8">
              <div className="flex items-center justify-between mb-5">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Problem Breakdown
                </span>
                <a
                  href="https://leetcode.com/u/rakshitsoni1410"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-yellow-500 hover:underline flex items-center gap-1"
                >
                  View Profile <FaExternalLinkAlt size={8} />
                </a>
              </div>
              <div className="grid grid-cols-3 gap-6 text-center">
                {[
                  { label: "Easy", value: 150, color: "#22c55e" },
                  { label: "Medium", value: 170, color: "#f59e0b" },
                  { label: "Hard", value: 37, color: "#ef4444" },
                ].map((d) => (
                  <div key={d.label}>
                    <div
                      className="text-2xl font-bold mb-1"
                      style={{ color: d.color }}
                    >
                      {d.value}
                    </div>
                    <div className="text-xs text-gray-400 mb-2">{d.label}</div>
                    <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${(d.value / 357) * 100}%`,
                          background: d.color,
                          transition: "width 1s ease",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 mb-6">
              <div className="p-3 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <FaGithub /> Contribution Activity
                </span>
                <a
                  href="https://github.com/Rakshitsoni1410"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-500 hover:underline"
                >
                  github.com/Rakshitsoni1410
                </a>
              </div>
              <SafeImg
                src="https://github-readme-activity-graph.vercel.app/graph?username=Rakshitsoni1410&theme=react-dark&hide_border=true&bg_color=1f2937"
                alt="GitHub Activity"
                fallbackText="📊 1,009+ contributions since May 2024"
                fallbackLink="https://github.com/Rakshitsoni1410"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.25}>
            <div className="flex justify-center gap-4 flex-wrap">
              {[
                {
                  label: "GitHub",
                  icon: <FaGithub />,
                  url: "https://github.com/Rakshitsoni1410",
                  cls: "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300",
                },
                {
                  label: "LeetCode",
                  icon: "🧠",
                  url: "https://leetcode.com/u/rakshitsoni1410",
                  cls: "border-yellow-300 dark:border-yellow-800 text-yellow-600 dark:text-yellow-400",
                },
                {
                  label: "HackerRank",
                  icon: <FaHackerrank />,
                  url: "https://www.hackerrank.com/profile/rakshitsoni544",
                  cls: "border-green-300 dark:border-green-800 text-green-600 dark:text-green-400",
                },
                {
                  name: "Frontend Developer (React)",
                  icon: <FaReact />,
                  color: "#61dafb",
                  bgColor: "#61dafb10",
                  borderColor: "#61dafb40",
                  link: "https://www.hackerrank.com/profile/rakshitsoni544",
                  platform: "HackerRank",
                  platformColor: "#2ec866",
                  platformIcon: <FaHackerrank />,
                  badge: "Role Certified",
                },
                {
                  name: "C# (Basic)",
                  icon: <FaCode />,
                  color: "#9b4f96",
                  bgColor: "#9b4f9610",
                  borderColor: "#9b4f9640",
                  link: "https://www.hackerrank.com/profile/rakshitsoni544",
                  platform: "HackerRank",
                  platformColor: "#2ec866",
                  platformIcon: <FaHackerrank />,
                  badge: "Certified",
                },
              ].map((p) => (
                <a
                  key={p.label}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium hover:shadow-md transition ${p.cls}`}
                >
                  {p.icon} {p.label}
                </a>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* ── TIMELINE ── */}
        <section id="timeline" className="bg-white dark:bg-gray-900 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle
              title="My Journey"
              subtitle="From student to developer"
            />
            <div className="relative">
              <div
                ref={timelineTrackRef}
                className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 md:-translate-x-0.5 rounded-full overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 bg-gradient-to-b from-blue-600 to-purple-600 transition-all duration-150 ease-out"
                  style={{ height: `${timelineProgress * 100}%` }}
                />
              </div>
              <div className="space-y-10">
                {TIMELINE.map((item, i) => (
                  <FadeIn key={i} delay={Math.min(i * 0.1, 0.5)}>
                    <div
                      className={`group relative flex flex-col md:flex-row gap-6 ${
                        i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      <div className="md:w-1/2 pl-12 md:pl-0 md:pr-10">
                        {i % 2 === 0 ? (
                          <TimelineCard item={item} align="right" />
                        ) : (
                          <div className="hidden md:block" />
                        )}
                      </div>
                      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-5 w-8 h-8">
                        {item.current && (
                          <span
                            className="absolute inset-0 rounded-full animate-ping opacity-40"
                            style={{ background: item.color }}
                          />
                        )}
                        <div
                          className="relative w-8 h-8 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center text-sm transition-transform duration-300 group-hover:scale-110"
                          style={{
                            background: item.color,
                            boxShadow: `0 4px 6px -1px rgba(0,0,0,0.15), 0 0 0 4px ${item.color}26`,
                          }}
                        >
                          {item.icon}
                        </div>
                      </div>
                      <div className="md:w-1/2 pl-12 md:pl-10">
                        {i % 2 !== 0 ? (
                          <TimelineCard item={item} align="left" />
                        ) : (
                          <div className="hidden md:block" />
                        )}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section id="education" className="max-w-6xl mx-auto px-4 py-20">
          <SectionTitle title="Education" />
          <div className="relative border-l-2 border-blue-200 dark:border-blue-900 ml-4 space-y-8">
            {[
              {
                degree: "Master of Computer Applications (MCA)",
                school: "GLS University, Ahmedabad",
                period: "2025 – 2027",
                status: "Pursuing",
                color: "#8b5cf6",
              },
              {
                degree: "Bachelor of Computer Applications (BCA)",
                school: "Indus University, Ahmedabad",
                period: "2022 – 2025",
                status: "CGPA: 7.5 / 10",
                color: "#0ea5e9",
              },
            ].map((edu, i) => (
              <FadeIn key={i} delay={i * 0.1} className="relative pl-8">
                <div
                  className="absolute -left-2.5 top-2 w-4 h-4 rounded-full border-2 border-white dark:border-gray-950 shadow"
                  style={{ background: edu.color }}
                />
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition">
                  <div className="flex flex-col md:flex-row justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">
                        {edu.school}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-xs text-gray-400">{edu.period}</div>
                      <div
                        className="text-sm font-semibold mt-0.5"
                        style={{ color: edu.color }}
                      >
                        {edu.status}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── CERTIFICATIONS (REDESIGNED) ── */}
        <section
          id="certifications"
          className="bg-white dark:bg-gray-900 py-20"
        >
          <div className="max-w-6xl mx-auto px-4">
            {/* Section header */}
            <FadeIn className="mb-10">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Certifications
                  </h2>
                  <p className="text-gray-400 text-sm mt-1">
                     Verified credentials from HackerRank, GeeksforGeeks & Coursera
                  </p>
                  <div className="mt-3 h-1 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                </div>
                {/* Profile link pill */}
                <a
                  href="https://www.hackerrank.com/profile/rakshitsoni544"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2ec866]/10 border border-[#2ec866]/30 text-[#2ec866] font-semibold text-sm hover:bg-[#2ec866]/20 transition-all self-start sm:self-auto"
                >
                  <FaHackerrank size={16} />
                  View HackerRank Profile
                  <FaExternalLinkAlt size={9} />
                </a>
              </div>
            </FadeIn>

            {/* Platform summary row */}
            <FadeIn delay={0.05} className="mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-4 bg-[#2ec866]/5 dark:bg-[#2ec866]/10 border border-[#2ec866]/20 rounded-2xl p-4">
                  <div className="w-12 h-12 bg-[#2ec866]/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaHackerrank size={24} className="text-[#2ec866]" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white">
                      8
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      HackerRank Certificates
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-[#2f8d46]/5 dark:bg-[#2f8d46]/10 border border-[#2f8d46]/20 rounded-2xl p-4">
                  <div className="w-12 h-12 bg-[#2f8d46]/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <SiGeeksforgeeks size={24} className="text-[#2f8d46]" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white">
                      1
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      GeeksforGeeks Certificate
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-[#0056d3]/5 dark:bg-[#0056d3]/10 border border-[#0056d3]/20 rounded-2xl p-4">
                  <div className="w-12 h-12 bg-[#0056d3]/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <SiCoursera size={24} className="text-[#0056d3]" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white">
                      1
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Coursera Certificate
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Cert cards grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {CERTS.map((cert, i) => (
                <CertCard key={i} cert={cert} index={i} />
              ))}
            </div>

            {/* Bottom CTA */}
            <FadeIn delay={0.4} className="mt-8">
              <div className="rounded-2xl border border-dashed border-gray-200 dark:border-gray-700 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50/50 dark:bg-gray-800/30">
                <div className="flex items-center gap-3">
                  <FaTrophy className="text-yellow-500" size={20} />
                  <div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      Want to verify any certificate?
                    </div>
                    <div className="text-xs text-gray-400">
                      All certifications are verifiable on their respective
                      platforms.
                    </div>
                  </div>
                </div>
                <a
                  href="https://www.hackerrank.com/profile/rakshitsoni544"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2ec866] hover:bg-[#25b057] text-white rounded-xl text-sm font-semibold transition-all active:scale-95 whitespace-nowrap flex-shrink-0"
                >
                  <FaHackerrank size={13} /> HackerRank Profile
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="max-w-6xl mx-auto px-4 py-20">
          <SectionTitle
            title="Let's Connect"
            subtitle="Open to full-time roles, internships & freelance"
          />
          <div className="grid md:grid-cols-2 gap-10">
            <FadeIn className="space-y-5">
              {[
                {
                  icon: <FaEnvelope />,
                  label: "Email",
                  value: "rakshitsoni@gmail.com",
                  href: "mailto:rakshitsoni@gmail.com",
                },
                {
                  icon: <FaPhone />,
                  label: "Phone",
                  value: "+91 9638257457",
                  href: "tel:+919638257457",
                },
                {
                  icon: <FaMapMarkerAlt />,
                  label: "Location",
                  value: "Ahmedabad, Gujarat, India",
                  href: null,
                },
                {
                  icon: <FaClock />,
                  label: "Availability",
                  value: "Immediate · Full-time / Part-time / Freelance",
                  href: null,
                },
              ].map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-4 bg-gray-50 dark:bg-gray-900 rounded-2xl p-4 border border-gray-100 dark:border-gray-800 hover:shadow-sm transition"
                >
                  <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">
                      {c.label}
                    </div>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        {c.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div className="flex flex-wrap gap-3 pt-2">
                {SOCIAL.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    {s.icon} {s.label}
                  </a>
                ))}
              </div>
            </FadeIn>
            <FadeIn
              delay={0.15}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
                <FaEnvelope className="text-blue-600" size={14} /> Send a
                Message
              </h3>
              {sent ? (
                <div className="flex flex-col items-center justify-center h-48 text-center">
                  <FaCheckCircle className="text-green-500 text-4xl mb-3" />
                  <p className="font-medium text-green-600 dark:text-green-400">
                    Message sent! I'll reply within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="hidden"
                    name="subject"
                    value="📩 New Portfolio Contact Message"
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                  <textarea
                    name="message"
                    placeholder="Your message..."
                    rows={4}
                    required
                    className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                  />
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white rounded-xl font-medium text-sm transition active:scale-95 flex items-center justify-center gap-2"
                  >
                    {sending ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />{" "}
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaRocket size={12} /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </FadeIn>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <span className="font-black text-blue-600 dark:text-blue-400 text-lg">
                RS.
              </span>
              <span className="text-xs text-gray-400 ml-3">
                © 2025 Rakshit Soni · Built with React & Tailwind CSS
              </span>
            </div>
            <div className="flex gap-4">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:scale-110 text-lg"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              ↑ Back to top
            </button>
          </div>
        </footer>

        {/* ── CONTACT MODAL ── */}
        {showModal && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-md shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="flex items-center justify-between p-5 border-b border-gray-100 dark:border-gray-800">
                <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <FaEnvelope className="text-blue-600" size={13} /> Contact Me
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-700 dark:hover:text-white transition p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <FaTimes size={13} />
                </button>
              </div>
              <div className="p-5">
                {sent ? (
                  <div className="text-center py-10">
                    <FaCheckCircle className="text-green-500 text-4xl mx-auto mb-3" />
                    <p className="font-medium text-green-600 dark:text-green-400">
                      Sent! I'll reply within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="hidden"
                      name="subject"
                      value="📩 New Portfolio Contact Message"
                    />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                      name="message"
                      placeholder="Your message..."
                      rows={4}
                      required
                      className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white rounded-xl font-semibold text-sm transition flex items-center justify-center gap-2"
                    >
                      {sending ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />{" "}
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaRocket size={11} /> Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
