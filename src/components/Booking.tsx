"use client";

import { motion } from "framer-motion";

export default function Booking() {
  return (
    <section id="booking" className="relative py-32 bg-luxury-black text-luxury-pearl overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1521590832167-7bfc17484d8d?q=80&w=1600&auto=format&fit=crop"
          alt="Salon Background"
          className="w-full h-full object-cover filter brightness-[0.2]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text Content */}
        <div>
          <p className="uppercase tracking-[0.3em] text-luxury-gold text-sm font-sans mb-6">
            Reserve Your Time
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
            Book a Luxury Experience
          </h2>
          <p className="text-white/70 text-lg font-sans mb-12 max-w-md">
            Schedule an appointment with our master stylists and experts. Step into a world of bespoke beauty.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-luxury-gold/50 flex items-center justify-center text-luxury-gold">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/50 mb-1">Call Us</p>
                <p className="font-sans">+91 9831196890</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-luxury-gold/50 flex items-center justify-center text-luxury-gold">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/50 mb-1">WhatsApp</p>
                <a href="https://wa.me/919831196890" target="_blank" rel="noopener noreferrer" className="font-sans text-luxury-gold hover:underline">
                  Message Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Glassmorphism Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-12"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/70">First Name</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/30 px-0 py-3 text-white focus:outline-none focus:border-luxury-gold transition-colors font-sans"
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/70">Phone</label>
                <input
                  type="tel"
                  className="w-full bg-transparent border-b border-white/30 px-0 py-3 text-white focus:outline-none focus:border-luxury-gold transition-colors font-sans"
                  placeholder="Your number"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/70">Service Required</label>
              <select className="w-full bg-transparent border-b border-white/30 px-0 py-3 text-white focus:outline-none focus:border-luxury-gold transition-colors font-sans appearance-none">
                <option value="" className="text-luxury-black">Select a service</option>
                <option value="hair" className="text-luxury-black">Hair Styling & Color</option>
                <option value="bridal" className="text-luxury-black">Bridal Makeup</option>
                <option value="skin" className="text-luxury-black">Luxury Skin Care</option>
                <option value="other" className="text-luxury-black">Other Services</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/70">Preferred Date</label>
              <input
                type="date"
                className="w-full bg-transparent border-b border-white/30 px-0 py-3 text-white focus:outline-none focus:border-luxury-gold transition-colors font-sans [color-scheme:dark]"
              />
            </div>

            <button
              type="button"
              className="w-full mt-8 py-4 bg-luxury-gold text-white tracking-widest uppercase text-sm hover:bg-white hover:text-luxury-black transition-colors duration-500"
            >
              Request Appointment
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
