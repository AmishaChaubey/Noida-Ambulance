import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, AlertCircle, ChevronDown, Send, User, MessageSquare, PhoneCall } from 'lucide-react';
import { IoBookOutline } from "react-icons/io5";

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactInfo = [
    {
      icon: PhoneCall,
      title: '24/7 Support Line',
      detail: '+91 9311974035',
      subdDetail: 'Available Round the Clock',
      color: 'from-gray-700 to-gray-900'
    },
    {
      icon: Mail,
      title: 'Email Support',
      detail: 'noidafreezerbox137@gmail.com',
      subdDetail: 'Quick Response Guaranteed',
      color: 'from-gray-700 to-gray-900'
    },
    {
      icon: MapPin,
      title: 'Our Location',
      detail: 'Galaxy Diamond Plaza',
      subdDetail: 'Sec-4, Greater Noida, UP 201009',
      color: 'from-gray-700 to-gray-900'
    }
  ];

  const faqs = [
    {
      question: 'What freezer box sizes do you offer?',
      answer: 'We provide multiple freezer box sizes to accommodate different needs - from compact 4ft boxes for home use to larger 6ft and 7ft commercial-grade units. All our boxes maintain optimal preservation temperatures and are hygienically maintained.'
    },
    {
      question: 'How quickly can you deliver a freezer box?',
      answer: 'We offer same-day delivery across Noida, Greater Noida, and Delhi NCR. Our 24/7 service ensures that freezer boxes reach you within 2-4 hours of your call, depending on your location. Emergency requests are prioritized.'
    },
    {
      question: 'What is included in the rental service?',
      answer: 'Our rental includes delivery, installation, temperature monitoring, and pickup. Each freezer box comes thoroughly sanitized with backup power support. We also provide 24/7 technical assistance throughout the rental period.'
    },
    {
      question: 'Do you serve areas outside Greater Noida?',
      answer: 'Yes, we serve Greater Noida, Noida, Ghaziabad, Delhi, Faridabad, and surrounding NCR regions. For locations beyond our standard service area, please contact us to discuss availability and transportation arrangements.'
    },
    {
      question: 'What temperature do the freezer boxes maintain?',
      answer: 'Our freezer boxes maintain a consistent temperature between -10°C to -25°C, ensuring proper preservation. Each unit is equipped with digital temperature displays and automated alerts for any temperature fluctuations.'
    },
    {
      question: 'Are the freezer boxes regularly sanitized?',
      answer: 'Absolutely. Every freezer box undergoes thorough sanitization using hospital-grade disinfectants before and after each use. We follow strict hygiene protocols and provide sanitization certificates with each rental.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major payment methods including cash, UPI, credit/debit cards, and online bank transfers. Payment can be made at the time of delivery or pickup based on your preference.'
    },
    {
      question: 'Is there a minimum rental period?',
      answer: 'We offer flexible rental periods starting from 24 hours. Whether you need the freezer box for a day or several weeks, we can accommodate your requirements with transparent pricing for each duration.'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.subject && formData.message) {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
<div className="relative overflow-hidden text-white mt-15 h-96 md:h-[500px]">
  {/* Background Image with Parallax Effect */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-fixed"
    style={{ backgroundImage: "url('/banner6.png')" }}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/70 to-transparent"></div>
  </div>

  <div
    className={`relative max-w-7xl mx-auto px-6 h-full flex items-center transform transition-all duration-1000 ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    }`}
  >
    <div className="w-full text-center">
 

      <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif leading-tight drop-shadow-lg">
        Contact Us
      </h1>
      <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10 drop-shadow">
        We’re Here to Help—Contact Us Anytime
      </p>
      
    </div>
  </div>

</div>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className={`group bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg p-8 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border border-gray-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{transitionDelay: `${index * 100}ms`}}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{info.title}</h3>
                <p className="text-base font-semibold text-gray-800 mb-2">{info.detail}</p>
                <p className="text-sm text-gray-600">{info.subdDetail}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Form & Map Section */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-10 border border-gray-100 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Send Us a Message</h2>
            <p className="text-gray-600 mb-8">We'll respond within 24 hours</p>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-gray-800 transition-all"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-gray-800 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Phone Number</label>
                <div className="relative">
                  <PhoneCall className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-gray-800 transition-all"
                    placeholder="+91 9999999999"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Subject</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-gray-800 transition-all"
                    placeholder="What can we help you with?"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-gray-800 transition-all resize-none"
                    placeholder="Please describe your requirements..."
                  ></textarea>
                </div>
              </div>

              <div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-4 px-6 rounded-xl font-semibold hover:from-gray-900 hover:to-black transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className={`bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="p-6 bg-gradient-to-r from-gray-800 to-gray-900">
              <h3 className="text-2xl font-bold text-white mb-2">Visit Our Office</h3>
              <p className="text-gray-300 text-sm">Galaxy Diamond Plaza, Sector-4, Greater Noida</p>
            </div>
            <div className="h-full w-full min-h-[400px] bg-gray-200">
              <div className="w-full h-full">
                <iframe
                  title="PR Deadbody And FreezerBox Location"
                  src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Shop%20no.1%20near%20Neo%20Hospital%20Block-D%20Sector-50%20Noida%20Up-201303+(PR%20Deadbody%20And%20FreezerBox%20)&t=p&z=15&ie=UTF8&iwloc=B&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className='text-gray-800'>Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about our freezer box rental services
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-500 hover:shadow-xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{transitionDelay: `${index * 50}ms`}}
            >
              <button
                className="w-full p-6 text-left flex justify-between items-start gap-4 hover:bg-gray-50 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenFaq(openFaq === index ? null : index);
                }}
              >
                <h3 className="font-bold text-lg text-gray-900 flex-1">{faq.question}</h3>
                <ChevronDown 
                  className={`w-6 h-6 text-gray-800 transform transition-transform flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <div 
                className={`px-6 pb-6 text-gray-700 leading-relaxed overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}