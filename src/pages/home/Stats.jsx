import { useState, useEffect } from 'react';

const StatsBar = () => {
  const [responseTime, setResponseTime] = useState(0);
  const [livesSaved, setLivesSaved] = useState(0);
  const [transportUnits, setTransportUnits] = useState(0);
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
      icon: '⏱️',
      delay: 'delay-100'
    },
    {
      value: livesSaved,
      suffix: '+',
      label: 'Bodies Preserved',
      icon: '🕊️',
      delay: 'delay-200'
    },
    {
      value: '24/7',
      suffix: '',
      label: 'Always Available',
      icon: '📅',
      delay: 'delay-300'
    },
    {
      value: transportUnits,
      suffix: '+',
      label: 'Transport Vehicles Ready',
      icon: '🚐',
      delay: 'delay-400'
    }
  ];

  return (
    <div className="relative bg-gray-100 py-12 px-4 overflow-hidden">
      {/* Simple Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gray-300 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gray-400 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Statistics</h2>
          <div className="w-24 h-1 bg-gray-800 mx-auto rounded-full"></div>
        </div>

        {/* Stats Container with Timeline Design */}
        <div className="relative">
          {/* Timeline Line for Desktop */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 transform -translate-y-1/2 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-center transition-all duration-700 ${stat.delay} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              >
            
                
                {/* Stat Card */}
                <div className="bg-white rounded-xl shadow-lg p-6 w-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                  {/* Icon Container */}
                  <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 text-2xl">
                    {stat.icon}
                  </div>
                  
                  {/* Value */}
                  <div className="text-3xl font-bold text-gray-800 text-center mb-1">
                    {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
                    <span className="text-xl">{stat.suffix}</span>
                  </div>
                  
                  {/* Label */}
                  <div className="text-sm text-gray-600 text-center">{stat.label}</div>
                  
                  {/* Hover Effect Line */}
                  <div className="h-0.5 w-0 bg-gray-800 mx-auto mt-3 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex justify-center mt-12">
          <div className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
            Trusted by thousands of families
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBar;