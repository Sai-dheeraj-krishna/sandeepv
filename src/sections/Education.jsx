import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const education = [
  {
    institution: 'SRM University, Chennai',
    degree: 'MCA – Computer Applications',
    cgpa: '7.97',
    period: 'July 2025 – April 2027',
    status: 'Appearing',
    color: 'from-electric to-cyan',
    iconColor: 'text-electric-light',
    dotColor: 'bg-electric',
  },
  {
    institution: 'KBN College, Vijayawada',
    degree: 'BCA – Computer Applications',
    cgpa: '8.21',
    period: 'July 2022 – April 2025',
    status: null,
    color: 'from-cyan to-purple',
    iconColor: 'text-cyan-light',
    dotColor: 'bg-cyan',
  },
];

export default function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeading title="Education" subtitle="My academic journey" />

      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-electric via-cyan to-purple opacity-30" />

        <div className="space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative pl-16 md:pl-20"
            >
              {/* Timeline dot */}
              <div className={`absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full ${edu.dotColor} ring-4 ring-navy-950 z-10`}>
                <div className={`absolute inset-0 rounded-full ${edu.dotColor} animate-ping opacity-20`} />
              </div>

              {/* Card */}
              <div className="glass-strong rounded-2xl p-6 md:p-8 group hover:bg-white/[0.08] transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg glass-tag ${edu.iconColor}`}>
                      <GraduationCap size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white">{edu.institution}</h3>
                      <p className="text-sm text-slate-400">{edu.degree}</p>
                    </div>
                  </div>

                  {edu.status && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium glass-tag text-electric-light">
                      {edu.status}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-1.5 text-slate-400 glass-text">
                    <Calendar size={14} />
                    {edu.period}
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400 glass-text">
                    <Award size={14} />
                    CGPA: <span className="text-white font-semibold">{edu.cgpa}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
