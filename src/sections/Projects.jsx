import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import { ExternalLink, Github, Smartphone, BarChart3, BookOpen } from 'lucide-react';

const projects = [
  {
    title: 'Swiggy Clone App',
    icon: Smartphone,
    color: 'from-electric to-cyan',
    textColor: 'text-electric-light',
    features: [
      'Built mobile app using Flutter',
      'Implemented user authentication',
      'Food ordering system',
      'Real-time updates',
      'Improved UI/UX',
    ],
    tags: ['Flutter', 'Firebase', 'Dart', 'Mobile'],
    github: '#',
    demo: '#',
  },
  {
    title: 'House Price Prediction using ML',
    icon: BarChart3,
    color: 'from-cyan to-purple',
    textColor: 'text-cyan-light',
    features: [
      'Linear regression model',
      'Data preprocessing with Pandas',
      'Model training with Scikit-learn',
      'Tkinter GUI for prediction input',
    ],
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Tkinter'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Textbook Review AI Summarizer',
    icon: BookOpen,
    color: 'from-purple to-pink',
    textColor: 'text-purple-light',
    features: [
      'NLP based web application',
      'Uses Transformer models',
      'Interface built using Streamlit',
      'Integrated HuggingFace Transformers',
      'Public deployment using Ngrok',
    ],
    tags: ['Python', 'NLP', 'Streamlit', 'HuggingFace'],
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        title="Projects"
        subtitle="Some of the things I've built"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
            className="group glass-strong rounded-2xl overflow-hidden gradient-border"
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
          >
            {/* Header gradient */}
            <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />

            <div className="p-6 md:p-8">
              {/* Icon & Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2.5 rounded-xl glass-tag ${project.textColor}`}>
                  <project.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {project.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm glass-text text-slate-400">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color} shrink-0`} />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="px-2.5 py-1 rounded-full text-xs font-medium glass-tag text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>



            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
