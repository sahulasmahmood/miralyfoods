import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    image: 'https://mywholesomeorganics.com/wp-content/uploads/2025/07/Protect-Skin-From-UV-Rays.png',
    link: '/product/ultra-nourishing-face-cleansing-milk/'
  },
  {
    id: 2,
    image: 'https://mywholesomeorganics.com/wp-content/uploads/2025/07/Protect-Skin-From-UV-Rays-1.png',
    link: '/product/advanced-skin-brightening-soap/'
  },
  {
    id: 3,
    image: 'https://mywholesomeorganics.com/wp-content/uploads/2025/07/Protect-Skin-From-UV-Rays-2.png',
    link: '/product/exceptional-premium-magic-water-flora-collection/'
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setCurrent((prev) => (prev + 1) % SLIDES.length);

  return (
    <section className="relative h-[400px] md:h-[600px] w-full overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.a
          key={current}
          href={SLIDES[current].link}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 block"
        >
          <img 
            src={SLIDES[current].image} 
            alt="Hero Slide" 
            className="w-full h-full object-cover"
          />
        </motion.a>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button 
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm z-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {SLIDES.map((_, i) => (
          <button 
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === current ? 'bg-primary w-8' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  );
}
