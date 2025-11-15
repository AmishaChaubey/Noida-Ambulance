// FULL UPDATED ABOUT PAGE CODE
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Users, Clock, Award, Phone, ArrowRight, CheckCircle, Shield, Zap, Activity, Star, Ambulance, AlertCircle, Lightbulb, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { IoBookOutline } from "react-icons/io5";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("mission");
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => setIsVisible(true), []);
  useEffect(() => window.scrollTo(0, 0), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => statsRef.current && observer.unobserve(statsRef.current);
  }, []);

  const stats = [
    { value: "10+", label: "Years of Service", icon: Clock, color: "text-blue-400", bg: "bg-blue-500/10" },
    { value: "500+", label: "Bodies Preserved", icon: Heart, color: "text-red-400", bg: "bg-red-500/10" },
    { value: "24/7", label: "Availability", icon: Zap, color: "text-yellow-400", bg: "bg-yellow-500/10" },
    { value: "100%", label: "Satisfaction", icon: Shield, color: "text-green-400", bg: "bg-green-500/10" },
  ];

  const coreValues = [
  {
    title: "Dignity",
    desc: "We ensure every departed soul is treated with the highest respect.",
    icon: Heart,
    color: "bg-red-100 text-red-600"
  },
  {
    title: "Reliability",
    desc: "Timely and dependable service for families in difficult moments.",
    icon: Award,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Hygiene & Safety",
    desc: "Advanced preservation technology ensuring proper care and sanitation.",
    icon: Lightbulb,
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    title: "Transparency",
    desc: "Clear communication and ethical service without hidden charges.",
    icon: Target,
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Support",
    desc: "A compassionate team available to guide families throughout the process.",
    icon: Users,
    color: "bg-indigo-100 text-indigo-600"
  },
  {
  title: "24/7 Assistance",
  desc: "Round-the-clock availability to support families whenever needed.",
  icon: Clock,
  color: "bg-gray-100 text-gray-600"
}
];

  const testimonials = [
  { 
    name: "Disha Kumari", 
    text: "Their timely freezer box service brought us great relief during a very difficult time.", 
    rating: 5 
  },
  { 
    name: "Murari Singh", 
    text: "A very professional and respectful team. They handled everything with utmost care.", 
    rating: 5 
  },
  { 
    name: "Rita Kumari", 
    text: "Quick response and well-maintained freezer box. Truly dependable service.", 
    rating: 5 
  }
];


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden text-white mt-15 h-96 md:h-[500px]">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/banner6.png')" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/70 to-transparent"></div>
        </div>

        <div className={`relative max-w-7xl mx-auto px-6 h-full flex items-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="w-full text-center">
         

            <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">About Us</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">Explore medical stories, health tips, and ambulance service updates.</p>

        
          </div>
        </div>
      </div>

      {/* WHO WE ARE (moved up) */}
      <div className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Who We Are</motion.h2>
            <motion.div className="w-24 h-1 bg-gray-800 mx-auto"></motion.div>
          </div>

          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-gray-100 rounded-lg p-1">
              {["mission", "vision", "values"].map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-3 rounded-md font-medium capitalize ${activeTab === tab ? "bg-white text-gray-800 shadow-sm" : "text-gray-600 hover:text-gray-800"}`}>
                  {tab === "mission" && <Heart className="inline w-4 h-4 mr-2" />}
                  {tab === "vision" && <Activity className="inline w-4 h-4 mr-2" />}
                  {tab === "values" && <Shield className="inline w-4 h-4 mr-2" />}
                  Our {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {activeTab === "mission" && (
                <motion.div key="mission" className="bg-gray-50 rounded-xl p-8 shadow-lg">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center"><Heart className="w-6 h-6 text-white" /></div>
                    <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
                  </div>
                  <p className="text-gray-700 mb-4">To provide dignified, hygienic, and reliable preservation services that support families with compassion and respect during their most difficult moments. </p>
                  <p className="text-gray-700">We aim to ensure timely assistance, transparent service, and the highest standards of care for every departed soul entrusted to us.</p>
                </motion.div>
              )}

              {activeTab === "vision" && (
                <motion.div key="vision" className="bg-gray-50 rounded-xl p-8 shadow-lg">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center"><Activity className="w-6 h-6 text-white" /></div>
                    <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
                  </div>
                  <p className="text-gray-700 mb-4">To become the most trusted provider of dignified preservation services by upholding unwavering standards of care, advancing modern preservation technology, and offering families a sense of peace, support, and reliability when they need it the most.</p>
                  
                </motion.div>
              )}

              {activeTab === "values" && (
                <motion.div key="values" className="bg-gray-50 rounded-xl p-8 shadow-lg">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center"><Shield className="w-6 h-6 text-white" /></div>
                    <h3 className="text-2xl font-bold text-gray-800">Our Values</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[{ title: "Compassion", desc: "Dignified care" }, { title: "Excellence", desc: "High-standard service" }, { title: "Reliability", desc: "24/7 support" }, { title: "Innovation", desc: "Modern preservation tech" }].map((value, i) => (
                      <div key={i} className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-gray-800 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">{value.title}</h4>
                          <p className="text-gray-600 text-sm">{value.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* OUR IMPACT (moved here, unchanged) */}
      <div ref={statsRef} className="bg-gray-800 py-2 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <motion.h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 mt-2">Our Impact</motion.h2>
            <motion.div className="w-24 h-1 bg-white mx-auto"></motion.div>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">Over a decade of dedication to saving lives.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white/10 p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                  <div className={`w-16 h-16 ${stat.bg} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link to="/contact">
              <button className="bg-white/10 text-white px-6 py-3 rounded-lg hover:bg-white/20 inline-flex items-center mb-4">
                <Activity className="w-5 h-5 mr-2" />
                View Our Response Areas
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* CORE VALUES */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-gray-800 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-white rounded-xl p-6 shadow-md">
                  <div className={`w-16 h-16 ${v.color} rounded-full flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{v.title}</h3>
                  <p className="text-gray-600">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">What Our Patients Say</h2>
            <div className="w-24 h-1 bg-gray-800 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-md">
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{t.text}"</p>
                <p className="font-semibold text-gray-800">- {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative bg-gray-800 py-16 text-center text-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Emergency <span className="text-gray-300">Need Help?</span></h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">   Contact us anytime for compassionate support and professional funeral services
            </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="bg-white text-gray-800 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 flex items-center justify-center">
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </button>
            </Link>
            <Link to="/services">
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-gray-800 flex items-center justify-center">
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
