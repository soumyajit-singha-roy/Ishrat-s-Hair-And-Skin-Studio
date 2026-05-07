"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-luxury-black">
      {/* Background Image - Clean & Premium */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Salon"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/60 via-transparent to-luxury-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="uppercase tracking-[0.4em] text-luxury-gold text-xs md:text-sm mb-8 font-sans"
        >
          Welcome to Ishrat's
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-10 text-luxury-pearl"
        >
          Luxury Hair, Skin <br /> & Beauty Experience
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-luxury-pearl/70 text-lg md:text-xl font-sans max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          Transform your style with premium beauty artistry, luxury skincare, and
          celebrity-level salon experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <a
            href="#booking"
            className="group relative px-10 py-4 bg-luxury-gold text-white tracking-[0.2em] uppercase text-sm font-sans transition-all duration-500 hover:tracking-[0.3em] shadow-lg shadow-luxury-gold/20"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="px-10 py-4 border border-luxury-pearl/30 text-luxury-pearl hover:border-luxury-gold hover:text-luxury-gold transition-all duration-500 tracking-[0.2em] uppercase text-sm font-sans backdrop-blur-sm"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] text-luxury-gold/60">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-luxury-gold to-transparent" />
      </motion.div>
    </section>
  );
}
