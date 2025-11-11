import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ProjectModal({ openProject, setOpenProject }) {
  if (!openProject) return null;

  return (
    <AnimatePresence>
      {openProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ duration: 0.25 }}
            className="bg-slate-900 text-slate-100 rounded-xl p-6 max-w-lg w-[90%] relative shadow-2xl"
          >
            
            <button
              onClick={() => setOpenProject(null)}
              className="absolute top-3 right-3 p-1 hover:bg-slate-800/50 rounded-full"
            >
              <X size={18} />
            </button>

            <h3 className="text-2xl font-semibold mb-3 text-indigo-400">
              {openProject.title}
            </h3>

            <img
              src={openProject.img}
              alt={openProject.title}
              className="rounded-lg mb-4 w-full object-cover"
            />

            <p className="opacity-80 mb-4 leading-relaxed">{openProject.desc}</p>

            {openProject.link && (
              <a
                href={openProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-4 text-indigo-400 hover:underline"
              >
                Visit Project →
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}