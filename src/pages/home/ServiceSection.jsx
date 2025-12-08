import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, Users, Truck, Shield, Heart, Phone, Star, CheckCircle, ArrowRight, Activity, Zap } from "lucide-react";

const ServiceSection = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const services = [
    {
      img: "/img1.jpg",
      title: "Emergency Ambulance",
      description: "24/7 rapid response ambulance service with trained medical staff and life-saving equipment.",
      icon: <Clock className="w-6 h-6" />,
      features: ["5-10 min response", "Advanced life support", "Trained paramedics"],
      link: "/services",
      emergency: true,
      color: "from-[#0097b2] to-[#007a95]"
    },
    {
      img: "/img6.jpg",
      title: "Freezer Box Service",
      description: "Premium quality freezer boxes with temperature control to preserve with dignity and respect.",
      icon: <Shield className="w-6 h-6" />,
      features: ["Temperature controlled", "Hygienic", "Available 24/7"],
      link: "/services",
      emergency: false,
      color: "from-[#0097b2] to-[#007a95]"
    },
    {
      img: "/img2.jpg",
      title: "Dead Body Transport",
      description: "Dignified and respectful transportation services ensuring safe and proper handling during transfers.",
      icon: <Truck className="w-6 h-6" />,
      features: ["Dignified transport", "Proper handling", "Nationwide coverage"],
      link: "/services",
      emergency: false,
      color: "from-[#0097b2] to-[#007a95]"
    },
    {
      img: "/blog-img/8.jpg",
      title: "Funeral Assistance",
      description: "Complete support for funeral arrangements, documentation, and handling throughout the process.",
      icon: <Heart className="w-6 h-6" />,
      features: ["Documentation help", "Respectful handling", "Complete guidance"],
      link: "/services",
      emergency: false,
      color: "from-[#0097b2] to-[#007a95]"
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-[#f0fbff] to-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0097b2 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#0097b2]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#0097b2]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#e6f7fb] rounded-full px-6 py-2 mb-6">
            <Activity className="w-4 h-4 mr-2 text-[#0097b2]" />
            <span className="text-sm font-bold text-[#0097b2]">OUR SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0097b2] mb-6">
            Comprehensive <span className="text-gray-900">Care Solutions</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Providing dignified and respectful services during difficult times with 24/7 emergency support
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const isActive = activeCard === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`relative group rounded-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-3 ${
                  isActive ? "shadow-2xl" : "shadow-lg"
                }`}
              >
                {/* Emergency Badge */}
                {service.emergency && (
                  <div className="absolute top-0 left-0 z-20 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-br-lg rounded-tl-lg flex items-center">
                    <Zap className="w-3 h-3 mr-1" />
                    EMERGENCY
                  </div>
                )}

                {/* Card Background */}
                <div className="bg-white h-full">
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        isActive ? "scale-110" : "scale-100"
                      }`}
                    />
                    {/* Image Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-[#0097b2]/80 to-transparent transition-opacity duration-500 ${
                      isActive ? "opacity-100" : "opacity-40"
                    }`}></div>
                    
                    {/* Icon */}
                    <div className={`absolute bottom-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all duration-500 shadow-lg ${
                      isActive ? "scale-110" : "scale-100"
                    }`}>
                      <div className="text-[#0097b2]">
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-4 text-sm">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-5">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center mb-2">
                          <CheckCircle className="w-4 h-4 text-[#0097b2] mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Button */}
                    <Link 
                      to={service.link}
                      className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-500 shadow-md text-center inline-block relative z-10 ${
                        isActive
                          ? "bg-gradient-to-r from-[#0097b2] to-[#007a95] text-white"
                          : "bg-[#e6f7fb] text-[#0097b2] hover:bg-[#d0f0fc]"
                      }`}
                    >
                      Learn More <ArrowRight className="inline w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>

                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#0097b2] to-[#007a95] transition-all duration-500 ${
                  isActive ? "w-full" : "w-0"
                }`}></div>
              </div>
            );
          })}
        </div>

        {/* Features Highlight */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-[#e6f7fb]">
          <h3 className="text-2xl font-bold text-[#0097b2] mb-6 text-center">Why Choose Our Services?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div 
              className="text-center p-4 rounded-xl hover:bg-[#e6f7fb] transition-colors cursor-pointer"
              onMouseEnter={() => setHoveredFeature(0)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 ${
                hoveredFeature === 0 ? "bg-gradient-to-br from-[#0097b2] to-[#007a95] text-white" : "bg-[#e6f7fb] text-[#0097b2]"
              }`}>
                <Clock className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Quick Response</h4>
              <p className="text-sm text-gray-600">5-10 minute response time for all emergencies</p>
            </div>
            
            <div 
              className="text-center p-4 rounded-xl hover:bg-[#e6f7fb] transition-colors cursor-pointer"
              onMouseEnter={() => setHoveredFeature(1)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 ${
                hoveredFeature === 1 ? "bg-gradient-to-br from-[#0097b2] to-[#007a95] text-white" : "bg-[#e6f7fb] text-[#0097b2]"
              }`}>
                <Shield className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Professional Team</h4>
              <p className="text-sm text-gray-600">Experienced medical staff and paramedics</p>
            </div>
            
            <div 
              className="text-center p-4 rounded-xl hover:bg-[#e6f7fb] transition-colors cursor-pointer"
              onMouseEnter={() => setHoveredFeature(2)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 ${
                hoveredFeature === 2 ? "bg-gradient-to-br from-[#0097b2] to-[#007a95] text-white" : "bg-[#e6f7fb] text-[#0097b2]"
              }`}>
                <Heart className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Compassionate Care</h4>
              <p className="text-sm text-gray-600">Dignified handling with respect and empathy</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Immediate Assistance?</h3>
          <p className="text-gray-600 mb-6">Our emergency team is available 24/7 to help you</p>
          <a href="tel:+917678309495" className="inline-flex items-center bg-gradient-to-r from-[#0097b2] to-[#007a95] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all">
            <Phone className="w-5 h-5 mr-2" />
            Call Now: +91 9917162727
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;