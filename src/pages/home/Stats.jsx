import { useState, useEffect } from 'react';
import { FaClock, FaHeart, FaCalendarAlt, FaAmbulance } from 'react-icons/fa';

const StatsBar = () => {
  const [responseTime, setResponseTime] = useState(0);
  const [livesSaved, setLivesSaved] = useState(0);
  const [ambulancesReady, setAmbulancesReady] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Animation for response time
    const responseTimer = setTimeout(() => {
      setResponseTime(8);
    }, 300);

    // Animation for lives saved
    let livesCount = 0;
    const livesInterval = setInterval(() => {
      livesCount += 500;
      if (livesCount >= 10000) {
        livesCount = 10000;
        clearInterval(livesInterval);
      }
      setLivesSaved(livesCount);
    }, 50);

    // Animation for ambulances ready
    const ambulanceTimer = setTimeout(() => {
      setAmbulancesReady(100);
    }, 800);

    return () => {
      clearTimeout(responseTimer);
      clearInterval(livesInterval);
      clearTimeout(ambulanceTimer);
    };
  }, []);

  const stats = [
    {
      value: responseTime,
      suffix: 'min',
      label: 'Avg Response Time',
      icon: <FaClock className="text-[#C8252C]" />,
      delay: 'delay-100'
    },
    {
      value: livesSaved,
      suffix: '+',
      label: 'Lives Saved',
      icon: <FaHeart className="text-[#C8252C]" />,
      delay: 'delay-200'
    },
    {
      value: '24/7',
      suffix: '',
      label: 'Always Available',
      icon: <FaCalendarAlt className="text-[#C8252C]" />,
      delay: 'delay-300'
    },
    {
      value: ambulancesReady,
      suffix: '+',
      label: 'Ambulances Ready',
      icon: <FaAmbulance className="text-[#C8252C]" />,
      delay: 'delay-400'
    }
  ];

  return (
    <div className="relative bg-gray-50 rounded-2xl shadow-xl p-4 sm:p-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#96080B] to-[#C8252C]"></div>
      <div className="absolute -top-5 -right-5 w-16 h-16 rounded-full bg-[#C8252C]/10 blur-xl sm:-top-10 sm:-right-10 sm:w-20 sm:h-20"></div>
      <div className="absolute -bottom-5 -left-5 w-16 h-16 rounded-full bg-[#96080B]/10 blur-xl sm:-bottom-10 sm:-left-10 sm:w-20 sm:h-20"></div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 relative z-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`text-center p-3 sm:p-4 rounded-xl transition-all duration-500 hover:shadow-lg hover:bg-[#C8252C]/5 transform hover:-translate-y-1 ${stat.delay} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-[#C8252C]/10 rounded-full inline-flex items-center justify-center">
                {stat.icon}
              </div>
            </div>

            <div className="relative">
              <div className="text-3xl sm:text-4xl font-bold text-[#96080B] mb-1 transition-all duration-700">
                {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
                <span className="text-xl sm:text-2xl">{stat.suffix}</span>
              </div>
              {/* Animated underline */}
              <div className="h-0.5 w-0 bg-[#C8252C] mx-auto transition-all duration-1000 group-hover:w-full"></div>
            </div>

            <div className="text-sm text-gray-600 mt-2">{stat.label}</div>

            {/* Decorative dots */}
            <div className="flex justify-center mt-3 space-x-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-[#C8252C]/30"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
