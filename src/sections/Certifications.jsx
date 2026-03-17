import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import { Award } from 'lucide-react';

const certifications = [
  {
    title: 'Machine Learning Foundations',
    issuer: 'Coursera',
    icon: '🤖',
    gradient: 'from-electric to-cyan',
    textColor: 'text-electric-light',
    borderColor: 'border-electric/20',
    accentBg: 'from-electric/15 to-electric/5',
  },
  {
    title: 'Data Mining',
    issuer: 'Coursera',
    icon: '📊',
    gradient: 'from-cyan to-violet',
    textColor: 'text-cyan-light',
    borderColor: 'border-cyan/20',
    accentBg: 'from-cyan/15 to-cyan/5',
  },
  {
    title: 'Diploma in Computer Applications',
    issuer: 'Minerva Institute of Computer Education',
    icon: '💻',
    gradient: 'from-violet to-pink',
    textColor: 'text-violet-light',
    borderColor: 'border-violet/20',
    accentBg: 'from-violet/15 to-violet/5',
  },
  {
    title: 'Diploma in Software Management',
    issuer: 'Minerva Institute of Computer Education',
    icon: '⚙️',
    gradient: 'from-pink to-emerald',
    textColor: 'text-pink-light',
    borderColor: 'border-pink/20',
    accentBg: 'from-pink/15 to-pink/5',
  },
  {
    title: 'C Programming Language',
    issuer: 'GCS Institute of Computer Technologies',
    icon: '⚡',
    gradient: 'from-emerald to-electric',
    textColor: 'text-emerald-light',
    borderColor: 'border-emerald/20',
    accentBg: 'from-emerald/15 to-emerald/5',
  },
];

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <SectionHeading
        tag="Credentials"
        title="Certifications"
        subtitle="Professional credentials and completed learning programs."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.09 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className={`group glass-strong rounded-2xl overflow-hidden border ${cert.borderColor} transition-all duration-300 hover:shadow-xl`}
          >
            {/* Gradient top bar */}
            <div className={`h-1.5 bg-gradient-to-r ${cert.gradient}`} />

            <div className={`p-6 bg-gradient-to-br ${cert.accentBg} rounded-b-2xl`}>
              {/* Icon + cert info */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center text-xl shrink-0 shadow-md`}>
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white leading-snug group-hover:text-gradient transition-all duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{cert.issuer}</p>
                </div>
              </div>

              {/* Issued badge */}
              <div className="flex items-center gap-1.5">
                <Award size={13} className={cert.textColor} />
                <span className={`text-xs font-medium ${cert.textColor}`}>Certified</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
