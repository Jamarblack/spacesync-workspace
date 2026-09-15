import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Button from '../ui/Button';

export default function Pricing() {
  const [isSynchronized, setIsSynchronized] = useState(false);

  const plans = [
    {
      name: "Daily",
      desc: "Perfect for short meetings or remote work.",
      syncPrice: "3,999",
      newPrice: "4,500",
      features: ["High-speed Internet", "24/7 Power Supply", "Ergonomic Workspace"]
    },
    {
      name: "Weekly",
      desc: "Your dedicated workspace for consistency.",
      syncPrice: "19,999",
      newPrice: "22,500",
      features: ["All Daily Features", "Professional Environment", "Complimentary Coffee"],
      highlight: true
    },
    {
      name: "Monthly",
      desc: "For long-term success and networking.",
      syncPrice: "99,999",
      newPrice: "112,500",
      features: ["All Weekly Features", "Dedicated Desk", "Increased Productivity"]
    }
  ];

  const handleWhatsAppCheckout = (planName: string, price: string) => {
    const memberType = isSynchronized ? "Synchronized Member" : "New Community Member";
    const text = `Hello SpaceSync, I would like to book a ${planName} pass at ₦${price}. My status is: ${memberType}.`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/2348167298962?text=${encodedText}`, '_blank');
  };

  return (
    <section id="pricing" className="py-32 bg-slate-50 dark:bg-brand-navylight px-6 border-t border-slate-200 dark:border-white/5 transition-colors duration-700">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 dark:text-white mb-8 transition-colors duration-700">
            Simple, transparent <span className="font-semibold text-brand-gold">rates.</span>
          </h2>
          
          <div className="inline-flex items-center rounded-full bg-white dark:bg-[#01030d] border border-slate-200 dark:border-white/10 p-1 transition-colors duration-700 shadow-sm">
            <button
              onClick={() => setIsSynchronized(false)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                !isSynchronized ? 'bg-brand-gold text-white dark:text-brand-navy shadow-md' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              New Member
            </button>
            <button
              onClick={() => setIsSynchronized(true)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                isSynchronized ? 'bg-brand-gold text-white dark:text-brand-navy shadow-md' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Synchronized Member
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-3xl p-8 flex flex-col transition-colors duration-700 ${
                plan.highlight 
                  ? 'bg-white dark:bg-[#01030d] border border-brand-gold/40 shadow-[0_0_30px_rgba(245,158,11,0.1)]' 
                  : 'bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10'
              }`}
            >
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-700">{plan.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 min-h-[40px] transition-colors duration-700">{plan.desc}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-slate-900 dark:text-white transition-colors duration-700">
                  ₦{isSynchronized ? plan.syncPrice : plan.newPrice}
                </span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 transition-colors duration-700">
                    <Check size={18} className="text-brand-gold shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.highlight ? 'primary' : 'outline'}
                onClick={() => handleWhatsAppCheckout(plan.name, isSynchronized ? plan.syncPrice : plan.newPrice)}
                className="w-full"
              >
                Book a Desk
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}