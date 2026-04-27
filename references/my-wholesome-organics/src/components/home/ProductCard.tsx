import { ShoppingCart, Eye, Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
  };
  key?: number;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Hover Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 transform translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
          <button className="bg-white p-2 rounded-full text-text-body hover:bg-primary hover:text-white transition-colors shadow-sm" aria-label="Add to wishlist">
            <Heart size={18} />
          </button>
          <button className="bg-white p-2 rounded-full text-text-body hover:bg-primary hover:text-white transition-colors shadow-sm" aria-label="Quick view">
            <Eye size={18} />
          </button>
        </div>

        {/* Add to Cart Overlay */}
        <div className="absolute inset-x-4 bottom-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <button className="w-full bg-primary text-white py-2 rounded font-bold text-sm tracking-wider hover:bg-primary-dark transition-colors flex items-center justify-center gap-2">
            <ShoppingCart size={16} /> ADD TO CART
          </button>
        </div>
      </div>

      <div className="p-4 text-center">
        <p className="text-[10px] text-primary uppercase font-bold tracking-widest mb-1">{product.category}</p>
        <h3 className="text-sm font-sans font-semibold text-text-heading mb-2 line-clamp-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-primary font-bold">
          ₹{product.price.toFixed(2)}
        </p>
      </div>
    </motion.div>
  );
}
