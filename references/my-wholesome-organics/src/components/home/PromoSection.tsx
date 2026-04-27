import { CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function PromoSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Graphic */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{ backgroundImage: 'url("https://mywholesomeorganics.com/wp-content/uploads/2021/12/bg-icon-box-home1.jpg")', backgroundSize: 'cover' }}
      />

      <div className="container-custom relative z-10">
        <div className="bg-brand-bg rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center border border-primary/5">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 p-8 lg:p-16 flex flex-col gap-6"
          >
            <div>
              <span className="text-accent font-bold text-lg inline-block mb-2 uppercase tracking-widest bg-accent/10 px-4 py-1 rounded-full">Limited Offer</span>
              <h2 className="text-4xl lg:text-5xl text-text-heading leading-tight mb-4">
                My Wholesome <br />
                <span className="text-primary italic">Advanced Skin Brightening Soap</span>
              </h2>
              <p className="text-xl font-medium text-primary-dark opacity-80 italic italic">Glow Naturally with Every Wash</p>
            </div>

            <ul className="flex flex-col gap-4">
              {[
                "Brightens & Evens Skin Tone",
                "Smoothens Texture",
                "Reduces Tanning",
                "100% Organic Ingredients"
              ].map((item, i) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 font-semibold text-text-heading"
                >
                  <CheckCircle size={20} className="text-primary fill-primary/10" /> {item}
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
              <button 
                className="btn-primary w-full sm:w-auto text-lg group"
                onClick={() => window.location.href = 'https://mywholesomeorganics.com/product/advanced-skin-brightening-soap/'}
              >
                ORDER & GET 50% OFF <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="text-center sm:text-left">
                <p className="text-xs font-bold text-text-body uppercase opacity-60">Flash Sale Price</p>
                <p className="text-2xl font-bold text-accent">₹119.00 <span className="text-sm line-through opacity-50 font-normal ml-2">₹238.00</span></p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 h-full min-h-[400px] w-full"
          >
            <img 
              src="https://mywholesomeorganics.com/wp-content/uploads/2025/07/IMG20250630192635-1.png" 
              alt="Advanced Skin Brightening Soap" 
              className="w-full h-full object-cover object-center transform scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
