import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import TopBar from './TopBar';

export default function AmbulanceNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    emergency: '',
  });

  const linkClass = ({ isActive }) =>
    `font-medium transition-colors duration-200 ${
      isActive ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
    }`;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Emergency request:', formData);
    alert('Ambulance dispatched! We\'ll contact you shortly.');
    setIsModalOpen(false);
    setFormData({ name: '', phone: '', address: '', emergency: '' });
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      {/* Emergency TopBar */}
      <TopBar />

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logoo.png"
              alt="Ambulance Logo"
              className="w-36 sm:w-44 md:w-52 lg:w-60 h-auto"
            />
          </Link>

          {/* Desktop & Tablet Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About Us</NavLink>
            <NavLink to="/services" className={linkClass}>Services</NavLink>
            <NavLink to="/blog" className={linkClass}>Blog</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>

            {/* Call Button */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#96080B] text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full font-semibold hover:bg-red-700 transition-all duration-200 shadow-md hover:shadow-xl flex items-center gap-2"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5 animate-ring" />
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-red-600 transition-colors duration-200"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 shadow-md transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-red-600 font-medium"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-red-600 font-medium"
          >
            About Us
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-red-600 font-medium"
          >
            Services
          </NavLink>
          <NavLink
            to="/blog"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-red-600 font-medium"
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-red-600 font-medium"
          >
            Contact
          </NavLink>

          {/* Mobile CTA Button */}
          <button 
            onClick={() => {
              setIsModalOpen(true);
              setIsOpen(false);
            }}
            className="w-full bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-200 shadow-md flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5 animate-ring" />
            Book Ambulance Now
          </button>
        </div>
      </div>

      {/* Phone Icon Animation */}
      <style jsx>{`
        @keyframes ring {
          0%, 20%, 100% { transform: rotate(0deg); }
          10% { transform: rotate(-15deg); }
          15% { transform: rotate(15deg); }
        }
        .animate-ring {
          display: inline-block;
          animation: ring 1s ease-in-out infinite;
        }
      `}</style>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-900">Request Emergency Ambulance</h3>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Pickup Address</label>
                    <textarea
                      name="address"
                      id="address"
                      rows={2}
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="emergency" className="block text-sm font-medium text-gray-700">Emergency Details</label>
                    <textarea
                      name="emergency"
                      id="emergency"
                      rows={3}
                      required
                      value={formData.emergency}
                      onChange={handleInputChange}
                      placeholder="Briefly describe the emergency situation..."
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500"
                    ></textarea>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Dispatch Ambulance
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}