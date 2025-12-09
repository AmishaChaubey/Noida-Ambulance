import { useState, useEffect } from "react";
import { Phone, Clock, Shield, Heart, Activity, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ImprovedHeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.9; }
        }

        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }

        @media (max-width: 640px) {
          .hide-mobile-shapes {
            display: none !important;
          }
        }
      `}</style>

      <section className="relative w-full 
        min-h-[70vh]       /* Mobile */
        sm:min-h-[80vh]    /* Tablets */
        lg:min-h-[90vh]    /* Desktop */
        mt-16 sm:mt-20 overflow-hidden bg-gray-900">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-[1500ms] ease-in-out scale-105"
          style={{ backgroundImage: `url("ban/1.png")` }}
        />

        {/* Floating Shapes */}
        <div className="absolute inset-0 overflow-hidden hide-mobile-shapes">
          <div className="absolute -top-40 -right-40 w-72 h-72 bg-[#0097b2]/30 rounded-full mix-blend-multiply blur-2xl opacity-30 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-72 h-72 bg-[#007a95]/30 rounded-full mix-blend-multiply blur-2xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#0097b2]/20 rounded-full mix-blend-multiply blur-2xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/80"></div>

        {/* Main Content - Left Aligned */}
        <div className="relative z-10 flex items-center 
          min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] 
          px-4 sm:px-6 lg:px-10">

          <div className="max-w-2xl lg:max-w-3xl animate-fade-in-up w-full">
          

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-black mb-5 sm:mb-6 leading-tight text-white font-serif">
              Swift Response, 
              <br />
             
                Compassionate Care
             
            </h1>

            {/* Sub text */}
            <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-8 sm:mb-10 max-w-2xl">
              Fast, reliable and trusted emergency medical services — available 24/7 for your safety and peace of mind.
            </p>


            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link to="/services" className="w-full sm:w-auto">
                <button
                  className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-[#0097b2] to-[#007a95] text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Our Services
                </button>
              </Link>

              <Link to="/contact" className="w-full sm:w-auto">
                <button
                  className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-white text-[#0097b2] font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>

   

     

      </section>
    </>
  );
}