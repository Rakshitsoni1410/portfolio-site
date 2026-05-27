import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  FaSun, FaMoon, FaGithub, FaLinkedin, FaHackerrank,
  FaGlobe, FaJava, FaPython, FaDatabase, FaJs, FaReact,
  FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap, FaPhp, FaCode,
  FaBars, FaTimes, FaExternalLinkAlt, FaDownload, FaEnvelope,
  FaMapMarkerAlt, FaPhone, FaRocket, FaMobile, FaServer,
  FaShieldAlt, FaClock, FaCheckCircle,
} from "react-icons/fa";
import {
  SiMongodb, SiMysql, SiSpringboot, SiTailwindcss,
  SiFlutter, SiDjango, SiRedux, SiSocketdotio,
} from "react-icons/si";

/* ─── DATA ──────────────────────────────────────────────────── */

const NAV_LINKS = ["About","Skills","Services","Projects","Stats","Timeline","Certifications","Contact"];

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
  "🚀 7+ Projects Shipped",
  "💻 MERN Stack Expert",
  "☕ Java Spring Boot",
  "📱 Flutter Mobile Dev",
  "🌐 10+ Technologies",
  "✅ Available for Hire",
];

const SKILLS = [
  { cat: "Frontend", items: [
    { name: "React.js", icon: <FaReact />, color: "#61dafb" },
    { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
    { name: "Redux", icon: <SiRedux />, color: "#764abc" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06b6d4" },
    { name: "HTML5", icon: <FaHtml5 />, color: "#e34f26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572b6" },
  ]},
  { cat: "Backend", items: [
    { name: "Node.js", icon: <FaNodeJs />, color: "#68a063" },
    { name: "Spring Boot", icon: <SiSpringboot />, color: "#6db33f" },
    { name: "Java", icon: <FaJava />, color: "#f89820" },
    { name: "Python", icon: <FaPython />, color: "#3776ab" },
    { name: "Django", icon: <SiDjango />, color: "#44b78b" },
    { name: "PHP", icon: <FaPhp />, color: "#777bb4" },
  ]},
  { cat: "Database & Tools", items: [
    { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479a1" },
    { name: "Socket.io", icon: <SiSocketdotio />, color: "#888" },
    { name: "GitHub", icon: <FaGithub />, color: "#6e7681" },
  ]},
  { cat: "Mobile", items: [
    { name: "Flutter", icon: <SiFlutter />, color: "#02569b" },
  ]},
];

const SERVICES = [
  { icon: <FaReact size={26} />, color: "#0ea5e9", title: "Full Stack Web Apps", desc: "End-to-end MERN stack applications — from REST API design to responsive React UI. Scalable, fast, and production-ready." },
  { icon: <FaServer size={26} />, color: "#8b5cf6", title: "Backend API Development", desc: "RESTful APIs with Node.js/Express or Java Spring Boot. JWT authentication, role-based access, clean architecture." },
  { icon: <FaMobile size={26} />, color: "#22c55e", title: "Mobile App Development", desc: "Cross-platform Flutter apps for Android & iOS. Real-time features, offline-first storage, smooth UX." },
  { icon: <FaShieldAlt size={26} />, color: "#f59e0b", title: "Real-Time Systems", desc: "Live features using Socket.io WebSockets — chat apps, ride tracking, live dashboards, notifications." },
  { icon: <FaDatabase size={26} />, color: "#ec4899", title: "Database Design", desc: "MongoDB and MySQL schema design, query optimization, and integration with Node.js, Spring Boot, or Django backends." },
  { icon: <FaRocket size={26} />, color: "#f97316", title: "MVP Development", desc: "Got an idea? I'll help you build a working MVP fast — full stack, deployed, and ready to demo to investors." },
];

const PROJECTS = [
  { title: "AI Chatbot Support System", icon: "🤖", status: "Completed",
    desc: "Full-stack AI chatbot with JWT auth, role-based access control, Spring Security REST APIs, and real-time chat UI. Built for Gemini/OpenAI API integration.",
    tech: ["Java", "Spring Boot", "React.js", "MySQL", "JWT", "Spring Security"],
    color: "#8b5cf6", github: "https://github.com/Rakshitsoni1410/ai-chat-support-system", live: "" },
  { title: "Learning Management System", icon: "📚", status: "Live",
    desc: "Full-featured LMS with course browsing, student enrollment, instructor dashboards, Redux state management, and real-time progress tracking.",
    tech: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB"],
    color: "#0ea5e9", github: "https://github.com/Rakshitsoni1410/courseplatform", live: "https://nextskilss.netlify.app/" },
  { title: "Real-Time Ride Booking App", icon: "🚖", status: "In Progress",
    desc: "Uber-like ride booking with live driver location via WebSockets, JWT-based auth, and real-time booking status flow between rider and driver.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "JWT"],
    color: "#f59e0b", github: "https://github.com/Rakshitsoni1410/Get-your-ride", live: "" },
  { title: "Gold Weight Management", icon: "⚖️", status: "Live",
    desc: "Professional tool for gold jewellers to track input/output weight, calculate karat-wise loss per job, and export structured PDF reports.",
    tech: ["React", "Spring Boot", "MySQL", "Tailwind CSS", "Axios"],
    color: "#f97316", github: "https://github.com/Rakshitsoni1410/Weight-Management-Software", live: "https://weight-management-software.netlify.app" },
  { title: "Jewellery E-Commerce", icon: "💍", status: "Live",
    desc: "Responsive e-commerce site for a family jewellery business with product catalog, admin upload panel, and PHP/MySQL backend.",
    tech: ["HTML", "Tailwind CSS", "JavaScript", "PHP", "MySQL"],
    color: "#ec4899", github: "https://github.com/Rakshitsoni1410/gold-jewellery-websites", live: "https://rcsoni.netlify.app" },
  { title: "Smart Khata Book", icon: "📒", status: "Completed",
    desc: "Cross-platform Flutter mobile app for small businesses to manage credit/debit ledger entries with real-time balance calculation and offline-first local storage.",
    tech: ["Flutter", "Dart"],
    color: "#22c55e", github: "https://github.com/Rakshitsoni1410/smartkhatabook", live: "https://smartkhatabooks.netlify.app/" },
  { title: "Hospital Management System", icon: "🏥", status: "Completed",
    desc: "Web-based system for managing patient records, appointments, and hospital staff workflows using Django ORM and admin interface.",
    tech: ["Python", "Django", "HTML", "CSS", "SQLite"],
    color: "#ef4444", github: "https://github.com/Rakshitsoni1410/hospital-in-django", live: "" },
];

const TIMELINE = [
  { year: "2022", title: "Started BCA", sub: "Indus University, Ahmedabad", desc: "Began Computer Applications degree. First exposure to programming — C, Java, HTML.", color: "#0ea5e9", icon: "🎓" },
  { year: "2023", title: "First Projects", sub: "HTML · CSS · PHP", desc: "Built first full-stack projects — Jewellery E-Commerce and Hospital Management System.", color: "#8b5cf6", icon: "💻" },
  { year: "2024", title: "MERN Stack Mastery", sub: "React · Node.js · MongoDB", desc: "Shipped LMS platform and Smart Khata Book. Started solving DSA on LeetCode daily.", color: "#22c55e", icon: "🚀" },
  { year: "2024", title: "Real-Time Systems", sub: "Socket.io · Spring Boot · Flutter", desc: "Built ride booking app with WebSockets. Learned Spring Boot and Flutter cross-platform.", color: "#f59e0b", icon: "⚡" },
  { year: "2025", title: "Started MCA", sub: "GLS University, Ahmedabad", desc: "Pursuing Master of Computer Applications. AI Chatbot project with Spring Security & JWT.", color: "#ec4899", icon: "🏫" },
  { year: "Now", title: "Open to Work", sub: "Full-time · Internship · Freelance", desc: "357+ LeetCode problems. 7+ projects. Looking for opportunities to contribute real value.", color: "#f97316", icon: "🎯" },
];

const CERTS = [
  { name: "JavaScript (Intermediate)", icon: <FaJs />, color: "#f7df1e", link: "https://www.hackerrank.com/certificates/iframe/b04991b66fe0", platform: "HackerRank" },
  { name: "Java (Basic)", icon: <FaJava />, color: "#f89820", link: "", platform: "HackerRank" },
  { name: "Python (Basic)", icon: <FaPython />, color: "#3776ab", link: "", platform: "HackerRank" },
  { name: "SQL (Basic & Intermediate)", icon: <FaDatabase />, color: "#4479a1", link: "", platform: "HackerRank" },
  { name: "CSS (Basic)", icon: <FaCss3Alt />, color: "#1572b6", link: "", platform: "HackerRank" },
  { name: "Problem Solving", icon: <FaCode />, color: "#22c55e", link: "", platform: "HackerRank" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952b3", link: "", platform: "HackerRank" },
  { name: "HTML, CSS & JS", icon: <FaGlobe />, color: "#0056d3", link: "https://coursera.org/verify/QBZAL6TBSX8K", platform: "Coursera" },
];

const SOCIAL = [
  { label: "GitHub", icon: <FaGithub />, url: "https://github.com/Rakshitsoni1410" },
  { label: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/rakshitrsoni1410/" },
  { label: "LeetCode", icon: <FaCode />, url: "https://leetcode.com/u/rakshitsoni1410" },
  { label: "HackerRank", icon: <FaHackerrank />, url: "https://www.hackerrank.com/rakshitsoni544" },
  { label: "GFG", icon: <FaGlobe />, url: "https://www.geeksforgeeks.org/user/rakshituya7/" },
];

/* ─── HOOKS ──────────────────────────────────────────────────── */

function useTyping(texts, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = texts[idx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, display.length + 1));
        if (display.length + 1 === current.length) setTimeout(() => setDeleting(true), pause);
      } else {
        setDisplay(current.slice(0, display.length - 1));
        if (display.length === 0) { setDeleting(false); setIdx((i) => (i + 1) % texts.length); }
      }
    }, deleting ? speed / 2 : speed);
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
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      let start = 0;
      const step = target / (duration / 16);
      const timer = setInterval(() => {
        start += step;
        if (start >= target) { setCount(target); clearInterval(timer); }
        else setCount(Math.floor(start));
      }, 16);
    }, { threshold: 0.3 });
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
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ─── SMALL COMPONENTS ───────────────────────────────────────── */

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, visible] = useFadeIn();
  return (
    <div ref={ref} className={className}
      style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s` }}>
      {children}
    </div>
  );
}

function StatusBadge({ status }) {
  const map = {
    "Live": "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300",
    "Completed": "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300",
    "In Progress": "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300",
  };
  return <span className={`text-xs font-semibold px-3 py-1 rounded-full ${map[status] || map["Completed"]}`}>{status}</span>;
}

function StatCard({ value, suffix = "", label, color }) {
  const [count, ref] = useCountUp(value);
  return (
    <div ref={ref} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 text-center hover:shadow-md hover:-translate-y-0.5 transition-all">
      <div className="text-3xl font-bold mb-1" style={{ color }}>{count.toLocaleString()}{suffix}</div>
      <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">{label}</div>
    </div>
  );
}

function SafeImg({ src, alt, fallbackText, fallbackLink }) {
  const [broken, setBroken] = useState(false);
  return broken ? (
    <div className="w-full py-8 text-center text-sm text-gray-400 dark:text-gray-500">
      {fallbackText}{" "}
      {fallbackLink && <a href={fallbackLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-1">View on GitHub →</a>}
    </div>
  ) : (
    <img src={src} alt={alt} className="w-full" onError={() => setBroken(true)} />
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <FadeIn className="mb-10">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
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
    const move = (e) => { pos.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", move);
    let raf;
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.15;
      ring.current.y += (pos.current.y - ring.current.y) * 0.15;
      if (dotRef.current) { dotRef.current.style.left = pos.current.x + "px"; dotRef.current.style.top = pos.current.y + "px"; }
      if (ringRef.current) { ringRef.current.style.left = ring.current.x + "px"; ringRef.current.style.top = ring.current.y + "px"; }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);
  return (
    <>
      <div ref={dotRef} className="fixed pointer-events-none z-[9999] hidden md:block"
        style={{ width: 8, height: 8, borderRadius: "50%", background: "#3b82f6", transform: "translate(-50%,-50%)", transition: "background .2s" }} />
      <div ref={ringRef} className="fixed pointer-events-none z-[9998] hidden md:block"
        style={{ width: 32, height: 32, borderRadius: "50%", border: "1.5px solid #3b82f655", transform: "translate(-50%,-50%)" }} />
    </>
  );
}

/* ─── MARQUEE ────────────────────────────────────────────────── */
function Marquee({ items }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden bg-blue-600 dark:bg-blue-700 py-3 select-none">
      <div className="flex whitespace-nowrap" style={{ animation: "marquee 30s linear infinite" }}>
        {doubled.map((item, i) => (
          <span key={i} className="mx-8 text-sm font-medium text-white/90 flex-shrink-0">{item}</span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
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
  const typedText = useTyping(TYPING_TEXTS);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    const formData = new FormData(e.target);
    formData.append("access_key", "9b19d9ea-91a4-4a42-93b5-e81cf6bcf09e");
    const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
    const data = await res.json();
    setSending(false);
    if (data.success) { setSent(true); e.target.reset(); setTimeout(() => { setSent(false); setShowModal(false); }, 2500); }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <CustomCursor />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200 transition-colors duration-300">

        {/* ── NAVBAR ── */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
            <span className="font-black text-blue-600 dark:text-blue-400 text-xl tracking-tight">RS.</span>
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button key={link} onClick={() => scrollTo(link)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeSection === link
                      ? "bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}>
                  {link}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                {darkMode ? <FaSun size={13} /> : <FaMoon size={13} />}
              </button>
              <button className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-full transition"
                onClick={() => setShowModal(true)}>
                <FaEnvelope size={10} /> Hire Me
              </button>
              <button className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-800" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes size={13} /> : <FaBars size={13} />}
              </button>
            </div>
          </div>
          {menuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-4 py-3 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button key={link} onClick={() => scrollTo(link)}
                  className="text-left px-3 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
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
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
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
                  Rakshit<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Soni</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="h-10 mb-4">
                  <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold">
                    {typedText}<span className="animate-pulse">|</span>
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-base text-gray-500 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">
                  I build real-world web & mobile apps using <strong className="text-gray-700 dark:text-gray-300">MERN, Java Spring Boot & Flutter</strong>. 7+ projects shipped. 357+ LeetCode problems solved. BCA graduate, MCA pursuing.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
                  <a href="https://hackerrank-resume.s3.us-east-1.amazonaws.com/uploads/22674395/MjI2NzQzOTU=.pdf"
                    download className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white rounded-full shadow font-medium text-sm transition">
                    <FaDownload size={11} /> Resume
                  </a>
                  <button onClick={() => setShowModal(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95 text-gray-700 dark:text-gray-300 rounded-full font-medium text-sm transition">
                    <FaEnvelope size={11} /> Contact Me
                  </button>
                  <button onClick={() => scrollTo("Projects")}
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 active:scale-95 text-blue-600 dark:text-blue-400 rounded-full font-medium text-sm transition">
                    <FaRocket size={11} /> View Projects
                  </button>
                </div>
              </FadeIn>
              <FadeIn delay={0.5}>
                <div className="flex gap-4 justify-center md:justify-start">
                  {SOCIAL.map((s) => (
                    <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" title={s.label}
                      className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:scale-110 text-xl">
                      {s.icon}
                    </a>
                  ))}
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={0.2} className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-2xl opacity-25 scale-110" />
                <img src="/Rakshit.webp" alt="Rakshit Soni"
                  className="relative w-52 h-52 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-800" />
                <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" /> Available
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
              <p>I'm a <strong className="text-gray-900 dark:text-white">Full Stack Developer</strong> from Ahmedabad, India — currently pursuing MCA at GLS University while building production-grade web applications.</p>
              <p>My focus is on <strong className="text-gray-900 dark:text-white">MERN stack, Java/Spring Boot</strong> backend systems, and real-time applications. I've shipped 7+ projects across e-commerce, healthcare, education, and fintech domains.</p>
              <p>I solve DSA problems daily on LeetCode — <strong className="text-gray-900 dark:text-white">357+ problems, 1416 contest rating, 115-day streak</strong>. Consistent practice makes a better engineer.</p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  { label: "Location", value: "Ahmedabad, India" },
                  { label: "Email", value: "rakshitsoni@gmail.com" },
                  { label: "Notice Period", value: "Immediate" },
                  { label: "Languages", value: "English · Gujarati · Hindi" },
                  { label: "Work Mode", value: "Remote / Hybrid / On-site" },
                  { label: "Status", value: "🟢 Open to Work" },
                ].map((item) => (
                  <div key={item.label} className="bg-gray-100 dark:bg-gray-800/80 rounded-xl p-3">
                    <div className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">{item.label}</div>
                    <div className="text-sm font-medium text-gray-800 dark:text-gray-200">{item.value}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: 7, suffix: "+", label: "Projects Shipped", color: "#0ea5e9" },
                { num: 357, suffix: "+", label: "LeetCode Problems", color: "#f59e0b" },
                { num: 115, suffix: " days", label: "Max LeetCode Streak", color: "#22c55e" },
                { num: 1416, suffix: "", label: "Contest Rating", color: "#8b5cf6" },
                { num: 1009, suffix: "+", label: "GitHub Contributions", color: "#ec4899" },
                { num: 10, suffix: "+", label: "Technologies", color: "#f97316" },
              ].map((s) => (
                <FadeIn key={s.label}>
                  <StatCard value={s.num} suffix={s.suffix} label={s.label} color={s.color} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" className="bg-white dark:bg-gray-900 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle title="Skills" />
            <div className="space-y-8">
              {SKILLS.map((group, gi) => (
                <FadeIn key={group.cat} delay={gi * 0.1}>
                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">{group.cat}</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                    {group.items.map((skill) => (
                      <div key={skill.name}
                        className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 flex flex-col items-center gap-2 hover:shadow-md hover:-translate-y-1 transition-all border border-gray-100 dark:border-gray-700 cursor-default group">
                        <span className="text-2xl transition-transform group-hover:scale-110" style={{ color: skill.color }}>{skill.icon}</span>
                        <span className="text-xs font-medium text-center text-gray-700 dark:text-gray-300">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section id="services" className="max-w-6xl mx-auto px-4 py-20">
          <SectionTitle title="What I Can Do For You" subtitle="Services I offer as a full stack developer" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.08}>
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all group cursor-default h-full">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{ background: s.color + "18", color: s.color }}>
                    {s.icon}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-6">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div className="mt-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-xl font-bold mb-2">Got a project in mind?</h3>
              <p className="text-blue-100 text-sm mb-5">I'm available for full-time roles, internships, and freelance projects. Let's build something great together.</p>
              <button onClick={() => setShowModal(true)}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-blue-600 rounded-full font-semibold text-sm hover:shadow-lg active:scale-95 transition">
                <FaEnvelope size={12} /> Let's Talk
              </button>
            </div>
          </FadeIn>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" className="bg-white dark:bg-gray-900 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle title="Projects" subtitle={`${PROJECTS.length} real-world applications`} />
            <div className="grid md:grid-cols-2 gap-6">
              {PROJECTS.map((p, i) => (
                <FadeIn key={i} delay={(i % 2) * 0.1}>
                  <div className="group bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    <div className="h-1.5 w-full" style={{ background: p.color }} />
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug">{p.icon} {p.title}</h3>
                        <StatusBadge status={p.status} />
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-6 mb-4 flex-1">{p.desc}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {p.tech.map((t) => (
                          <span key={t} className="text-xs px-2.5 py-1 rounded-full font-medium"
                            style={{ background: p.color + "18", color: p.color }}>{t}</span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        {p.github && (
                          <a href={p.github} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                            <FaGithub size={11} /> Code
                          </a>
                        )}
                        {p.live && (
                          <a href={p.live} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-lg text-white transition hover:opacity-90"
                            style={{ background: p.color }}>
                            <FaExternalLinkAlt size={9} /> Live Demo
                          </a>
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
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">GitHub</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { label: "Total Contributions", value: "1,009+", icon: "📦", color: "#0ea5e9" },
                { label: "Public Repos", value: "15+", icon: "💻", color: "#8b5cf6" },
                { label: "Current Streak", value: "8 days", icon: "🔥", color: "#ef4444" },
                { label: "Longest Streak", value: "13 days", icon: "⚡", color: "#f59e0b" },
              ].map((s) => (
                <div key={s.label} className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 text-center hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <div className="text-xl font-bold mb-1" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-xs text-gray-400">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">LeetCode</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { label: "Problems Solved", value: "357+", icon: "🧠", color: "#ffa116" },
                { label: "Contest Rating", value: "1,416", icon: "⭐", color: "#22c55e" },
                { label: "Max Streak", value: "115 days", icon: "🔥", color: "#ef4444" },
                { label: "Submissions (1yr)", value: "426+", icon: "📈", color: "#06b6d4" },
              ].map((s) => (
                <div key={s.label} className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 text-center hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <div className="text-xl font-bold mb-1" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-xs text-gray-400">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 mb-8">
              <div className="flex items-center justify-between mb-5">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Problem Breakdown</span>
                <a href="https://leetcode.com/u/rakshitsoni1410" target="_blank" rel="noopener noreferrer"
                  className="text-xs text-yellow-500 hover:underline flex items-center gap-1">View Profile <FaExternalLinkAlt size={8} /></a>
              </div>
              <div className="grid grid-cols-3 gap-6 text-center">
                {[
                  { label: "Easy", value: 150, color: "#22c55e" },
                  { label: "Medium", value: 170, color: "#f59e0b" },
                  { label: "Hard", value: 37, color: "#ef4444" },
                ].map((d) => (
                  <div key={d.label}>
                    <div className="text-2xl font-bold mb-1" style={{ color: d.color }}>{d.value}</div>
                    <div className="text-xs text-gray-400 mb-2">{d.label}</div>
                    <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${(d.value / 357) * 100}%`, background: d.color, transition: "width 1s ease" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 mb-6">
              <div className="p-3 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2"><FaGithub /> Contribution Activity</span>
                <a href="https://github.com/Rakshitsoni1410" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline">github.com/Rakshitsoni1410</a>
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
                { label: "GitHub", icon: <FaGithub />, url: "https://github.com/Rakshitsoni1410", cls: "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300" },
                { label: "LeetCode", icon: "🧠", url: "https://leetcode.com/u/rakshitsoni1410", cls: "border-yellow-300 dark:border-yellow-800 text-yellow-600 dark:text-yellow-400" },
                { label: "HackerRank", icon: <FaHackerrank />, url: "https://www.hackerrank.com/rakshitsoni544", cls: "border-green-300 dark:border-green-800 text-green-600 dark:text-green-400" },
              ].map((p) => (
                <a key={p.label} href={p.url} target="_blank" rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium hover:shadow-md transition ${p.cls}`}>
                  {p.icon} {p.label}
                </a>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* ── TIMELINE ── */}
        <section id="timeline" className="bg-white dark:bg-gray-900 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle title="My Journey" subtitle="From student to developer" />
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 md:-translate-x-0.5" />
              <div className="space-y-8">
                {TIMELINE.map((item, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <div className={`relative flex flex-col md:flex-row gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                      <div className="md:w-1/2 pl-12 md:pl-0 md:pr-10 md:text-right" style={{ textAlign: i % 2 === 0 ? undefined : undefined }}>
                        {i % 2 === 0 ? (
                          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 hover:shadow-md transition md:ml-0">
                            <div className="flex items-center gap-2 mb-1 md:justify-end">
                              <span className="text-lg">{item.icon}</span>
                              <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ background: item.color }}>{item.year}</span>
                            </div>
                            <h3 className="font-bold text-gray-900 dark:text-white text-sm">{item.title}</h3>
                            <p className="text-xs text-gray-400 mb-2">{item.sub}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                          </div>
                        ) : <div className="hidden md:block" />}
                      </div>
                      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full border-2 border-white dark:border-gray-900 shadow-md flex items-center justify-center top-5"
                        style={{ background: item.color }}>
                        <span className="text-xs">{item.icon}</span>
                      </div>
                      <div className="md:w-1/2 pl-12 md:pl-10">
                        {i % 2 !== 0 ? (
                          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 hover:shadow-md transition">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-lg">{item.icon}</span>
                              <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ background: item.color }}>{item.year}</span>
                            </div>
                            <h3 className="font-bold text-gray-900 dark:text-white text-sm">{item.title}</h3>
                            <p className="text-xs text-gray-400 mb-2">{item.sub}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                          </div>
                        ) : <div className="hidden md:block" />}
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
              { degree: "Master of Computer Applications (MCA)", school: "GLS University, Ahmedabad", period: "2025 – 2027", status: "Pursuing", color: "#8b5cf6" },
              { degree: "Bachelor of Computer Applications (BCA)", school: "Indus University, Ahmedabad", period: "2022 – 2025", status: "CGPA: 7.5 / 10", color: "#0ea5e9" },
            ].map((edu, i) => (
              <FadeIn key={i} delay={i * 0.1} className="relative pl-8">
                <div className="absolute -left-2.5 top-2 w-4 h-4 rounded-full border-2 border-white dark:border-gray-950 shadow" style={{ background: edu.color }} />
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition">
                  <div className="flex flex-col md:flex-row justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">{edu.school}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-xs text-gray-400">{edu.period}</div>
                      <div className="text-sm font-semibold mt-0.5" style={{ color: edu.color }}>{edu.status}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── CERTIFICATIONS ── */}
        <section id="certifications" className="bg-white dark:bg-gray-900 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle title="Certifications" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {CERTS.map((cert, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 hover:shadow-md hover:-translate-y-0.5 transition-all text-center h-full flex flex-col items-center justify-center">
                    <div className="text-3xl mb-3 flex justify-center" style={{ color: cert.color }}>{cert.icon}</div>
                    {cert.link ? (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer"
                        className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline leading-snug block mb-1">
                        {cert.name} <FaExternalLinkAlt size={7} className="inline" />
                      </a>
                    ) : (
                      <p className="text-xs font-medium text-gray-700 dark:text-gray-300 leading-snug mb-1">{cert.name}</p>
                    )}
                    <span className="text-xs text-gray-400">{cert.platform}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="max-w-6xl mx-auto px-4 py-20">
          <SectionTitle title="Let's Connect" subtitle="Open to full-time roles, internships & freelance" />
          <div className="grid md:grid-cols-2 gap-10">
            <FadeIn className="space-y-5">
              {[
                { icon: <FaEnvelope />, label: "Email", value: "rakshitsoni@gmail.com", href: "mailto:rakshitsoni@gmail.com" },
                { icon: <FaPhone />, label: "Phone", value: "+91 9638257457", href: "tel:+919638257457" },
                { icon: <FaMapMarkerAlt />, label: "Location", value: "Ahmedabad, Gujarat, India", href: null },
                { icon: <FaClock />, label: "Availability", value: "Immediate · Full-time / Part-time / Freelance", href: null },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4 bg-gray-50 dark:bg-gray-900 rounded-2xl p-4 border border-gray-100 dark:border-gray-800 hover:shadow-sm transition">
                  <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center flex-shrink-0">{c.icon}</div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">{c.value}</a>
                    ) : (
                      <div className="text-sm font-medium text-gray-800 dark:text-gray-200">{c.value}</div>
                    )}
                  </div>
                </div>
              ))}
              <div className="flex flex-wrap gap-3 pt-2">
                {SOCIAL.map((s) => (
                  <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
                    {s.icon} {s.label}
                  </a>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.15} className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
                <FaEnvelope className="text-blue-600" size={14} /> Send a Message
              </h3>
              {sent ? (
                <div className="flex flex-col items-center justify-center h-48 text-center">
                  <FaCheckCircle className="text-green-500 text-4xl mb-3" />
                  <p className="font-medium text-green-600 dark:text-green-400">Message sent! I'll reply within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="subject" value="📩 New Portfolio Contact Message" />
                  <input type="text" name="name" placeholder="Your Name" required
                    className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition" />
                  <input type="email" name="email" placeholder="Your Email" required
                    className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition" />
                  <textarea name="message" placeholder="Your message..." rows={4} required
                    className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition resize-none" />
                  <button type="submit" disabled={sending}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white rounded-xl font-medium text-sm transition active:scale-95 flex items-center justify-center gap-2">
                    {sending ? (<><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>) : (<><FaRocket size={12} /> Send Message</>)}
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
              <span className="font-black text-blue-600 dark:text-blue-400 text-lg">RS.</span>
              <span className="text-xs text-gray-400 ml-3">© 2025 Rakshit Soni · Built with React & Tailwind CSS</span>
            </div>
            <div className="flex gap-4">
              {SOCIAL.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" title={s.label}
                  className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:scale-110 text-lg">{s.icon}</a>
              ))}
            </div>
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
              ↑ Back to top
            </button>
          </div>
        </footer>

        {/* ── CONTACT MODAL ── */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            onClick={(e) => e.target === e.currentTarget && setShowModal(false)}>
            <div className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-md shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="flex items-center justify-between p-5 border-b border-gray-100 dark:border-gray-800">
                <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2"><FaEnvelope className="text-blue-600" size={13} /> Contact Me</h3>
                <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-700 dark:hover:text-white transition p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"><FaTimes size={13} /></button>
              </div>
              <div className="p-5">
                {sent ? (
                  <div className="text-center py-10">
                    <FaCheckCircle className="text-green-500 text-4xl mx-auto mb-3" />
                    <p className="font-medium text-green-600 dark:text-green-400">Sent! I'll reply within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input type="hidden" name="subject" value="📩 New Portfolio Contact Message" />
                    <input type="text" name="name" placeholder="Your Name" required
                      className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="email" name="email" placeholder="Your Email" required
                      className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
                    <textarea name="message" placeholder="Your message..." rows={4} required
                      className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
                    <button type="submit" disabled={sending}
                      className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white rounded-xl font-semibold text-sm transition flex items-center justify-center gap-2">
                      {sending ? (<><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>) : (<><FaRocket size={11} /> Send Message</>)}
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
