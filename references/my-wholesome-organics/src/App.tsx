import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MobileNav from './components/layout/MobileNav';
import Hero from './components/home/Hero';
import Categories from './components/home/Categories';
import ProductGrid from './components/home/ProductGrid';
import WellnessCategories from './components/home/WellnessCategories';
import PromoSection from './components/home/PromoSection';
import Features from './components/home/Features';
import BannerRow from './components/home/BannerRow';
import Testimonials from './components/home/Testimonials';
import BeforeAfter from './components/home/BeforeAfter';
import { BEST_SELLERS, MENS_CARE } from './constants';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen pb-16 lg:pb-0">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <Categories />
        
        <ProductGrid 
          title="Best Selling" 
          products={BEST_SELLERS} 
          viewAllLink="/shop"
        />

        <WellnessCategories />

        <PromoSection />

        <ProductGrid 
          title="Men's Care" 
          subtitle="Grooming Essentials"
          products={MENS_CARE} 
          viewAllLink="/product-category/customised-gentlemens-care"
        />

        <Features />

        <BannerRow />

        <BeforeAfter />

        <Testimonials />
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
}
