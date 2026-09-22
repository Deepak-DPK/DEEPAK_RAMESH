import { ArrowUpRight, Github, Linkedin, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-white border-t border-neutral-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="bg-neutral-50 rounded-3xl p-8 sm:p-12 border border-neutral-200 shadow-xs relative overflow-hidden"
        >
          {/* Subtle background badge */}
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Get In Touch
            </span>
          </div>

          <h2
            id="contact-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4"
          >
            Let's Connect
          </h2>

          <p
            id="contact-description"
            className="text-sm sm:text-base text-neutral-600 max-w-2xl leading-relaxed mb-8"
          >
            {PERSONAL_INFO.contactText}
          </p>

          {/* Social Connection Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* GitHub Button */}
            <a
              id="contact-github-btn"
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-sm transition-all duration-200 shadow-xs hover:shadow active:scale-[0.99] group"
            >
              <Github className="w-4 h-4 text-neutral-300" />
              <span>GitHub →</span>
            </a>

            {/* LinkedIn Button */}
            <a
              id="contact-linkedin-btn"
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-neutral-100 text-neutral-800 font-medium text-sm border border-neutral-200 transition-all duration-200 shadow-2xs active:scale-[0.99] group"
            >
              <Linkedin className="w-4 h-4 text-[#0077B5]" />
              <span>LinkedIn →</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-200/80 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-500">
            <span>Always open to feedback, student study groups, and mentorship advice.</span>
            <span className="font-mono text-[11px] text-neutral-400">Bangalore / India</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
