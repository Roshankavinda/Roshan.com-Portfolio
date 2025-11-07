import { motion } from "framer-motion";
import {
  Bug,
  Database,
  ShieldCheck,
  Cpu,
  Network,
  Zap,
  Workflow,
} from "lucide-react";
import { SiCypress, SiApachejmeter, SiPostman } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "Manual Testing", icon: <Bug size={20} /> },
    { name: "API Testing (Postman)", icon: <SiPostman size={20} color="#ff6c37" /> },
    { name: "Automation (Cypress)", icon: <SiCypress size={20} color="#00d08f" /> },
    { name: "Performance (JMeter)", icon: <SiApachejmeter size={20} color="#d54e53" /> },
    { name: "Security Testing", icon: <ShieldCheck size={20} /> },
    { name: "SQL / DB Testing", icon: <Database size={20} /> },
    { name: "CI/CD & QA Processes", icon: <Workflow size={20} /> },
    { name: "System Analysis", icon: <Cpu size={20} /> },
    { name: "Network Testing", icon: <Network size={20} /> },
    { name: "Agile / JIRA", icon: <Zap size={20} /> },
  ];

  return (
    <section id="skills" className="mt-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-6"
      >
        Skills
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.08 },
          },
        }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            className="p-4 rounded-xl bg-slate-800/30 border border-slate-600/30 flex flex-col items-center justify-center gap-2 hover:bg-indigo-500/20 transition"
          >
            <div className="text-indigo-400">{skill.icon}</div>
            <span className="text-sm text-center">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
