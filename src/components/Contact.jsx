import { Mail, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1sjf8nw", 
        "template_sapk9ze", 
        form.current,
        "6jU9_HBJmNvG2V9Xj"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          form.current.reset();
          setIsSuccess(true);
          setTimeout(() => setIsSuccess(false), 4000); 
        },
        (error) => {
          console.error("Email error:", error.text);
        }
      );
  };

  return (
    <section id="contact" className="mt-16 relative">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-10 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50"
          >
            ✅ Thank you! I’ll get in touch with you soon.
          </motion.div>
        )}
      </AnimatePresence>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-md space-y-4"
        noValidate
      >
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            type="text"
            name="user_name"
            pattern="[A-Za-z ]+"
            maxLength="100"
            required
            placeholder="Your Name"
            className="w-full p-2 rounded-md bg-slate-800/30 border border-slate-600/30 
              focus:ring-2 focus:ring-indigo-400 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            name="user_email"
            maxLength="150"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            required
            placeholder="Your Email"
            className="w-full p-2 rounded-md bg-slate-800/30 border border-slate-600/30 
              focus:ring-2 focus:ring-indigo-400 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea
            name="message"
            rows="4"
            maxLength="500"
            required
            placeholder="Your Message"
            className="w-full p-2 rounded-md bg-slate-800/30 border border-slate-600/30 
              focus:ring-2 focus:ring-indigo-400 outline-none resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-indigo-500 text-white rounded-md 
            hover:bg-indigo-600 flex items-center gap-2 transition"
        >
          <Send size={16} /> Send
        </button>
      </form>

      <div className="mt-6 flex items-center gap-2 opacity-80">
        <Mail size={18} />
        <a
          href="mailto:roshanwickramasooriya1998@gmail.com"
          className="hover:underline"
        >
          roshanwickramasooriya1998@gmail.com
        </a>
      </div>
    </section>
  );
}
