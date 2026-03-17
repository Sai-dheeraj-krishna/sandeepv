import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Diploma in Computer Applications',
    issuer: 'Minerva Institute Of Computer Education',
    color: 'from-electric to-cyan',
  },
  {
    title: 'C Programming Language',
    issuer: 'GCS Institute Of Computer Technologies',
    color: 'from-cyan to-purple',
  },
  {
    title: 'Diploma in Software Management',
    issuer: 'Minerva Institute Of Computer Education',
    color: 'from-purple to-pink',
  },
  {
    title: 'Machine Learning Foundations',
    issuer: 'Coursera',
    color: 'from-pink to-emerald',
  },
  {
    title: 'Data Mining',
    issuer: 'Coursera',
    color: 'from-emerald to-electric',
  },
];

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <SectionHeading title="Certifications" subtitle="Professional credentials and achievements" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="glass-strong rounded-2xl overflow-hidden group cursor-pointer"
          >
            {/* Top bar */}
            <div className={`h-1 bg-gradient-to-r ${cert.color}`} />

            <div className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${cert.color} shrink-0`}>
                  <Award size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white glass-text group-hover:text-gradient transition-all duration-300 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-slate-500 glass-text mt-1">{cert.issuer}</p>
                </div>
              </div>


            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
