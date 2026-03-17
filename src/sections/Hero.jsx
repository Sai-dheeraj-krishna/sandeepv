import { motion } from 'framer-motion';
import { MapPin, ArrowDown, Download, Send, Code2 } from 'lucide-react';

const techIcons = ['⚛️', '🐍', '☕', '🎯', '📱', '🤖'];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-transparent to-navy-950 z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_70%)] z-[1]" />

      {/* Floating tech icons */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {techIcons.map((icon, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl md:text-3xl opacity-20"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="glass-strong rounded-3xl p-8 md:p-14 gradient-border"
        >
          {/* Name Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm glass-text text-slate-300 mb-8"
          >
            <MapPin size={14} className="text-electric-light" />
            Mangalagiri, Andhra Pradesh
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Hi, I'm{' '}
            <span className="text-gradient">
              Vangara Venkata Sandeep
            </span>
          </motion.h1>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8"
          >
            {['MCA Student', 'Machine Learning Enthusiast', 'Software Developer'].map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-full text-xs md:text-sm font-medium glass-tag text-slate-300"
              >
                {i > 0 && <span className="text-electric mr-2">•</span>}
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-base md:text-lg glass-text text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Motivated MCA student with strong skills in programming, machine learning, and application development.
            Passionate about building intelligent applications and solving real-world problems using modern technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-electric to-cyan text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-electric/25 hover:scale-105"
            >
              <Code2 size={18} />
              View Projects
            </a>
            <a
              href="#"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-slate-300 font-semibold text-sm transition-all duration-300 hover:text-white hover:glow hover:scale-105 gradient-border"
            >
              <Download size={18} />
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-slate-300 font-semibold text-sm transition-all duration-300 hover:text-white hover:glow-cyan hover:scale-105 gradient-border"
            >
              <Send size={18} />
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
