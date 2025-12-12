import React from 'react';
import {
    FaPhoneAlt, FaAmbulance, FaMapMarkerAlt, FaEnvelope,
    FaFacebook, FaTwitter, FaInstagram, FaLinkedin,
    FaClock, FaHeart, FaArrowUp, FaSnowflake, FaWhatsapp
} from 'react-icons/fa';
import { Link } from "react-router-dom";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Define the quick links with their specific paths
    const quickLinks = [
        { text: 'About Us', path: '/about' },
        { text: 'Our Services', path: '/services' },
        { text: 'Contact Us', path: '/contact' },
        { text: 'Blogs', path: '/blog' },
    ];

    return (
        <footer className="bg-gray-50 text-gray-700 relative">
            {/* Emergency Banner */}
            <div className="bg-[#0097b2] py-4 px-6 shadow-md">
                <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4">
                    <div className="flex items-center text-white">
                        <FaAmbulance className="text-2xl mr-3" />
                        <span className="font-semibold text-lg">24/7 Emergency Services</span>
                    </div>
                    {/* This link uses 'tel:' and must remain an <a> tag */}
                    <a
                        href="tel:+919917162727"
                        className="bg-white text-[#0097b2] px-6 py-2 rounded-full font-bold flex items-center hover:bg-gray-100 transition-all duration-300 shadow-lg"
                    >
                        <FaPhoneAlt className="mr-2" />
                        Call Now: (+91) 9917162727
                    </a>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

                    {/* Column 1: About & Social */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="inline-block mb-5">
                            <h2 className='font-bold text-black text-2xl'>Noida Ambulance Service</h2>
                        </Link>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Reliable ambulance and mortuary services with round-the-clock compassionate support.
                        </p>
                        <div className="flex space-x-3">
                            {/* These are now Link components for internal routing */}
                            <Link to="/facebook" className="w-10 h-10 bg-white rounded-full text-[#0097b2] flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
                                <FaFacebook className="text-xl" />
                            </Link>
                            <Link to="/instagram" className="w-10 h-10 bg-white rounded-full text-[#0097b2] flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
                                <FaInstagram className="text-xl" />
                            </Link>
                            <Link to="/linkedin" className="w-10 h-10 bg-white rounded-full text-[#0097b2] flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
                                <FaLinkedin className="text-xl" />
                            </Link>
                            <Link to="/whatsapp" className="w-10 h-10 bg-white rounded-full text-[#0097b2] flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
                                <FaWhatsapp className="text-xl" />
                            </Link>
                        </div>
                    </div>

                    {/* Column 2: Links & Services */}
                    <div className="lg:col-span-1 grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-lg font-bold mb-4 text-gray-900">Quick Links</h4>
                            <ul className="space-y-2">
                                {quickLinks.map((link) => (
                                    <li key={link.path}>
                                        <Link to={link.path} className="text-gray-600 hover:text-[#0097b2] transition-colors duration-200">
                                            {link.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-4 text-gray-900">Our Services</h4>
                            <ul className="space-y-2">
                                {['Emergency Ambulance', 'Dead Body Transport', 'Freezer Box', 'Funeral Support'].map((item, index) => (
                                    <li key={index}>
                                        <Link to="/services" className="text-gray-600 hover:text-[#0097b2] transition-colors duration-200">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Column 3: Contact Info Card */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                            <h4 className="text-lg font-bold mb-4 text-gray-900">Get In Touch</h4>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <FaMapMarkerAlt className="text-[#0097b2] text-xl mt-1 mr-3 flex-shrink-0" />
                                    <p className="text-gray-600 text-sm">
                                        Shop No.04,Gali No. 06,Durga Enclave,Haibatpur,Nai Basti Dundahera,Gr.Noida,UP
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <FaPhoneAlt className="text-[#0097b2] text-xl mr-3 flex-shrink-0" />
                                    {/* This link uses 'tel:' and must remain an <a> tag */}
                                    <a href="tel:+919917162727" className="text-gray-600 hover:text-[#0097b2] transition-colors duration-200">
                                        (+91) 9917162727
                                    </a>
                                </div>
                                <div className="flex items-center">
                                    <FaEnvelope className="text-[#0097b2] text-xl mr-3 flex-shrink-0" />
                                    {/* This link uses 'mailto:' and must remain an <a> tag */}
                                    <a href="mailto:info@noidaambulanceservice.online" className="text-gray-600 hover:text-[#0097b2] transition-colors duration-200 text-sm">
                                        info@noidaambulanceservice.online
                                    </a>
                                </div>
                                <div className="flex items-center">
                                    <FaClock className="text-[#0097b2] text-xl mr-3 flex-shrink-0" />
                                    <p className="text-gray-600 text-sm">24/7 Emergency Service Available</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[#0097b2] text-white py-4">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center text-sm">
                    <p className="mb-2 md:mb-0">
                        &copy; {new Date().getFullYear()} Noida Ambulance Services. All Rights Reserved.
                    </p>
               
                </div>
            </div>

            {/* Scroll To Top Button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 w-12 h-12 bg-[#0097b2] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#007a8f] transition-all duration-300 hover:scale-110 z-50"
                aria-label="Scroll to top"
            >
                <FaArrowUp />
            </button>
        </footer>
    );
};

export default Footer;