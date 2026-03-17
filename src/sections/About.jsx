import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import { Code, Brain, Layers, Lightbulb } from 'lucide-react';

const highlights = [
  {
    icon: Code,
    label: 'Programming Foundation',
    desc: 'Strong command of Python, Java, and C with web technologies.',
    color: 'text-electric-light',
    bg: 'from-electric/15 to-electric/5',
    border: 'border-electric/20',
  },
  {
    icon: Brain,
    label: 'Machine Learning',
    desc: 'Hands-on experience building ML models with Scikit-learn and Pandas.',
    color: 'text-cyan-light',
    bg: 'from-cyan/15 to-cyan/5',
    border: 'border-cyan/20',
  },
  {
    icon: Layers,
    label: 'NLP & Transformers',
    desc: 'Built NLP applications using HuggingFace Transformers and Streamlit.',
    color: 'text-violet-light',
    bg: 'from-violet/15 to-violet/5',
    border: 'border-violet/20',
  },
  {
    icon: Lightbulb,
    label: 'Problem Solver',
    desc: 'Passionate about developing intelligent software for real-world challenges.',
    color: 'text-emerald-light',
    bg: 'from-emerald/15 to-emerald/5',
    border: 'border-emerald/20',
  },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        tag="Who I Am"
        title="About Me"
        subtitle="Motivated developer passionate about AI, machine learning and building impactful software."
      />

      <div className="max-w-5xl mx-auto">
        {/* Bio card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-2xl p-8 md:p-10 mb-8 relative overflow-hidden"
        >
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-electric/5 rounded-full blur-3xl pointer-events-none" />

          <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6 max-w-3xl">
            I'm a motivated{' '}
            <span className="text-white font-semibold">MCA student at SRM University</span>{' '}
            with a strong foundation in{' '}
            <span className="text-electric-light font-medium">Python</span>,{' '}
            <span className="text-electric-light font-medium">Java</span>, and{' '}
            <span className="text-cyan-light font-medium">data analysis</span>. I specialize
            in building machine learning models and AI-driven applications using{' '}
            <span className="text-violet-light font-medium">Scikit-learn</span>,{' '}
            <span className="text-violet-light font-medium">Streamlit</span>, and{' '}
            <span className="text-emerald-light font-medium">NLP frameworks</span>.
          </p>
          <p className="text-slate-400 text-base leading-relaxed max-w-3xl">
            I'm passionate about developing intelligent software systems that solve real-world
            problems through the power of data and modern technology. Whether it's a mobile
            application or a transformer-based NLP tool — I bring genuine curiosity and
            dedication to every project.
          </p>
        </motion.div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className={`group flex items-start gap-4 p-5 rounded-2xl border ${h.border} bg-gradient-to-br ${h.bg} transition-all duration-300 hover:shadow-lg`}
            >
              <div className={`p-2.5 rounded-xl glass-tag ${h.color} shrink-0 mt-0.5`}>
                <h.icon size={22} className="transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm mb-1">{h.label}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{h.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
