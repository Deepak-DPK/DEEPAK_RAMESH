import { Check, Compass, Target, ArrowRight, CircleDot } from 'lucide-react';
import { motion } from 'motion/react';
import { JOURNEY_STAGES } from '../data';

export default function LearningJourney() {
  return (
    <section id="journey" className="py-20 sm:py-24 bg-white border-y border-neutral-200/80">
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
              Roadmap & Milestones
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-12">
            <div>
              <h2
                id="journey-heading"
                className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight"
              >
                My Learning Journey
              </h2>
              <p className="text-sm text-neutral-600 mt-1.5 max-w-xl">
                A structured path starting from core computer science to practical AI engineering.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 self-start sm:self-auto text-xs text-neutral-500 bg-neutral-100 px-3 py-1.5 rounded-lg border border-neutral-200">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span>Currently in Stages 01–03</span>
            </div>
          </div>

          {/* Timeline Container */}
          <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-[11px] sm:before:left-[15px] before:top-3 before:bottom-3 before:w-[2px] before:bg-neutral-200">
            {JOURNEY_STAGES.map((stage, idx) => {
              const isFuture = stage.isFuture;
              return (
                <div
                  key={stage.stage}
                  id={`journey-${stage.stage.toLowerCase().replace(/\s+/g, '-')}`}
                  className="relative group"
                >
                  {/* Timeline Indicator Dot */}
                  <div
                    className={`absolute -left-6 sm:-left-8 top-1 w-6 h-6 rounded-full flex items-center justify-center border-2 transition-colors ${
                      isFuture
                        ? 'bg-neutral-50 border-neutral-400 text-neutral-500'
                        : idx === 1
                        ? 'bg-neutral-900 border-neutral-900 text-white'
                        : 'bg-white border-neutral-900 text-neutral-900'
                    }`}
                  >
                    {isFuture ? (
                      <Target className="w-3 h-3" />
                    ) : (
                      <span className="text-[10px] font-bold">{idx + 1}</span>
                    )}
                  </div>

                  {/* Stage Card */}
                  <div
                    className={`rounded-2xl p-5 sm:p-6 transition-all border ${
                      isFuture
                        ? 'bg-gradient-to-r from-neutral-50 to-neutral-100/50 border-dashed border-neutral-300'
                        : 'bg-white border-neutral-200 shadow-2xs hover:border-neutral-300'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-semibold text-neutral-500">
                          {stage.stage}
                        </span>
                        <span className="text-neutral-300">•</span>
                        <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight">
                          {stage.title}
                        </h3>
                      </div>

                      {/* Status Tag */}
                      <span
                        className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${
                          isFuture
                            ? 'bg-purple-50 text-purple-700 border-purple-200 font-semibold'
                            : stage.status === 'Active Building'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200 font-semibold'
                            : 'bg-neutral-100 text-neutral-700 border-neutral-200'
                        }`}
                      >
                        {stage.status}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {stage.description}
                    </p>

                    {isFuture && (
                      <div className="mt-3 pt-3 border-t border-neutral-200/70 flex items-center gap-1.5 text-xs text-purple-800 font-medium">
                        <Compass className="w-3.5 h-3.5" />
                        <span>Future learning goal — not an accomplished claim.</span>
                      </div>
                    )}
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
