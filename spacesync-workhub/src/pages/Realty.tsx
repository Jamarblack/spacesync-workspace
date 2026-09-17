import { motion } from 'framer-motion';
import { MapPin, BedDouble, Bath, SquareSquare, FileDown } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import hero from '../assets/spacesync3.jpg';

export default function Realty() {
  const properties = [
    {
      id: 1,
      title: "The Vertex Penthouse",
      location: "Maitama, Abuja",
      price: "450,000,000",
      beds: 4,
      baths: 4.5,
      sqm: 420,
      img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
      tag: "For Sale"
    },
    {
      id: 2,
      title: "Syncron Luxury Duplex",
      location: "Asokoro, Abuja",
      price: "850,000,000",
      beds: 6,
      baths: 7,
      sqm: 850,
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
      tag: "For Sale"
    },
    {
      id: 3,
      title: "Garki Executive Suite",
      location: "Area 11, Garki",
      price: "120,000,000",
      beds: 3,
      baths: 3,
      sqm: 210,
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      tag: "Just Listed"
    }
  ];

  const handleWhatsAppInspection = (propertyTitle: string, price: string) => {
    const text = `Hello SpaceSync Realty, I am interested in ${propertyTitle} listed for ₦${price}. I would like to book a property inspection.`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/2349075444531?text=${encodedText}`, '_blank');
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-brand-navy transition-colors duration-700 selection:bg-brand-gold selection:text-brand-navy">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Realty Hero */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden mx-4 md:mx-8 mt-4 rounded-3xl">
          <div className="absolute inset-0 z-0">
            <img 
              src={hero} 
              alt="Luxury Real Estate" 
              className="w-full h-full object-cover opacity-80 dark:opacity-60 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent dark:from-brand-navy/95 dark:via-brand-navy/60" />
          </div>
          
          <div className="relative z-10 text-center px-6">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-light text-white tracking-tight mb-6"
            >
              Curated <span className="font-semibold text-brand-gold">Living.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg text-slate-300 max-w-2xl mx-auto font-light"
            >
              Exclusive property listings, luxury acquisitions, and premium real estate investments in the heart of Abuja.
            </motion.p>
          </div>
        </section>

        {/* PDF Preview & Download Section */}
        <section id="company-profile" className="py-24 px-6 bg-slate-100 dark:bg-brand-navylight/30 border-y border-slate-200 dark:border-white/5 transition-colors duration-700 mt-16">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-light text-slate-900 dark:text-white mb-4 transition-colors duration-700 leading-tight">
                Explore the <span className="font-semibold text-brand-gold">SpaceSync Vision.</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed transition-colors duration-700">
                Review our comprehensive investment strategy and premium portfolio below, or download a copy for your records.
              </p>
            </div>

            {/* The Embedded PDF Viewer */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full h-[600px] md:h-[800px] bg-white dark:bg-[#01030d] rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden mb-10 relative group"
            >
             
              <iframe 
                src="/SpaceSync-Company-Profile.pdf#view=FitH&toolbar=0" 
                title="SpaceSync Company Profile"
                className="w-full h-full border-none bg-slate-50 dark:bg-[#01030d]"
              />
              
              <div className="absolute inset-0 pointer-events-none border-[6px] border-white/5 dark:border-brand-navy/20 rounded-3xl z-10 mix-blend-overlay" />
            </motion.div>

            {/* The Download Button */}
            <motion.div 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.3 }}
            >
              <a 
                href="/SpaceSync-Company-Profile.pdf" 
                download="SpaceSync-Company-Profile.pdf" 
                className="inline-flex items-center justify-center gap-3.5 px-10 py-5 rounded-full bg-brand-gold text-brand-navy font-bold text-lg hover:bg-brand-goldlight transition-all shadow-md group hover:shadow-[0_0_30px_rgba(134,94,24,0.4)]"
              >
                <FileDown size={22} className="group-hover:-translate-y-1 transition-transform" />
                Company Profile PDF
              </a>
            </motion.div>

          </div>
        </section>

        {/* Property Grid */}
        <section id="listings" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-4xl font-light text-slate-900 dark:text-white mb-4 transition-colors duration-700">
                  Exclusive <span className="font-semibold text-brand-gold">Listings.</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 transition-colors duration-700">
                  Discover properties engineered for luxury and high ROI.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property, idx) => (
                <motion.div 
                  key={property.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group rounded-3xl bg-white dark:bg-[#01030d] border border-slate-200 dark:border-white/10 overflow-hidden hover:border-brand-gold/40 transition-all duration-500 shadow-sm hover:shadow-[0_8px_30px_rgba(134,94,24,0.1)] flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={property.img} 
                      alt={property.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-brand-gold text-brand-navy text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                      {property.tag}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mb-3 transition-colors duration-700">
                      <MapPin size={16} className="text-brand-gold" />
                      {property.location}
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 transition-colors duration-700">
                      {property.title}
                    </h3>
                    
                    {/* Amenities Row */}
                    <div className="flex items-center justify-between py-4 border-y border-slate-100 dark:border-white/5 mb-6">
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm transition-colors duration-700">
                        <BedDouble size={18} className="opacity-50" />
                        <span>{property.beds} Beds</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm transition-colors duration-700">
                        <Bath size={18} className="opacity-50" />
                        <span>{property.baths} Baths</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm transition-colors duration-700">
                        <SquareSquare size={18} className="opacity-50" />
                        <span>{property.sqm} sqm</span>
                      </div>
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                      <div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1 transition-colors duration-700">Asking Price</p>
                        <p className="text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-700">₦{property.price}</p>
                      </div>
                    </div>

                    <button 
                      onClick={() => handleWhatsAppInspection(property.title, property.price)}
                      className="mt-6 w-full py-3 rounded-full border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white font-semibold text-sm hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-all duration-300"
                    >
                      Book Inspection
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}