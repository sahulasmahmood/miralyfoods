import { WELLNESS_CATEGORIES } from '../../constants';
import { motion } from 'motion/react';

export default function WellnessCategories() {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-text-heading mb-4 inline-block relative font-serif">
            My Wholesome's Wellness
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-accent rounded-full" />
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {WELLNESS_CATEGORIES.map((cat, i) => (
            <motion.a
              key={cat.id}
              href={`/category/${cat.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4 group max-w-[120px]"
            >
              <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border border-gray-200 transition-all duration-300 group-hover:border-primary">
                <img 
                  src={cat.image} 
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="text-[13px] font-bold text-text-heading group-hover:text-primary transition-colors text-center px-1 leading-tight uppercase tracking-tight">
                {cat.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
