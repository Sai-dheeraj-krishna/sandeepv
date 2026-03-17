import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import { Code, Wrench, Monitor } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    color: 'from-electric to-cyan',
    barColor: 'from-electric to-cyan',
    textColor: 'text-electric-light',
    borderColor: 'border-electric/20',
    accentBg: 'bg-electric/10',
    skills: [
      { name: 'Python',  level: 90, emoji: '🐍' },
      { name: 'Java',    level: 80, emoji: '☕' },
      { name: 'C',       level: 75, emoji: '⚡' },
      { name: 'HTML',    level: 85, emoji: '🌐' },
      { name: 'CSS',     level: 80, emoji: '🎨' },
    ],
  },
  {
    title: 'Frameworks & Tools',
    icon: Wrench,
    color: 'from-cyan to-violet',
    barColor: 'from-cyan to-violet',
    textColor: 'text-cyan-light',
    borderColor: 'border-cyan/20',
    accentBg: 'bg-cyan/10',
    skills: [
      { name: 'Scikit-learn',              level: 82, emoji: '🤖' },
      { name: 'Streamlit',                 level: 80, emoji: '📊' },
      { name: 'HuggingFace Transformers',  level: 75, emoji: '🦜' },
      { name: 'Flutter',                   level: 78, emoji: '📱' },
      { name: 'Firebase',                  level: 72, emoji: '🔥' },
    ],
  },
  {
    title: 'Technical Areas',
    icon: Monitor,
    color: 'from-violet to-pink',
    barColor: 'from-violet to-pink',
    textColor: 'text-violet-light',
    borderColor: 'border-violet/20',
    accentBg: 'bg-violet/10',
    skills: [
      { name: 'Machine Learning',      level: 85, emoji: '🧠' },
      { name: 'NLP',                   level: 78, emoji: '🗣️' },
      { name: 'Mobile App Dev',        level: 78, emoji: '📲' },
      { name: 'Data Analysis',         level: 80, emoji: '📈' },
      { name: 'UI/UX Design',          level: 70, emoji: '✨' },
    ],
  },
];

function SkillBar({ name, emoji, level, barColor, textColor, delay }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <span className="text-base leading-none">{emoji}</span>
          <span className="text-slate-300 font-medium">{name}</span>
        </div>
        <span className={`text-xs font-bold ${textColor} tabular-nums`}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay, ease: [0.34, 1.56, 0.64, 1] }}
          className={`h-full rounded-full bg-gradient-to-r ${barColor}`}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading
        tag="What I Know"
        title="Skills & Expertise"
        subtitle="Technologies, frameworks, and areas that I work with."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className={`glass-strong rounded-2xl p-6 md:p-8 border ${cat.borderColor} transition-all duration-300 hover:shadow-xl`}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2.5 rounded-xl ${cat.accentBg} border ${cat.borderColor}`}>
                <cat.icon size={22} className={cat.textColor} />
              </div>
              <h3 className="text-base font-bold text-white">{cat.title}</h3>
            </div>

            {/* Skill bars */}
            <div className="space-y-4">
              {cat.skills.map((skill, j) => (
                <SkillBar
                  key={j}
                  name={skill.name}
                  emoji={skill.emoji}
                  level={skill.level}
                  barColor={cat.barColor}
                  textColor={cat.textColor}
                  delay={0.15 + j * 0.08}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating tech badge strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-10 flex flex-wrap justify-center gap-3"
      >
        {['Python', 'Java', 'C', 'Flutter', 'Firebase', 'Scikit-learn', 'Streamlit', 'HuggingFace', 'Pandas', 'NLP', 'HTML', 'CSS', 'Tkinter'].map((tech) => (
          <span key={tech} className="badge">{tech}</span>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
