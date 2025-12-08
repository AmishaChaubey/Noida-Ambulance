import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Shield, Clock, MapPin, Quote } from "lucide-react";
import { Link } from "react-router-dom";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2);

  const testimonials = [
    {
      name: "DR. ANJALI SHARMA",
      text: "Their ambulance response time was exceptional during the emergency. The team was professional and handled the situation with care.",
      rating: 5,
      role: "Medical Professional",
      service: "Ambulance Service",
      icon: <Clock className="w-5 h-5" />,
    },
    {
      name: "VIKRAM MALHOTRA",
      text: "Their deadbody transportation service was respectful and prompt. They guided us with compassion.",
      rating: 5,
      role: "Family Member",
      service: "Deadbody Transport",
      icon: <MapPin className="w-5 h-5" />,
    },
    {
      name: "MEERA PATEL",
      text: "The freezer box was well-maintained and gave us peace of mind. Their team showed great empathy.",
      rating: 5,
      role: "Client",
      service: "Mortuary Service",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      name: "RAHUL VERMA",
      text: "Their ambulance was available 24/7 when we needed it most. Very skilled and caring paramedics.",
      rating: 5,
      role: "Emergency Contact",
      service: "Ambulance Service",
      icon: <Clock className="w-5 h-5" />,
    },
    {
      name: "SUNITA RAO",
      text: "The hearse vehicle was dignified and well-equipped. Staff handled everything with sensitivity.",
      rating: 5,
      role: "Family Member",
      service: "Hearse Service",
      icon: <MapPin className="w-5 h-5" />,
    },
    {
      name: "DR. RAJEEV KHANNA",
      text: "Impressive deadbody preservation standards. Proper hygiene and protocol maintained.",
      rating: 5,
      role: "Medical Professional",
      service: "Deadbody Preservation",
      icon: <Shield className="w-5 h-5" />,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    return Array.from({ length: cardsPerView }, (_, i) =>
      testimonials[(currentIndex + i) % testimonials.length]
    );
  };

  // Responsive logic
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(2);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const getInitials = (name) => {
    return name.split(" ").map((n) => n[0]).join("").toUpperCase();
  };

  return (
    <div className="bg-gradient-to-br from-white to-[#f0fbff] py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-[#e6f7fb] rounded-full px-6 py-2 mb-4">
            <Star className="w-4 h-4 mr-2 text-[#0097b2]" />
            <span className="text-sm font-bold text-gray-700">TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0097b2] mb-3">
            Client <span className="text-gray-900">Experiences</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Hear from those who have experienced our compassionate care during critical moments.
          </p>
        </div>

        <div className="relative">

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:left-3 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:scale-110 transition-all border border-[#e6f7fb]"
          >
            <ChevronLeft className="w-6 h-6 text-[#0097b2]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 sm:right-3 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:scale-110 transition-all border border-[#e6f7fb]"
          >
            <ChevronRight className="w-6 h-6 text-[#0097b2]" />
          </button>

          {/* Testimonials Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 sm:px-2 md:px-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-[#e6f7fb]">
                  <Quote className="w-12 h-12" />
                </div>

                {/* Badge */}
                <div className="inline-flex items-center bg-gradient-to-r from-[#0097b2] to-[#007a95] text-white text-xs px-4 py-2 rounded-full mb-4">
                  {testimonial.icon}
                  {testimonial.service}
                </div>

                {/* Avatar & Info */}
                <div className="flex items-start mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#e6f7fb] to-[#d0f0fc] rounded-full flex items-center justify-center font-bold text-[#0097b2] text-xl border-2 border-[#0097b2] mr-4 shadow-md">
                    {getInitials(testimonial.name)}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Text */}
                <p className="text-gray-700 leading-relaxed text-base">
                  "{testimonial.text}"
                </p>

                {/* Hover bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0097b2] to-[#007a95] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-[#0097b2] w-8" : "bg-gray-300 w-2"
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 bg-gradient-to-r from-[#0097b2] to-[#007a95] rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-4">Need Our Services?</h3>
          <p className="text-gray-100 mb-6 text-base sm:text-lg max-w-2xl mx-auto">
            We're here for you 24/7 with compassionate care when you need it most
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919917162727" className="bg-white hover:bg-gray-100 text-[#0097b2] font-bold py-3 px-6 rounded-full text-base shadow-lg hover:shadow-xl transition-all">
              Emergency: +91 9917162727
            </a>

            <Link to="/contact">
              <button className="border-2 border-white hover:bg-white hover:text-[#0097b2] text-white font-bold py-3 px-6 rounded-full text-base transition-all">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}