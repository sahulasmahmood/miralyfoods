"use client";

import Link from "next/link";
import Image from "next/image";
import { Send, Instagram, Facebook, Twitter } from "lucide-react";
import { useNavbarData } from "@/context/NavbarDataContext";
import { useState } from "react";

export default function Footer() {
  const { settings } = useNavbarData();
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container-custom">
        {/* Google Map */}
        {settings?.googleMapEmbedUrl && (() => {
          let mapSrc = settings.googleMapEmbedUrl.trim();
          const srcMatch = mapSrc.match(/src=["']([^"']+)["']/);
          if (srcMatch) mapSrc = srcMatch[1];
          if (!mapSrc.startsWith("https://")) return null;
          return (
            <div className="mb-12 rounded-lg overflow-hidden">
              <iframe
                src={mapSrc}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Store Location"
              />
            </div>
          );
        })()}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex flex-col gap-3">
              {settings?.logo ? (
                <div className="w-48 h-16 relative">
                  <Image
                    src={settings.logo}
                    alt={settings.shopName || "Miraly Foods"}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <span className="text-2xl font-serif font-bold text-white">
                  {settings?.shopName || "Miraly Foods"}
                </span>
              )}
              {settings?.logo2 && (
                <div className="w-48 h-16 relative flex-shrink-0">
                  <Image
                    src={settings.logo2}
                    alt="Secondary Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </Link>
            <p className="text-white/90 text-sm leading-relaxed">
              Quality food products crafted with care. We believe in bringing the
              finest ingredients to your table, ensuring freshness and purity in
              every product.
            </p>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-serif font-bold text-white border-b border-white/20 pb-4">
              Contact Us
            </h3>
            <div className="text-sm text-white/90 leading-relaxed flex flex-col gap-2">
              <p>If you have any question, please contact us at:</p>
              {settings?.contactEmail && (
                <a
                  href={`mailto:${settings.contactEmail}`}
                  className="text-white hover:text-yellow-300 transition-colors"
                >
                  {settings.contactEmail}
                </a>
              )}
              {settings?.contactPhone && (
                <a
                  href={`tel:${settings.contactPhone}`}
                  className="text-white hover:text-yellow-300 transition-colors"
                >
                  {settings.contactPhone}
                </a>
              )}
              <p className="mt-4 font-bold text-white uppercase tracking-wider">
                Store Location
              </p>
              <p>{settings?.address || "Salem District, Tamil Nadu, India"}</p>
              <div className="flex gap-4 mt-2">
                {settings?.socialMedia?.instagram && (
                  <a
                    href={settings.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 transition-colors"
                  >
                    <Instagram size={16} />
                  </a>
                )}
                {settings?.socialMedia?.facebook && (
                  <a
                    href={settings.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 transition-colors"
                  >
                    <Facebook size={16} />
                  </a>
                )}
                {settings?.socialMedia?.twitter && (
                  <a
                    href={settings.socialMedia.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 transition-colors"
                  >
                    <Twitter size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-serif font-bold text-white border-b border-white/20 pb-4">
              Quick Links
            </h3>
            <ul className="text-sm text-white/90 flex flex-col gap-3">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-yellow-300 cursor-pointer transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-yellow-300 cursor-pointer transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping-policy"
                  className="hover:text-yellow-300 cursor-pointer transition-colors"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/return-and-refund"
                  className="hover:text-yellow-300 cursor-pointer transition-colors"
                >
                  Return & Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/track"
                  className="hover:text-yellow-300 cursor-pointer transition-colors"
                >
                  Track Order
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-yellow-300 cursor-pointer transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-serif font-bold text-white border-b border-white/20 pb-4">
              Sign Up for Our Newsletter
            </h3>
            <p className="text-sm text-white/90 leading-relaxed">
              Leave your email to get all hot deals & news which benefit you
              most!
            </p>
            <form className="relative mt-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white text-text-body px-4 py-3 pr-12 focus:outline-none text-sm rounded-sm"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-full px-4 text-primary-dark hover:text-yellow-300 transition-colors"
                aria-label="Submit"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/70">
          <p>
            &copy; {new Date().getFullYear()} Miraly Foods. All Rights Reserved.
          </p>
          <p>
            Powered by{" "}
            <span className="text-white">Mirac Mart Unick Private Limited</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
