import { Link } from "react-router-dom";
import { Phone, AlertCircle, Clock, Shield, Heart } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative bg-gradient-to-br from-white via-[#f0fbff] to-white py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0097b2 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#0097b2]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#0097b2]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-[#e6f7fb]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Left Side - Message */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center bg-[#e6f7fb] text-[#0097b2] px-4 py-2 rounded-full text-sm font-bold mb-6">
                <AlertCircle className="w-4 h-4 mr-2 animate-pulse" />
                24/7 EMERGENCY RESPONSE
              </div>
              
              <h2 className="text-3xl md:text-4xl font-black text-[#0097b2] mb-4">
                Need Emergency <span className="text-gray-900">Assistance?</span>
              </h2>
              
              <p className="text-gray-600 text-lg mb-6 max-w-lg">
                Professional ambulance services available 24/7. Call us now for immediate help during critical moments.
              </p>

              {/* Key Features */}
              <div className="flex flex-wrap gap-4 mb-6 justify-center lg:justify-start">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-[#0097b2] mr-2" />
                  <span className="text-sm text-gray-700">5-10 min response</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-[#0097b2] mr-2" />
                  <span className="text-sm text-gray-700">Professional team</span>
                </div>
                <div className="flex items-center">
                  <Heart className="w-5 h-5 text-[#0097b2] mr-2" />
                  <span className="text-sm text-gray-700">Compassionate care</span>
                </div>
              </div>
            </div>

            {/* Right Side - Emergency Number */}
            <div className="flex flex-col items-center lg:items-end gap-4">
              <div className="bg-gradient-to-r from-[#0097b2] to-[#007a95] rounded-2xl p-6 text-white text-center shadow-xl transform lg:scale-110">
                <p className="text-sm font-medium mb-2 opacity-90">Emergency Helpline</p>
                <a href="tel:+919917162727" className="text-3xl font-bold hover:scale-105 transition-transform inline-block">
                  +91 9917162727
                </a>
              </div>
              
              <a href="tel:+919917162727" className="bg-white hover:bg-gray-50 text-[#0097b2] border-2 border-[#0097b2] font-bold py-3 px-6 rounded-full transition-all flex items-center shadow-md hover:shadow-xl">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>

          {/* Bottom Trust Bar */}
          <div className="mt-8 pt-6 border-t border-[#e6f7fb]">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span>Available 24/7</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span>5000+ Families Served</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span>15+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}