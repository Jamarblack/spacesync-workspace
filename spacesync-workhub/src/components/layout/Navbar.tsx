import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = saved === 'dark' || (!saved && prefersDark);

    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 pointer-events-auto ${
        scrolled 
          ? 'bg-white/90 dark:bg-brand-navy/90 backdrop-blur-md border-b border-slate-200 dark:border-white/10 py-3 shadow-sm' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="flex items-center gap-2 cursor-pointer focus:outline-none"
        >
          <span className="flex  items-center justify-center rounded bg-transperent text-brand-navy font-bold text-lg">
            <img src={logo} className="block w-15 h-15 object-contain" />
            
          </span>
          <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">
            Space<span className=" text-md font-semibold">Sync</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollTo('philosophy')} 
            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-gold transition-colors cursor-pointer"
          >
            About
          </button>
          <button 
            onClick={() => scrollTo('amenities')} 
            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-gold transition-colors cursor-pointer"
          >
            Amenities
          </button>
          <button 
            onClick={() => scrollTo('pricing')} 
            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-gold transition-colors cursor-pointer"
          >
            Rates
          </button>

          <div className="flex items-center gap-4 pl-4 border-l border-slate-300 dark:border-slate-800">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
              title="Toggle Theme"
              type="button"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button 
              onClick={() => scrollTo('pricing')}
              className="px-5 py-2 rounded-full bg-brand-gold text-brand-navy font-semibold text-sm hover:bg-brand-goldlight transition-all shadow-sm cursor-pointer"
            >
              Book a Desk
            </button>
          </div>
        </nav>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-3">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300"
            type="button"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-900 dark:text-white"
            type="button"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-brand-navy border-b border-slate-200 dark:border-white/10 px-6 py-6 flex flex-col gap-4 overflow-hidden"
          >
            <button 
              onClick={() => scrollTo('philosophy')} 
              className="text-left py-2 font-medium text-slate-800 dark:text-slate-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollTo('amenities')} 
              className="text-left py-2 font-medium text-slate-800 dark:text-slate-200"
            >
              Amenities
            </button>
            <button 
              onClick={() => scrollTo('pricing')} 
              className="text-left py-2 font-medium text-slate-800 dark:text-slate-200"
            >
              Rates
            </button>
            <button 
              onClick={() => scrollTo('pricing')}
              className="w-full py-3 mt-2 rounded-full bg-brand-gold text-brand-navy font-semibold text-center"
            >
              Book a Desk
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}