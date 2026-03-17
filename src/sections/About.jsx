import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import { User, Code, Brain, Lightbulb } from 'lucide-react';

const highlights = [
  { icon: Code, label: 'Full Stack', color: 'text-electric-light' },
  { icon: Brain, label: 'Machine Learning', color: 'text-cyan-light' },
  { icon: Lightbulb, label: 'Problem Solver', color: 'text-purple-light' },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading title="About Me" subtitle="Get to know me better" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-2xl p-8 md:p-12 gradient-border"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl glass text-electric-light shrink-0">
              <User size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Who I Am</h3>
              <p className="text-sm text-slate-500">Building the future, one line at a time</p>
            </div>
          </div>

          <p className="text-slate-300 glass-text leading-relaxed text-base md:text-lg mb-8">
            Motivated MCA student with strong foundations in{' '}
            <span className="text-electric-light font-medium">Python</span>,{' '}
            <span className="text-cyan-light font-medium">Java</span>, and{' '}
            <span className="text-purple-light font-medium">data analysis</span>.
            Experienced in building machine learning models and AI-based applications using technologies
            such as Scikit-learn, Streamlit, and NLP frameworks. Interested in creating innovative
            software solutions and improving user experiences through technology.
          </p>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="group flex items-center gap-3 p-4 rounded-xl glass-tag hover:glow transition-all duration-300"
              >
                <h.icon size={22} className={`${h.color} transition-transform group-hover:scale-110`} />
                <span className="text-sm font-medium text-slate-300">{h.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
