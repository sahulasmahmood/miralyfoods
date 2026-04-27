"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Search,
  ShoppingBag,
  User,
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Heart,
  MapPin,
  Clock,
} from "lucide-react";
import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import CartDrawer from "./CartDrawer";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useNavbarData } from "@/context/NavbarDataContext";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const { data: session } = authClient.useSession();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { settings, categories } = useNavbarData();
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname?.startsWith(path);
  };

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  return (
    <>
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <header className="fixed w-full z-50 transition-all duration-300">
        {/* Top Bar */}
        {!isScrolled && (
          <div className="bg-primary-dark text-white py-2 px-4 text-xs">
            <div className="container-custom flex justify-between items-center">
              <div className="flex gap-4 items-center">
                {settings?.socialMedia?.instagram && (
                  <a
                    href={settings.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors"
                  >
                    <Instagram size={14} />
                  </a>
                )}
                {settings?.socialMedia?.facebook && (
                  <a
                    href={settings.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors"
                  >
                    <Facebook size={14} />
                  </a>
                )}
                {settings?.socialMedia?.twitter && (
                  <a
                    href={settings.socialMedia.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors"
                  >
                    <Twitter size={14} />
                  </a>
                )}
                <span className="hidden md:flex items-center gap-2 border-l border-white/20 pl-4">
                  <Clock size={14} /> Mon-Sat: 9:00 AM - 7:00 PM
                </span>
              </div>
              <div className="flex gap-6 items-center">
                {settings?.address && (
                  <span className="hidden lg:flex items-center gap-2">
                    <MapPin size={14} /> {settings.address}
                  </span>
                )}
                {settings?.contactEmail && (
                  <a
                    href={`mailto:${settings.contactEmail}`}
                    className="flex items-center gap-2 hover:text-gray-300 transition-colors"
                  >
                    <Mail size={14} /> {settings.contactEmail}
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Main Header */}
        <div
          className={`bg-primary text-white border-b border-white/10 transition-all duration-300 ${
            isScrolled ? "py-2 shadow-xl backdrop-blur-md bg-primary/95" : "py-4"
          }`}
        >
          <div className="container-custom flex flex-wrap items-center justify-between gap-4">
            {/* Logo + Mobile Menu */}
            <div className="flex items-center gap-4">
              <button
                className="lg:hidden p-1"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu size={24} />
              </button>
              <Link href="/" className="flex-shrink-0">
                {settings?.logo ? (
                  <div className="h-10 md:h-12 w-32 md:w-40 relative">
                    <Image
                      src={settings.logo}
                      alt={settings.shopName || "Miraly Foods"}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                ) : (
                  <span className="text-xl md:text-2xl font-serif font-bold text-white">
                    {settings?.shopName || "Miraly Foods"}
                  </span>
                )}
              </Link>
            </div>

            {/* Search Bar */}
            <form
              onSubmit={handleSearch}
              className="hidden md:flex flex-1 max-w-xl mx-4"
            >
              <div className="relative w-full flex items-center bg-white rounded overflow-hidden">
                <div className="px-4 py-2 text-text-body border-r border-gray-200 hidden lg:flex items-center gap-2 bg-gray-50 text-sm whitespace-nowrap cursor-pointer">
                  All Categories <ChevronDown size={14} />
                </div>
                <input
                  type="text"
                  placeholder="I'm looking for..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 text-text-body focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark p-2 transition-colors text-white"
                >
                  <Search size={20} />
                </button>
              </div>
            </form>

            {/* Icons & CTA */}
            <div className="flex items-center gap-4 lg:gap-8">
              {settings?.contactPhone && (
                <div className="hidden lg:flex items-center gap-3">
                  <div className="bg-white/10 p-2 rounded-full">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-white/70 leading-none">
                      Call us
                    </p>
                    <p className="text-sm font-bold">{settings.contactPhone}</p>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3 md:gap-5">
                {session ? (
                  <Link
                    href={
                      session.user.role === "admin"
                        ? "/admin/dashboard"
                        : session.user.role === "customer"
                          ? "/profile"
                          : "/login"
                    }
                    className="hover:text-accent transition-colors"
                  >
                    <User size={24} />
                  </Link>
                ) : (
                  <Link
                    href="/login"
                    className="hover:text-accent transition-colors"
                  >
                    <User size={24} />
                  </Link>
                )}
                <Link
                  href="/wishlist"
                  className="hover:text-accent transition-colors relative"
                >
                  <Heart size={24} />
                  {mounted && (
                    <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                      {wishlistCount}
                    </span>
                  )}
                </Link>
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="hover:text-accent transition-colors relative"
                >
                  <ShoppingBag size={24} />
                  {mounted && (
                    <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="bg-primary text-white hidden lg:block">
          <div className="container-custom">
            <ul className="flex items-center justify-center gap-8 py-3 text-sm font-medium">
              <li>
                <Link
                  href="/"
                  className={`hover:text-accent transition-colors cursor-pointer border-b-2 py-1 uppercase ${
                    isActive("/") && pathname === "/"
                      ? "border-accent text-accent"
                      : "border-transparent hover:border-accent"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className={`hover:text-accent transition-colors cursor-pointer border-b-2 py-1 uppercase ${
                    isActive("/shop")
                      ? "border-accent text-accent"
                      : "border-transparent hover:border-accent"
                  }`}
                >
                  All Products
                </Link>
              </li>
              {categories.slice(0, 3).map((cat) => (
                <li key={cat._id} className="group relative py-1">
                  <Link
                    href={`/shop?category=${encodeURIComponent(cat.name)}`}
                    className="hover:text-accent transition-colors cursor-pointer flex items-center gap-1 uppercase"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/about"
                  className={`hover:text-accent transition-colors cursor-pointer border-b-2 py-1 uppercase ${
                    isActive("/about")
                      ? "border-accent text-accent"
                      : "border-transparent hover:border-accent"
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`hover:text-accent transition-colors cursor-pointer border-b-2 py-1 uppercase ${
                    isActive("/contact")
                      ? "border-accent text-accent"
                      : "border-transparent hover:border-accent"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Mobile Search */}
        <div className="md:hidden bg-primary px-4 pb-4">
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-white rounded overflow-hidden"
          >
            <input
              type="text"
              placeholder="I'm looking for..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 text-text-body focus:outline-none text-sm"
            />
            <button
              type="submit"
              className="bg-primary hover:bg-primary-dark p-2 text-white"
            >
              <Search size={18} />
            </button>
          </form>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className={isScrolled ? "h-[64px]" : "h-[180px] md:h-[200px] lg:h-[220px]"} />

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black z-[60]"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-4/5 max-w-xs bg-white z-[70] p-6 flex flex-col gap-6"
            >
              <div className="flex justify-between items-center">
                {settings?.logo ? (
                  <div className="h-8 w-28 relative">
                    <Image
                      src={settings.logo}
                      alt={settings.shopName || "Miraly Foods"}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <span className="text-lg font-serif font-bold text-text-heading">
                    {settings?.shopName || "Miraly Foods"}
                  </span>
                )}
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-text-body"
                >
                  <X size={24} />
                </button>
              </div>

              <ul className="flex flex-col gap-4 text-text-heading font-medium">
                <li className="pb-2 border-b border-gray-100">
                  <Link href="/" onClick={() => setIsMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li className="pb-2 border-b border-gray-100 text-primary">
                  <Link href="/shop" onClick={() => setIsMenuOpen(false)}>
                    All Products
                  </Link>
                </li>
                {categories.map((cat) => (
                  <li
                    key={cat._id}
                    className="pb-2 border-b border-gray-100 flex justify-between items-center"
                  >
                    <Link
                      href={`/shop?category=${encodeURIComponent(cat.name)}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
                <li className="pb-2 border-b border-gray-100">
                  <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                    About Us
                  </Link>
                </li>
                <li className="pb-2 border-b border-gray-100">
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    Contact Us
                  </Link>
                </li>
              </ul>

              <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-3">
                <Link
                  href={
                    session
                      ? session.user.role === "admin"
                        ? "/admin/dashboard"
                        : "/profile"
                      : "/login"
                  }
                  className="flex items-center gap-3 text-text-heading font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User size={20} />{" "}
                  {session
                    ? session.user.role === "admin"
                      ? "Admin Dashboard"
                      : "My Profile"
                    : "Login / Register"}
                </Link>
                <Link
                  href="/wishlist"
                  className="flex items-center gap-3 text-text-heading font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Heart size={20} /> Wishlist
                  {mounted && wishlistCount > 0 && (
                    <span className="bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      {wishlistCount}
                    </span>
                  )}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
