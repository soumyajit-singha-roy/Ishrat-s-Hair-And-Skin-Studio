"use client";

import { motion } from "framer-motion";
import { Scissors, Palette, Sparkles, SprayCan as Spray, Droplets, HeartHandshake } from "lucide-react";

const services = [
  {
    title: "Artistic Hair Styling",
    price: "From ₹1,200",
    icon: Scissors,
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Couture Hair Color",
    price: "From ₹4,500",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Luxury Skin Rituals",
    price: "From ₹2,500",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Bridal Artistry",
    price: "Bespoke",
    icon: HeartHandshake,
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-40 bg-luxury-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="space-y-4">
            <span className="text-luxury-gold text-xs uppercase tracking-[0.5em] font-sans block">
              Curated Services
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-luxury-black max-w-lg">
              Elite Beauty <br /> Masterpieces
            </h2>
          </div>
          <p className="text-luxury-black/50 text-sm font-sans max-w-xs leading-relaxed">
            Every treatment is a signature experience, blending global techniques with personalized care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="group relative overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-700"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="p-10 flex flex-col justify-between h-[300px]">
                  <div>
                    <service.icon className="text-luxury-gold mb-8" size={32} strokeWidth={1} />
                    <h3 className="font-serif text-3xl text-luxury-black mb-4">
                      {service.title}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <span className="text-xs uppercase tracking-widest text-luxury-black/40 font-sans block">
                      {service.price}
                    </span>
                    <a href="#booking" className="inline-block text-[10px] uppercase tracking-[0.3em] text-luxury-gold hover:text-luxury-black transition-colors font-sans font-bold">
                      Book Now &rarr;
                    </a>
                  </div>
                </div>
                <div className="relative h-[300px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-luxury-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
