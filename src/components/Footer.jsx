import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="max-w-5xl mx-auto px-6 py-8 border-t border-slate-700/20 flex flex-col md:flex-row justify-between gap-4 items-center text-sm">
      <div className="text-center md:text-left opacity-80">
        © {new Date().getFullYear()} <span className="font-medium">Roshan Wickramasooriya</span>. 
        All rights reserved.
      </div>
      
      <div className="flex gap-4 items-center opacity-90">
        <a 
          href="https://github.com/Roshankavinda" 
          aria-label="GitHub profile" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-indigo-400 transition"
        >
          <Github size={18}/>
        </a>
        <a 
          href="https://www.linkedin.com/in/roshan-wickramasooriya-003b5a207/" 
          aria-label="LinkedIn profile" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-indigo-400 transition"
        >
          <Linkedin size={18}/>
        </a>
      </div>
    </footer>
  );
}
