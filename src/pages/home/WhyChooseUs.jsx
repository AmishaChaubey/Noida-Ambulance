import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users, Award, Heart, Shield, Truck, Phone, Activity, MapPin, Zap, CheckCircle, Star } from 'lucide-react';

const WhyChooseUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rapid Response",
      description: "Our ambulances reach you within 5-10 minutes, ensuring critical care when every second counts.",
      stats: "5-10 min",
      bgIcon: "bg-gradient-to-br from-[#0097b2] to-[#007a95]"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Medical Team",
      description: "Highly trained paramedics and medical staff providing professional care during emergencies.",
      stats: "50+ Staff",
      bgIcon: "bg-gradient-to-br from-[#0097b2] to-[#007a95]"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Availability",
      description: "Round-the-clock emergency services ready to assist you whenever need arises.",
      stats: "24/7",
      bgIcon: "bg-gradient-to-br from-[#0097b2] to-[#007a95]"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Equipment",
      description: "State-of-the-art medical equipment and life-saving technology in all our ambulances.",
      stats: "Modern Tech",
      bgIcon: "bg-gradient-to-br from-[#0097b2] to-[#007a95]"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Wide Coverage",
      description: "Serving multiple cities with a network of strategically located ambulance stations.",
      stats: "Multiple Cities",
      bgIcon: "bg-gradient-to-br from-[#0097b2] to-[#007a95]"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Compassionate Care",
      description: "Providing not just medical assistance but emotional support during critical situations.",
      stats: "100% Care",
      bgIcon: "bg-gradient-to-br from-[#0097b2] to-[#007a95]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-white via-[#f0fbff] to-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0097b2 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-5 w-32 h-32 sm:w-72 sm:h-72 bg-[#0097b2]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-5 w-40 h-40 sm:w-96 sm:h-96 bg-[#0097b2]/10 rounded-full blur-3xl"></div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-8 sm:mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-[#e6f7fb] rounded-full px-4 sm:px-6 py-2 mb-4">
            <Activity className="w-4 h-4 mr-2 text-[#0097b2]" />
            <span className="text-xs sm:text-sm font-bold text-[#0097b2]">WHY CHOOSE US</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#0097b2] mb-4">
            Excellence in <span className="text-gray-900">Emergency Care</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
            We provide rapid ambulance services and dignified deadbody transportation with a commitment to professional care and respect.
          </p>
        </motion.div>

        {/* Service Tabs - Responsive */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 overflow-x-auto pb-2">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === index 
                  ? 'bg-gradient-to-r from-[#0097b2] to-[#007a95] text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-[#e6f7fb] border border-gray-200'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Featured Service - Responsive */}
        <motion.div
          className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 mb-6 sm:mb-8 border border-[#e6f7fb]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          key={activeTab}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row items-center">
            <div className={`w-12 h-12 sm:w-16 sm:h-16 ${services[activeTab].bgIcon} rounded-xl sm:rounded-2xl flex items-center justify-center text-white mr-4 sm:mr-6 shadow-lg`}>
              {services[activeTab].icon}
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2">{services[activeTab].title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3">{services[activeTab].description}</p>
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <div className="bg-[#e6f7fb] rounded-full px-3 sm:px-4 py-1 sm:py-2 text-[#0097b2] font-bold text-xs sm:text-sm">
                  {services[activeTab].stats}
                </div>
                <div className="flex items-center text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Service Cards Grid - Responsive */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 cursor-pointer relative overflow-hidden border ${
                index === activeTab ? 'border-[#0097b2] shadow-xl' : 'border-gray-100'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setActiveTab(index)}
            >
              {/* Background Decoration */}
              <div
                className={`absolute top-0 right-0 w-24 h-24 rounded-full ${service.bgIcon} opacity-5 blur-2xl transform translate-x-1/2 -translate-y-1/2`}
              ></div>

              {/* Icon and Stats */}
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div
                  className={`w-10 h-10 sm:w-14 sm:h-14 ${service.bgIcon} rounded-lg sm:rounded-xl flex items-center justify-center text-white shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
                <div className="bg-[#e6f7fb] rounded-full px-2 sm:px-3 py-1 text-xs font-bold text-[#0097b2]">
                  {service.stats}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-base sm:text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-[#0097b2] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover Effect Line */}
              <div className="h-0.5 w-0 bg-gradient-to-r from-[#0097b2] to-[#007a95] mx-auto mt-3 sm:mt-4 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators - Responsive */}
        <motion.div
          className="bg-gradient-to-r from-[#0097b2] to-[#007a95] rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">Trusted by Thousands</h3>
              <p className="text-sm sm:text-base text-gray-100">Join 5000+ families who've relied on our services</p>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-black">5000+</div>
                <div className="text-xs sm:text-sm text-gray-200">Families</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-black">15+</div>
                <div className="text-xs sm:text-sm text-gray-200">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-black">24/7</div>
                <div className="text-xs sm:text-sm text-gray-200">Available</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;