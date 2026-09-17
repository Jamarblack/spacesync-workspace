import { motion } from 'framer-motion';

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-32 bg-slate-100 dark:bg-brand-navylight relative border-y border-slate-200 dark:border-white/5 transition-colors duration-700">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-light text-slate-900 dark:text-white mb-8 transition-colors duration-700"
        >
          Innovate <span className="text-brand-gold mx-2">|</span> Create <span className="text-brand-gold mx-2">|</span> Thrive
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed transition-colors duration-700"
        >
          Our synchronized workspace leads to better productivity, smoother collaboration, and faster business growth. We help you stay connected, organized, and efficient because every great idea deserves the perfect space to grow.
        </motion.p>
      </div>
    </section>
  );
}