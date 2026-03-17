import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import { Code, Wrench, Monitor, Heart } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    icon: Code,
    color: 'from-electric to-cyan',
    barColor: 'bg-gradient-to-r from-electric to-cyan',
    textColor: 'text-electric-light',
    skills: [
      { name: 'C', level: 75 },
      { name: 'Python', level: 90 },
      { name: 'Java', level: 80 },
      { name: 'HTML', level: 85 },
      { name: 'CSS', level: 80 },
    ],
  },
  {
    title: 'Frameworks & Tools',
    icon: Wrench,
    color: 'from-cyan to-purple',
    barColor: 'bg-gradient-to-r from-cyan to-purple',
    textColor: 'text-cyan-light',
    skills: [
      { name: 'Flutter', level: 75 },
      { name: 'Firebase', level: 70 },
    ],
  },
  {
    title: 'Development',
    icon: Monitor,
    color: 'from-purple to-pink',
    barColor: 'bg-gradient-to-r from-purple to-pink',
    textColor: 'text-purple-light',
    skills: [
      { name: 'Mobile App Development', level: 75 },
      { name: 'UI/UX Design', level: 70 },
    ],
  },
  {
    title: 'Soft Skills',
    icon: Heart,
    color: 'from-pink to-emerald',
    barColor: 'bg-gradient-to-r from-pink to-emerald',
    textColor: 'text-pink-light',
    skills: [
      { name: 'Problem Solving', level: 90 },
      { name: 'Team Collaboration', level: 85 },
      { name: 'Continuous Learning', level: 95 },
    ],
  },
];

function SkillBar({ name, level, barColor, textColor, delay }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-300 font-medium">{name}</span>
        <span className={`font-semibold ${textColor}`}>{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className={`h-full rounded-full ${barColor}`}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading title="Skills" subtitle="Technologies and competencies" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-strong rounded-2xl p-6 md:p-8 group hover:bg-white/[0.06] transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2.5 rounded-xl bg-gradient-to-br ${cat.color} bg-opacity-10`}>
                <cat.icon size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">{cat.title}</h3>
            </div>

            {/* Skill bars */}
            <div className="space-y-4">
              {cat.skills.map((skill, j) => (
                <SkillBar
                  key={j}
                  name={skill.name}
                  level={skill.level}
                  barColor={cat.barColor}
                  textColor={cat.textColor}
                  delay={0.2 + j * 0.1}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
