"use client";

import { motion } from "framer-motion";
import { Camera, Link as LinkIcon } from "lucide-react";

const stylists = [
  {
    name: "Ishrat",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop",
    expertise: "Master of Bridal Artistry",
  },
  {
    name: "Elena",
    role: "Senior Hair Designer",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop",
    expertise: "Color Correction Expert",
  },
  {
    name: "Sophia",
    role: "Skin Therapy Lead",
    image: "https://images.unsplash.com/photo-1554036125-ff4b4de217d0?q=80&w=800&auto=format&fit=crop",
    expertise: "Dermal Transformation",
  },
];

export default function Stylists() {
  return (
    <section id="stylists" className="py-40 bg-luxury-pearl">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-32 space-y-4">
          <span className="text-luxury-gold text-xs uppercase tracking-[0.5em] font-sans block">
            The Visionaries
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-luxury-black">
            Meet Our Artists
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {stylists.map((stylist, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="group text-center"
            >
              <div className="relative mb-10 aspect-[4/5] overflow-hidden bg-luxury-ivory shadow-lg group-hover:shadow-2xl transition-all duration-1000">
                <img
                  src={stylist.image}
                  alt={stylist.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-luxury-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </div>
              
              <div className="space-y-3">
                <h3 className="font-serif text-3xl text-luxury-black">
                  {stylist.name}
                </h3>
                <p className="text-luxury-gold font-sans text-[10px] tracking-[0.4em] uppercase font-bold">
                  {stylist.role}
                </p>
                <div className="w-8 h-[1px] bg-luxury-gold/30 mx-auto" />
                <p className="text-luxury-black/40 font-sans text-xs italic">
                  {stylist.expertise}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
