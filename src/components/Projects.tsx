import { useState } from 'react';
import { Clock, Play, Code2, Sparkles, Terminal } from 'lucide-react';
import { motion } from 'motion/react';
import { PROJECTS_DATA } from '../data';
import { ProjectItem } from '../types';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 sm:py-24 bg-neutral-50/50">
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
              Hands-On Work
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10">
            <div>
              <h2
                id="projects-heading"
                className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight"
              >
                Projects
              </h2>
              <p className="text-sm text-neutral-600 mt-1.5 max-w-xl">
                Beginner-level programs showcasing my understanding of programming fundamentals and sequential logic.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 self-start sm:self-auto text-xs text-neutral-500 bg-white px-3 py-1.5 rounded-lg border border-neutral-200 shadow-2xs">
              <Terminal className="w-3.5 h-3.5 text-neutral-600" />
              <span>Python 3.x Fundamentals</span>
            </div>
          </div>

          {/* Project Cards Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS_DATA.map((project) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/90 shadow-2xs flex flex-col justify-between hover:border-neutral-300 transition-all group"
              >
                <div>
                  {/* Top Bar: Project Number & Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono tracking-tight text-neutral-400 group-hover:text-neutral-900 transition-colors">
                      {project.number}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-600 border border-neutral-200/60">
                      Beginner Project
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-lg font-bold text-neutral-900 tracking-tight mb-2">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Technologies Used */}
                  <div className="mb-6">
                    <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                      Technologies & Concepts
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 font-mono text-[11px] border border-neutral-200/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-neutral-100 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    {/* Primary Button as specified in prompt: placeholder button since repository link not provided */}
                    <button
                      id={`project-btn-${project.id}`}
                      type="button"
                      disabled
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-100 text-neutral-400 text-xs font-medium border border-neutral-200/60 cursor-not-allowed select-none"
                      title="Repository link will be linked upon GitHub publish"
                    >
                      <Clock className="w-3.5 h-3.5 text-neutral-400" />
                      <span>Project Link Coming Soon</span>
                    </button>

                    {/* Interactive Code & Logic Inspector */}
                    <button
                      id={`project-demo-btn-${project.id}`}
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium transition-colors shadow-2xs cursor-pointer"
                      title="Inspect Python code & run simulation"
                    >
                      <Play className="w-3 h-3 text-neutral-300" />
                      <span>View Logic</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Reassurance Note */}
          <div className="mt-8 p-4 rounded-xl bg-white border border-neutral-200/80 flex items-start sm:items-center gap-3 text-xs text-neutral-600 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-1 sm:mt-0" />
            <p>
              More foundational projects in Python algorithms and introductory frontend tools are currently in development as my first semester progresses.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Interactive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
