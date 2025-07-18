import React, { useState } from "react";
import {
  FaSun,
  FaMoon,
  FaGithub,
  FaLinkedin,
  FaHackerrank,
  FaGlobe,
} from "react-icons/fa";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed top-4 right-4 p-2 bg-gray-300 dark:bg-gray-700 rounded-full z-50"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Header */}
        <section className="max-w-5xl mx-auto p-4 md:p-6 flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <img
            src="/Rakshit.png"
            alt="Rakshit Soni"
            className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover shadow-lg border-4 border-blue-100"
          />
          <div>
            <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-300">
              Rakshit Soni
            </h1>
            <p className="text-lg mt-1">Software Engineer</p>
            <p className="mt-2">
              rakshitsoni@gmail.com | +91 6354798703 | Gujarat, India
            </p>

            <div className="flex gap-3 mt-4">
              <a
                href="https://hackerrank-resume.s3.us-east-1.amazonaws.com/uploads/22674395/MjI2NzQzOTU%3D.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
              >
                📄 Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="max-w-5xl mx-auto p-4 md:p-6">
          <h2 className="text-2xl font-semibold mb-2">Summary</h2>
          <p>
            Enthusiastic Software Engineer with solid skills in MERN stack,
            Java, and problem-solving. Seeking opportunities to leverage my
            skills in real-world development projects.
          </p>
        </section>

        {/* Skills */}
        <section className="max-w-5xl mx-auto p-4 md:p-6">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "Java",
              "Python",
              "JavaScript",
              "C#",
              "React.js",
              "Node.js",
              "MongoDB",
              "MySQL",
              "SQL",
              "HTML",
              "CSS",
              "PHP",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="max-w-5xl mx-auto p-4 md:p-6">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Get Your Ride – Vehicle Rental System",
                desc: "Full-stack MERN application with user/admin panels.",
                link: "https://github.com/Rakshitsoni1410/Get-your-ride",
              },
              {
                title: "Online Course Platform (MERN)",
                desc: "Manage/explore courses, instructor uploads.",
                link: "https://github.com/Rakshitsoni1410/couserplatfrom",
              },
              {
                title: "E-commerce for Gold Jewelry (PHP)",
                desc: "Frontend: HTML, CSS, JS. Backend: PHP/MySQL.",
                link: "https://rcsoni.netlify.app",
              },
            ].map((project, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 hover:scale-105 transition-transform"
              >
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-sm mb-3">{project.desc}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Visit ↗
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="max-w-5xl mx-auto p-4 md:p-6">
          <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "Java (Basic)",
              "JavaScript (Basic & Intermediate)",
              "Python (Basic)",
              "SQL (Basic & Intermediate)",
              "CSS (Basic)",
              "C# (Basic)",
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:scale-105 transform transition"
              >
                <div className="flex items-center justify-center text-blue-600 text-4xl mb-2">
                  🎓
                </div>
                <p className="text-center font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="max-w-5xl mx-auto p-6">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            🎖️ My Badges
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                title: "Problem Solving",
                color: "from-pink-400 to-pink-500",
                stars: 3,
              },
              { title: "Java", color: "from-gray-300 to-gray-400", stars: 4 },
              {
                title: "Python",
                color: "from-green-300 to-green-400",
                stars: 2,
              },
              {
                title: "30 Days of Code",
                color: "from-yellow-300 to-yellow-400",
                stars: 5,
              },
              {
                title: "10 Days of JS",
                color: "from-blue-300 to-blue-400",
                stars: 3,
              },
              { title: "SQL", color: "from-rose-300 to-rose-400", stars: 2 },
            ].map((badge, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${badge.color} text-white rounded-xl p-4 shadow-lg flex flex-col justify-between items-center hover:scale-105 transition`}
              >
                <span className="font-semibold text-lg">{badge.title}</span>
                <div className="flex gap-1 mt-3">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i}>{i < badge.stars ? "⭐" : "☆"}</span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="max-w-5xl mx-auto p-4 md:p-6">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-2">
              Bachelor of Computer Applications (BCA)
            </h3>
            <p className="mb-1">Indus University, Gujarat</p>
            <p className="mb-1 text-sm text-gray-600 dark:text-gray-400">
              2022 – 2025 (Completed)
            </p>
            <p className="text-sm font-medium text-green-600 dark:text-green-400">
              CGPA: 7.5 / 10
            </p>
          </div>
        </section>

        {/* Profiles & Contact */}
        <section className="max-w-5xl mx-auto p-4 md:p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Profiles & Contact</h2>
          <div className="flex justify-center flex-wrap gap-4 text-2xl">
            <a
              href="https://github.com/rakshitsoni1410"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rakshit-r-soni-5bb030286/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://leetcode.com/u/rakshitsoni1410/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500"
            >
              LeetCode
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/rakshituya7/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600"
            >
              GFG
            </a>
            <a
              href="https://www.hackerrank.com/rakshitsoni544"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500"
            >
              <FaHackerrank />
            </a>
            <a
              href="https://www.w3profile.com/rakshitrsoni/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 flex flex-col items-center"
            >
              <FaGlobe className="text-3xl" />
              <span className="text-xs">W3Schools</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
