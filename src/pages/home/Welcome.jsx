import { useState, useEffect } from "react";
import { Phone, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function WelcomeSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Simple Icon */}
          <div className="flex justify-center mb-6">
            <Heart className="w-10 h-10 text-gray-400" />
          </div>

          {/* Simple Title */}
          <h1 className="text-3xl sm:text-4xl font-serif text-gray-800 mb-6">
            Compassionate Funeral Services
          </h1>

          {/* Simple Description */}
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            We provide dignified funeral services with respect and care. 
            Our services include freezer boxes, funeral arrangements, 
            cremation support, and transportation during your time of need.
          </p>

          {/* Simple Service List */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 max-w-2xl mx-auto text-sm">
            <div className="py-3 px-4 bg-gray-50 rounded text-gray-700">
              Freezer Box
            </div>
            <div className="py-3 px-4 bg-gray-50 rounded text-gray-700">
              Funeral Arrangements
            </div>
            <div className="py-3 px-4 bg-gray-50 rounded text-gray-700">
              Cremation Support
            </div>
            <div className="py-3 px-4 bg-gray-50 rounded text-gray-700">
              Transportation
            </div>
          </div>

          {/* Simple CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
           <Link to='/services'> <button className="bg-gray-800 text-white px-8 py-3 rounded hover:bg-gray-700 transition-colors">
              Our Services
            </button>
            </Link>
           <Link to='/contact'> <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded hover:border-gray-400 hover:bg-gray-50 transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Contact Us
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}