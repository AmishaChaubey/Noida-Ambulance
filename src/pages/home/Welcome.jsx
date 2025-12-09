import { useState, useEffect } from "react";
import { Phone, Heart, Activity, AlertCircle, Clock, Shield, MapPin, Star, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function WelcomeSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Clock, title: "5-10 Min Response", desc: "Quick emergency response" },
    { icon: Shield, title: "Expert Team", desc: "Professional medical staff" },
    { icon: Heart, title: "Compassionate Care", desc: "Dignified handling" }
  ];

  return (
    <div className="relative w-full bg-gradient-to-br from-white via-[#f0fbff] to-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 sm:w-72 sm:h-72 bg-[#0097b2]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-96 sm:h-96 bg-[#0097b2]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(#0097b2 1px, transparent 1px), linear-gradient(90deg, #0097b2 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className={`inline-flex items-center bg-[#e6f7fb] rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}>
            <Activity className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#0097b2]" />
            <span className="text-xs sm:text-sm font-bold text-[#0097b2]">24/7 EMERGENCY SERVICES</span>
          </div>
          
          <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-black mb-4 sm:mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}>
            <span className="text-[#0097b2]">Critical Care</span> When You Need It Most
          </h1>
          
          <p className={`text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto mb-8 sm:mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}>
            Providing rapid ambulance response and dignified transportation services with professional care and compassion during life's most critical moments.
          </p>
        </div>

        {/* Main Content Grid - Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Left - Image Card */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
          }`}>
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl group">
              <img
                src="/wel-img.jpg"
                alt="Emergency Medical Services"
                className="w-full h-[250px] sm:h-[350px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white/90 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1 sm:py-2 flex items-center shadow-xl">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-xs sm:text-sm font-bold text-gray-900">LIVE RESPONSE</span>
              </div>

              {/* Stats Overlay - Responsive */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6">
                  <div className="grid grid-cols-3 divide-x divide-gray-200">
                    <div className="text-center px-2 sm:px-4">
                      <p className="text-xl sm:text-2xl md:text-3xl font-black text-[#0097b2]">5-10</p>
                      <p className="text-xs sm:text-sm text-gray-600 font-medium">MINUTES</p>
                    </div>
                    <div className="text-center px-2 sm:px-4">
                      <p className="text-xl sm:text-2xl md:text-3xl font-black text-[#0097b2]">24/7</p>
                      <p className="text-xs sm:text-sm text-gray-600 font-medium">AVAILABLE</p>
                    </div>
                    <div className="text-center px-2 sm:px-4">
                      <p className="text-xl sm:text-2xl md:text-3xl font-black text-[#0097b2]">5000+</p>
                      <p className="text-xs sm:text-sm text-gray-600 font-medium">FAMILIES</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Features - Responsive Stack */}
          <div className={`space-y-3 sm:space-y-4 lg:space-y-6 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer border-2 ${
                    activeFeature === index ? "border-[#0097b2] bg-gradient-to-r from-[#e6f7fb] to-white" : "border-transparent"
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className="flex items-start">
                    <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mr-3 sm:mr-4 transition-all duration-500 ${
                      activeFeature === index ? "bg-gradient-to-br from-[#0097b2] to-[#007a95]" : "bg-[#e6f7fb]"
                    }`}>
                      <Icon className={`w-5 h-5 sm:w-7 sm:h-7 transition-all duration-500 ${
                        activeFeature === index ? "text-white" : "text-[#0097b2]"
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section - Fully Responsive */}
        <div className={`bg-gradient-to-r from-[#0097b2] to-[#007a95] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white transition-all duration-1000 delay-800 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3">Need Emergency Assistance?</h3>
              <p className="text-sm sm:text-base text-gray-100">Our team is ready to respond immediately to your emergency needs.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full lg:w-auto">
              <a href="tel:+919917162727" className="flex-1 lg:flex-none bg-white text-[#0097b2] px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold hover:shadow-xl transition-all flex items-center justify-center">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="text-sm sm:text-base">Call Now</span>
              </a>
              <Link to="/contact" className="flex-1 lg:flex-none border-2 border-white hover:bg-white hover:text-[#0097b2] text-white font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all flex items-center justify-center">
                <span className="text-sm sm:text-base">Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}