import React from 'react';
import { FaPhoneAlt, FaAmbulance, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaClock, FaHeart, FaArrowUp } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
      
    

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <img className='h-16 object-contain' src='/logo-am2.jpg' alt="MediCare Ambulance Logo" />
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Providing emergency medical services with compassion, speed, and professionalism. 
              Your trusted partner in critical moments.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/medicareambulance" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110">
                <FaFacebook className="text-lg" />
              </a>
              
              <a href="https://www.instagram.com/medicareambulance" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-all duration-300 transform hover:scale-110">
                <FaInstagram className="text-lg" />
              </a>
            
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5 relative pb-2">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', link: '/about' },
                { name: 'Our Services', link: '/services' },
                { name: 'Emergency Response', link: '/contact' },
                { name: 'Blog', link: '/blog' }
              ].map((item, index) => (
                <li key={index}>
                  <Link to={item.link} className="text-gray-300 hover:text-white transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-5 relative pb-2">
              Our Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { text: 'Funeral Services', link: '/services'},
                { text: 'Funeral Ceremony', link: '/services'},
                { text: 'Transportation Services', link: '/services'},
                { text: 'Pandit for Funeral', link: '/services'},
                { text: 'Freezer Box', link: '/services'},
              ].map((service, index) => (
                <li key={index} className="group">
                  <Link to={service.link} className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-5 relative pb-2">
              Contact Information
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500"></span>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FaMapMarkerAlt className="text-sm text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-300">Galaxy Diamond Plaza</p>
                  <p className="text-gray-300">Sec-4, Greater Noida, UP 201009</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaPhoneAlt className="text-sm text-blue-400" />
                </div>
                <a href="tel:5551234567" className="text-gray-300 hover:text-white transition-colors">
                  (+91) 9311974035
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-sm text-blue-400" />
                </div>
                <a href="mailto:emergency@medicareambulance.com" className="text-gray-300 hover:text-white transition-colors">
                  noidafreezerbox137@gmail.com
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FaClock className="text-sm text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-300">24/7 Emergency Service</p>
                  <p className="text-gray-300">Office: Open 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 py-6 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
           <a href='https://deboxtechnology.com/'>   <p className="text-gray-400 text-sm">
                &copy; Developed by Debox Technology. All rights reserved.
              </p></a>
            </div>
            
          
            
        
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;