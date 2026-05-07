"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-luxury-black flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <span className="font-serif text-4xl md:text-5xl tracking-[0.3em] uppercase text-luxury-pearl mb-2">
              Ishrat's
            </span>
            <span className="text-xs tracking-[0.5em] uppercase text-luxury-gold font-sans">
              Hair & Skin Studio
            </span>
          </motion.div>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            className="h-[1px] bg-luxury-gold mt-8"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
