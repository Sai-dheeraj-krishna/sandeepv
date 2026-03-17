import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';

const achievements = [
  {
    emoji: '🧠',
    title: 'Machine Learning Models',
    desc: 'Developed predictive analysis models using Linear Regression and Scikit-learn, from data preprocessing to evaluation.',
    gradient: 'from-electric to-cyan',
    dotColor: 'bg-electric',
    borderColor: 'border-electric/20',
  },
  {
    emoji: '📱',
    title: 'Mobile Application Development',
    desc: 'Built production-ready mobile applications using Flutter and Firebase with real-time features and smooth UX.',
    gradient: 'from-cyan to-violet',
    dotColor: 'bg-cyan',
    borderColor: 'border-cyan/20',
  },
  {
    emoji: '🗣️',
    title: 'NLP with Transformer Models',
    desc: 'Created NLP applications integrating HuggingFace Transformers for intelligent text summarization and analysis.',
    gradient: 'from-violet to-pink',
    dotColor: 'bg-violet',
    borderColor: 'border-violet/20',
  },
  {
    emoji: '📊',
    title: 'Interactive AI Tools with Streamlit',
    desc: 'Deployed AI-powered web tools using Streamlit, making machine learning accessible through clean web interfaces.',
    gradient: 'from-pink to-emerald',
    dotColor: 'bg-pink',
    borderColor: 'border-pink/20',
  },
  {
    emoji: '🤝',
    title: 'Academic Software Projects & Teamwork',
    desc: 'Led and collaborated on multiple academic software projects, demonstrating strong team coordination and project delivery skills.',
    gradient: 'from-emerald to-electric',
    dotColor: 'bg-emerald',
    borderColor: 'border-emerald/20',
  },
];

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <SectionHeading
        tag="Experience & Highlights"
        title="Achievements"
        subtitle="Key highlights from my development journey and academic work."
      />

      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-8 top-4 bottom-4 w-px bg-gradient-to-b from-electric via-violet to-emerald opacity-20 rounded-full" />

        <div className="space-y-6">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="relative pl-16 md:pl-20"
            >
              {/* Timeline dot */}
              <div className={`absolute left-[18px] md:left-[26px] top-5 w-4 h-4 rounded-full ${item.dotColor} ring-4 ring-navy-900 z-10`}>
                <div className={`absolute inset-0 rounded-full ${item.dotColor} animate-ping opacity-15`} />
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className={`glass-strong rounded-2xl p-5 md:p-6 border ${item.borderColor} hover:shadow-lg transition-all duration-300 flex items-start gap-4`}
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-xl shrink-0 shadow-md`}>
                  {item.emoji}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1.5">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
