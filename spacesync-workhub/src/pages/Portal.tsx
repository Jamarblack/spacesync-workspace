import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';
import workhub from '../assets/spacesync-workspace3.jpg';
import realty from '../assets/spacesync3.jpg';

export default function Portal() {
  const navigate = useNavigate();

  return (
    <main className="h-screen w-full flex flex-col md:flex-row overflow-hidden bg-brand-navy">
      
      {/* Absolute Center Logo Marker */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none hidden md:flex flex-col items-center gap-2">
        <img src={logo} alt="SpaceSync Logo" className="h-27 w-30" />
      </div>

      {/* LEFT SIDE: WORKHUB */}
      <div 
        onClick={() => navigate('/workhub')}
        className="group relative flex-1 h-full cursor-pointer overflow-hidden transition-[flex] duration-700 ease-in-out hover:flex-[1.15]"
      >
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={workhub} 
            alt="Workhub" 
            className="w-full h-full object-cover opacity-60 md:opacity-40 group-hover:opacity-60 transition-all duration-700 group-hover:scale-105 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent group-hover:from-brand-navy/90 transition-all duration-700" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <img src={logo} alt="SpaceSync Logo" className="text-brand-gold w-15 h-12 mb-6 md:opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Space<span className='font-light'>Sync</span> <br/><span className="font-semibold text-brand-gold">Workhub</span>
            </h2>
            <p className="text-slate-400 max-w-sm mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform translate-y-4 group-hover:translate-y-0">
              Premium coworking spaces engineered for focus, productivity, and professional growth.
            </p>
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-white uppercase tracking-wider group-hover:text-brand-gold transition-colors">
              Enter Workspace <span className="transform group-hover:translate-x-2 transition-transform duration-500">< ArrowRight size={40} /></span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* RIGHT SIDE: REALTY */}
      <div 
        onClick={() => navigate('/realty')}
        className="group relative flex-1 h-full cursor-pointer overflow-hidden transition-[flex] duration-700 ease-in-out hover:flex-[1.15]"
      >
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={realty} 
            alt="Realty" 
            className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-700 group-hover:scale-105 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent group-hover:from-brand-navy/90 transition-all duration-700" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <img src={logo} alt="SpaceSync Logo" className="text-brand-gold w-15 h-13 mb-6 md:opacity-50 group-hover:opacity-100 font-extrabold transition-opacity duration-500" />
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Space<span className="font-light">Sync</span> <br/><span className="font-semibold text-brand-gold">Realty</span>
            </h2>
            <p className="text-slate-400 max-w-sm mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform translate-y-4 group-hover:translate-y-0">
              Exclusive property listings, luxury acquisitions, and premium real estate investments.
            </p>
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-white uppercase tracking-wider group-hover:text-brand-gold transition-colors">
              Explore Properties <span className="transform group-hover:translate-x-2 transition-transform duration-500">< ArrowRight size={40} /></span>
            </div>
          </motion.div>
        </div>
      </div>

    </main>
  );
}