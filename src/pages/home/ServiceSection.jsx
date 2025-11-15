// Funeral & Mortuary Services with Animated Hover Design + Images + Button
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ServiceSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  const services = [
    {
      img: "/blog-img/3.jpg",
      title: "Freezer Box on Rent",
      description:
        "Premium quality freezer boxes available for rent, equipped with temperature control to preserve the deceased with dignity and respect.",
      link: "/services",
    },
    {
      img: "/blog-img/7.jpg",
      title: "Funeral Box Services",
      description:"Elegant and respectful funeral boxes designed to provide a dignified final resting place for your loved ones with utmost care and compassion",
      link: "/services",
    },
    {
      img: "/blog-img/8.jpg",
      title: "Cremation Ceremony Assistance",
      description:
        "Complete support for cremation ceremonies, including arrangements, documentation, and handling throughout.",
      link: "/services",
    },
    {
      img: "/blog-img/9.jpg",
      title: "Dead Body Transportation",
      description:
        "Dignified and respectful transportation services for the deceased, ensuring safe and proper handling during transfers.",
      link: "/services",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 font-serif">
            Our <span className="text-gray-800">Services</span>
          </h2>
          <p className="text-xl text-gray-600">
            Providing dignified and respectful services during difficult times
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => {
            const isActive = activeCard === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`relative group rounded-2xl p-6 border border-gray-200 bg-white shadow-md transition-all duration-500 transform hover:-translate-y-3 hover:shadow-xl overflow-hidden`}
              >
                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-gray-800 to-purple-800 opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                {/* Glow Border */}
                <div
                  className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                    isActive ? "border-2 border-indigo-200" : "border border-transparent"
                  }`}
                ></div>

                {/* Image */}
                <div className="w-full h-40 mb-5 rounded-xl overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      isActive ? "scale-110" : "scale-100"
                    }`}
                  />
                </div>

                {/* Text */}
                <h3
                  className={`text-medium font-bold mb-3 transition-colors duration-500 ${
                    isActive ? "text-gray-800" : "text-gray-900"
                  }`}
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Button */}
                <Link 
                  to={service.link}
                  className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-500 shadow-md text-center inline-block relative z-10 ${
                    isActive
                      ? "bg-gray-800 text-white hover:bg-gray-900"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  Learn More →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;