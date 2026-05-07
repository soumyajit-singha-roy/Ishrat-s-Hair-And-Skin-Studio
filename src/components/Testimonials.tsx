"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Aanya Sharma",
    role: "Bridal Client",
    text: "My bridal makeup was flawless. The team at Ishrat's studio made me feel like royalty on my special day. The luxury experience is truly unmatched.",
  },
  {
    id: 2,
    name: "Riya Sen",
    role: "Regular Client",
    text: "The keratin treatment completely transformed my hair. The ambiance is so relaxing, and the stylists are incredibly knowledgeable. Highly recommended!",
  },
  {
    id: 3,
    name: "Pooja Banerjee",
    role: "Skin Care Client",
    text: "I had their luxury gold facial, and my skin has never glowed this much. It's the perfect place to pamper yourself with premium services.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 bg-luxury-ivory relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Quote className="mx-auto text-luxury-gold/30 mb-6" size={48} />
          <p className="uppercase tracking-[0.3em] text-luxury-gold text-sm font-sans mb-4">
            Client Stories
          </p>
        </div>

        <div className="relative h-[250px] md:h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center text-center"
            >
              <p className="font-serif text-2xl md:text-3xl text-luxury-black leading-relaxed mb-8 max-w-3xl">
                &quot;{testimonials[currentIndex].text}&quot;
              </p>
              <div>
                <p className="font-sans text-sm tracking-widest uppercase text-luxury-black font-semibold">
                  {testimonials[currentIndex].name}
                </p>
                <p className="font-sans text-xs text-luxury-black/60 mt-1">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center items-center gap-8 mt-12">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-white transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-8 bg-luxury-gold" : "bg-luxury-gold/30"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-white transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
