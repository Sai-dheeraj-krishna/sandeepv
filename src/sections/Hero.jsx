import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowDown, Download, Send, Code2, Github, Mail, ExternalLink } from 'lucide-react';

const roles = [
  'AI & ML Developer',
  'MCA Student @ SRM',
  'Software Engineer',
  'Problem Solver',
];

const codeSnippet = [
  { indent: 0, text: 'class Sandeep:' },
  { indent: 1, text: 'role = "AI Developer"' },
  { indent: 1, text: 'skills = [' },
  { indent: 2, text: '"Python", "ML",' },
  { indent: 2, text: '"Flutter", "NLP"' },
  { indent: 1, text: ']' },
  { indent: 1, text: 'def build(*args):' },
  { indent: 2, text: 'return "🚀 Innovation"' },
];

function CodeWindow() {
  return (
    <div className="glass-strong rounded-2xl overflow-hidden shadow-2xl shadow-black/60 w-full max-w-sm mx-auto">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.08] bg-white/[0.03]">
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <span className="w-3 h-3 rounded-full bg-emerald/70" />
        <span className="ml-auto text-xs text-slate-500 font-mono">portfolio.py</span>
      </div>
      {/* Code body */}
      <div className="p-5 font-mono text-sm space-y-1 select-none">
        {codeSnippet.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.12, duration: 0.4 }}
            className="flex"
          >
            <span className="text-slate-600 w-6 shrink-0 text-right mr-4 select-none">{i + 1}</span>
            <span style={{ paddingLeft: `${line.indent * 16}px` }}>
              {line.text.startsWith('class') && (
                <><span className="text-violet-light">class </span><span className="text-cyan-light">Sandeep</span><span className="text-slate-300">:</span></>
              )}
              {line.text.startsWith('role') && (
                <><span className="text-electric-light">role</span><span className="text-slate-400"> = </span><span className="text-emerald-light">"AI Developer"</span></>
              )}
              {line.text.startsWith('skills') && (
                <><span className="text-electric-light">skills</span><span className="text-slate-400"> = [</span></>
              )}
              {(line.text.includes('"Python"') ) && (
                <span className="text-yellow-300/90">"Python", "ML",</span>
              )}
              {(line.text.includes('"Flutter"') ) && (
                <span className="text-yellow-300/90">"Flutter", "NLP"</span>
              )}
              {line.text === ']' && <span className="text-slate-400">]</span>}
              {line.text.startsWith('def') && (
                <><span className="text-violet-light">def </span><span className="text-cyan-light">build</span><span className="text-slate-300">(*args):</span></>
              )}
              {line.text.includes('return') && (
                <><span className="text-violet-light">return </span><span className="text-emerald-light">"🚀 Innovation"</span></>
              )}
            </span>
          </motion.div>
        ))}
        {/* Blinking cursor */}
        <motion.div
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="inline-block w-2 h-4 bg-cyan-light ml-1 mt-1"
        />
      </div>
    </div>
  );
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-transparent to-navy-950 z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgba(59,130,246,0.10),transparent)] z-[1]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet/5 rounded-full blur-[100px] pointer-events-none z-[1]" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan/5 rounded-full blur-[80px] pointer-events-none z-[1]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Text side ── */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-medium text-slate-400 mb-6"
            >
              <MapPin size={12} className="text-electric-light" />
              Mangalagiri, Andhra Pradesh, India
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight mb-4"
            >
              Hi, I'm{' '}
              <span className="text-gradient block sm:inline">
                Vangara Venkata<br className="hidden sm:block" /> Sandeep
              </span>
            </motion.h1>

            {/* Animated rotating role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="h-10 flex items-center justify-center lg:justify-start mb-6 overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIdx}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-lg sm:text-xl font-semibold text-cyan-light"
                >
                  {roles[roleIdx]}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-slate-400 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8"
            >
              MCA student specializing in{' '}
              <span className="text-electric-light font-medium">machine learning</span>,{' '}
              <span className="text-cyan-light font-medium">AI-powered applications</span>,{' '}
              and modern software development.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8"
            >
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                <Code2 size={17} />
                View Projects
              </button>

              <a
                href="#"
                className="btn-ghost gradient-border"
              >
                <Download size={17} />
                Resume
              </a>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-ghost gradient-border"
              >
                <Send size={17} />
                Contact Me
              </button>
            </motion.div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="https://github.com/sandeepvangara"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors duration-200 text-sm"
              >
                <Github size={18} />
                <span>sandeepvangara</span>
                <ExternalLink size={12} className="opacity-50" />
              </a>
              <span className="text-slate-700">|</span>
              <a
                href="mailto:sandeepvangara.2005@gmail.com"
                className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors duration-200 text-sm"
              >
                <Mail size={18} />
                <span className="hidden sm:inline">Email me</span>
              </a>
            </motion.div>
          </div>

          {/* ── Right: Code window ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Floating glow orbs behind window */}
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-electric/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-cyan/10 rounded-full blur-3xl pointer-events-none" />

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <CodeWindow />
              </motion.div>

              {/* Floating skill badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 }}
                className="absolute -bottom-4 -left-6 glass rounded-xl px-4 py-2 text-xs font-semibold text-electric-light border border-electric/20 shadow-lg"
              >
                🧠 Machine Learning
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.9 }}
                className="absolute -top-4 -right-4 glass rounded-xl px-4 py-2 text-xs font-semibold text-cyan-light border border-cyan/20 shadow-lg"
              >
                📱 Flutter & Firebase
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-slate-600 cursor-pointer hover:text-slate-400 transition-colors"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-[10px] tracking-widest uppercase font-medium">Scroll</span>
          <ArrowDown size={15} />
        </motion.div>
      </motion.div>
    </section>
  );
}
