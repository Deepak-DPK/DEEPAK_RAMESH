import { Code, Globe, Bot, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { SKILLS_DATA } from '../data';

export default function Skills() {
  const getSkillIcon = (id: string) => {
    switch (id) {
      case 'python':
        return Code;
      case 'web-dev':
        return Globe;
      case 'gen-ai':
        return Bot;
      default:
        return Code;
    }
  };

  const getBadgeStyle = (level: string) => {
    switch (level) {
      case 'Foundational':
        return 'bg-blue-50 text-blue-700 border-blue-200/80';
      case 'Beginner':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200/80';
      case 'Currently Learning':
        return 'bg-amber-50 text-amber-700 border-amber-200/80';
      default:
        return 'bg-neutral-100 text-neutral-700 border-neutral-200';
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-24 bg-neutral-50/50">
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
              Technical Foundations
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10">
            <div>
              <h2
                id="skills-heading"
                className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight"
              >
                Technologies & Skills
              </h2>
              <p className="text-sm text-neutral-600 mt-1.5 max-w-xl">
                Honest, accurate overview of tools I am actively learning in my first year.
                No exaggerated metrics or inflated claims.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 self-start sm:self-auto text-xs text-neutral-500 bg-white px-3 py-1.5 rounded-lg border border-neutral-200 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>All skills in active practice</span>
            </div>
          </div>

          {/* Skill Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKILLS_DATA.map((skill) => {
              const Icon = getSkillIcon(skill.id);
              return (
                <div
                  key={skill.id}
                  id={`skill-card-${skill.id}`}
                  className="bg-white rounded-2xl p-6 border border-neutral-200/90 shadow-2xs flex flex-col justify-between hover:border-neutral-300 transition-all group"
                >
                  <div>
                    {/* Header: Icon & Level Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-800 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span
                        className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${getBadgeStyle(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </div>

                    {/* Skill Name & Category */}
                    <h3 className="text-lg font-bold text-neutral-900 tracking-tight">
                      {skill.name}
                    </h3>
                    <p className="text-xs font-medium text-neutral-500 mb-3">
                      {skill.category}
                    </p>

                    {/* Description */}
                    <p className="text-xs text-neutral-600 leading-relaxed mb-5">
                      {skill.description}
                    </p>
                  </div>

                  {/* Core topics / concepts mastered or in-progress */}
                  <div className="pt-4 border-t border-neutral-100">
                    <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block mb-2">
                      Key Concepts:
                    </span>
                    <ul className="space-y-1.5">
                      {skill.topics.map((topic, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-1.5 text-xs text-neutral-700"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
