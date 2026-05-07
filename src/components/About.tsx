"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-40 bg-luxury-pearl overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        
        {/* Left: Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
          className="relative group"
        >
          <div className="aspect-[4/5] overflow-hidden bg-luxury-ivory shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bfc17484d8d?q=80&w=1000&auto=format&fit=crop"
              alt="Premium Service"
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
            />
          </div>
          {/* Decorative Border */}
          <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-luxury-gold/30 -z-10" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-luxury-gold/30 -z-10" />
        </motion.div>

        {/* Right: Content */}
        <div className="space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-4"
          >
            <span className="text-luxury-gold text-xs uppercase tracking-[0.5em] font-sans block">
              Established Excellence
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-luxury-black leading-tight">
              Where Artistry Meets <br /> <span className="italic">Pure Luxury</span>
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-luxury-black/60 text-lg font-sans leading-relaxed max-w-xl"
          >
            Ishrat&apos;s Hair And Skin Studio is more than a salon; it&apos;s a sanctuary for those who appreciate the finer things in beauty. We believe that true transformation begins with a personalized touch and ends with an unforgettable reflection.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="grid grid-cols-2 gap-12 pt-6"
          >
            <div className="space-y-2">
              <span className="font-serif text-5xl text-luxury-gold block">15+</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-luxury-black/40 font-sans">Years in Industry</span>
            </div>
            <div className="space-y-2">
              <span className="font-serif text-5xl text-luxury-gold block">10k+</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-luxury-black/40 font-sans">Styles Crafted</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="pt-8"
          >
            <a href="#booking" className="inline-flex items-center gap-4 group">
              <span className="text-xs uppercase tracking-[0.3em] text-luxury-black font-sans group-hover:text-luxury-gold transition-colors">Learn Our Story</span>
              <div className="w-12 h-[1px] bg-luxury-gold group-hover:w-20 transition-all duration-500" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
