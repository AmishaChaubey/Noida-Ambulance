import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Users, Clock, Award, Phone, ArrowRight, CheckCircle, Shield, Zap, Activity, Star, Ambulance, AlertCircle, Lightbulb, Target, MapPin, ThumbsUp, TrendingUp, Globe, HeadphonesIcon, User } from "lucide-react";

export default function AboutPageRedesign() {
  const [activeStory, setActiveStory] = useState(0);
  const [counterStart, setCounterStart] = useState(false);
  const counterRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCounterStart(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) observer.observe(counterRef.current);
    return () => counterRef.current && observer.unobserve(counterRef.current);
  }, []);

  const Counter = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!counterStart) return;
      let startTime;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        const currentCount = Math.floor(percentage * end);
        setCount(currentCount);
        if (percentage < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, [counterStart, end, duration]);

    return <span>{count}{suffix}</span>;
  };

  const journeySteps = [
    { year: "2014", title: "The Beginning", description: "Started with a single ambulance and a commitment to serve", icon: Ambulance },
    { year: "2017", title: "Expanding Services", description: "Added funeral services with advanced preservation technology", icon: Shield },
    { year: "2020", title: "24/7 Operations", description: "Round-the-clock emergency medical and funeral services", icon: Clock },
    { year: "2025", title: "Today", description: "Trusted by 500+ families across the region", icon: Heart }
  ];

  const testimonials = [
    { name: "Disha Kumari", text: "Their ambulance arrived within minutes when we needed it most. The paramedics were professional and caring throughout the journey.", rating: 5 },
    { name: "Murari Singh", text: "During our family's loss, their funeral services team handled everything with dignity and respect. We are deeply grateful.", rating: 5 },
    { name: "Rita Kumari", text: "Quick response, well-equipped ambulance, and compassionate staff. A truly dependable service in emergency situations.", rating: 5 }
  ];

  const values = [
    { icon: Heart, title: "Compassion", desc: "Empathy in every action" },
    { icon: Zap, title: "Swift Response", desc: "Minutes matter in emergencies" },
    { icon: Shield, title: "Trust", desc: "Building lasting relationships" },
    { icon: Award, title: "Excellence", desc: "Highest standards of care" }
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap');
        .heading-font {
          font-family: 'Playfair Display', serif;
        }
      `}</style>

      {/* Hero Section - Compact with Image */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/ban/3.png" 
            alt="Emergency Medical Services" 
            className="w-full h-full object-cover"
          />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/80"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 max-w-4xl ml-0 md:ml-10 lg:ml-20"
        >
        

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="heading-font text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight text-left"
          >
            Saving Lives, Honoring Memories
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl text-left"
          >
            Compassionate emergency medical services and dignified funeral care available 24/7
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link to='/contact'><button className="group px-6 py-3 bg-white text-[#0097b2] rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Emergency 24/7
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button></Link>
          
          </motion.div>
        </motion.div>
      </section>

      {/* About Us - Compact Two Column */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <div className="bg-[#0097b2] rounded-xl p-8 text-white">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Ambulance className="w-8 h-8" />
                    <div>
                      <div className="text-3xl font-bold">10+</div>
                      <div className="text-sm text-white/80">Years Serving</div>
                    </div>
                  </div>
                  <div className="h-px bg-white/20"></div>
                  <div className="flex items-center gap-4">
                    <Users className="w-8 h-8" />
                    <div>
                      <div className="text-3xl font-bold">500+</div>
                      <div className="text-sm text-white/80">Families Helped</div>
                    </div>
                  </div>
                  <div className="h-px bg-white/20"></div>
                  <div className="flex items-center gap-4">
                    <Clock className="w-8 h-8" />
                    <div>
                      <div className="text-3xl font-bold">24/7</div>
                      <div className="text-sm text-white/80">Always Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-3"
            >
              <div className="inline-block px-4 py-1 bg-[#0097b2]/10 rounded-full text-[#0097b2] text-sm font-medium mb-4">
                Our Story
              </div>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                A Decade of Compassionate Service
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                What began as a single ambulance and a heartfelt mission has evolved into a comprehensive emergency medical and funeral service provider trusted across the region.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Today, we operate advanced ambulances with life-support systems and offer dignified funeral services with modern preservation facilities—all while maintaining the compassion and dedication that defined our foundation.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#0097b2] flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <div className="font-semibold text-gray-900">Advanced Ambulances</div>
                    <div className="text-gray-600">Life-support equipped</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#0097b2] flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <div className="font-semibold text-gray-900">Certified Team</div>
                    <div className="text-gray-600">Trained paramedics</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#0097b2] flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <div className="font-semibold text-gray-900">Dignified Care</div>
                    <div className="text-gray-600">Respectful services</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#0097b2] flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <div className="font-semibold text-gray-900">Modern Facilities</div>
                    <div className="text-gray-600">Latest technology</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Compact Cards */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-[#0097b2]/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#0097b2]" />
              </div>
              <h3 className="heading-font text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide compassionate, professional emergency medical transport and dignified funeral services that bring comfort and support to families during their most critical moments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-[#0097b2] to-[#006a7d] rounded-xl p-8 text-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="heading-font text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-white/90 leading-relaxed">
                To be the most trusted name in emergency medical and funeral services, recognized for our unwavering commitment to compassion, dignity, and excellence in care.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline - Compact */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-1 bg-[#0097b2]/10 rounded-full text-[#0097b2] text-sm font-medium mb-3">
              Our Journey
            </div>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-gray-900">A Decade of Growth</h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-[#0097b2] rounded-full flex items-center justify-center text-white mx-auto shadow-lg">
                      <Icon className="w-8 h-8" />
                    </div>
                    {index < journeySteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-[#0097b2]/20"></div>
                    )}
                  </div>
                  <div className="text-2xl font-bold text-[#0097b2] mb-2">{step.year}</div>
                  <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Counter - Compact */}
      <section ref={counterRef} className="relative py-16 px-6 bg-[#0097b2] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 10, suffix: "+", label: "Years of Service", icon: Clock },
              { value: 500, suffix: "+", label: "Families Helped", icon: Users },
              { value: 100, suffix: "%", label: "Satisfaction", icon: ThumbsUp },
              { value: 24, suffix: "/7", label: "Available", icon: Zap }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <Icon className="w-8 h-8 text-white/80 mx-auto mb-3" />
                  <div className="text-4xl md:text-5xl font-bold text-white mb-1">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-white/80 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Grid - Compact */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-block px-4 py-1 bg-[#0097b2]/10 rounded-full text-[#0097b2] text-sm font-medium mb-3">
              Our Values
            </div>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-gray-900">What Drives Us</h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-gray-50 rounded-xl p-6 hover:bg-[#0097b2] transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-[#0097b2] group-hover:bg-white rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors">
                    <Icon className="w-6 h-6 text-white group-hover:text-[#0097b2] transition-colors" />
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-white mb-2 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors">
                    {value.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials - Compact */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-block px-4 py-1 bg-[#0097b2]/10 rounded-full text-[#0097b2] text-sm font-medium mb-3">
              Testimonials
            </div>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-gray-900">Voices of Trust</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 bg-[#0097b2]/10 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-[#0097b2]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">Verified Customer</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Compact */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0097b2] to-[#006a7d] rounded-2xl p-10 text-center shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>

              <h2 className="heading-font text-3xl md:text-4xl font-bold text-white mb-3">
                Need Our Services?
              </h2>
              <p className="text-white/90 mb-6 max-w-xl mx-auto">
                Available 24/7 for emergency ambulance and compassionate funeral care
              </p>

            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}