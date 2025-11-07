import React, { useState } from "react";
import { useScroll, motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectModal from "./components/ProjectModal";
import CustomCursor from "./components/CustomCursor";

// ✅ Scroll Progress Bar Component
function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 h-[4px] w-full bg-transparent z-[9999]"
      style={{
        transformOrigin: "0%",
        scaleX: scrollYProgress,
        backgroundColor: "#6366F1", // Indigo-500
        boxShadow: "0 0 8px #6366F1",
      }}
    />
  );
}

export default function App() {
  const [mode, setMode] = useState("dark");
  const [openProject, setOpenProject] = useState(null);

  const toggleMode = () => {
    setMode((m) => (m === "dark" ? "light" : "dark"));
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`min-h-screen relative overflow-hidden ${
        mode === "dark"
          ? "bg-gradient-to-b from-slate-900 via-slate-800 to-black text-slate-100"
          : "bg-gradient-to-b from-sky-50 via-white to-rose-50 text-slate-900"
      } transition-colors duration-700`}
    >
      {/* 🟣 Scroll Progress Bar */}
      <ScrollProgress />

      {/* ✨ Magic Cursor */}
      <CustomCursor />

      {/* 🧭 Header */}
      <Header mode={mode} toggleMode={toggleMode} />

      {/* 📄 Main Content */}
      <main className="max-w-5xl mx-auto px-6 pb-20">
        <Hero />
        <Skills />
        <Projects setOpenProject={setOpenProject} />
        <Contact />
      </main>

      {/* ⚙️ Footer & Modal */}
      <Footer />
      <ProjectModal openProject={openProject} setOpenProject={setOpenProject} />
    </div>
  );
}
