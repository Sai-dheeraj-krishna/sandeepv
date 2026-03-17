import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import { Mail, Phone, Github } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sandeepvangara.2005@gmail.com',
    href: 'mailto:sandeepvangara.2005@gmail.com',
    color: 'text-electric-light',
    gradient: 'from-electric to-cyan',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9392855422',
    href: 'tel:+919392855422',
    color: 'text-cyan-light',
    gradient: 'from-cyan to-purple',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/sandeepvangara',
    href: 'https://github.com/sandeepvangara',
    color: 'text-purple-light',
    gradient: 'from-purple to-pink',
  },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <SectionHeading title="Contact" subtitle="Let's work together" />

      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-slate-400 leading-relaxed mb-10"
        >
          Feel free to reach out for collaborations, project ideas, or just a friendly hello.
          I'm always open to discussing new opportunities.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {contactInfo.map((info, i) => (
            <motion.a
              key={i}
              href={info.href}
              target={info.label === 'GitHub' ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl glass-strong gradient-border group hover:bg-white/[0.08] hover:glow transition-all duration-300"
            >
              <div className={`p-3 rounded-xl bg-gradient-to-br ${info.gradient}`}>
                <info.icon size={24} className="text-white" />
              </div>
              <p className="text-xs glass-text text-slate-500 uppercase tracking-wider">{info.label}</p>
              <p className="text-sm font-medium glass-text text-slate-300 group-hover:text-white transition-colors break-all">
                {info.value}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
