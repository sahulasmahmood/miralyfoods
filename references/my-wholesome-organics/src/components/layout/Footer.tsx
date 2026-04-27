import { Send, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <img 
              src="https://mywholesomeorganics.com/wp-content/uploads/2021/10/Untitled-design-57.png" 
              alt="My Wholesome Organics" 
              className="w-32 invert brightness-0"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Organic Beauty & Essentials - Safe for all Skin types. We believe in the power of nature to restore and nourish your true beauty.
            </p>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-serif font-bold text-white border-b border-white/10 pb-4">Contact Us</h3>
            <div className="text-sm text-gray-300 leading-relaxed flex flex-col gap-2">
              <p>If you have any question, please contact us at:</p>
              <a href="mailto:support@mywholesomeorganics.com" className="text-white hover:text-accent transition-colors">
                support@mywholesomeorganics.com
              </a>
              <p className="mt-4 font-bold text-white uppercase tracking-wider">Store Location</p>
              <p>India</p>
              <div className="flex gap-4 mt-2">
                 <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                    <Instagram size={16} />
                 </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-serif font-bold text-white border-b border-white/10 pb-4">Quick Links</h3>
            <ul className="text-sm text-gray-300 flex flex-col gap-3">
              <li className="hover:text-accent cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Terms & Conditions</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Shipping Policy</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Return & Refund Policy</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-serif font-bold text-white border-b border-white/10 pb-4">Sign Up for Our Newsletter</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Leave your email to get all hot deals & news which benefit you most!
            </p>
            <form className="relative mt-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white text-text-body px-4 py-3 pr-12 focus:outline-none text-sm rounded-sm"
              />
              <button 
                type="submit" 
                className="absolute right-0 top-0 h-full px-4 text-primary-dark hover:text-accent transition-colors"
                aria-label="Submit"
              >
                <Send size={18} />
              </button>
            </form>
            <div className="mt-4">
              <img 
                src="https://mywholesomeorganics.com/wp-content/uploads/2021/10/payment.png" 
                alt="Payment Methods" 
                className="h-6"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2025 My Wholesome Organics. All Rights Reserved.</p>
          <p>
            Designed & Developed By <span className="text-white">Tamilnadu Digital</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
