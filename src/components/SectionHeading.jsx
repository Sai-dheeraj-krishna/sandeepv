import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle, tag }) {
  return (
    <div className="text-center mb-14">
      {tag && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-3"
        >
          <span className="section-tag">{tag}</span>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-400 text-base md:text-lg max-w-xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
      {/* Animated gradient underline */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        className="mx-auto mt-5 h-[3px] w-20 rounded-full"
        style={{ background: 'linear-gradient(90deg, #3B82F6, #22D3EE, #A78BFA)', transformOrigin: 'left' }}
      />
    </div>
  );
}
