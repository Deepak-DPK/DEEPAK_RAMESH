import { useState } from 'react';
import { X, Play, Code2, Check, Copy, Terminal } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  // Grade Demo State
  const [marks, setMarks] = useState<number>(85);
  // Voting Demo State
  const [age, setAge] = useState<number>(19);
  // Copy state
  const [copied, setCopied] = useState(false);

  // Active view tab: Code vs Interactive Demo
  const [tab, setTab] = useState<'demo' | 'code'>('demo');

  // Compute grade
  const calculateGrade = (m: number) => {
    if (m < 0 || m > 100 || isNaN(m)) return { grade: 'Invalid', note: 'Please enter marks between 0 and 100', color: 'text-rose-600' };
    if (m >= 90) return { grade: 'Grade A+ (Outstanding)', note: 'Excellent academic performance', color: 'text-emerald-600' };
    if (m >= 80) return { grade: 'Grade A (Excellent)', note: 'Very strong understanding of coursework', color: 'text-emerald-600' };
    if (m >= 70) return { grade: 'Grade B (Good)', note: 'Solid grasp of concepts', color: 'text-blue-600' };
    if (m >= 60) return { grade: 'Grade C (Satisfactory)', note: 'Meets course requirements', color: 'text-amber-600' };
    if (m >= 50) return { grade: 'Grade D (Pass)', note: 'Minimum passing score achieved', color: 'text-neutral-700' };
    return { grade: 'Grade F (Needs Improvement)', note: 'Needs remedial practice and revision', color: 'text-rose-600' };
  };

  // Compute voting
  const checkVoting = (a: number) => {
    if (a < 0 || isNaN(a)) return { eligible: false, text: 'Invalid age entered', sub: 'Age must be 0 or greater' };
    if (a >= 18) {
      const years = a - 18;
      return {
        eligible: true,
        text: 'Eligible to Vote!',
        sub: `Has met the minimum age requirement of 18 (eligible for ${years} year${years === 1 ? '' : 's'})`,
      };
    }
    const left = 18 - a;
    return {
      eligible: false,
      text: 'Not Eligible to Vote Yet',
      sub: `Must be at least 18 years old. Eligible in ${left} year${left === 1 ? '' : 's'}.`,
    };
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(project.pythonSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const gradeResult = calculateGrade(marks);
  const votingResult = checkVoting(age);

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-modal-dialog"
        className="bg-white rounded-2xl w-full max-w-xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-neutral-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-neutral-50/50">
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-md bg-neutral-900 text-white font-mono text-xs flex items-center justify-center font-bold">
              {project.number}
            </span>
            <div>
              <h3 className="text-base font-bold text-neutral-900">
                {project.title}
              </h3>
              <p className="text-xs text-neutral-500">{project.tagline}</p>
            </div>
          </div>
          <button
            id="close-modal-btn"
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-neutral-100">
          <button
            id="modal-tab-demo"
            type="button"
            onClick={() => setTab('demo')}
            className={`flex items-center gap-1.5 py-2 px-3 text-xs font-medium border-b-2 transition-colors ${
              tab === 'demo'
                ? 'border-neutral-900 text-neutral-900 font-semibold'
                : 'border-transparent text-neutral-500 hover:text-neutral-800'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>Interactive Simulator</span>
          </button>
          <button
            id="modal-tab-code"
            type="button"
            onClick={() => setTab('code')}
            className={`flex items-center gap-1.5 py-2 px-3 text-xs font-medium border-b-2 transition-colors ${
              tab === 'code'
                ? 'border-neutral-900 text-neutral-900 font-semibold'
                : 'border-transparent text-neutral-500 hover:text-neutral-800'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Python Source Code</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {tab === 'demo' ? (
            <div className="space-y-4">
              <div className="text-xs text-neutral-600">
                Test the fundamental conditional logic live. This mirrors the exact decision tree implemented in Python.
              </div>

              {project.demoType === 'grade' ? (
                <div className="bg-neutral-50 p-5 rounded-xl border border-neutral-200 space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor="marks-input" className="text-xs font-semibold text-neutral-800">
                        Enter Student Marks (0 to 100):
                      </label>
                      <span className="font-mono text-sm font-bold text-neutral-900 bg-white px-2.5 py-0.5 rounded border border-neutral-200">
                        {marks}%
                      </span>
                    </div>
                    <input
                      id="marks-input"
                      type="range"
                      min="0"
                      max="100"
                      value={marks}
                      onChange={(e) => setMarks(Number(e.target.value))}
                      className="w-full accent-neutral-900 cursor-pointer"
                    />
                  </div>

                  <div className="pt-3 border-t border-neutral-200/80">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
                      Computed Output:
                    </span>
                    <div className="bg-white p-3.5 rounded-lg border border-neutral-200">
                      <div className={`text-base font-bold ${gradeResult.color}`}>
                        {gradeResult.grade}
                      </div>
                      <div className="text-xs text-neutral-500 mt-0.5">
                        {gradeResult.note}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-neutral-50 p-5 rounded-xl border border-neutral-200 space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor="age-input" className="text-xs font-semibold text-neutral-800">
                        Enter Person's Age:
                      </label>
                      <span className="font-mono text-sm font-bold text-neutral-900 bg-white px-2.5 py-0.5 rounded border border-neutral-200">
                        {age} years old
                      </span>
                    </div>
                    <input
                      id="age-input"
                      type="range"
                      min="0"
                      max="100"
                      value={age}
                      onChange={(e) => setAge(Number(e.target.value))}
                      className="w-full accent-neutral-900 cursor-pointer"
                    />
                  </div>

                  <div className="pt-3 border-t border-neutral-200/80">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
                      Computed Output:
                    </span>
                    <div className="bg-white p-3.5 rounded-lg border border-neutral-200">
                      <div
                        className={`text-base font-bold ${
                          votingResult.eligible ? 'text-emerald-600' : 'text-amber-600'
                        }`}
                      >
                        {votingResult.text}
                      </div>
                      <div className="text-xs text-neutral-500 mt-0.5">
                        {votingResult.sub}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block mb-2">
                  Concepts Applied:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 font-mono text-[11px] border border-neutral-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-500 flex items-center gap-1 font-mono">
                  <Terminal className="w-3.5 h-3.5" />
                  main.py
                </span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1 text-xs text-neutral-600 hover:text-neutral-900 bg-neutral-100 px-2 py-1 rounded transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 rounded-xl bg-neutral-900 text-neutral-100 text-xs font-mono overflow-x-auto leading-relaxed border border-neutral-800">
                <code>{project.pythonSnippet}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between">
          <span className="text-xs text-neutral-500">
            Status: Beginner Academic Project
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-neutral-200 hover:bg-neutral-300 text-neutral-800 text-xs font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
