import { MapPin, Phone } from 'lucide-react';
import logo from '../../assets/logo.png';
import instagram from '../../assets/instagram.png'; 



export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-[#01030d] border-t border-slate-200 dark:border-white/5 pt-20 pb-10 transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center justify-center rounded bg-transperent text-white dark:text-brand-navy font-bold text-xl shadow-md">
                 <img src={logo} className="block w-10 h-10 object-contain" />
            
              </div>
              <span className="text-slate-900 dark:text-white font-semibold text-xl tracking-tight transition-colors duration-700">SpaceSync</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm transition-colors duration-700">
              Flexible office spaces designed for focus, productivity, and growth in Abuja. Innovate, Create, Thrive.
            </p>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="text-slate-900 dark:text-white font-medium mb-6 transition-colors duration-700">Contact Us</h4>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 text-sm transition-colors duration-700">
              <p className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-gold shrink-0 mt-1" />
                Suite A44, Shakir Plaza, Area 11,<br />Garki, Abuja, FCT-Nigeria.
              </p>
              <p className="flex items-center gap-3">
                <Phone size={18} className="text-brand-gold shrink-0" />
                0816 729 8962 / 0813 288 7759
              </p>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-slate-900 dark:text-white font-medium mb-6 transition-colors duration-700">Connect</h4>
            <a 
              href="https://instagram.com/spacesync_workhub" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-brand-gold dark:hover:text-brand-gold transition-colors w-fit"
            >
              <img src={instagram} alt="Instagram" className="w-8 h-8" />
              <span>@spacesync_workhub</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 transition-colors duration-700">
          <p>&copy; {new Date().getFullYear()} SpaceSync Workhub. All rights reserved.</p>
          <p>Powered by Darkieson Code Studio</p>
        </div>
      </div>
    </footer>
  );
}