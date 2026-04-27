import { ShieldCheck, Heart, Leaf } from 'lucide-react';
import { motion } from 'motion/react';

const FEATURES = [
  {
    icon: ShieldCheck,
    title: '100% Clean & Safe',
    description: 'We never compromise on purity. Every product is crafted using natural ingredients — free from sulfates, parabens, artificial fragrances, and harsh chemicals.'
  },
  {
    icon: Heart,
    title: 'Cruelty-Free, Always',
    description: 'Beauty without harm. None of our products are tested on animals — ever. We believe in gentle care for your skin and the planet.'
  },
  {
    icon: Leaf,
    title: 'Ethically Sourced Ingredients',
    description: 'Rooted in nature, responsibly sourced. We partner with trusted farms and suppliers to ensure every ingredient meets our wellness and sustainability standards.'
  }
];

export default function Features() {
  return (
    <section className="py-20 relative bg-brand-bg/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-text-heading mb-4 inline-block relative font-serif italic">
            Why Shop with My Wholesome?
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary rounded-full" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center gap-6 p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <feature.icon size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-text-heading">{feature.title}</h3>
                <p className="text-sm text-text-body leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
