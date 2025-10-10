import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const images = ["/banner4.png", "/banner5.png", "/banner6.png"];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to top only once when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gray-100">
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={images[index]}
            className="absolute inset-0 bg-cover bg-center w-full h-full"
            style={{ backgroundImage: `url(${images[index]})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-6xl px-4 sm:px-6 md:px-12 text-center flex flex-col items-center mt-40">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide leading-snug"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Swift. Safe.{" "}
          <span className="text-[#C8252C]">24/7 Ambulance Service</span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-white mb-8 max-w-xl sm:max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Every second counts — our emergency response team ensures quick,
          reliable, and professional care whenever you need it most.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md mx-auto"
        >
        <Link to="/contact" className="w-full sm:w-auto">
  <button className="w-full sm:w-auto px-6 py-3 bg-[#96080B] text-white rounded-lg shadow hover:bg-red-700 transition duration-300">
    Call for Help
  </button>
</Link>
        </motion.div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === index ? "bg-red-600 scale-125" : "bg-red-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
