import { TESTIMONIALS } from '../../constants';
import { Quote, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-primary-dark relative overflow-hidden text-white">
      {/* Decorative BG */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'url("https://mywholesomeorganics.com/wp-content/uploads/2021/10/bg-testi-01.jpg")', backgroundSize: 'cover' }}
      />

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
          <Quote className="text-accent mb-8 opacity-50" size={64} />
          
          <div className="relative min-h-[250px] md:min-h-[200px] w-full">
            {TESTIMONIALS.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ 
                  opacity: current === i ? 1 : 0,
                  scale: current === i ? 1 : 0.95,
                  display: current === i ? 'block' : 'none'
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-x-0"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={18} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl font-serif italic leading-relaxed mb-8 text-gray-100">
                  {testimonial.text}
                </p>
                <h4 className="text-lg font-bold text-accent uppercase tracking-widest">{testimonial.name}</h4>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-3 mt-12">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${current === i ? 'bg-accent w-10' : 'bg-white/30'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
