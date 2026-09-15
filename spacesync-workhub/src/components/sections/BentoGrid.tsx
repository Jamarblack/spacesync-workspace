import { motion } from 'framer-motion';

export default function BentoGrid() {
  const cards = [
    {
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
      title: "The 25% Edge",
      desc: "Your environment can boost your productivity by up to 25%. Leverage a space engineered for execution.",
      colSpan: "md:col-span-2 md:row-span-2",
      highlight: true
    },
    {
      img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop",
      title: "Laser Focus",
      desc: "A quiet, well-designed workspace helps you focus better and get more done.",
      colSpan: "md:col-span-2"
    },
    {
      img: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2070&auto=format&fit=crop",
      title: "Networking",
      desc: "Coworking spaces naturally increase your chances of collaboration.",
      colSpan: "md:col-span-1"
    },
    {
      img: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=2070&auto=format&fit=crop",
      title: "Satisfaction",
      desc: "Report significantly higher motivation and job satisfaction.",
      colSpan: "md:col-span-1"
    }
  ];

  return (
    <section id="amenities" className="py-32 px-6 bg-white dark:bg-brand-navy transition-colors duration-700">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-light text-slate-900 dark:text-white mb-4 transition-colors duration-700">
            The SpaceSync <span className="font-semibold text-brand-gold">Advantage.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 transition-colors duration-700">
            Everything you need to execute at the highest level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[220px] gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${card.colSpan} relative overflow-hidden rounded-3xl border transition-all duration-500 flex flex-col justify-end group ${
                card.highlight 
                  ? 'border-brand-gold/40 shadow-[0_8px_30px_rgba(245,158,11,0.1)]' 
                  : 'border-slate-200 dark:border-white/10 hover:border-brand-gold/30'
              }`}
            >
              {/* Cinematic Background Image */}
              <div className="absolute inset-0 z-0 pointer-events-none bg-slate-900 dark:bg-brand-navy">
                <img 
                  src={card.img} 
                  alt="" 
                  className="w-full h-full object-cover opacity-30 dark:opacity-40 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105 mix-blend-luminosity"
                />
                {/* Fixed Gradient Overlay anchoring the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/60 to-transparent dark:from-brand-navy/95 dark:via-brand-navy/60 dark:to-transparent" />
              </div>

              {/* Text Content - Locked with proper padding */}
              <div className="relative z-10 p-8">
                <h3 className={`font-semibold mb-2 ${card.highlight ? 'text-2xl text-brand-gold' : 'text-xl text-white'} transition-colors duration-700`}>
                  {card.title}
                </h3>
                <p className="font-light leading-relaxed text-slate-300 text-sm md:text-base">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}