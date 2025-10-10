import React from 'react';
import { FaPhoneAlt, FaAmbulance, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaClock } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-800"></div>
      
      {/* Emergency Contact Banner */}
      <div className="bg-gradient-to-r from-red-700 to-red-900 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <FaAmbulance className="text-3xl animate-pulse text-white" />
              <h3 className="text-xl font-bold text-white">EMERGENCY CONTACT</h3>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:5551234567" className="flex items-center gap-2 bg-white text-red-800 px-4 py-2 rounded-full font-bold hover:bg-red-50 transition-all duration-300 transform hover:scale-105 shadow-md">
                <FaPhoneAlt className="text-lg" />
                <span>+91 9266769458</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex flex-col items-start gap-3 mb-6">
               <Link to="/"><img className='h-24 object-contain' src='/logo3.png' alt="MediCare Ambulance Logo" /></Link>
            </div>
            <p className="text-gray-600 mb-6">
              Providing emergency medical services with compassion, speed, and professionalism. 
              Your trusted partner in critical moments.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/medicareambulance" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#C8252C] transition-all duration-300 transform hover:scale-110">
                <FaFacebook className="text-xl" />
              </a>
              <a href="https://www.twitter.com/medicareambulance" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#C8252C] transition-all duration-300 transform hover:scale-110">
                <FaTwitter className="text-xl" />
              </a>
              <a href="https://www.instagram.com/medicareambulance" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#C8252C] transition-all duration-300 transform hover:scale-110">
                <FaInstagram className="text-xl" />
              </a>
              <a href="https://www.linkedin.com/company/medicareambulance" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#C8252C] transition-all duration-300 transform hover:scale-110">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#C8252C] relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C8252C] transition-all duration-300 group-hover:w-full"></span>
            </h4>
            <ul className="space-y-2">
              {[
                { name: 'About Us', link: '/about' },
                { name: 'Our Services', link: '/services' },
                { name: 'Emergency Response', link: '/contact' },
               
                { name: 'Blog', link: '/blog' }
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="text-gray-600 hover:text-[#C8252C] transition-colors relative inline-block group">
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C8252C] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#C8252C] relative inline-block">
              Our Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C8252C] transition-all duration-300 group-hover:w-full"></span>
            </h4>
            <ul className="space-y-3">
              {[
                {icon: <FaAmbulance />, text: 'Normal Ambulance Services', link: '/services'},
                {icon: <FaAmbulance />, text: 'Oxygen Ambulance Services', link: '/services'},
                {icon: <FaAmbulance />, text: 'ICU Ventilator Ambulances', link: '/services'},
                {icon: <FaAmbulance />, text: 'Dead Body Transport Ambulance', link: '/services'},
                {icon: <FaAmbulance />, text: 'Dead Body Freezer Box Ambulance', link: '/services'},
                {icon: <FaAmbulance />, text: 'Dead Body Freezer Box on Rent', link: '/services'},
              ].map((service, index) => (
                <li key={index} className="flex items-center gap-2 group">
                  <span className="text-[#C8252C] transition-transform duration-300 group-hover:translate-x-1">
                    {service.icon}
                  </span>
                  <a href={service.link} className="text-gray-600 group-hover:text-[#C8252C] transition-colors">
                    {service.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#C8252C] relative inline-block">
              Contact Information
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C8252C] transition-all duration-300 group-hover:w-full"></span>
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 group">
                <span className="text-[#C8252C] mt-1 transition-transform duration-300 group-hover:translate-y-1">
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <p className="text-gray-600 group-hover:text-[#C8252C] transition-colors">SFD 240, Galaxy Diamond Plaza</p>
                  <p className="text-gray-600 group-hover:text-[#C8252C] transition-colors">Sec-4, Greater Noida,UP 201009</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <span className="text-[#C8252C] transition-transform duration-300 group-hover:rotate-12">
                  <FaPhoneAlt />
                </span>
                <p className="text-gray-600 group-hover:text-[#C8252C] transition-colors">
                  <a href="tel:5551234567">(+91) 9266769458</a>
                </p>
              </div>
              <div className="flex items-center gap-3 group">
                <span className="text-[#C8252C] transition-transform duration-300 group-hover:scale-110">
                  <FaEnvelope />
                </span>
                <p className="text-gray-600 group-hover:text-[#C8252C] transition-colors">
                  <a href="mailto:emergency@medicareambulance.com">nihal@deadbodyfreezerboxonrent.com</a>
                </p>
              </div>
              <div className="flex items-start gap-3 group">
                <span className="text-[#C8252C] mt-1 transition-transform duration-300 group-hover:rotate-12">
                  <FaClock />
                </span>
                <div>
                  <p className="text-gray-600 group-hover:text-[#C8252C] transition-colors">24/7 Emergency Service</p>
                  <p className="text-gray-600 group-hover:text-[#C8252C] transition-colors">Office: Open 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className=" py-6 relative">
        {/* Decorative element */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-800"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
           <a href='https://deboxtechnology.com/'> <div className="text-center md:text-left text-gray-400">
              <p className="text-sm">&copy; 2025 Debox Technology. All rights reserved.</p>
            </div></a>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
              <a href="/privacy-policy" className="hover:text-white transition-colors relative inline-block group">
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <span>|</span>
              <a href="/terms-of-service" className="hover:text-white transition-colors relative inline-block group">
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
