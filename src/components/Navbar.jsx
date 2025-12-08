import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Heart, Mail, MapPin, Clock, Shield, Activity } from 'lucide-react';

export default function FuneralNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll for navbar styling
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    serviceType: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost/vinay ambulance/backend/send-mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          address: formData.address,
          subject: `Service Request - ${formData.serviceType || "General Inquiry"}`,
          message:
            `New Service Request:\n\n` +
            `Name: ${formData.name}\n` +
            `Phone: ${formData.phone}\n` +
            `Email: ${formData.email}\n` +
            `Address: ${formData.address}\n` +
            `Service Type: ${formData.serviceType}\n\n` +
            `Message: ${formData.message}`,
        }),
      });

      const data = await res.json();
      console.log("Service modal response:", data);

      if (data.success) {
        alert("✅ Service request sent successfully! We will contact you shortly.");
        setFormData({ name: "", phone: "", email: "", address: "", serviceType: "", message: "" });
        setIsModalOpen(false);
      } else {
        alert("❌ " + data.message);
      }

    } catch (error) {
      console.error("Service form submission error:", error);
      alert("⚠️ Something went wrong. Please try again later.");
    }
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-[#0097b2] to-[#007a95] text-white text-xs border-b border-[#e6f7fb] hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              <span className="text-xs sm:text-sm">+91 9917162727</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="w-3 h-3" />
              <span className="text-xs sm:text-sm">info@noidaambulanceservice.online</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            <span className="text-xs sm:text-sm">Available 24/7</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">

          <Link to="/" className="flex items-center gap-2">
            <div className="w-32 h-16 sm:w-48 sm:h-20 overflow-hidden">
              <img src="/Noida-logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <Link to="/" onClick={() => setActiveLink('home')}
              className={`text-sm font-medium transition-colors ${
                activeLink === 'home' ? 'text-[#0097b2]' : 'text-gray-600 hover:text-[#0097b2]'
              }`}>
              Home
            </Link>

            <Link to="/about" onClick={() => setActiveLink('about')}
              className={`text-sm font-medium transition-colors ${
                activeLink === 'about' ? 'text-[#0097b2]' : 'text-gray-600 hover:text-[#0097b2]'
              }`}>
              About Us
            </Link>

            <Link to="/services" onClick={() => setActiveLink('services')}
              className={`text-sm font-medium transition-colors ${
                activeLink === 'services' ? 'text-[#0097b2]' : 'text-gray-600 hover:text-[#0097b2]'
              }`}>
              Services
            </Link>

            <Link to="/blog" onClick={() => setActiveLink('blog')}
              className={`text-sm font-medium transition-colors ${
                activeLink === 'blog' ? 'text-[#007a95]' : 'text-gray-600 hover:text-[#007a95]'
              }`}>
              Blog
            </Link>

            <Link to="/contact" onClick={() => setActiveLink('contact')}
              className={`text-sm font-medium transition-colors ${
                activeLink === 'contact' ? 'text-[#0097b2]' : 'text-gray-600 hover:text-[#0097b2]'
              }`}>
              Contact
            </Link>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-[#0097b2] to-[#007a95] text-white px-3 sm:px-5 py-2 rounded-lg flex items-center gap-2 shadow-md text-xs sm:text-sm hover:shadow-lg transition-all"
            >
              <Phone className="w-4 h-4" /> <span className="hidden sm:inline">Book Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-[#0097b2] p-1 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white transition-all duration-300 overflow-hidden border-b border-[#e6f7fb] ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 py-4 space-y-2">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-[#0097b2] py-2 transition-colors">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-[#0097b2] py-2 transition-colors">About Us</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-[#0097b2] py-2 transition-colors">Services</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-[#0097b2] py-2 transition-colors">Blog</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-[#0097b2] py-2 transition-colors">Contact</Link>

          <button
            onClick={() => { setIsModalOpen(true); setIsOpen(false); }}
            className="w-full bg-gradient-to-r from-[#0097b2] to-[#007a95] text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 shadow-md mt-4 hover:shadow-lg transition-all"
          >
            <Phone className="w-5 h-5" /> Book Now
          </button>
        </div>
      </div>

      {/* MODAL WITH IMPROVED DESIGN */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-2 sm:p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[95vh] flex flex-col overflow-hidden">

            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#0097b2] to-[#007a95] text-white p-4 sm:p-6 flex justify-between items-center flex-shrink-0">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
                <h3 className="text-lg sm:text-xl font-semibold">Request Service</h3>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="text-white hover:bg-white/20 rounded-full p-1 transition-colors">
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 space-y-4 overflow-y-auto flex-grow">
              {/* Emergency Info Bar */}
              <div className="bg-[#e6f7fb] rounded-lg p-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0097b2] to-[#007a95] rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0097b2]">24/7 Emergency Service</p>
                  <p className="text-xs text-gray-600">We respond within 5-10 minutes</p>
                </div>
              </div>

              {/* Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 text-sm focus:ring-2 focus:ring-[#0097b2] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 text-sm focus:ring-2 focus:ring-[#0097b2] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg py-2 px-3 text-sm focus:ring-2 focus:ring-[#0097b2] focus:border-transparent transition-all"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <textarea
                  name="address"
                  rows={2}
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg py-2 px-3 text-sm resize-none focus:ring-2 focus:ring-[#0097b2] focus:border-transparent transition-all"
                />
              </div>

              {/* Service type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg py-2 px-3 text-sm focus:ring-2 focus:ring-[#0097b2] focus:border-transparent transition-all"
                >
                  <option value="">Select Service</option>
                  <option value="freezer">Freezer Box</option>
                  <option value="funeral">Funeral Arrangements</option>
                  <option value="cremation">Cremation Support</option>
                  <option value="transport">Transportation</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Additional Info</label>
                <textarea
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg py-2 px-3 text-sm resize-none focus:ring-2 focus:ring-[#0097b2] focus:border-transparent transition-all"
                />
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-4 pt-2">
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4 text-[#0097b2]" />
                  <span className="text-xs text-gray-600">Professional Team</span>
                </div>
                <div className="flex items-center gap-1">
                  <Activity className="w-4 h-4 text-[#0097b2]" />
                  <span className="text-xs text-gray-600">Rapid Response</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2 flex-shrink-0">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 border border-gray-300 py-2 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>

                <button
                  onClick={handleSubmit}
                  className="flex-1 py-2 rounded-lg text-white bg-gradient-to-r from-[#0097b2] to-[#007a95] hover:shadow-lg transition-all"
                >
                  Submit
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </nav>
  );
}