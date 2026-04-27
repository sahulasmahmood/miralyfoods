import ProductCard from './ProductCard';
import { ArrowRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductGridProps {
  title: string;
  subtitle?: string;
  products: Product[];
  viewAllLink?: string;
}

export default function ProductGrid({ title, subtitle, products, viewAllLink }: ProductGridProps) {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="text-center md:text-left">
            {subtitle && <p className="text-accent font-medium mb-1">{subtitle}</p>}
            <h2 className="text-3xl md:text-4xl text-text-heading relative inline-block">
              {title}
              <div className="absolute -bottom-2 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-24 h-1 bg-primary/20 rounded-full overflow-hidden">
                <div className="w-1/2 h-full bg-primary" />
              </div>
            </h2>
          </div>
          
          {viewAllLink && (
            <a 
              href={viewAllLink} 
              className="text-text-body flex items-center gap-2 hover:text-primary font-semibold transition-colors group"
            >
              View all products <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          )}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
