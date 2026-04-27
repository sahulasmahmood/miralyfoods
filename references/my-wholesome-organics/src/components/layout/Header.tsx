import { Search, Heart, ShoppingBag, User, Instagram, Facebook, Clock, Mail, MapPin, ChevronDown, Menu, Phone } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full relative z-50">
      {/* Top Bar */}
      <div className="bg-primary-dark text-white py-2 px-4 text-xs">
        <div className="container-custom flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Instagram size={14} />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Facebook size={14} />
            </a>
            <span className="hidden md:flex items-center gap-2 border-l border-white/20 pl-4">
              <Clock size={14} /> Mon-Fri: 10:00 - 18:00
            </span>
          </div>
          <div className="flex gap-6 items-center">
            <span className="hidden lg:flex items-center gap-2">
              <MapPin size={14} /> 25 West 21th Street, Miami FL, USA
            </span>
            <a href="mailto:info@mywholesomeorganics.com" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
              <Mail size={14} /> info@mywholesomeorganics.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-primary text-white py-4 border-b border-white/10">
        <div className="container-custom flex flex-wrap items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={24} />
            </button>
            <a href="/" className="flex-shrink-0">
              <img 
                src="https://mywholesomeorganics.com/wp-content/uploads/2021/10/Untitled-design-57.png" 
                alt="My Wholesome Organics" 
                className="h-10 md:h-12 w-auto invert brightness-0"
              />
            </a>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4">
            <div className="relative w-full flex items-center bg-white rounded overflow-hidden">
               <div className="px-4 py-2 text-text-body border-r border-gray-200 hidden lg:flex items-center gap-2 bg-gray-50 text-sm whitespace-nowrap cursor-pointer">
                All Categories <ChevronDown size={14} />
              </div>
              <input 
                type="text" 
                placeholder="I'm looking for..." 
                className="w-full px-4 py-2 text-text-body focus:outline-none"
              />
              <button className="bg-primary hover:bg-primary-dark p-2 transition-colors">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Icons & CTA */}
          <div className="flex items-center gap-4 lg:gap-8">
            <div className="hidden lg:flex items-center gap-3">
              <div className="bg-white/10 p-2 rounded-full">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-white/70 leading-none">Call us free</p>
                <p className="text-sm font-bold">+91 97894 11476</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 md:gap-5">
              <button className="hover:text-accent transition-colors"><User size={24} /></button>
              <button className="hover:text-accent transition-colors relative">
                <Heart size={24} />
                <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
              </button>
              <button className="hover:text-accent transition-colors relative">
                <ShoppingBag size={24} />
                <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-primary text-white hidden lg:block">
        <div className="container-custom">
          <ul className="flex items-center justify-center gap-8 py-3 text-sm font-medium">
            <li className="hover:text-accent transition-colors cursor-pointer border-b-2 border-transparent hover:border-accent py-1">HOME</li>
            <li className="hover:text-accent transition-colors cursor-pointer border-b-2 border-transparent hover:border-accent py-1 uppercase underline decoration-accent underline-offset-8">ALL PRODUCTS</li>
            <li className="group relative py-1">
              <span className="hover:text-accent transition-colors cursor-pointer flex items-center gap-1 uppercase">
                Organic Beauty & Essentials <ChevronDown size={14} />
              </span>
            </li>
            <li className="group relative py-1">
              <span className="hover:text-accent transition-colors cursor-pointer flex items-center gap-1 uppercase">
                Women's Health & Wellness <ChevronDown size={14} />
              </span>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Search - only on mobile */}
      <div className="md:hidden bg-primary px-4 pb-4">
        <div className="flex items-center bg-white rounded overflow-hidden">
          <input 
            type="text" 
            placeholder="I'm looking for..." 
            className="w-full px-4 py-2 text-text-body focus:outline-none text-sm"
          />
          <button className="bg-primary hover:bg-primary-dark p-2">
            <Search size={18} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              className="fixed inset-y-0 left-0 w-4/5 max-w-xs bg-white z-50 p-6 flex flex-col gap-6"
            >
              <div className="flex justify-between items-center">
                <img 
                  src="https://mywholesomeorganics.com/wp-content/uploads/2021/10/Untitled-design-57.png" 
                  alt="Logo" 
                  className="h-8"
                />
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-text-body">
                  <Menu size={24} className="rotate-90" />
                </button>
              </div>
              <ul className="flex flex-col gap-4 text-text-heading font-medium">
                <li className="pb-2 border-b border-gray-100">Home</li>
                <li className="pb-2 border-b border-gray-100 text-primary">All Products</li>
                <li className="pb-2 border-b border-gray-100 flex justify-between items-center">
                  Organic Beauty & Essentials <ChevronDown size={16} />
                </li>
                <li className="pb-2 border-b border-gray-100 flex justify-between items-center">
                   Women's Health & Wellness <ChevronDown size={16} />
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
