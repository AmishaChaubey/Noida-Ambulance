import { useState, useEffect } from "react";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function WelcomeSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ["Pari Ambulance ", "Pari Ambulance"]; // Words to loop

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typing effect logic
  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 60 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText.length < currentWord.length) {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
      } else if (!isDeleting && displayText.length === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <div className="w-full bg-gray-50 py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          {/* Hero Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#96080B] to-[#C8252C]">
              <span className="inline-block text-red-600">
                {displayText}
                <span className="border-r-4 border-red-600 ml-1 animate-pulse"></span>
              </span>
            </span>
          </h1>

          {/* Extended Paragraph */}
          <p className="text-sm sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            When every second counts, trust our professional emergency medical
            services to be there for you. Fast, reliable, and compassionate care
            when you need it most. Our team of certified paramedics and advanced
            ambulance fleet ensures that no matter where you are, help reaches you
            quickly and efficiently. From life-threatening emergencies to urgent
            medical transportation, we provide comprehensive support with a
            focus on patient safety, comfort, and well-being. Experience peace of
            mind knowing that 24/7, we are dedicated to saving lives and providing
            exceptional care.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-[#96080B] text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call Emergency: 911
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          
<Link to="/contact">
  <button className="bg-white text-[#96080B] px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 border-2 border-red-200">
    Book Non-Emergency
  </button>
</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
