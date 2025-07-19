import React, { useState } from "react";
import {
  FaSun,
  FaMoon,
  FaGithub,
  FaLinkedin,
  FaHackerrank,
  FaGlobe,
  FaLaptopCode,
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
} from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
            src="/Rakshit.webp"
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
              {
                name: "Java",
                icon: <FaJava className="text-xl text-red-600" />,
              },
              {
                name: "Python",
                icon: <FaPython className="text-xl text-yellow-500" />,
              },
              {
                name: "JavaScript",
                icon: <FaJs className="text-xl text-yellow-400" />,
              },
              {
                name: "C#",
                icon: <FaCode className="text-xl text-purple-600" />,
              },
              {
                name: "React.js",
                icon: <FaReact className="text-xl text-blue-400" />,
              },
              {
                name: "Node.js",
                icon: <FaNodeJs className="text-xl text-green-600" />,
              },
              {
                name: "MongoDB",
                icon: <SiMongodb className="text-xl text-green-500" />,
              },
              {
                name: "MySQL",
                icon: <SiMysql className="text-xl text-blue-500" />,
              },
              {
                name: "HTML",
                icon: <FaHtml5 className="text-xl text-orange-500" />,
              },
              {
                name: "CSS",
                icon: <FaCss3Alt className="text-xl text-blue-600" />,
              },
              {
                name: "PHP",
                icon: <FaPhp className="text-xl text-indigo-600" />,
              },
            ].map((skill) => (
              <div
                key={skill.name}
                className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow flex items-center gap-2 justify-center"
              >
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="max-w-5xl mx-auto p-4 md:p-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              {
                name: "Java (Basic)",
                icon: <FaJava className="text-orange-500 text-3xl" />,
              },
              {
                name: "JavaScript (Basic & Intermediate)",
                icon: <FaJs className="text-yellow-400 text-3xl" />,
              },
              {
                name: "Python (Basic)",
                icon: <FaPython className="text-blue-500 text-3xl" />,
              },
              {
                name: "SQL (Basic & Intermediate)",
                icon: (
                  <FaDatabase className="text-gray-700 dark:text-gray-300 text-3xl" />
                ),
              },
              {
                name: "CSS (Basic)",
                icon: <FaCss3Alt className="text-blue-600 text-3xl" />,
              },
              {
                name: "C# (Basic)",
                icon: <FaCode className="text-purple-700 text-3xl" />,
              },
              {
                name: "Bootstrap",
                icon: <FaBootstrap className="text-indigo-700 text-3xl" />,
              },
              {
                name: "HTML, CSS & JS (Coursera)",
                icon: <span className="text-2xl">🌐</span>,
                link: "https://coursera.org/verify/QBZAL6TBSX8K",
              },
              {
                name: "Digital Productivity",
                icon: <FaLaptopCode className="text-blue-600 text-3xl" />,
              },
            ].map((cert, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-3">
                  {cert.icon}
                </div>
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {cert.name}
                  </a>
                ) : (
                  <p className="text-center font-medium text-gray-800 dark:text-gray-200">
                    {cert.name}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="max-w-5xl mx-auto p-4 md:p-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            🎓 Education
          </h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-1">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <p className="text-md text-gray-700 dark:text-gray-300">
                  Indus University, Ahmedabad, Gujarat
                </p>
              </div>
              <div className="text-sm mt-2 md:mt-0 text-gray-600 dark:text-gray-400">
                📅 2022 – 2025
              </div>
            </div>
            <p className="text-sm font-medium text-green-600 dark:text-green-400 mt-2">
              🎯 CGPA: 7.5 / 10
            </p>
          </div>
        </section>

        {/* Profiles */}
        <section className="max-w-5xl mx-auto p-4 md:p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Profiles & Contact</h2>
          <div className="flex justify-center flex-wrap gap-4 text-2xl">
            <a href="https://github.com/rakshitsoni1410">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/rakshit-r-soni-5bb030286">
              <FaLinkedin />
            </a>
            <a href="https://leetcode.com/u/rakshitsoni1410/">LeetCode</a>
            <a href="https://www.geeksforgeeks.org/user/rakshituya7/">GFG</a>
            <a href="https://www.hackerrank.com/rakshitsoni544">
              <FaHackerrank />
            </a>
            <a href="https://www.w3profile.com/rakshitrsoni/">
              <FaGlobe className="text-3xl" />
              <div className="text-xs">W3Schools</div>
            </a>
          </div>

          {/* Contact Modal Trigger */}
          <button
            onClick={() => setShowModal(true)}
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            📬 Contact Me
          </button>
        </section>

        {/* Modal Contact Form */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md shadow-lg relative animate-fade-in">
              {/* Close Button */}
              <button
                className="absolute top-2 right-3 text-xl text-gray-700 dark:text-white hover:text-red-500"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>

              {/* Heading */}
              <h3 className="text-xl font-bold mb-4 text-center">
                Send Me a Message
              </h3>

              {/* Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const name = e.target.name.value.trim();
                  const email = e.target.email.value.trim();
                  const message = e.target.message.value.trim();

                  if (!name || !email || !message) return;

                  const mailtoLink = `mailto:rakshitrsoni@gmail.com?subject=Message from ${encodeURIComponent(
                    name
                  )}&body=${encodeURIComponent(
                    `Name: ${name}\nEmail: ${email}\n\n${message}`
                  )}`;
                  window.location.href = mailtoLink;

                  // Toast popup
                  const toast = document.createElement("div");
                  toast.textContent =
                    "✅ Mail window opened. Please confirm to send.";
                  toast.className =
                    "fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50 animate-fade-in";
                  document.body.appendChild(toast);
                  setTimeout(() => toast.remove(), 3000);

                  setShowModal(false);
                }}
                className="space-y-3"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-2 rounded border border-gray-300 dark:bg-gray-700"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-2 rounded border border-gray-300 dark:bg-gray-700"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-2 rounded border border-gray-300 dark:bg-gray-700"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
