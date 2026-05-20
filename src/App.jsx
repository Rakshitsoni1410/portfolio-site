import React, { useState, useEffect, useRef } from "react";
import {
  FaSun, FaMoon, FaGithub, FaLinkedin, FaHackerrank,
  FaGlobe, FaJava, FaPython, FaDatabase, FaJs, FaReact,
  FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap, FaPhp, FaCode,
  FaBars, FaTimes, FaExternalLinkAlt, FaDownload, FaEnvelope,
  FaMapMarkerAlt, FaPhone,
} from "react-icons/fa";
import {
  SiMongodb, SiMysql, SiSpringboot, SiTailwindcss,
  SiFlutter, SiDjango, SiRedux, SiSocketdotio,
} from "react-icons/si";

/* ─── DATA ─────────────────────────────────────────── */

const NAV_LINKS = ["About", "Skills", "Projects", "Stats", "Education", "Certifications", "Contact"];

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
    { name: "Django", icon: <SiDjango />, color: "#092e20" },
    { name: "PHP", icon: <FaPhp />, color: "#777bb4" },
  ]},
  { cat: "Database & Tools", items: [
    { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479a1" },
    { name: "Socket.io", icon: <SiSocketdotio />, color: "#010101" },
    { name: "GitHub", icon: <FaGithub />, color: "#181717" },
  ]},
  { cat: "Mobile", items: [
    { name: "Flutter", icon: <SiFlutter />, color: "#02569b" },
  ]},
];

const PROJECTS = [
  {
    title: "AI Chatbot Support System",
    icon: "🤖",
    status: "Completed",
    desc: "Full-stack AI chatbot with JWT auth, role-based access control, Spring Security REST APIs, and real-time chat UI. Built for Gemini/OpenAI API integration.",
    tech: ["Java", "Spring Boot", "React.js", "MySQL", "JWT", "Spring Security"],
    color: "#8b5cf6",
    github: "https://github.com/Rakshitsoni1410/ai-chat-support-system",
    live: "",
  },
  {
    title: "Learning Management System",
    icon: "📚",
    status: "Live",
    desc: "Full-featured LMS with course browsing, student enrollment, instructor dashboards, Redux state management, and real-time progress tracking.",
    tech: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB"],
    color: "#0ea5e9",
    github: "https://github.com/Rakshitsoni1410/courseplatform",
    live: "https://nextskilss.netlify.app/",
  },
  {
    title: "Real-Time Ride Booking App",
    icon: "🚖",
    status: "In Progress",
    desc: "Uber-like ride booking with live driver location via WebSockets, JWT-based auth, and real-time booking status flow between rider and driver.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "JWT"],
    color: "#f59e0b",
    github: "https://github.com/Rakshitsoni1410/Get-your-ride",
    live: "",
  },
  {
    title: "Gold Weight Management",
    icon: "⚖️",
    status: "Live",
    desc: "Professional tool for gold jewellers to track input/output weight, calculate karat-wise loss per job, and export structured PDF reports.",
    tech: ["React", "Spring Boot", "MySQL", "Tailwind CSS", "Axios"],
    color: "#f97316",
    github: "https://github.com/Rakshitsoni1410/Weight-Management-Software",
    live: "https://weight-management-software.netlify.app",
  },
  {
    title: "Jewellery E-Commerce",
    icon: "💍",
    status: "Live",
    desc: "Responsive e-commerce site for a family jewellery business with product catalog, admin upload panel, and PHP/MySQL backend.",
    tech: ["HTML", "Tailwind CSS", "JavaScript", "PHP", "MySQL"],
    color: "#ec4899",
    github: "https://github.com/Rakshitsoni1410/gold-jewellery-websites",
    live: "https://rcsoni.netlify.app",
  },
  {
    title: "Smart Khata Book",
    icon: "📒",
    status: "Completed",
    desc: "Cross-platform mobile app for small businesses to manage credit/debit ledger entries with real-time balance calculation and offline-first local storage.",
    tech: ["Flutter", "Dart"],
    color: "#22c55e",
    github: "https://github.com/Rakshitsoni1410/smartkhatabook",
    live: "",
  },
  {
    title: "Hospital Management System",
    icon: "🏥",
    status: "Completed",
    desc: "Web-based system for managing patient records, appointments, and hospital staff workflows using Django ORM and admin interface.",
    tech: ["Python", "Django", "HTML", "CSS", "SQLite"],
    color: "#ef4444",
    github: "https://github.com/Rakshitsoni1410/hospital-in-django",
    live: "",
  },
];

const CERTS = [
  { name: "JavaScript (Intermediate)", icon: <FaJs />, color: "#f7df1e", link: "https://www.hackerrank.com/certificates/iframe/b04991b66fe0" },
  { name: "Java (Basic)", icon: <FaJava />, color: "#f89820", link: "" },
  { name: "Python (Basic)", icon: <FaPython />, color: "#3776ab", link: "" },
  { name: "SQL (Basic & Intermediate)", icon: <FaDatabase />, color: "#4479a1", link: "" },
  { name: "CSS (Basic)", icon: <FaCss3Alt />, color: "#1572b6", link: "" },
  { name: "Problem Solving", icon: <FaCode />, color: "#22c55e", link: "" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952b3", link: "" },
  { name: "HTML, CSS & JS — Coursera", icon: <FaGlobe />, color: "#0056d3", link: "https://coursera.org/verify/QBZAL6TBSX8K" },
];

const SOCIAL = [
  { label: "GitHub", icon: <FaGithub />, url: "https://github.com/Rakshitsoni1410", color: "#181717" },
  { label: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/rakshitrsoni1410/", color: "#0a66c2" },
  { label: "LeetCode", icon: <FaCode />, url: "https://leetcode.com/u/rakshitsoni1410", color: "#ffa116" },
  { label: "HackerRank", icon: <FaHackerrank />, url: "https://www.hackerrank.com/rakshitsoni544", color: "#00ea64" },
  { label: "GFG", icon: <FaGlobe />, url: "https://www.geeksforgeeks.org/user/rakshituya7/", color: "#2f8d46" },
];

/* ─── HOOKS ─────────────────────────────────────────── */

function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const handler = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id.toLowerCase());
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
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

/* ─── SMALL COMPONENTS ──────────────────────────────── */

function StatusBadge({ status }) {
  const map = {
    "Live": "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
    "Completed": "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
    "In Progress": "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
  };
  return (
    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${map[status] || map["Completed"]}`}>
      {status}
    </span>
  );
}

function StatCard({ value, suffix = "", label, color }) {
  const [count, ref] = useCountUp(value);
  return (
    <div ref={ref} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-700 text-center hover:shadow-lg transition-shadow">
      <div className="text-4xl font-bold mb-1" style={{ color }}>{count}{suffix}</div>
      <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
    </div>
  );
}

/* ─── MAIN APP ───────────────────────────────────────── */

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const activeSection = useScrollSpy(NAV_LINKS);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    const form = e.target;
    const formData = new FormData(form);
    formData.append("access_key", "9b19d9ea-91a4-4a42-93b5-e81cf6bcf09e");
    const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
    const data = await res.json();
    setSending(false);
    if (data.success) { setSent(true); form.reset(); setTimeout(() => { setSent(false); setShowModal(false); }, 2500); }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200 transition-colors duration-300 font-sans">

        {/* ── NAVBAR ── */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
            <span className="font-bold text-blue-600 dark:text-blue-400 text-lg tracking-tight">RS.</span>
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button key={link} onClick={() => scrollTo(link)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link
                      ? "bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}>
                  {link}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                {darkMode ? <FaSun size={14} /> : <FaMoon size={14} />}
              </button>
              <button className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-800"
                onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes size={14} /> : <FaBars size={14} />}
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
          <div className="absolute top-20 right-0 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-0 w-80 h-80 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl" />
          <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 border border-blue-100 dark:border-blue-800">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Open to Work — Ahmedabad · Remote
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
                Rakshit<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Soni</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium mb-3">
                Full Stack Developer
              </p>
              <p className="text-base text-gray-500 dark:text-gray-500 mb-8 max-w-lg">
                I build real-world web apps using <strong className="text-gray-700 dark:text-gray-300">MERN stack, Java & Spring Boot</strong> — from AI chatbots to ride-booking platforms. 7+ projects shipped. 357+ LeetCode problems solved.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <a href="https://hackerrank-resume.s3.us-east-1.amazonaws.com/uploads/22674395/MjI2NzQzOTU=.pdf"
                  download className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 active:scale-95 transition font-medium text-sm">
                  <FaDownload size={12} /> Download Resume
                </a>
                <button onClick={() => setShowModal(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95 transition font-medium text-sm">
                  <FaEnvelope size={12} /> Contact Me
                </button>
              </div>
              <div className="flex gap-4 justify-center md:justify-start mt-6">
                {SOCIAL.map((s) => (
                  <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                    title={s.label}
                    className="text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors text-xl">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-xl opacity-30 scale-110" />
                <img src="/Rakshit.webp" alt="Rakshit Soni"
                  className="relative w-52 h-52 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-800" />
                <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  Available
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="max-w-6xl mx-auto px-4 py-20">
          <SectionTitle title="About Me" />
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-7">
              <p>
                I'm a <strong className="text-gray-900 dark:text-white">Full Stack Developer</strong> from Ahmedabad, India — currently pursuing MCA at GLS University while building production-grade web applications.
              </p>
              <p>
                My focus is on the <strong className="text-gray-900 dark:text-white">MERN stack, Java/Spring Boot</strong> backend systems, and real-time applications. I've shipped 7+ projects across e-commerce, healthcare, education, and fintech domains.
              </p>
              <p>
                Beyond coding, I actively solve DSA problems on LeetCode — <strong className="text-gray-900 dark:text-white">357+ problems, 1416 contest rating, 115-day streak</strong>. I believe consistent problem-solving makes a better engineer.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { label: "Location", value: "Ahmedabad, India" },
                  { label: "Email", value: "rakshitsoni@gmail.com" },
                  { label: "Phone", value: "+91 9638257457" },
                  { label: "Status", value: "Open to Work" },
                ].map((item) => (
                  <div key={item.label} className="bg-gray-100 dark:bg-gray-800 rounded-xl p-3">
                    <div className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">{item.label}</div>
                    <div className="text-sm font-medium text-gray-800 dark:text-gray-200">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: 7, suffix: "+", label: "Projects Shipped", color: "#0ea5e9" },
                { num: 357, suffix: "+", label: "LeetCode Problems", color: "#f59e0b" },
                { num: 115, suffix: " days", label: "Max Streak", color: "#22c55e" },
                { num: 1416, suffix: "", label: "Contest Rating", color: "#8b5cf6" },
              ].map((s) => (
                <StatCard key={s.label} value={s.num} suffix={s.suffix} label={s.label} color={s.color} />
              ))}
            </div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" className="bg-white dark:bg-gray-900 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle title="Skills" />
            <div className="space-y-8">
              {SKILLS.map((group) => (
                <div key={group.cat}>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">{group.cat}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                    {group.items.map((skill) => (
                      <div key={skill.name}
                        className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 flex flex-col items-center gap-2 hover:shadow-md hover:-translate-y-0.5 transition-all border border-gray-100 dark:border-gray-700">
                        <span className="text-2xl" style={{ color: skill.color }}>{skill.icon}</span>
                        <span className="text-xs font-medium text-center text-gray-700 dark:text-gray-300">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
          <SectionTitle title="Projects" subtitle={`${PROJECTS.length} real-world applications`} />
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p, i) => (
              <div key={i}
                className="group bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 overflow-hidden hover:-translate-y-1">
                <div className="h-1.5 w-full" style={{ background: p.color }} />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">
                      {p.icon} {p.title}
                    </h3>
                    <StatusBadge status={p.status} />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-6 mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{ background: p.color + "18", color: p.color }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                        <FaGithub size={12} /> Code
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg text-white transition"
                        style={{ background: p.color }}>
                        <FaExternalLinkAlt size={10} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── STATS ── */}
        <section id="stats" className="bg-white dark:bg-gray-900 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle title="GitHub & LeetCode Stats" />

            {/* Stat Cards — always visible, no broken images */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { label: "Total Contributions", value: "1,009+", icon: "📦", color: "#0ea5e9" },
                { label: "Public Repos", value: "15+", icon: "💻", color: "#8b5cf6" },
                { label: "LeetCode Solved", value: "357+", icon: "🧠", color: "#f59e0b" },
                { label: "Contest Rating", value: "1,416", icon: "⭐", color: "#22c55e" },
                { label: "Max Streak", value: "115 days", icon: "🔥", color: "#ef4444" },
                { label: "Submissions (1yr)", value: "426+", icon: "📈", color: "#06b6d4" },
                { label: "Languages", value: "10+", icon: "🌐", color: "#a855f7" },
                { label: "Years Coding", value: "3+", icon: "📅", color: "#f97316" },
              ].map((s) => (
                <div key={s.label}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 text-center hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <div className="text-xl font-bold mb-1" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-xs text-gray-400">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Streak — loads fine usually */}
            <ImgWithFallback
              src="https://github-readme-streak-stats.herokuapp.com/?user=Rakshitsoni1410&theme=tokyonight&hide_border=true"
              alt="GitHub Streak"
              fallback="🔥 GitHub Streak: 1,009+ contributions since May 2024"
            />

            {/* Activity graph */}
            <ImgWithFallback
              src="https://github-readme-activity-graph.vercel.app/graph?username=Rakshitsoni1410&theme=react-dark&hide_border=true"
              alt="GitHub Activity Graph"
              fallback="📊 View full activity at github.com/Rakshitsoni1410"
            />

            {/* LeetCode card */}
            <div className="flex justify-center">
              <ImgWithFallback
                src="https://leetcard.jacoblin.cool/rakshitsoni1410?theme=dark&font=baloo&ext=contest"
                alt="LeetCode Stats"
                fallback="🧠 357+ problems · Rating 1416 · 115-day streak"
                className="w-full max-w-lg"
              />
            </div>

            {/* Direct links */}
            <div className="mt-8 text-center">
              <p className="text-xs text-gray-400 mb-3">View live profiles</p>
              <div className="flex justify-center gap-6 flex-wrap">
                <a href="https://github.com/Rakshitsoni1410" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
                  <FaGithub /> GitHub
                </a>
                <a href="https://leetcode.com/u/rakshitsoni1410" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 transition">
                  🧠 LeetCode
                </a>
                <a href="https://www.hackerrank.com/rakshitsoni544" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-green-600 dark:text-green-400 hover:text-green-700 transition">
                  <FaHackerrank /> HackerRank
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section id="education" className="max-w-6xl mx-auto px-4 py-20">
          <SectionTitle title="Education" />
          <div className="relative border-l-2 border-blue-200 dark:border-blue-900 ml-4 space-y-10">
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
              <div key={i} className="relative pl-8">
                <div className="absolute -left-2.5 top-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-gray-950 shadow"
                  style={{ background: edu.color }} />
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition">
                  <div className="flex flex-col md:flex-row justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">{edu.school}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-sm text-gray-400">{edu.period}</div>
                      <div className="text-sm font-semibold mt-0.5" style={{ color: edu.color }}>{edu.status}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CERTIFICATIONS ── */}
        <section id="certifications" className="bg-white dark:bg-gray-900 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle title="Certifications" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {CERTS.map((cert, idx) => (
                <div key={idx}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 hover:shadow-md hover:-translate-y-0.5 transition-all text-center">
                  <div className="text-3xl mb-3 flex justify-center" style={{ color: cert.color }}>{cert.icon}</div>
                  {cert.link ? (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline leading-snug block">
                      {cert.name} <FaExternalLinkAlt size={8} className="inline ml-1" />
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 leading-snug">{cert.name}</p>
                  )}
                  <p className="text-xs text-gray-400 mt-1">HackerRank</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="max-w-6xl mx-auto px-4 py-20">
          <SectionTitle title="Let's Connect" subtitle="Open to full-time roles, internships & freelance" />
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              {[
                { icon: <FaEnvelope />, label: "Email", value: "rakshitsoni@gmail.com", href: "mailto:rakshitsoni@gmail.com" },
                { icon: <FaPhone />, label: "Phone", value: "+91 9638257457", href: "tel:+919638257457" },
                { icon: <FaMapMarkerAlt />, label: "Location", value: "Ahmedabad, Gujarat, India", href: null },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4 bg-gray-50 dark:bg-gray-900 rounded-2xl p-4 border border-gray-100 dark:border-gray-800">
                  <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    {c.icon}
                  </div>
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
              <div className="flex gap-3 flex-wrap">
                {SOCIAL.map((s) => (
                  <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-900 dark:hover:text-white transition">
                    {s.icon} {s.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Send a Message</h3>
              {sent ? (
                <div className="flex flex-col items-center justify-center h-48 text-center">
                  <div className="text-4xl mb-3">✅</div>
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
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white rounded-xl font-medium text-sm transition active:scale-95">
                    {sending ? "Sending..." : "🚀 Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-400">© 2025 Rakshit Soni · Built with React & Tailwind CSS</div>
            <div className="flex gap-4">
              {SOCIAL.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                  title={s.label} className="text-gray-400 hover:text-gray-700 dark:hover:text-white transition text-lg">
                  {s.icon}
                </a>
              ))}
            </div>
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              Back to top ↑
            </button>
          </div>
        </footer>

        {/* ── CONTACT MODAL ── */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            onClick={(e) => e.target === e.currentTarget && setShowModal(false)}>
            <div className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-md shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="flex items-center justify-between p-5 border-b border-gray-100 dark:border-gray-800">
                <h3 className="font-bold text-gray-900 dark:text-white">Contact Me</h3>
                <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-700 dark:hover:text-white transition">
                  <FaTimes />
                </button>
              </div>
              <div className="p-5">
                {sent ? (
                  <div className="text-center py-8">
                    <div className="text-4xl mb-3">✅</div>
                    <p className="font-medium text-green-600 dark:text-green-400">Message sent! I'll reply within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="hidden" name="subject" value="📩 New Portfolio Contact Message" />
                    <input type="text" name="name" placeholder="Your Name" required
                      className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="email" name="email" placeholder="Your Email" required
                      className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
                    <textarea name="message" placeholder="Your message..." rows={4} required
                      className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
                    <button type="submit" disabled={sending}
                      className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white rounded-xl font-semibold text-sm transition">
                      {sending ? "Sending..." : "🚀 Send Message"}
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

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
      {subtitle && <p className="text-gray-400 text-sm mt-1">{subtitle}</p>}
      <div className="mt-3 h-1 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
    </div>
  );
}
