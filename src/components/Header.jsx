import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header({ mode, toggleMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const isDark = mode === "dark";

  return (
    <header
      className={`max-w-5xl mx-auto px-6 py-4 flex justify-between items-center border-b ${
        isDark ? "border-slate-700/20" : "border-slate-300"
      }`}
    >
      {/* Logo / Name */}
      <h1
        className={`font-bold text-lg sm:text-xl tracking-wide ${
          isDark ? "text-white" : "text-slate-900"
        }`}
      >
        <span className="text-indigo-400">&lt;</span>
        ROSHAN WICKRAMASOORIYA
        <span className="text-indigo-400">/&gt;</span>
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 items-center text-sm">
        <a
          href="#skills"
          className={`transition hover:text-indigo-400 ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          Skills
        </a>
        <a
          href="#projects"
          className={`transition hover:text-indigo-400 ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={`transition hover:text-indigo-400 ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          Contact
        </a>
        <button
          onClick={toggleMode}
          className={`p-2 rounded-full hover:bg-slate-700/20 transition ${
            isDark ? "text-white" : "text-slate-900"
          }`}
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={`md:hidden p-2 rounded-md hover:bg-slate-700/20 transition ${
          isDark ? "text-white" : "text-slate-900"
        }`}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className={`absolute top-16 left-0 w-full border-t md:hidden backdrop-blur-sm ${
            isDark
              ? "bg-slate-900/95 border-slate-700/30 text-white"
              : "bg-white/95 border-slate-200 text-slate-900"
          }`}
        >
          <nav className="flex flex-col items-center py-4 gap-4 text-sm">
            <a
              href="#skills"
              className="hover:text-indigo-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-indigo-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-indigo-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
            <button
              onClick={() => {
                toggleMode();
                setMenuOpen(false);
              }}
              className="p-2 rounded-full hover:bg-slate-700/20 transition"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
