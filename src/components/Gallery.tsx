"use client";

import { motion } from "framer-motion";

const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?q=80&w=800&auto=format&fit=crop",
    title: "Bridal Elegance",
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-2",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1521590832167-7bfc17484d8d?q=80&w=800&auto=format&fit=crop",
    title: "Airbrush Makeup",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop",
    title: "Hair Transformation",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
    title: "Editorial Beauty",
    colSpan: "col-span-1",
    rowSpan: "row-span-2",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
    title: "Luxury Skin Care",
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-1",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-luxury-black text-luxury-pearl relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="space-y-4">
            <p className="uppercase tracking-[0.4em] text-luxury-gold text-xs font-sans">
              Portfolio
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl max-w-lg">
              The Art of <br /> <span className="italic">Transformation</span>
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 border border-luxury-gold/30 text-luxury-gold hover:bg-luxury-gold hover:text-white transition-all duration-500 tracking-[0.2em] text-[10px] uppercase font-sans"
          >
            Follow on Instagram
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative overflow-hidden group cursor-pointer ${item.colSpan} ${item.rowSpan}`}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700 z-10"></div>
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-10 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 z-20">
                <p className="font-serif text-3xl text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                  {item.title}
                </p>
                <div className="h-[1px] w-0 group-hover:w-16 bg-luxury-gold mt-6 transition-all duration-700 delay-100"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
