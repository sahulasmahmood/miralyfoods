"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BannerRow() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Banner 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden aspect-[16/9] group cursor-pointer"
          >
            <Image
              src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Fresh Products"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center p-8 lg:p-12 text-white">
              <span className="text-xs font-bold uppercase tracking-[10px] mb-4 text-white/80">
                Fresh & Natural
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 font-serif text-accent">
                Discover Our <br />
                Best Sellers
              </h3>
              <Link
                href="/shop"
                className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-md font-bold text-sm w-fit hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
              >
                Shop now <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* Banner 2 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden aspect-[16/9] group cursor-pointer"
          >
            <Image
              src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Special Offers"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 to-transparent flex flex-col justify-center p-8 lg:p-12 text-white">
              <span className="text-xs font-bold uppercase tracking-[10px] mb-4 text-white/80">
                Special Offer
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 font-serif">
                Great Deals <br />
                Await You
              </h3>
              <Link
                href="/shop"
                className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-md font-bold text-sm w-fit hover:bg-accent hover:text-white transition-all transform hover:-translate-y-1"
              >
                Shop now <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
