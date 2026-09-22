import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'journey', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Journey', href: '#journey', id: 'journey' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-50/90 backdrop-blur-md border-b border-neutral-200 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Student Identity */}
          <a
            id="nav-logo"
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-neutral-900 text-white flex items-center justify-center font-bold text-sm shadow-xs group-hover:bg-neutral-800 transition-colors">
              D
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-neutral-900 text-sm tracking-tight group-hover:text-neutral-700 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] text-neutral-500 font-medium">
                1st Year B.Tech CSE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-links" className="hidden md:flex items-center gap-1 bg-neutral-100/80 p-1.5 rounded-full border border-neutral-200/80">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-white text-neutral-900 shadow-xs font-semibold'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-white/50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: GitHub shortcut */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              id="nav-github-shortcut"
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-700 hover:text-neutral-900 bg-white hover:bg-neutral-100 border border-neutral-200 px-3 py-1.5 rounded-lg transition-colors shadow-2xs"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200/60 focus:outline-none focus:ring-2 focus:ring-neutral-900"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden border-b border-neutral-200 bg-white/95 backdrop-blur-lg px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-neutral-100 text-neutral-900 font-semibold'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between">
            <span className="text-xs text-neutral-500 font-medium">Aspiring AI Engineer</span>
            <a
              id="mobile-nav-linkedin"
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-neutral-800 hover:underline"
            >
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
