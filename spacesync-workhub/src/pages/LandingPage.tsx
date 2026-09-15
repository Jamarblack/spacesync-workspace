import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import Philosophy from '../components/sections/Philosophy';
import BentoGrid from '../components/sections/BentoGrid';
import Pricing from '../components/sections/Pricing';
import Footer from '../components/layout/Footer';

export default function Landing() {
  return (
    <main className="min-h-screen bg-brand-navy font-sans text-slate-50 selection:bg-brand-gold selection:text-brand-navy">
      <Navbar />
      <Hero />
      <Philosophy />
      
      <div id="amenities">
        <BentoGrid />
      </div>
      
      <Pricing />
      <Footer/>
    </main>
  );
}