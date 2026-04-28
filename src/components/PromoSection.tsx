"use client";

import { CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function PromoSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="bg-brand-bg rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch border border-primary/5">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 p-8 lg:p-12 flex flex-col gap-6 justify-center"
          >
            <div>
              <span className="text-accent font-bold text-lg inline-block mb-2 uppercase tracking-widest bg-accent/10 px-4 py-1 rounded-full">
                Limited Offer
              </span>
              <h2 className="text-4xl lg:text-5xl text-text-heading leading-tight mb-4 font-serif">
                Miraly Foods <br />
                <span className="text-primary italic">Special Combo Pack</span>
              </h2>
              <p className="text-xl font-medium text-primary-dark opacity-80 italic">
                Quality & Freshness in Every Bite
              </p>
            </div>

            <ul className="flex flex-col gap-4">
              {[
                "Premium Quality Ingredients",
                "No Artificial Preservatives",
                "Farm Fresh & Natural",
                "Best Value for Money",
              ].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 font-semibold text-text-heading"
                >
                  <CheckCircle
                    size={20}
                    className="text-primary fill-primary/10"
                  />{" "}
                  {item}
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
              <Link
                href="/shop"
                className="btn-primary w-full sm:w-auto text-lg group"
              >
                SHOP NOW{" "}
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 min-h-[350px] lg:min-h-[450px] w-full relative"
          >
            <Image
              src="https://6dfa0433ff.imgdist.com/pub/bfra/9ghkfuy7/2ww/akl/0i5/turmeric.jpg"
              alt="Miraly Foods Turmeric"
              fill
              className="object-contain object-center p-4"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
