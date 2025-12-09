import React, { useState, useEffect } from 'react';
import {
  Shield,
  Activity,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  MapPin,
  Clock,
  Heart,
  Home,
  Car,
  User,
  Sparkles,
  Feather,
  Trees,
  Sun,
  Headphones,
  Zap,
  Award,
  Users,
  Calendar,
  Ambulance,
  Snowflake,
  AlertCircle
} from 'lucide-react';
import { Link } from "react-router-dom";

export default function ServicesPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Ambulance,
      title: 'Emergency Ambulance',
      image: "/blog-img/fu.jpg",
      description: 'Rapid response 24/7 emergency medical transport with advanced life support',
      features: ['24/7 Availability', 'Advanced Life Support', 'GPS Tracked Vehicles', 'Trained Paramedics'],
      color: 'from-[#0097b2] to-[#007a95]',
      bgColor: 'bg-[#e6f7fb]',
      iconColor: 'text-[#0097b2]',
    },
    {
      icon: Snowflake,
      title: 'Freezer Box Service',
      image: "/blog-img/11.jpg",
      description: 'Professional preservation with temperature-controlled freezer box rental',
      features: ['Temperature Controlled', 'Hygienic Equipment', 'Doorstep Delivery', 'Professional Setup'],
      color: 'from-[#0097b2] to-[#007a95]',
      bgColor: 'bg-[#e6f7fb]',
      iconColor: 'text-[#0097b2]',
    },
    {
      icon: Car,
      title: 'Patient Transport',
      image: "/blog-img/9.jpg",
      description: 'Non-emergency medical transport for hospital transfers',
      features: ['Wheelchair Accessible', 'Medical Supervision', 'Comfortable Journey', 'Affordable Rates'],
      color: 'from-[#0097b2] to-[#007a95]',
      bgColor: 'bg-[#e6f7fb]',
      iconColor: 'text-[#0097b2]',
    },
    {
      icon: Heart,
      
  title: 'Funeral Service',
  image: "/blog-img/8.jpg",
  description: 'Professional funeral arrangements with complete support, rituals guidance, and dignified services for families.',
  features: [
    'Priest & Ritual Support',
    'Hearse Van Service',
    'Freezer Box Arrangement',
    'Complete Funeral Assistance'
  ],
  


      color: 'from-[#0097b2] to-[#007a95]',
      bgColor: 'bg-[#e6f7fb]',
      iconColor: 'text-[#0097b2]',
    },
  ];

  const stats = [
    { icon: Ambulance, value: '10,000+', label: 'Emergency Responses', color: 'text-[#0097b2]' },
    { icon: Users, value: '50+', label: 'Medical Staff', color: 'text-[#0097b2]' },
    { icon: Clock, value: '24/7', label: 'Availability', color: 'text-[#0097b2]' },
    { icon: Award, value: '5+', label: 'Years Experience', color: 'text-[#0097b2]' },
  ];

  const processSteps = [
    { title: 'Call Us', description: 'Reach our 24/7 emergency hotline', icon: Phone, color: 'from-[#0097b2] to-[#007a95]' },
    { title: 'Rapid Dispatch', description: 'Nearest ambulance sent immediately', icon: Zap, color: 'from-[#0097b2] to-[#007a95]' },
    { title: 'Expert Care', description: 'Trained paramedics provide support', icon: Activity, color: 'from-[#0097b2] to-[#007a95]' },
    { title: 'Safe Transport', description: 'Swift and secure journey', icon: Shield, color: 'from-[#0097b2] to-[#007a95]' },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* HERO SECTION */}
      <section className="relative h-auto md:h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center mt-10"
          style={{
            backgroundImage: "url('/ban/2.png')",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/80"></div>
        </div>

        <div className="relative h-full flex items-center text-left px-4 sm:px-6 lg:px-8 py-20 md:py-0">
          <div className="max-w-5xl mt-10">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl  font-black mb-6 leading-tight text-white">
              Comprehensive Emergency <br />
              <span className="bg-gradient-to-r from-white to-[#e6f7fb] bg-clip-text text-transparent">
               & Funeral Services
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-10 max-w-3xl">
              From rapid ambulance response to dignified funeral arrangements, we deliver care with professionalism and empathy
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
        
              <a href="tel:+919917162727" className="bg-white hover:bg-gray-50 text-[#0097b2] border-2 border-[#0097b2] font-bold py-3 px-6 rounded-full transition-all flex items-center shadow-md hover:shadow-xl">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
             
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#f0fbff] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group p-4 sm:p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-[#e6f7fb] rounded-2xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color}`} />
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">{stat.value}</div>
                  <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
         
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0097b2] font-serif">
              Comprehensive <span className="text-gray-900">Care Solutions</span>
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-gray-600 text-base sm:text-lg">
              We provide a wide range of emergency medical and funeral services to meet your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  to="/contact"
                  className="group relative bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative p-6 sm:p-8">
                    <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${service.bgColor} mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-7 h-7 sm:w-8 sm:h-8 ${service.iconColor}`} />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6 text-sm sm:text-base">{service.description}</p>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className={`w-4 h-4 ${service.iconColor} mr-2 flex-shrink-0`} />
                          <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                 
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#f0fbff] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0097b2] font-serif">
              Quick Response <span className="text-gray-900">Process</span>
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-gray-600 text-base sm:text-lg">
              Our streamlined process ensures rapid response and quality care
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition-all duration-300 h-full">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 text-center">{step.title}</h3>
                    <p className="text-gray-600 text-center text-sm mt-2">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-[#0097b2]">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#0097b2] to-[#007a95]">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
            Need Emergency Assistance?
          </h2>
          <p className="text-lg sm:text-xl text-gray-100 mb-10 max-w-3xl mx-auto">
            Our team is available 24/7 for immediate medical help
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a href="tel:+919917162727" className="bg-white hover:bg-gray-50 text-[#0097b2] border-2 border-[#0097b2] font-bold py-3 px-6 rounded-full transition-all flex items-center shadow-md hover:shadow-xl">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
          </div>
        </div>
      </section>
    </div>
  );
}