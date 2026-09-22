import { ArrowDown, Sparkles, FolderGit2, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-36 overflow-hidden"
    >
      {/* Subtle background ambient grid for clean developer aesthetic */}
      <div 
        className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col items-center sm:items-start"
        >
          {/* Small Label */}
          <div
            id="hero-label-badge"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-neutral-200/90 text-neutral-700 text-xs sm:text-sm font-medium mb-6 shadow-2xs"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{PERSONAL_INFO.role}</span>
          </div>

          {/* Main Heading */}
          <h1
            id="hero-main-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-900 tracking-tight leading-[1.15] mb-6"
          >
            <span className="block text-neutral-900">{PERSONAL_INFO.heroHeading.firstLine}</span>
            <span className="block text-neutral-600 font-semibold mt-1">
              {PERSONAL_INFO.heroHeading.secondLine}
            </span>
          </h1>

          {/* Supporting Text */}
          <p
            id="hero-supporting-text"
            className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl font-normal leading-relaxed mb-10 text-center sm:text-left"
          >
            {PERSONAL_INFO.heroSupportingText}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
            <button
              id="hero-view-projects-btn"
              type="button"
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-sm transition-all duration-200 shadow-sm hover:shadow active:scale-[0.99] cursor-pointer"
            >
              <FolderGit2 className="w-4 h-4 text-neutral-300" />
              <span>View My Projects</span>
            </button>

            <button
              id="hero-connect-btn"
              type="button"
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-neutral-100 text-neutral-800 font-medium text-sm border border-neutral-200 transition-all duration-200 shadow-2xs active:scale-[0.99] cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-neutral-500" />
              <span>Connect With Me</span>
            </button>
          </div>

          {/* Quick learning badges */}
          <div className="mt-14 pt-8 border-t border-neutral-200/80 w-full flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-6 text-xs text-neutral-500">
            <span className="font-medium text-neutral-700">Currently exploring:</span>
            <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 font-mono text-[11px] border border-neutral-200/60">
              Python Basics
            </span>
            <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 font-mono text-[11px] border border-neutral-200/60">
              Web Development
            </span>
            <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 font-mono text-[11px] border border-neutral-200/60">
              Generative AI
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
