import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt"; 
import NOCUWEB from "../documents/nocu.png";
import DavidsRock from "../documents/davidsrock.png";
import UTP from "../documents/utp.png";
import VCF from "../documents/vcf.png";
import WebShop from "../documents/webshop.png";
import ProjectModal from "./ProjectModal"; 

const projects = [
  {
    id: 1,
    title: "National Organic Control Unit Web Portal",
    desc: `First project as a QA intern, started my career responsible for testing. Gained significant experience in software testing. The project, a web portal for issuing certificates for the Export Development Board (EDB), is now live.`,
    link: "https://nocu.lk/",
    img: NOCUWEB,
  },
  {
    id: 2,
    title: "DAVIDSROCK Community and Events Platform",
    desc: `This is the first overseas project from the USA, undertaken after completing an internship. It involved extensive testing and the first web automation using Cypress. Conducted demo presentations and client communications. The project is now live.`,
    link: "https://www.davidsrock.com/",
    img: DavidsRock,
  },
  {
    id: 3,
    title: "UTP-Super Mobile Application and Admin Portal",
    desc: `First mobile application project as a QA engineer, performed the first performance testing using JMeter. The testing led to significant improvements in server performance. The app is for United Tobacco Processing in Sri Lanka for internal communication and news.`,
    img: UTP,
  },
  {
    id: 4,
    title: "VCF Cigars Web Application and CMS",
    desc: `Ensured seamless content display and multilingual support across seven languages. Performed functional, UI, and UX testing for both the end-user interface and CMS. Additionally, executed performance testing to validate system stability and responsiveness under load.`,
    link: "https://www.jcortes.com/en",
    img: VCF,
  },
  {
    id: 5,
    title: "Web Shop B2B Portal – Cigars Selling E-commerce Website",
    desc: `In the Web Shop project, an e-commerce platform focused on efficient product, order, and customer management, handled end-to-end quality assurance across multiple testing phases. My responsibilities included manual functional testing, API testing, API automation, UI automation (Cypress), and performance testing using JMeter. Maintained a structured JIRA-based QA process with Epics, Stories, and Tasks.`,
    img: WebShop,
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState(null);
  const [openProject, setOpenProject] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="projects" className="mt-16">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => {
          const isOpen = expanded === p.id;
          const shortText = p.desc.slice(0, 120) + "...";

          const CardContent = (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="rounded-xl overflow-hidden border border-slate-600/30 hover:shadow-lg transition bg-slate-800/30 p-4 cursor-pointer"
              onClick={() => {
                if (isMobile) {
                  setExpanded(isOpen ? null : p.id);
                } else {
                  setOpenProject(p);
                }
              }}
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <h3 className="font-semibold text-lg mb-2">{p.title}</h3>

              {isMobile && (
                <motion.p
                  layout
                  className="text-sm opacity-80 overflow-hidden"
                  animate={{ height: isOpen ? "auto" : "4.5rem" }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? p.desc : shortText}
                </motion.p>
              )}

              <div className="flex justify-between items-center mt-2">
                {isMobile && (
                  <span className="text-indigo-400 text-sm font-medium hover:underline">
                    {isOpen ? "Show less ↑" : "Read more ↓"}
                  </span>
                )}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 text-sm hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visit Site
                  </a>
                )}
              </div>
            </motion.div>
          );

          return isMobile ? (
            CardContent
          ) : (
            <Tilt
              key={p.id}
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#818cf8"
              scale={1.05}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              transitionSpeed={2500}
              className="cursor-pointer"
            >
              {CardContent}
            </Tilt>
          );
        })}
      </div>

      <ProjectModal openProject={openProject} setOpenProject={setOpenProject} />
    </section>
  );
}
