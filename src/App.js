import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [mode, setMode] = useState('dark');
  const [openProject, setOpenProject] = useState(null);

  const toggleMode = () => {
    setMode(m => (m === 'dark' ? 'light' : 'dark'));
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div
      className={`min-h-screen ${
        mode === 'dark'
          ? 'bg-gradient-to-b from-slate-900 via-slate-800 to-black text-slate-100'
          : 'bg-gradient-to-b from-sky-50 via-white to-rose-50 text-slate-900'
      } transition-colors duration-700`}
    >
      <Header mode={mode} toggleMode={toggleMode} />
      <main className="max-w-5xl mx-auto px-6 pb-20">
        <Hero />
        <Skills />
        <Projects setOpenProject={setOpenProject} />
        <Contact />
      </main>
      <Footer />
      <ProjectModal openProject={openProject} setOpenProject={setOpenProject} />
    </div>
  );
}
