import { motion } from 'framer-motion';
import coffee1 from '../../assets/spacesync coffee full.jpg';
import coffee2 from '../../assets/spacesync-coffee-desk.jpg';
import hero1 from '../../assets/spacesync-workspace3.jpg';
import hero2 from '../../assets/spacesync-workspace1.jpg';


export default function BentoGrid() {
  const cards = [
    {
      img: hero1,
      title: "The 25% Edge",
      desc: "Your environment can boost your productivity by up to 25%. Leverage a space engineered for execution.",
      colSpan: "md:col-span-2 md:row-span-2",
      highlight: false
    },
    {
      img: coffee2,
      title: "Laser Focus",
      desc: "A quiet, well-designed workspace helps you focus better and get more done.",
      colSpan: "md:col-span-2"
    },
    {
      img: hero2,
      title: "Networking",
      desc: "Coworking spaces naturally increase your chances of collaboration.",
      colSpan: "md:col-span-1"
    },
    {
      img: coffee1,
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