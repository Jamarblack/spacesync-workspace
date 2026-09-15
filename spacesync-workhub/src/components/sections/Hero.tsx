import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import Button from "../ui/Button"; // We will use your existing Button for now

const slides = [
  {
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    eyebrow: "SpaceSync Workhub",
    title: "Work Your Way,",
    titleAccent: "Everyday.",
    sub: "Flexible office spaces designed for focus, productivity, and growth.",
  },
  {
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop",
    eyebrow: "Premium Environment",
    title: "Uninterrupted",
    titleAccent: "Focus",
    sub: "Ergonomic comfort, 24/7 power supply, and high-speed connectivity.",
  },
  {
    img: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2070&auto=format&fit=crop",
    eyebrow: "The Community",
    title: "Innovate, Create,",
    titleAccent: "Thrive.",
    sub: "A synchronized ecosystem to scale your ideas and network organically.",
  },
];

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, []);

  const s = slides[idx];

  return (
    <section id="home" className="relative h-screen min-h-[680px] w-full overflow-hidden bg-slate-50 dark:bg-brand-navy transition-colors duration-700">
      
      {/* Cinematic Image Slider with Ken Burns Effect */}
      <AnimatePresence mode="sync">
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.15 }}
            transition={{ duration: 10, ease: "linear" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${s.img})` }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Adaptive Vignette Overlays (Changes based on Light/Dark mode) */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white dark:from-brand-navy/90 dark:via-brand-navy/60 dark:to-brand-navy transition-colors duration-700" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-transparent to-transparent dark:from-brand-navy/95 transition-colors duration-700" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center pt-20">
        <AnimatePresence mode="wait">
          <motion.div key={idx} className="max-w-2xl">
            
            {/* Eyebrow */}
            <motion.p
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-slate-600 dark:text-slate-400 text-xs tracking-[0.4em] uppercase mb-6 font-semibold"
            >
               {s.eyebrow}
            </motion.p>
            
            {/* Massive Typography */}
            <motion.h1
              initial={{ y: 40, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-slate-900 dark:text-white leading-[1.05] tracking-tight"
            >
              {s.title}
              <br />
              <span className="font-semibold text-brand-gold italic">
                {s.titleAccent}
              </span>
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p
              initial={{ y: 30, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="mt-8 text-slate-700 dark:text-slate-300 text-lg max-w-xl leading-relaxed"
            >
              {s.sub}
            </motion.p>
            
            {/* Buttons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.7 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}>
                Book Your Desk
              </Button>
              <Button variant="outline" className="dark:text-white dark:border-white/40 border-slate-900 text-slate-900 hover:bg-slate-900/5 dark:hover:bg-white/10" onClick={() => document.getElementById("philosophy")?.scrollIntoView({ behavior: "smooth" })}>
                Company Profile
              </Button>
            </motion.div>

          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-3">
          {slides.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setIdx(i)} 
              aria-label={`Slide ${i + 1}`}
              className={`h-[2px] transition-all duration-500 ${
                i === idx 
                  ? "w-12 bg-slate-900 dark:bg-white" 
                  : "w-6 bg-slate-400/40 dark:bg-white/30"
              }`} 
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 dark:text-slate-400 flex flex-col items-center gap-2"
        >
          {/* <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" /> */}
        </motion.div>

      </div>
    </section>
  );
}