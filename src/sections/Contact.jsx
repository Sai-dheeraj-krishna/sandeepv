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
    gradient: 'from-electric to-cyan',
    textColor: 'text-electric-light',
    borderColor: 'border-electric/20',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/sandeepvangara',
    href: 'https://github.com/sandeepvangara',
    gradient: 'from-cyan to-violet',
    textColor: 'text-cyan-light',
    borderColor: 'border-cyan/20',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9392855422',
    href: 'tel:+919392855422',
    gradient: 'from-violet to-pink',
    textColor: 'text-violet-light',
    borderColor: 'border-violet/20',
  },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <SectionHeading
        tag="Get in Touch"
        title="Contact Me"
        subtitle="Let's build innovative software and AI applications together."
      />

      <div className="max-w-4xl mx-auto flex flex-col gap-6">

        {/* CTA headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-2xl p-8 border border-white/[0.08] text-center"
        >
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Open to{' '}
            <span className="text-electric-light font-semibold">internships</span>,{' '}
            <span className="text-cyan-light font-semibold">freelance projects</span>, and{' '}
            <span className="text-violet-light font-semibold">collaborations</span>.
            Let's create something amazing together!
          </p>
        </motion.div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {contactInfo.map((info, i) => (
            <motion.a
              key={i}
              href={info.href}
              target={info.label === 'GitHub' ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`flex flex-col items-center text-center gap-3 p-6 md:p-8 rounded-2xl glass-strong border ${info.borderColor} group hover:shadow-lg transition-all duration-300`}
            >
              <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${info.gradient} shadow-md mb-2`}>
                <info.icon size={28} className="text-white" />
              </div>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">{info.label}</p>
              <p className="text-base font-semibold text-slate-300 group-hover:text-white transition-colors break-all">
                {info.value}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
