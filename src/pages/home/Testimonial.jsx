import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2);
const testimonials = [
  {
    name: "RAJESH KUMAR",
    text: "Their freezer box service is reliable and well-maintained. The team handles everything respectfully.",
    rating: 5,
    role: "Service Partner"
  },
  {
    name: "GAURAV SINGH",
    text: "During our difficult time, they provided a freezer box quickly and professionally. Truly grateful.",
    rating: 5,
    role: "Family Member"
  },
  {
    name: "ABBAS RAMPURAWALA",
    text: "The freezer box quality and timely delivery brought us peace of mind. Exceptional service.",
    rating: 5,
    role: "Client"
  },
  {
    name: "PRIYA SHARMA",
    text: "They handled everything with dignity and care. The preservation service was excellent.",
    rating: 5,
    role: "Family Member"
  },
  {
    name: "DR. VIKRAM PATEL",
    text: "A dependable service that maintains proper hygiene and preservation standards. Highly recommended.",
    rating: 5,
    role: "Medical Professional"
  },
  {
    name: "ANJALI MEHTA",
    text: "The team arrived on time and provided a well-maintained freezer box. Very supportive service.",
    rating: 5,
    role: "Client"
  }
];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
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
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-700 rounded-full mb-3">
            <Quote className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Client Experiences</h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm">
            Hear from those who have experienced our compassionate care
          </p>
        </div>

        <div className="relative">
          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all hover:scale-110 -translate-x-3"
          >
            <ChevronLeft className="w-5 h-5 text-blue-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all hover:scale-110 translate-x-3"
          >
            <ChevronRight className="w-5 h-5 text-blue-600" />
          </button>

          {/* Testimonials Cards */}
          <div className="grid gap-4 px-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-full -mr-12 -mt-12 opacity-30"></div>
                
                {/* Avatar and info */}
                <div className="flex items-start mb-4 relative z-10">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 flex-shrink-0">
                    {getInitials(testimonial.name)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-500 text-xs">{testimonial.role}</p>
                    {/* Rating stars */}
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial text */}
                <p className="text-gray-700 text-sm leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Hover effect decoration */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center mt-8 gap-1.5">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gray-800 w-6"
                  : "bg-blue-200 hover:bg-blue-300 w-1.5"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        
      </div>
    </div>
  );
}