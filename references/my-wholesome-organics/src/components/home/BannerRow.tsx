import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function BannerRow() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Banner 1 */}
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative rounded-2xl overflow-hidden aspect-[16/9] group cursor-pointer"
          >
            <img 
              src="https://mywholesomeorganics.com/wp-content/uploads/2021/10/banner-home1-01.png" 
              alt="Clean Beauty" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center p-8 lg:p-12 text-white">
              <span className="text-xs font-bold uppercase tracking-[10px] mb-4 text-white/80">Clean Beauty</span>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-accent">Exfoliate, Tone <br />& Hydrate</h3>
              <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-md font-bold text-sm w-fit hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                Shop now <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>

          {/* Banner 2 */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative rounded-2xl overflow-hidden aspect-[16/9] group cursor-pointer"
          >
            <img 
              src="https://mywholesomeorganics.com/wp-content/uploads/2025/07/Untitled-design-2.png" 
              alt="Sale" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 to-transparent flex flex-col justify-center p-8 lg:p-12 text-white">
              <span className="text-xs font-bold uppercase tracking-[10px] mb-4 text-white/80">Special Offer</span>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">25% off <br />Everything</h3>
              <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-md font-bold text-sm w-fit hover:bg-accent hover:text-white transition-all transform hover:-translate-y-1">
                Shop now <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
