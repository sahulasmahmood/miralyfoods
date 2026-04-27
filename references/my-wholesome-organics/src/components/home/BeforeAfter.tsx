import { motion } from 'motion/react';

export default function BeforeAfter() {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{ backgroundImage: 'url("https://mywholesomeorganics.com/wp-content/uploads/2021/12/bg-before-after.jpg")', backgroundSize: 'cover' }}
      />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left flex flex-col gap-6"
          >
            <h2 className="text-3xl lg:text-5xl font-serif text-text-heading leading-tight">
              You don’t need harsh treatments to feel beautiful.
            </h2>
            <p className="text-lg text-text-body leading-relaxed max-w-xl mx-auto lg:mx-0">
              Our customers trust <strong className="text-primary font-bold">My Wholesome</strong> for visible results through gentle, natural care. 
              Because real beauty doesn’t come from chemicals — it comes from consistency, nourishment, and trust.
            </p>

            <div className="flex flex-col gap-6 mt-4">
              {[
                { label: 'Face Care', value: 100 },
                { label: 'Body Care', value: 100 },
                { label: 'Hair Care', value: 100 },
                { label: "Women's Wellness", value: 100 }
              ].map((item, i) => (
                <div key={item.label} className="w-full">
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-sm text-text-heading uppercase tracking-wider">{item.label}</span>
                    <span className="font-bold text-primary text-sm">{item.value}% Natural</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      transition={{ duration: 1, delay: 0.2 + (i * 0.1) }}
                      viewport={{ once: true }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative aspect-[4/3] w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl group border-4 border-white"
          >
            {/* Comparison Logic Placeholder or Overlay */}
            <div className="absolute inset-0 flex">
              <div className="relative flex-1 overflow-hidden group">
                 <img 
                    src="https://mywholesomeorganics.com/wp-content/uploads/2021/11/before.jpg" 
                    alt="Before" 
                    className="h-full w-full object-cover"
                 />
                 <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 text-xs font-bold rounded uppercase tracking-widest backdrop-blur-sm">Before</div>
              </div>
              <div className="relative flex-1 overflow-hidden group">
                 <img 
                    src="https://mywholesomeorganics.com/wp-content/uploads/2021/11/after.jpg" 
                    alt="After" 
                    className="h-full w-full object-cover"
                 />
                 <div className="absolute top-4 right-4 bg-primary/80 text-white px-3 py-1 text-xs font-bold rounded uppercase tracking-widest backdrop-blur-sm">After</div>
              </div>
            </div>
            {/* Divider Line */}
            <div className="absolute inset-y-0 left-1/2 w-1 bg-white/50 backdrop-blur-sm shadow-xl z-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-30 cursor-pointer hover:scale-110 transition-transform">
               <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-75" />
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-150" />
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
