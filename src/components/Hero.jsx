import { motion } from 'framer-motion';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import Resume from '../documents/resume.pdf';
import RoshanWickramasooriya from '../documents/roshanw.png'

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center mt-8">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-indigo-400 font-medium">Hello! I'm Roshan</p>
        <h2 className="text-3xl font-extrabold mt-1 leading-tight">
          Delivering reliable, fast and secure software.
        </h2>
        <p className="mt-4 text-lg leading-relaxed opacity-90">
          Experienced Software Quality Assurance Engineer with a proven track record of delivering high-quality,
secure software products. Skilled in comprehensive test planning, execution, and automation with a
specialized focus on web application security testing. Proficient in enhancing product functionality and
user experience by identifying and documenting security vulnerabilities. Expertise in manual, automated,
and leveraging tools such as Cypress, JMeter, and Burp Suite for indepth security analysis.
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="#projects"
            className="px-4 py-2 rounded-md border border-current hover:shadow-lg hover:-translate-y-1 transition"
          >
            See Projects
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-md bg-gradient-to-r from-green-400 to-teal-500 text-white shadow-lg hover:scale-105 transition"
          >
            Hire me
          </a>
        </div>
        <div className="mt-6 flex gap-3 items-center text-sm opacity-90">
          <a href={Resume} download className="inline-flex items-center gap-2 hover:underline">
            <button className="button s-button">Resume</button>
          </a>
          <a
            href="https://github.com/Roshankavinda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          > 
            <Github size={16} /> GitHub
          </a>
           <a
            href="https://www.linkedin.com/in/roshan-wickramasooriya-003b5a207/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </motion.div>
        <motion.figure
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="relative"
>
  <div className="w-full max-w-sm mx-auto overflow-hidden shadow-xl">
    <img
      alt="profile art"
      src={RoshanWickramasooriya}
      className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
    />
  </div>
  {/* <motion.div
    whileHover={{ y: -6 }}
    className="absolute -bottom-5 left-6 bg-gradient-to-r from-pink-500 to-orange-400 text-white px-4 py-2 rounded-full shadow-lg"
  >
    Available for hire
  </motion.div> */}
</motion.figure>
    </section>
  );
}
