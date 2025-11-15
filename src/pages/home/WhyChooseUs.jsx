import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users, Award, Heart, Shield, Truck } from 'lucide-react';

const WhyChooseUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Dignified Handling",
      description: "We treat every individual with utmost respect and dignity, ensuring proper care during difficult times.",
      bgIcon: "bg-gradient-to-br from-[#4A5568] to-[#2D3748]"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Professional Staff",
      description: "Trained and compassionate professionals who understand the importance of respectful service.",
      bgIcon: "bg-gradient-to-br from-[#4A5568] to-[#2D3748]"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Availability",
      description: "Round-the-clock service to assist you whenever the need arises, without delay.",
      bgIcon: "bg-gradient-to-br from-[#4A5568] to-[#2D3748]"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Proper Equipment",
      description: "Modern freezer boxes and transportation equipment maintained to the highest standards.",
      bgIcon: "bg-gradient-to-br from-[#4A5568] to-[#2D3748]"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Respectful Service",
      description: "Committed to providing services with compassion, sensitivity, and cultural awareness.",
      bgIcon: "bg-gradient-to-br from-[#4A5568] to-[#2D3748]"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Wide Coverage",
      description: "Serving multiple communities with a fleet of specialized vehicles ready to assist.",
      bgIcon: "bg-gradient-to-br from-[#4A5568] to-[#2D3748]"
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
    <div className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Top Decorative Element */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-[#4A5568]/10 blur-3xl"></div>

      {/* Main Container with max-w-7xl */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-12 sm:mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-3 sm:px-4 py-1 bg-[#4A5568]/10 text-[#2D3748] rounded-full text-xs sm:text-sm font-semibold mb-4">
            WHY CHOOSE US
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Compassionate <span className="text-gray-700">Funeral Services</span> When You Need Support
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl sm:max-w-2xl mx-auto leading-relaxed">
            We provide dignified funeral and mortuary services with a commitment to respect and care. From freezer boxes to transportation and ceremony assistance, we ensure everything is handled with sensitivity during difficult times.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer relative overflow-hidden border border-gray-100"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Decoration */}
              <div
                className={`absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 rounded-full ${service.bgIcon} opacity-5 blur-2xl transform translate-x-1/2 -translate-y-1/2`}
              ></div>

              {/* Icon */}
              <div
                className={`w-14 sm:w-16 h-14 sm:h-16 ${service.bgIcon} rounded-xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10`}
              >
                {service.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#4A5568] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center justify-center px-4 sm:px-6 py-3 bg-white rounded-full shadow-md border border-gray-200 gap-3 sm:gap-4">
            <div className="flex -space-x-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#4A5568] flex items-center justify-center text-white text-xs sm:text-sm font-bold">1</div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#2D3748] flex items-center justify-center text-white text-xs sm:text-sm font-bold">2</div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-300 flex items-center justify-center text-white text-xs sm:text-sm font-bold">3</div>
            </div>
            <span className="text-gray-700 text-sm sm:text-base font-medium text-center">
              Trusted by families during their most difficult times
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;