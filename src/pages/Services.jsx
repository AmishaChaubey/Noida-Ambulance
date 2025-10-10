import React, { useState, useEffect } from 'react';
import { Ambulance, Shield, Activity, Star, CheckCircle, ArrowRight, Phone, MapPin } from 'lucide-react';
import { LuInbox ,LuMailbox} from "react-icons/lu";
import { MdEmojiTransportation } from "react-icons/md";
import { FaMaskVentilator } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
const services = [
  {
    id: 1,
    icon: Ambulance,
    title: 'Normal Ambulance Services',
    description: '24/7 emergency medical assistance with fast response times, professional paramedics, and fully equipped ambulances ready to handle any urgent medical situation efficiently.',
    details: 'Our standard ambulance service ensures prompt medical assistance at any time. We provide life-saving support, emergency transport, and quick arrival to handle urgent situations efficiently.',
    features: ['Advanced Life Support', 'Rapid Response <8 min', 'Emergency Transport', '24/7 Availability'],
    color: 'from-red-500 to-red-600',
    hoverGradient: 'from-red-200 to red-400'
  },
  {
    id: 2,
    icon: Shield,
    title: 'Oxygen Ambulance Services',
    description: '24/7 emergency medical assistance with fast response times, professional paramedics, and fully equipped ambulances with continuous oxygen supply and monitoring for critical patients.',
    details: 'Our oxygen ambulance service provides patients with continuous oxygen supply during transport. Equipped with oxygen cylinders and monitoring devices, we ensure safe and stable transit to hospitals.',
    features: ['Oxygen Supply', 'Medical Monitoring', 'Rapid Response', 'Trained Staff'],
    color: 'from-red-900 to-red-600',
    hoverGradient: 'from-red-200 to red-400'
  },
  {
    id: 3,
    icon: FaMaskVentilator,
    title: 'ICU Ventilator Ambulances',
    description: '24/7 emergency medical assistance with fast response times, professional paramedics, and fully equipped ambulances with ventilator support and critical care monitoring for emergencies.',
    details: 'Our ICU ventilator ambulances offer advanced life support during transport. Each unit includes ventilators, monitors, and a team of skilled paramedics to handle intensive care emergencies.',
    features: ['Ventilator Support', 'ICU Monitoring', 'Critical Care Team', 'Emergency Transport'],
    color: 'from-red-900 to-red-600',
    hoverGradient:'from-red-200 to red-400'
  },
  {
    id: 4,
    icon: MdEmojiTransportation,
    title: 'Dead Body Transport Ambulance',
    description: '24/7 emergency transport services with fast response, professional handling, and fully equipped ambulances providing dignified and secure transport for deceased individuals.',
    details: 'Our dead body transport service ensures safe and respectful transfer of deceased persons. We provide sealed compartments, temperature control, and professional handling throughout the journey.',
    features: ['Secure Transport', 'Temperature Controlled', 'Professional Handling', 'Dignified Service'],
    color: 'from-red-900 to-red-600',
    hoverGradient:'from-red-200 to red-400'
  },
  {
    id: 5,
    icon: LuMailbox,
    title: 'Dead Body Freezer Box Ambulance',
    description: '24/7 emergency transport services with fast response, professional handling, and fully equipped ambulances with freezer boxes to preserve deceased bodies safely and hygienically.',
    details: 'Our freezer box ambulance service provides proper cold storage for deceased bodies. This service ensures preservation during transit with hygienic and temperature-controlled compartments.',
    features: ['Temperature Controlled', 'Hygienic Storage', 'Safe Transport', 'Professional Service'],
    color: 'from-red-900 to-red-600',
    hoverGradient:'from-red-200 to red-400'
  },
  {
    id: 6,
    icon: LuInbox,
    title: 'Dead Body Freezer Box on Rent',
    description: '24/7 emergency rental services with fast response, professional handling, and portable freezer boxes to preserve deceased bodies safely and hygienically at any location.',
    details: 'We offer freezer boxes on rent for short-term storage of deceased bodies. This service ensures proper preservation, easy transport, and professional handling as per requirements.',
    features: ['Rental Service', 'Temperature Controlled', 'Portable Boxes', 'Hygienic Handling'],
    color: 'from-red-900 to-red-600',
    hoverGradient:'from-red-200 to red-400'
  }
];



  const processSteps = [
    {
      title: 'Call Received',
      description: 'Our dispatch center receives your call and gathers essential information',
      icon: Phone
    },
    {
      title: 'Dispatch',
      description: 'Nearest available ambulance is dispatched to your location',
      icon: MapPin
    },
    {
      title: 'Arrival & Care',
      description: 'Medical team arrives and provides immediate care',
      icon: Activity
    },
    {
      title: 'Transport',
      description: 'Patient is safely transported to appropriate medical facility',
      icon: Ambulance
    }
  ];

  

  return (
    <div className="min-h-screen bg-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#96080B] to-[#C8252C] text-white mt-25">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className={`relative max-w-7xl mx-auto px-6 py-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6 animate-blink">
              <Ambulance className="w-10 h-10" />
            </div>

            <style jsx>{`
              @keyframes blink {
                0%, 50%, 100% {
                  opacity: 1;
                }
                25%, 75% {
                  opacity: 0.5;
                }
              }

              .animate-blink {
                animation: blink 5s infinite;
              }
            `}</style>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">Our Services</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
              Comprehensive ambulance and medical transport services designed to meet all your emergency and non-emergency needs.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 26.7C840 33.3 960 46.7 1080 50C1200 53.3 1320 46.7 1380 43.3L1440 40V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </div>

      {/* Services Grid - ENHANCED CARDS */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What <span className='text-red-900'> We Offer</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional medical transport services for every situation, from life-threatening emergencies to scheduled transfers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeService === index;
            
            return (
              <div 
                key={service.id}
                className={`group relative bg-white rounded-2xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 cursor-pointer ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{transitionDelay: `${index * 100}ms`}}
                onClick={() => setActiveService(index)}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`}></div>
                
                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.hoverGradient} blur-xl`}></div>
                </div>

                {/* Content */}
                <div className="relative z-10 bg-white group-hover:bg-transparent transition-colors duration-500">
                  <div className="p-8">
                    {/* Icon container */}
                    <div className="relative mb-6">
                      <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-1 `}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      {/* Glow effect */}
                      {/* <div className={`absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div> */}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-black transition-colors duration-500">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-500 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom accent bar */}
                  <div className={`h-2 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Details */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div
          className={`bg-white rounded-2xl shadow-xl p-8 md:p-12 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Section */}
            <div className="lg:w-1/2">
              {/* Icon box */}
              <div
                className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 bg-gradient-to-br ${services[activeService].color}`}
              >
                {React.createElement(services[activeService].icon, {
                  className: "w-10 h-10 text-white",
                })}
              </div>

              {/* Title & Details */}
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {services[activeService].title}
              </h2>
              <p className="text-gray-600 mb-6">{services[activeService].details}</p>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Key Features:
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#C8252C] mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Button */}
           <Link to="/contact">
  <button className="bg-gradient-to-r from-[#96080B] to-[#C8252C] text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-all transform hover:scale-105 flex items-center gap-2">
    Request This Service
    <ArrowRight className="w-4 h-4" />
  </button>
</Link>
            </div>

            {/* Right Section - Background Image */}
          <div className="lg:w-1/2 w-full rounded-2xl h-64 md:h-80 lg:h-96 flex items-center justify-center overflow-hidden relative">
  <img
    src="/amb2.png"
    alt="Ambulance Service"
    className="w-full h-full object-cover rounded-2xl"
  />
</div>

          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className={`text-center mb-16 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">How <span className='text-red-900'> It Works</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process ensures you receive the fastest, most effective medical transport service when you need it most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className={`bg-white rounded-2xl shadow-lg p-6 text-center transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{transitionDelay: `${index * 100}ms`}}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#96080B] to-[#C8252C] rounded-full mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}