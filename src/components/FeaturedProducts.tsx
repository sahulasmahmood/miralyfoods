"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingCart, Eye, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useState } from "react";

export default function FeaturedProducts({
  initialProducts,
  title = "Best Selling",
  subtitle,
  viewAllLink = "/shop",
}: {
  initialProducts: any[];
  title?: string;
  subtitle?: string;
  viewAllLink?: string;
}) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [products] = useState<any[]>(initialProducts);

  if (products.length === 0) return null;

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="text-center md:text-left">
            {subtitle && (
              <p className="text-accent font-medium mb-1">{subtitle}</p>
            )}
            <h2 className="text-3xl md:text-4xl text-text-heading relative inline-block">
              {title}
              <div className="absolute -bottom-2 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-24 h-1 bg-primary/20 rounded-full overflow-hidden">
                <div className="w-1/2 h-full bg-primary" />
              </div>
            </h2>
          </div>

          {viewAllLink && (
            <Link
              href={viewAllLink}
              className="text-text-body flex items-center gap-2 hover:text-primary font-semibold transition-colors group"
            >
              View all products{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                <Image
                  src={
                    product.images && product.images[0]
                      ? product.images[0]
                      : "https://via.placeholder.com/400x400?text=No+Image"
                  }
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Discount Badge */}
                {product.mrp && product.mrp > product.price && (
                  <div className="absolute top-3 left-3 bg-primary text-white px-2 py-1 rounded text-[10px] font-bold">
                    {Math.round(
                      ((product.mrp - product.price) / product.mrp) * 100
                    )}
                    % OFF
                  </div>
                )}

                {/* Hover Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 transform translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (isInWishlist(product._id)) {
                        removeFromWishlist(product._id);
                      } else {
                        addToWishlist(product);
                      }
                    }}
                    className={`p-2 rounded-full shadow-sm transition-colors ${
                      isInWishlist(product._id)
                        ? "bg-primary text-white"
                        : "bg-white text-text-body hover:bg-primary hover:text-white"
                    }`}
                    aria-label="Add to wishlist"
                  >
                    <Heart
                      size={18}
                      fill={isInWishlist(product._id) ? "currentColor" : "none"}
                    />
                  </button>
                  <Link
                    href={`/shop/${product.slug}`}
                    className="bg-white p-2 rounded-full text-text-body hover:bg-primary hover:text-white transition-colors shadow-sm"
                    aria-label="Quick view"
                  >
                    <Eye size={18} />
                  </Link>
                </div>

                {/* Add to Cart Overlay */}
                <div className="absolute inset-x-4 bottom-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product, 1);
                    }}
                    className="w-full bg-primary text-white py-2 rounded font-bold text-sm tracking-wider hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={16} /> ADD TO CART
                  </button>
                </div>
              </div>

              <Link href={`/shop/${product.slug}`} className="block p-4 text-center">
                {product.category && (
                  <p className="text-[10px] text-primary uppercase font-bold tracking-widest mb-1">
                    {typeof product.category === "object"
                      ? product.category.name
                      : product.category}
                  </p>
                )}
                <h3 className="text-sm font-sans font-semibold text-text-heading mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-primary font-bold">
                  ₹{product.price}
                  {product.mrp && product.mrp > product.price && (
                    <span className="text-text-body/50 text-xs line-through ml-2 font-normal">
                      ₹{product.mrp}
                    </span>
                  )}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
