import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Heart, Users, Clock, Award, Phone } from "lucide-react";
import { Link } from "react-router-dom";


export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const missionRef = useRef(null);
  const [missionVisible, setMissionVisible] = useState(false);

  useEffect(() => setIsVisible(true), []);
  useEffect(() => window.scrollTo(0, 0), []);

  // Intersection Observer for Mission Image
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setMissionVisible(true);
      },
      { threshold: 0.3 }
    );
    if (missionRef.current) observer.observe(missionRef.current);
    return () => missionRef.current && observer.unobserve(missionRef.current);
  }, []);

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "Every patient receives dedicated attention and professional medical care during transport.",
    },
    {
      icon: Clock,
      title: "Rapid Response",
      description:
        "Our fleet is strategically positioned to ensure the fastest possible response times.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Highly trained paramedics and EMTs equipped with state-of-the-art medical equipment.",
    },
    {
      icon: Award,
      title: "Certified Excellence",
      description:
        "Fully licensed and accredited service meeting the highest medical transport standards.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#96080B] to-[#C8252C] text-white mt-25">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-white rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div
          className={`relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-24 transform transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-center">
            {/* Heartbeat Heart */}
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-sm rounded-full mb-4 sm:mb-6">
              <Heart
                className="w-8 h-8 sm:w-10 sm:h-10 text-white animate-heartbeat"
                fill="currentColor"
              />
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 font-serif">
              Saving Lives, One Call at a Time
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-10">
              Providing rapid, professional emergency medical services when
              every second counts.
            </p>
          </div>
        </div>

        {/* SVG fixed to gray background */}
        <div className="absolute bottom-[-1px] left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#F9FAFB"
            />
          </svg>
        </div>
      </div>

      {/* Mission Section */}
      <div
        ref={missionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-20 flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
      >
        {/* Mission Text */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-serif">
            Our <span className="text-red-900">Mission</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-3">
            We are dedicated to providing the highest quality pre-hospital
            emergency care and medical transportation services to our community.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-3">
            With cutting-edge equipment, highly trained medical professionals,
            and a commitment to excellence, we ensure that every patient
            receives the critical care they need during transport.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-700">
            Our goal is simple: to bridge the gap between emergency and hospital
            care, giving patients the best chance at recovery.
          </p>
        </div>

        {/* Mission Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={
            missionVisible ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }
          }
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="lg:w-1/2 w-full flex justify-center"
        >
          <div
            className="relative h-64 sm:h-80 lg:h-96 w-full rounded-2xl overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/amb1.png')" }}
          >
            <div className="absolute bottom-2 left-4 right-4 sm:bottom-4 sm:left-8 sm:right-8">
             <Link to='/contact'> <div className="flex items-center gap-2 sm:gap-3 text-white">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-xs sm:text-sm rounded-full font-bold bg-red-600 p-2 sm:p-3 animate-float">
                  Emergency? Call Us
                </span>
              </div></Link> 
            </div>
          </div>
        </motion.div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 sm:mb-4 font-serif">
              Our Core <span className="text-red-900">Values</span>
            </h2>
            <p className="text-sm sm:text-lg text-gray-600">
              What drives us to deliver exceptional emergency care
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className={`relative bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-300 cursor-pointer ${
                    activeCard === index ? "scale-105" : ""
                  }`}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* Fixed underline (now inside padding area) */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 mx-auto w-[90%] h-1 bg-gradient-to-r from-[#96080B] to-[#C8252C] rounded-full transform transition-all duration-300 origin-center ${
                      activeCard === index ? "scale-x-100" : "scale-x-0"
                    }`}
                  ></div>

                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#96080B] to-[#C8252C] rounded-xl flex items-center justify-center mb-2 sm:mb-4 transform transition-transform duration-300 ${
                        activeCard === index ? "rotate-6 scale-110" : ""
                      }`}
                    >
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {value.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-br from-[#96080B] via-[#B0151C] to-[#C8252C] text-white py-10 sm:py-16 overflow-hidden mb-12">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/3 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-white rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-[500px] sm:h-[500px] bg-white rounded-full blur-3xl animate-pulse opacity-5"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <div className="inline-flex items-center justify-center mb-4 sm:mb-6 bg-white/10 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-xs sm:text-sm font-medium">Available 24/7</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
            Ready to Serve You <span className="text-red-200">24/7</span>
          </h2>

          <p className="text-sm sm:text-xl md:text-2xl mb-8 sm:mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            In an emergency, every second matters. Our dedicated team of professionals is always ready to respond swiftly and effectively.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-10 py-3 sm:py-5 rounded-xl font-bold text-sm sm:text-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              📞 Emergency Call: 911
            </button>
          <Link to="/contact">
  <button className="bg-transparent backdrop-blur-sm border-2 border-white text-white px-6 sm:px-10 py-3 sm:py-5 rounded-xl font-bold text-sm sm:text-lg hover:bg-white/10 transform transition-transform duration-300 hover:scale-105">
    Contact Us
  </button>
</Link>

          </div>

          <p className="mt-6 sm:mt-12 text-white/70 text-xs sm:text-sm">
            For non-emergency inquiries, please use our contact form or call our office during business hours.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float { animation: float 2s ease-in-out infinite; }

        @keyframes heartbeat {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0.5; }
        }
        .animate-heartbeat { animation: heartbeat 1.2s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
