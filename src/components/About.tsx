import { ArrowRight, BookOpen, Compass, Terminal, Cpu } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';

export default function About() {
  const explorationIcons = [
    { title: 'Python', icon: Terminal, desc: 'Syntax, data structures & logic' },
    { title: 'Web Development', icon: BookOpen, desc: 'HTML, modern CSS & responsive UI' },
    { title: 'Generative AI', icon: Cpu, desc: 'Prompts, model basics & API ideas' },
    { title: 'AI Engineering', icon: Compass, desc: 'Long-term destination & goal' },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-white border-y border-neutral-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Subtitle */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Background & Focus
            </span>
          </div>

          <h2
            id="about-heading"
            className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mb-8"
          >
            About Me
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Narrative paragraphs */}
            <div className="lg:col-span-7 space-y-4 text-neutral-600 leading-relaxed text-sm sm:text-base">
              {PERSONAL_INFO.aboutParagraphs.map((para, idx) => (
                <p key={idx} className="font-normal">
                  {para}
                </p>
              ))}

              <div className="pt-4 flex items-center gap-4 text-xs text-neutral-500">
                <div className="flex items-center gap-1.5 font-medium text-neutral-700">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Year 1 of 4
                </div>
                <span>•</span>
                <div>Focused on Core Problem Solving</div>
              </div>
            </div>

            {/* Right Column: Visual Element "Currently Exploring" */}
            <div className="lg:col-span-5">
              <div
                id="currently-exploring-card"
                className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200 shadow-2xs"
              >
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-200">
                  <h3 className="font-semibold text-neutral-900 text-sm tracking-tight">
                    Currently Exploring
                  </h3>
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-neutral-200/70 text-neutral-700">
                    2026 Focus
                  </span>
                </div>

                <div className="space-y-2.5">
                  {explorationIcons.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="group flex items-center justify-between p-3 rounded-xl bg-white border border-neutral-200/90 hover:border-neutral-300 transition-colors shadow-2xs"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-700 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-neutral-900">
                              {item.title}
                            </div>
                            <div className="text-[11px] text-neutral-500">
                              {item.desc}
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 transition-all" />
                      </div>
                    );
                  })}
                </div>

                <p className="mt-4 text-[11px] text-neutral-500 text-center">
                  Continuously expanding fundamental knowledge with hands-on practice.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
