import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import { Mail, Phone, Github, Send, MessageSquare, User, AtSign } from 'lucide-react';

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
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // mailto fallback
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:sandeepvangara.2005@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        tag="Get in Touch"
        title="Contact Me"
        subtitle="Let's build innovative software and AI applications together."
      />

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">

        {/* ── Left: Contact Form ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3"
        >
          <div className="glass-strong rounded-2xl p-7 md:p-9 border border-white/[0.08]">
            <div className="flex items-center gap-3 mb-7">
              <div className="p-2.5 rounded-xl glass-tag text-electric-light">
                <MessageSquare size={22} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Send a Message</h3>
                <p className="text-xs text-slate-500">I'll get back to you within 24 hours</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <User size={12} /> Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Vangara Sandeep"
                  className="glass-input w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <AtSign size={12} /> Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="glass-input w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <MessageSquare size={12} /> Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Hi Sandeep, I'd love to discuss..."
                  className="glass-input w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center !py-3.5 !rounded-xl !text-sm"
              >
                {sent ? '✅ Message Sent!' : <><Send size={16} /> Send Message</>}
              </button>
            </form>
          </div>
        </motion.div>

        {/* ── Right: Contact Info ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-2 flex flex-col gap-4"
        >
          {/* CTA headline */}
          <div className="glass-strong rounded-2xl p-6 border border-white/[0.08] mb-1">
            <p className="text-slate-300 text-sm leading-relaxed">
              Open to{' '}
              <span className="text-electric-light font-semibold">internships</span>,{' '}
              <span className="text-cyan-light font-semibold">freelance projects</span>, and{' '}
              <span className="text-violet-light font-semibold">collaborations</span>.
              Let's create something amazing together!
            </p>
          </div>

          {contactInfo.map((info, i) => (
            <motion.a
              key={i}
              href={info.href}
              target={info.label === 'GitHub' ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 + i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`flex items-center gap-4 p-5 rounded-2xl glass-strong border ${info.borderColor} group hover:shadow-lg transition-all duration-300`}
            >
              <div className={`p-2.5 rounded-xl bg-gradient-to-br ${info.gradient} shadow-md`}>
                <info.icon size={20} className="text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">{info.label}</p>
                <p className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors truncate">
                  {info.value}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
