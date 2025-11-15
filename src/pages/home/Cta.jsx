import { Link } from "react-router-dom";

export default function CallToAction() {
  const colors = {
    primary: '#FFFFFF',
    secondary: '#F3F4F6',
    accent: '#E5E7EB',
    glow: 'rgba(255, 255, 255, 0.25)',
    dark: '#111827',
    light: '#FFFFFF',
    medium: '#D1D5DB'
  };

  return (
    <section
      className="relative w-full overflow-hidden py-8 transition-all duration-500"
      style={{
        background: `linear-gradient(135deg, #1F2937 0%, #374151 100%)`,
      }}
    >
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, ${colors.primary} 0%, transparent 50%)`,
          }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 80% 80%, ${colors.primary} 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left side visual */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="relative group">

              <div
                className="absolute -inset-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"
                style={{ backgroundColor: colors.glow }}
              ></div>

              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <img
                  className="w-48 h-48 lg:w-56 lg:h-56 object-contain transition-transform duration-500 group-hover:scale-105"
                  src="/blog-img/10.jpg"
                  alt="Freezer Box Service"
                />
              </div>

              <div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-gray-800 font-bold text-sm shadow-md"
                style={{ backgroundColor: colors.primary }}
              >
                🕊️ Dignity Preserved
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="w-full lg:w-3/5 text-white flex flex-col items-center lg:items-start text-center lg:text-left">

            <div className="inline-flex items-center px-4 py-1 rounded-full text-xs font-bold bg-white/10 backdrop-blur-md border border-white/30 mb-3">
              <span className="w-2 h-2 rounded-full mr-2 bg-white animate-pulse"></span>
              24/7 PRESERVATION SERVICE
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3">
              <span className="text-white">Dignified</span> Preservation Services
            </h2>

            <p className="text-gray-300 text-base leading-relaxed mb-5 max-w-lg">
              Compassionate freezer box services ensuring dignified preservation with utmost respect and care.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link to="/services">
                <button
                  className="group px-6 py-2.5 rounded-lg font-bold text-gray-800 transition-all duration-500 transform hover:scale-105 flex items-center justify-center w-full sm:w-auto"
                  style={{
                    backgroundColor: colors.primary,
                    boxShadow: `0 4px 15px ${colors.glow}`
                  }}
                >
                  Learn More
                  <svg
                    className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>

              <Link to="/contact">
                <button
                  className="group px-6 py-2.5 rounded-lg font-bold transition-all duration-500 transform hover:scale-105 border-2 flex items-center justify-center w-full sm:w-auto"
                  style={{
                    borderColor: colors.primary,
                    color: colors.primary,
                    backgroundColor: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = colors.primary;
                    e.target.style.color = '#1F2937';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = colors.primary;
                  }}
                >
                  📅 Book Service
                </button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex gap-4 mt-4 text-gray-300 text-xs">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Certified
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                24/7 Available
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                Professional
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
