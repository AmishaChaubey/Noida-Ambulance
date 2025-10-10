import { useState } from "react";
import { Link } from "react-router-dom";

export default function CallToAction() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="relative w-full overflow-hidden bg-gray-900 bg-cover bg-center py-12"
      style={{
        backgroundImage: "url('/2.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/80"></div>

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col-reverse md:flex-row gap-8 items-center">
        {/* Left side - Ambulance GIF */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 object-contain rounded-2xl shadow-2xl"
            src="/cta.gif"
            alt="Ambulance Service"
          />
        </div>

        {/* Right side - Text and buttons */}
        <div className="flex-1 text-white flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <div className="inline-flex items-center px-4 py-1 border border-white/30 rounded-full text-sm font-semibold bg-white/10 backdrop-blur-md">
            <svg
              className="w-4 h-4 mr-2 animate-pulse text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            24/7 EMERGENCY SERVICE
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug drop-shadow-lg">
            When Every Second <br className="hidden md:block" /> Counts
          </h2>

          <p className="text-gray-200 text-base sm:text-lg md:text-lg max-w-full md:max-w-md leading-relaxed">
            Quick, reliable, and professional ambulance service with advanced life support and experienced paramedics — ready when you need us most.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-3 w-full sm:w-auto justify-center md:justify-start">
            <button
              className="group relative w-full sm:w-auto px-6 py-3 bg-red-900 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="relative z-10 flex items-center">
                <svg
                  className={`mr-2 w-5 h-5 transition-transform duration-300 ${
                    isHovered ? "animate-ring" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Emergency: 911
              </span>
            </button>

            <Link to="/services">
              <button className="group px-6 py-3 bg-white/10 border border-white/30 rounded-xl font-semibold text-white transition-all duration-300 hover:bg-white hover:text-red-900 hover:scale-105 flex items-center justify-center w-full sm:w-auto">
                Our Services
                <svg
                  className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes ring {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-10deg);
          }
          50% {
            transform: rotate(10deg);
          }
          75% {
            transform: rotate(-10deg);
          }
        }
        .animate-ring {
          animation: ring 0.6s ease-in-out;
        }
      `}</style>
    </section>
  );
}
