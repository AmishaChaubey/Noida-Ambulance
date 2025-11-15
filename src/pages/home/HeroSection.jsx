import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const images = ["/banner4.png", "/banner5.png", "/banner6.png"];

export default function WelcomeSection() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // Container remains full screen
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${images[index]})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* 
        MAIN FIX:
        1. Removed `flex`, `items-center`, `justify-center` to stop automatic centering.
        2. Added a VERY LARGE top padding: `pt-32` (128px). This is the key to pushing the text down.
        3. Added `pb-20` for bottom spacing.
        4. Added `text-center` for horizontal alignment.
      */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-42 pb-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
            Dignified. Compassionate.
            <span className="text-gray-300 block sm:inline">24/7 Funeral Services</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            In times of loss, we provide respectful and professional funeral services. 
            Our team is available around the clock to support your family with care and dignity.
          </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
  <Link to="/services" className="w-auto">
    <button className="w-auto px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition duration-300 shadow-lg">
      Our Services
    </button>
  </Link>
  <Link to="/contact" className="w-auto">
    <button className="w-auto px-6 py-3 bg-white text-gray-800 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg flex items-center justify-center gap-2">
      <Phone className="w-5 h-5" />
      Contact Us
    </button>
  </Link>
</div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setIndex(idx)}
            className={`h-2 sm:h-3 rounded-full transition-all ${
              idx === index 
                ? "bg-white w-6 sm:w-8" 
                : "bg-white/50 w-2 sm:w-3"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}