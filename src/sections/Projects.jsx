import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import { ExternalLink, Github, Smartphone, BarChart3, BookOpen } from 'lucide-react';

const projects = [
  {
    title: 'Swiggy Clone Mobile App',
    icon: Smartphone,
    emoji: '📱',
    gradient: 'from-electric to-cyan',
    textColor: 'text-electric-light',
    borderColor: 'border-electric/20',
    accentBg: 'bg-electric/10',
    desc: 'A full-featured mobile application replicating key Swiggy features with real-time updates and smooth user experience.',
    features: [
      'Implemented user authentication & authorization',
      'Built food ordering & cart functionality',
      'Real-time database updates with Firebase',
      'Improved UI/UX via collaborative development',
    ],
    tags: ['Flutter', 'Firebase', 'Dart', 'Real-time DB'],
    github: 'https://github.com/sandeepvangara',
    demo: '#',
  },
  {
    title: 'House Price Prediction System',
    icon: BarChart3,
    emoji: '🏠',
    gradient: 'from-cyan to-violet',
    textColor: 'text-cyan-light',
    borderColor: 'border-cyan/20',
    accentBg: 'bg-cyan/10',
    desc: 'A machine learning system that predicts house prices using linear regression with an interactive GUI.',
    features: [
      'Built ML model using Linear Regression',
      'Processed housing dataset features with Pandas',
      'Implemented full training & evaluation pipeline',
      'Created Tkinter GUI for input & prediction display',
    ],
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Tkinter', 'ML'],
    github: 'https://github.com/sandeepvangara',
    demo: '#',
  },
  {
    title: 'AI Textbook Review Summarizer',
    icon: BookOpen,
    emoji: '🤖',
    gradient: 'from-violet to-pink',
    textColor: 'text-violet-light',
    borderColor: 'border-violet/20',
    accentBg: 'bg-violet/10',
    desc: 'An NLP web application that uses transformer models to summarize textbook product reviews intelligently.',
    features: [
      'Built NLP app with transformer-based summarization',
      'Integrated HuggingFace Transformers pipeline',
      'Designed interactive Streamlit web interface',
      'Deployed application publicly using Ngrok',
    ],
    tags: ['Python', 'NLP', 'Streamlit', 'HuggingFace', 'Ngrok'],
    github: 'https://github.com/sandeepvangara',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        tag="What I've Built"
        title="Projects"
        subtitle="A selection of real-world projects built with modern technologies."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.14 }}
            whileHover={{ y: -8 }}
            className={`group glass-strong rounded-2xl overflow-hidden border ${project.borderColor} flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-black/50`}
          >
            {/* Gradient hero area */}
            <div className={`relative h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.3),transparent_60%)]" />
              <span className="text-5xl filter drop-shadow-2xl">{project.emoji}</span>
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-navy-900/80 to-transparent" />
            </div>

            <div className="p-6 flex flex-col flex-1">
              {/* Title */}
              <div className="flex items-start gap-3 mb-3">
                <div className={`p-2 rounded-lg ${project.accentBg} border ${project.borderColor} shrink-0`}>
                  <project.icon size={18} className={project.textColor} />
                </div>
                <h3 className="text-base font-bold text-white leading-snug group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.desc}</p>

              {/* Feature list */}
              <ul className="space-y-1.5 mb-5 flex-1">
                {project.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className={`mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} shrink-0`} />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold glass-tag text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-2 pt-2 border-t border-white/[0.06]">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl glass text-slate-400 text-xs font-semibold hover:text-white hover:bg-white/[0.1] transition-all duration-200"
                >
                  <Github size={14} />
                  GitHub
                </a>
                <a
                  href={project.demo}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-white text-xs font-semibold transition-all duration-200 hover:opacity-90 hover:shadow-lg"
                  style={{ background: `linear-gradient(135deg, var(--${project.gradient.split('-')[1] === 'to' ? '' : ''}))` }}
                >
                  <span className={`flex items-center justify-center gap-1.5 w-full h-full bg-gradient-to-r ${project.gradient} rounded-xl py-0 px-0`}>
                    <ExternalLink size={14} />
                    Live Demo
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
