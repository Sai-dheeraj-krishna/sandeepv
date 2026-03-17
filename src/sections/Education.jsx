import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import { GraduationCap, Calendar, Award, CheckCircle } from 'lucide-react';

const education = [
  {
    institution: 'SRM University, Chennai',
    degree: 'MCA – Master of Computer Applications',
    cgpa: '7.97',
    period: 'July 2025 – April 2027',
    status: 'Currently Pursuing',
    note: 'Specializing in AI, Machine Learning & Software Engineering',
    gradient: 'from-electric to-cyan',
    textColor: 'text-electric-light',
    borderColor: 'border-electric/25',
    dotColor: 'bg-electric',
    dotGlow: 'shadow-electric/50',
  },
  {
    institution: 'KBN College, Vijayawada',
    degree: 'BCA – Bachelor of Computer Applications',
    cgpa: '8.21',
    period: 'July 2022 – April 2025',
    status: 'Completed',
    note: 'Core programming, data structures and application development',
    gradient: 'from-cyan to-violet',
    textColor: 'text-cyan-light',
    borderColor: 'border-cyan/25',
    dotColor: 'bg-cyan',
    dotGlow: 'shadow-cyan/50',
  },
];

export default function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeading
        tag="Academic Journey"
        title="Education"
        subtitle="My academic background and qualifications."
      />

      <div className="max-w-3xl mx-auto relative">
        {/* Timeline vertical line */}
        <div className="absolute left-6 md:left-8 top-4 bottom-4 w-px bg-gradient-to-b from-electric via-cyan to-violet opacity-25 rounded-full" />

        <div className="space-y-7">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative pl-16 md:pl-20"
            >
              {/* Dot */}
              <div className={`absolute left-[18px] md:left-[26px] top-6 w-4 h-4 rounded-full ${edu.dotColor} ring-4 ring-navy-900 z-10 shadow-lg ${edu.dotGlow}`}>
                <div className={`absolute inset-0 rounded-full ${edu.dotColor} animate-ping opacity-15`} />
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className={`glass-strong rounded-2xl p-6 md:p-8 border ${edu.borderColor} hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
              >
                {/* Background glow */}
                <div className={`absolute top-0 right-0 w-44 h-44 bg-gradient-to-br ${edu.gradient} opacity-[0.04] rounded-full blur-3xl pointer-events-none`} />

                {/* Top row */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl glass-tag ${edu.textColor}`}>
                      <GraduationCap size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white">{edu.institution}</h3>
                      <p className="text-sm text-slate-400">{edu.degree}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {edu.status === 'Currently Pursuing' ? (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold glass-tag text-electric-light border border-electric/30">
                        🟢 {edu.status}
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald/10 border border-emerald/30 text-emerald-light">
                        <CheckCircle size={12} /> {edu.status}
                      </span>
                    )}
                  </div>
                </div>

                {/* Note */}
                <p className="text-slate-500 text-sm italic mb-4">{edu.note}</p>

                {/* Stats row */}
                <div className="flex flex-wrap items-center gap-5 text-sm">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar size={14} className="shrink-0" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={14} className={`${edu.textColor} shrink-0`} />
                    <span className="text-slate-400">CGPA:</span>
                    <span className={`font-bold text-base ${edu.textColor}`}>{edu.cgpa}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
