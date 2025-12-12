import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, Users, Truck, Shield, Heart, Phone, Star, CheckCircle, ArrowRight, Activity, Zap } from "lucide-react";

const ServiceSection = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
const services = [
  {
    img: "/blog-img/8.jpg",
    title: "Cremation Services",
    description: "Complete cremation arrangements with respectful rituals and full assistance.",
    icon: <Clock className="w-6 h-6" />,
    features: ["Electric & Traditional", "Documentation Support", "24/7 Assistance"],
    link: "/services",
    emergency: true,
    color: "from-[#0097b2] to-[#007a95]"
  },
  {
    img: "/blog-img/7.jpg",
    title: "Funeral Services",
    description: "End-to-end funeral support with guidance, setup, and all rituals.",
    icon: <Shield className="w-6 h-6" />,
    features: ["Funeral Setup", "Priest Support", "Complete Assistance"],
    link: "/services",
    emergency: false,
    color: "from-[#0097b2] to-[#007a95]"
  },
  {
    img: "/blog-img/pandit2.jpg",
    title: "Pandit for Last-Rites",
    description: "Professional and experienced pandits for all last-rite rituals.",
    icon: <Users className="w-6 h-6" />,
    features: ["All Rituals", "Samagri Guidance", "On-Time Availability"],
    link: "/services",
    emergency: false,
    color: "from-[#0097b2] to-[#007a95]"
  },
  {
    img: "/blog-img/a.jpg",
    title: "Antim-Sanskar Samagri",
    description: "Complete samagri kit available with home delivery for funerals.",
    icon: <Heart className="w-6 h-6" />,
    features: ["Full Samagri Kit", "Premium Quality", "Home Delivery"],
    link: "/services",
    emergency: false,
    color: "from-[#0097b2] to-[#007a95]"
  },
  {
    img: "/blog-img/p.jpg",
    title: "Funeral PrePlanning",
    description: "Plan funeral arrangements in advance for peace of mind and reduced burden.",
    icon: <Star className="w-6 h-6" />,
    features: ["Budget Friendly", "Custom Planning", "Documentation Support"],
    link: "/services",
    emergency: false,
    color: "from-[#0097b2] to-[#007a95]"
  },
  {
    img: "/blog-img/9.jpg",
    title: "Dead-Body Transportation",
    description: "Dignified transport services by road or air with complete support.",
    icon: <Truck className="w-6 h-6" />,
    features: ["Hearse Van", "Domestic & International", "Proper Handling"],
    link: "/services",
    emergency: false,
    color: "from-[#0097b2] to-[#007a95]"
  },
  {
    img: "/blog-img/10.jpg",
    title: "Freezer-Box Services",
    description: "Freezer-box services with temperature control for proper preservation.",
    icon: <Shield className="w-6 h-6" />,
    features: ["Hygienic Boxes", "Doorstep Delivery", "24/7 Availability"],
    link: "/services",
    emergency: false,
    color: "from-[#0097b2] to-[#007a95]"
  },
  {
    img: "/blog-img/2.png",
    title: "Embalming Services",
    description: "Certified embalming services for preservation and long-distance transfer.",
    icon: <Activity className="w-6 h-6" />,
    features: ["Certified Experts", "Long Preservation", "Suitable for Air Travel"],
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

     
      </div>
    </section>
  );
};

export default ServiceSection;