import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-white border-t border-neutral-200 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Copyright & Tagline */}
          <div className="text-center sm:text-left">
            <p className="text-xs sm:text-sm font-medium text-neutral-800">
              {PERSONAL_INFO.footerText}
            </p>
            <p className="text-xs text-neutral-500 mt-1">
              First-Year B.Tech Computer Science • Aspiring AI Engineer
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-6 text-xs font-medium text-neutral-600">
            <a
              id="footer-github-link"
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <span className="text-neutral-300">|</span>

            <a
              id="footer-linkedin-link"
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#0077B5]" />
              <span>LinkedIn</span>
            </a>

            <span className="text-neutral-300">|</span>

            <button
              id="back-to-top-btn"
              type="button"
              onClick={scrollToTop}
              className="text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-1 cursor-pointer"
              aria-label="Back to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
