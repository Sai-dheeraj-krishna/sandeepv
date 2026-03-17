import { motion } from 'framer-motion';
import { Github, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative glass-strong border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-slate-500 glass-text"
          >
            © 2026 Vangara Venkata Sandeep. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {[
              { icon: Github, href: 'https://github.com/sandeepvangara', label: 'GitHub' },
              { icon: Mail, href: 'mailto:sandeepvangara.2005@gmail.com', label: 'Email' },
              { icon: Phone, href: 'tel:+919392855422', label: 'Phone' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-full glass text-slate-400 hover:text-electric-light hover:glow transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
