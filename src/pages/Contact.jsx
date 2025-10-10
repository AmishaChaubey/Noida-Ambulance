import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, AlertCircle, ChevronDown, Send, User, MessageSquare, PhoneCall } from 'lucide-react';

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
      icon: Phone,
      title: 'Emergency Line',
      detail: '911',
      subdDetail: 'Available 24/7',
      color: 'from-[#96080B] to-[#C8252C]'
    },
    {
      icon: PhoneCall,
      title: 'Non-Emergency',
      detail: '+91 9266769458',
      subdDetail: 'Mon-Fri, 8AM-6PM',
      color: 'from-[#96080B] to-[#C8252C]'
    },
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'nihal@deadbodyfreezerboxonrent.com',
      subdDetail: 'Response within 24hrs',
      color: 'from-[#96080B] to-[#C8252C]'
    },
    {
      icon: MapPin,
      title: 'Location',
      detail: 'SFD 240,Galaxy Diamond Plaza,',
      subdDetail: 'Sector 4,Greter Noida,UP 201009',
      color: 'from-[#96080B] to-[#C8252C]'
    }
  ];

  const faqs = [
    {
      question: 'When should I call 911?',
      answer: 'Call 911 immediately for life-threatening emergencies including chest pain, difficulty breathing, severe bleeding, loss of consciousness, severe burns, poisoning, or any situation where immediate medical attention is required.'
    },
    {
      question: 'What is the average response time?',
      answer: 'Our average response time is 5-8 minutes for emergency calls. Response times may vary based on your location, traffic conditions, and the severity of the emergency. We prioritize calls based on medical urgency.'
    },
    {
      question: 'Do you accept insurance?',
      answer: 'Yes, we accept most major insurance providers including Medicare and Medicaid. We recommend contacting your insurance company to verify coverage. Our billing department can also assist you with insurance questions and claims.'
    },
    {
      question: 'Can I request a specific hospital?',
      answer: 'In non-life-threatening situations, we will do our best to accommodate your hospital preference. However, in critical emergencies, we transport to the nearest appropriate facility to ensure you receive immediate care.'
    },
    {
      question: 'What should I prepare before the ambulance arrives?',
      answer: 'Have the patient\'s medical information ready, including medications, allergies, and medical history. Unlock doors, turn on outside lights if at night, and keep pets secured. Have someone available to meet the ambulance crew.'
    },
    {
      question: 'Do you provide non-emergency medical transportation?',
      answer: 'Yes, we offer non-emergency medical transportation for scheduled appointments, hospital discharges, and inter-facility transfers. Contact our non-emergency line to schedule transportation in advance.'
    },
    {
      question: 'What equipment is in your ambulances?',
      answer: 'Our ambulances are equipped with advanced life support equipment including defibrillators, oxygen, cardiac monitors, IV supplies, medications, and specialized rescue equipment. All vehicles meet or exceed national standards.'
    },
    {
      question: 'Are your paramedics certified?',
      answer: 'Yes, all our emergency medical personnel are fully certified and licensed. Our team includes EMTs, Advanced EMTs, and Paramedics who undergo continuous training and education to maintain the highest standards of care.'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  useEffect(() => window.scrollTo(0, 0), []);
 

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#96080B] to-[#C8252C] text-white mt-25">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className={`relative max-w-7xl mx-auto px-6 py-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6 animate-blink">
              <Phone className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">Get In Touch</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Have questions? We're here to help 24/7. Reach out anytime.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 26.7C840 33.3 960 46.7 1080 50C1200 53.3 1320 46.7 1380 43.3L1440 40V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </div>

    
      <style jsx>{`
        @keyframes blink {
          0%, 50%, 100% {
            opacity: 1;
          }
          25%, 75% {
            opacity: 0.5;
          }
        }
        .animate-blink {
          animation: blink 5s infinite;
        }
      `}</style>
  

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{transitionDelay: `${index * 100}ms`}}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-sm font-semibold text-[#C8252C] mb-1">{info.detail}</p>
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
          <div className={`bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C8252C] focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C8252C] focus:border-transparent"
                    placeholder="email@.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <div className="relative">
                  <PhoneCall className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C8252C] focus:border-transparent"
                    placeholder="+91 99XXXXXXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C8252C] focus:border-transparent"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C8252C] focus:border-transparent"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#96080B] to-[#C8252C] text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Map Section */}
          <div className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="h-full w-full min-h-[400px] bg-gray-200 flex items-center justify-center">
              <div className="w-full h-full">
                <iframe
                  title="Medical Center Map"
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d163944.04371609012!2d77.33969649000258!3d28.589913986991167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390cee4b71461185%3A0xd1989111c49e52fa!2sC%201A%2C%20Haibatpur%2C%20Sector%204%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201016!3m2!1d28.606316399999997!2d77.4320992!5e0!3m2!1sen!2sin!4v1760015752682!5m2!1sen!2sin" 
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-black mb-4">Frequently <span className='text-red-900'>Asked Questions</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our ambulance services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{transitionDelay: `${index * 50}ms`}}
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center"
                onClick={(e) => {
                  e.preventDefault(); // Prevent scroll to top
                  setOpenFaq(openFaq === index ? null : index);
                }}
              >
                <h3 className="font-bold text-lg text-gray-900">{faq.question}</h3>
                <ChevronDown 
                  className={`w-5 h-5 text-[#C8252C] transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <div 
                className={`px-6 pb-6 text-gray-600 overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
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
