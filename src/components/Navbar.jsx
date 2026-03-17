import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Download } from 'lucide-react';

const navLinks = [
  { id: 'home',           label: 'Home' },
  { id: 'about',          label: 'About' },
  { id: 'education',      label: 'Education' },
  { id: 'skills',         label: 'Skills' },
  { id: 'projects',       label: 'Projects' },
  { id: 'certifications', label: 'Certs' },
  { id: 'achievements',   label: 'Experience' },
  { id: 'contact',        label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map(l => document.getElementById(l.id));
      const scrollPos = window.scrollY + 130;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          setActive(navLinks[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-navy-900/90 backdrop-blur-xl shadow-xl shadow-black/40 border-b border-white/[0.06]'
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">

          {/* Logo */}
          <motion.button
            onClick={() => handleClick('home')}
            className="text-xl md:text-2xl font-black text-gradient cursor-pointer tracking-tight"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
          >
            &lt;VS /&gt;
          </motion.button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer ${
                  active === link.id
                    ? 'text-cyan-light'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {active === link.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-lg bg-white/[0.07]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}
          </div>

          {/* Right side: GitHub + Hire Me */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://github.com/sandeepvangara"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:sandeepvangara.2005@gmail.com"
              className="btn-primary !py-2 !px-5 !text-xs !rounded-lg"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMobileOpen(!mobileOpen);
            }}
            className="lg:hidden relative z-[60] p-2 text-slate-300 hover:text-white transition cursor-pointer touch-none pointer-events-auto"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-navy-900/95 backdrop-blur-xl border-t border-white/[0.06] shadow-2xl z-50 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => handleClick(link.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition cursor-pointer ${
                    active === link.id
                      ? 'text-cyan-light bg-white/[0.07]'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="pt-3 border-t border-white/[0.06] flex gap-2">
                <a
                  href="https://github.com/sandeepvangara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl glass text-slate-300 text-sm font-medium hover:text-white transition"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href="mailto:sandeepvangara.2005@gmail.com"
                  className="flex-1 btn-primary !py-2.5 !px-4 !text-sm !rounded-xl justify-center"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
