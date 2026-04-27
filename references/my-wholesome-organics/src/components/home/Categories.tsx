import { CATEGORIES } from '../../constants';
import { motion } from 'motion/react';

export default function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-text-heading mb-4 inline-block relative italic">
            Shop By Category
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-accent rounded-full" />
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {CATEGORIES.map((cat, i) => (
            <motion.a
              key={cat.id}
              href={`/category/${cat.id}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4 group"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary transition-all duration-300 shadow-md transform group-hover:scale-105">
                <img 
                  src={cat.image} 
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm font-semibold text-text-heading group-hover:text-primary transition-colors text-center px-2">
                {cat.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
