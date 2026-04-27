import { Home, Store, CreditCard, Heart, User } from 'lucide-react';

export default function MobileNav() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-50 px-4 py-2">
      <div className="flex justify-between items-center max-w-md mx-auto">
        <button className="flex flex-col items-center gap-1 text-primary">
          <Home size={20} />
          <span className="text-[10px] uppercase font-bold">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-text-body hover:text-primary transition-colors">
          <Store size={20} />
          <span className="text-[10px] uppercase font-bold">Shop</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-text-body hover:text-primary transition-colors">
          <CreditCard size={20} />
          <span className="text-[10px] uppercase font-bold">Checkout</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-text-body hover:text-primary transition-colors relative">
          <Heart size={20} />
          <span className="absolute top-0 right-1 bg-primary text-white text-[8px] w-3 h-3 rounded-full flex items-center justify-center">0</span>
          <span className="text-[10px] uppercase font-bold">Wishlist</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-text-body hover:text-primary transition-colors">
          <User size={20} />
          <span className="text-[10px] uppercase font-bold">Account</span>
        </button>
      </div>
    </div>
  );
}
