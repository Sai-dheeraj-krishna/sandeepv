import { motion } from 'framer-motion';
import { Github, Mail, Phone, Download, Heart } from 'lucide-react';

const socials = [
  { icon: Github, href: 'https://github.com/sandeepvangara', label: 'GitHub' },
  { icon: Mail, href: 'mailto:sandeepvangara.2005@gmail.com', label: 'Email' },
  { icon: Phone, href: 'tel:+919392855422', label: 'Phone' },
];

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="relative glass-strong border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Top row: logo + nav links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-10"
        >
          {/* Logo / tagline */}
          <div className="text-center md:text-left">
            <span className="text-xl font-black text-gradient">&lt;VS /&gt;</span>
            <p className="text-slate-500 text-xs mt-2 max-w-xs leading-relaxed">
              AI & Software Developer building intelligent applications and solving real-world problems.
            </p>
          </div>

          {/* Nav quick links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 md:ml-auto">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                className="text-xs text-slate-500 hover:text-slate-200 transition-colors font-medium cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-8" />

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          {/* Copyright + built with */}
          <div className="text-center sm:text-left">
            <p className="text-xs text-slate-500">
              © 2026 Vangara Venkata Sandeep. All rights reserved.
            </p>
          </div>

          {/* Social icons + resume */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-full glass text-slate-500 hover:text-electric-light hover:glow transition-all duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
            <a
              href="sandeep_resume.pdf" download="sandeep_resume.pdf"
              className="flex items-center gap-2 px-4 py-2 rounded-full btn-primary !py-2 !px-4 !text-xs !rounded-full ml-2"
            >
              <Download size={12} />
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
