import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "RAJESH AMBULANCE DRIVER",
      text: "Working with Pari Ambulance has been a rewarding experience. The team values patient care, teamwork, and professionalism. Our goal is to provide safe, prompt, and reliable service every time.",
    },
    {
      name: "GAURAV SINGH",
      text: "Pari Ambulance handled my father's emergency transport efficiently. The staff was attentive, professional, and followed all necessary safety measures. Their service truly eased our stress during a critical time.",
    },
    {
      name: "ABBAS RAMPURAWALA",
      text: "I am grateful to Pari Ambulance for their prompt intercity service. The drivers and medical team were courteous and professional. They ensured smooth and safe transport with excellent care throughout.",
    },
    {
      name: "PRIYA SHARMA",
      text: "During my mother's cardiac emergency, Pari Ambulance arrived quickly and handled everything professionally. Their skilled paramedics and swift response ensured she received timely care and support.",
    },
    {
      name: "DR. VIKRAM PATEL",
      text: "Pari Ambulance stands out for its skilled medical team and advanced equipment. I recommend their services to anyone needing reliable and professional medical transport, ensuring patient safety always.",
    },
    {
      name: "ANJALI MEHTA",
      text: "Pari Ambulance made my father's inter-city transfer smooth and stress-free. The team provided continuous updates and compassionate care, demonstrating professionalism and dedication at every step.",
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    return [
      testimonials[currentIndex],
      testimonials[(currentIndex + 1) % testimonials.length],
      testimonials[(currentIndex + 2) % testimonials.length]
    ];
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-red-800 mb-12 sm:mb-20 font-serif">TESTIMONIALS</h1>
        
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 sm:p-4 shadow-lg hover:bg-gray-100 transition-colors -ml-4 sm:-ml-6"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 sm:w-8 h-6 sm:h-8 text-red-800" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 sm:p-4 shadow-lg hover:bg-gray-100 transition-colors -mr-4 sm:-mr-6"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 sm:w-8 h-6 sm:h-8 text-red-800" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-0 sm:px-4 transition-all duration-500">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={index}
                className={`relative ${index === 1 ? 'sm:-mt-6 lg:-mt-8' : ''}`}
              >
                <div className={`${
                  index === 1 ? 'bg-red-800 text-white' : 'bg-white text-gray-800'
                } rounded-lg shadow-xl p-6 sm:p-8 min-h-[150px] flex flex-col justify-between transition-all duration-300`}>
                  <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                    {testimonial.text}
                  </p>
                  <p className="font-bold text-sm sm:text-base tracking-wide">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-red-800 w-8' : 'bg-red-300 hover:bg-red-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
