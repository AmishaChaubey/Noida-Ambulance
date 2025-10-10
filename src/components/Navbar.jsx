import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import TopBar from './TopBar';

export default function AmbulanceNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `font-medium transition-colors duration-200 ${
      isActive ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
    }`;

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      {/* Emergency Banner */}
      <TopBar />

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <Link to="/">
              <img src="/logo3.png" alt="Ambulance Logo" className="w-32 sm:w-40 h-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About Us</NavLink>
            <NavLink to="/services" className={linkClass}>Services</NavLink>
            <NavLink to="/blog" className={linkClass}>Blog</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>

            <button className="bg-[#96080B] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2 text-sm sm:text-base">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 animate-ring" />
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-red-600 transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <NavLink to="/" className="block text-gray-700 hover:text-red-600 font-medium py-2" onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/about" className="block text-gray-700 hover:text-red-600 font-medium py-2" onClick={() => setIsOpen(false)}>About Us</NavLink>
            <NavLink to="/services" className="block text-gray-700 hover:text-red-600 font-medium py-2" onClick={() => setIsOpen(false)}>Services</NavLink>
            <NavLink to="/blog" className="block text-gray-700 hover:text-red-600 font-medium py-2" onClick={() => setIsOpen(false)}>Blog</NavLink>
            <NavLink to="/contact" className="block text-gray-700 hover:text-red-600 font-medium py-2" onClick={() => setIsOpen(false)}>Contact</NavLink>

            {/* Mobile Book Ambulance Button with animated icon */}
 <button className="w-full bg-red-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-200 shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base">
  <Phone className="w-4 h-4 sm:w-5 sm:h-5 animate-ring" />
  Book Ambulance Now
</button>

<style jsx>{`
  @keyframes ring {
    0%, 20%, 100% { transform: rotate(0deg); }
    10% { transform: rotate(-15deg); }
    15% { transform: rotate(15deg); }
  }

  .animate-ring {
    display: inline-block;
    animation: ring 1s ease-in-out infinite;
    /* har 1s me hilna start hoga, phir rest me pause */
  }
`}</style>


          </div>
        </div>
      )}
    </nav>
  );
}
