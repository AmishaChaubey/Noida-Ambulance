import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, ChevronDown, Send, User, MessageSquare, PhoneCall, Clock, Shield, AlertCircle, CheckCircle, Truck, Thermometer, Users, HelpCircle, Home, CreditCard } from 'lucide-react';

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // Fade-in animation
  useEffect(() => setIsVisible(true), []);

  // Scroll to top on page load
  useEffect(() => window.scrollTo(0, 0), []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contactInfo = [
    {
      icon: PhoneCall,
      title: '24/7 Emergency Helpline',
      detail: '+91 9917162727',
      color: 'from-[#0097b2] to-[#007a94]',
  
    },
    {
      icon: Mail,
      title: 'Email Support',
      detail: 'info@noidaambulanceservice.online',
      color: 'from-[#0097b2] to-[#007a94]',
     
    },
    {
      icon: MapPin,
      title: 'Our Location',
      detail: ' Shop No.04,Gali No. 06,Durga Enclave,Haibatpur,Nai Basti Dundahera,Gr.Noida,UP',
      color: 'from-[#0097b2] to-[#007a94]',
    
    }
  ];

 const faqs = [
  { 
    question: 'How quickly can you arrange an ambulance service?', 
    answer: 'We provide fast ambulance service with an average response time of 20–30 minutes across Noida, Greater Noida, Ghaziabad, and Delhi NCR. Our team is available 24/7 for emergency medical transport.',
    icon: Clock
  },
  { 
    question: 'What types of ambulances are available?', 
    answer: 'We offer Basic Life Support (BLS), Advanced Life Support (ALS), ICU ambulances, dead body ambulances, and mortuary vans with freezer boxes. Each vehicle is equipped to ensure safe and professional transportation.',
    icon: Truck
  },
  { 
    question: 'What temperature do your freezer boxes maintain?', 
    answer: 'Our ambulance freezer boxes and mortuary freezers maintain a controlled temperature between -15°C to -20°C, ensuring proper preservation during transportation or home use.',
    icon: Thermometer
  },
  { 
    question: 'Do you provide freezer boxes for home use?', 
    answer: 'Yes, we provide home delivery of freezer boxes ranging from 4ft to 7ft. These are ideal for preserving the deceased at home before funeral or cremation rituals.',
    icon: Home
  },
  { 
    question: 'How long can your freezer boxes preserve the body?', 
    answer: 'Our high-quality freezer boxes can preserve the body for up to 48 hours without electricity and for an extended duration when connected to continuous power supply.',
    icon: Shield
  },
  { 
    question: 'Do you offer dead body transportation to other states?', 
    answer: 'Yes, we provide pan-India dead body transportation services by road and air ambulance, along with complete documentation support such as NOC, embalming certificate, and ID proof.',
    icon: MapPin
  },
  { 
    question: 'Are your staff trained for sensitive situations?', 
    answer: 'Absolutely. Our team is highly trained to handle emergency and deceased transportation cases with compassion, dignity, and professionalism. Your family’s comfort and privacy are our utmost priority.',
    icon: Users
  },
  { 
    question: 'What documents are required for ambulance or dead body transport?', 
    answer: 'For medical ambulance service, only ID proof is needed. For dead body transport, a death certificate, hospital release letter, and ID proof of the deceased are required.',
    icon: AlertCircle
  },
  { 
    question: 'Do you provide embalming services?', 
    answer: 'Yes, we offer certified embalming services performed by professional embalmers to ensure proper preservation of the body for long-distance transportation or ceremonies.',
    icon: CheckCircle
  },
  { 
    question: 'What payment methods do you accept?', 
    answer: 'We accept cash, UPI, credit/debit cards, and bank transfers. We also assist with medical insurance claim support for eligible ambulance services.',
    icon: CreditCard
  }
];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost/noida ambulance/backend/send-mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setFormSubmitted(true);
        setTimeout(() => setFormSubmitted(false), 5000);
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong! Please call us directly.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative min-h-[70vh] lg:min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center mt-15"
          style={{
            backgroundImage: "url('/ban/4.png')",
            transform: `translateY(${scrollY * 0.4}px)`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative min-h-[70vh] lg:min-h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-12 py-20">
          <div className="w-full max-w-4xl">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl  font-black text-white leading-tight mb-3">
              Contact Us for <br />
                Emergency Services
            
            </h1>

            <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 leading-relaxed">
              24/7 ambulance services & dead body freezer box rentals with professional care and dignity.
            </p>

     
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ---------------- CONTACT CARDS ---------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 mt-8 md:mt-12 lg:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 hover:-translate-y-3 transition-all duration-300"
              >
                <div className={`w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                </div>

                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-700 font-medium mb-1 break-words">{info.detail}</p>
                <p className="text-gray-500 text-sm">{info.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ---------------- SEND MESSAGE + MAP ---------------- */}
      <div id="contact-form" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pb-12 sm:pb-16 lg:pb-20 mt-8 md:mt-12 lg:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* FORM */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">Send Us a Message</h2>
            <p className="text-gray-600 mb-6">We'll respond within 2 hours for urgent matters</p>

            {formSubmitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                <p className="font-medium">Thank you for your message!</p>
                <p className="text-sm">We'll get back to you shortly.</p>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block font-semibold text-sm mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0097b2] focus:border-transparent"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block font-semibold text-sm mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0097b2] focus:border-transparent"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block font-semibold text-sm mb-2">Phone Number</label>
                <div className="relative">
                  <PhoneCall className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0097b2] focus:border-transparent"
                    placeholder="+91 99999 99999"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Service Type */}
              <div>
                <label className="block font-semibold text-sm mb-2">Service Required</label>
                <div className="relative">
                  <HelpCircle className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    name="service"
                    className="w-full pl-12 pr-10 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0097b2] focus:border-transparent appearance-none"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="ambulance">Emergency Ambulance</option>
                    <option value="mortuary">Mortuary Ambulance</option>
                    <option value="freezer-box">Freezer Box Rental</option>
                    <option value="embalming">Embalming Services</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block font-semibold text-sm mb-2">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    name="message"
                    rows="4"
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-[#0097b2] focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0097b2] to-[#007a94] text-white py-4 rounded-xl font-semibold hover:opacity-90 transition flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* MAP */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-[#0097b2] to-[#007a94]">
              <h3 className="text-xl lg:text-2xl text-white font-bold">Visit Our Office</h3>
              <p className="text-gray-200 text-sm mt-1">505, Gaur City Center, Sector 4, Greater Noida</p>
            </div>

            <div className="h-96 lg:h-[500px]">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.772413522872!2d77.42287807148972!3d28.636582330131116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee2c6383af05%3A0xa28416eb897aaf41!2sNo.%2004%2C%204%2C%20Biharipura%2C%20Nai%20Basti%20Dundahera%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201009!5e0!3m2!1sen!2sin!4v1765195652456!5m2!1sen!2sin"
                className="w-full h-full grayscale hover:grayscale-0 transition"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- FAQ SECTION ---------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 mt-8 md:mt-12 lg:mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0097b2] font-serif mb-4">
            Frequently Asked <span className="text-[#0097b2]">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Quick answers about our ambulance and dead body freezer box services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-5 lg:p-6 text-left flex justify-between items-start"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#0097b2]" />
                    </div>
                    <h3 className="text-base lg:text-lg font-bold text-gray-900 pr-2">{faq.question}</h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`px-5 lg:px-6 pb-5 lg:pb-6 text-gray-700 transition-all overflow-hidden ${
                    openFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ---------------- EMERGENCY BANNER ---------------- */}
      <section className="bg-gradient-to-r from-[#0097b2] to-[#007a94] py-12 sm:py-16 lg:py-20 mt-8 md:mt-12 lg:mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Our emergency helpline is available 24/7 for ambulance and dead body freezer box services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919917162727" 
              className="bg-white text-[#0097b2] font-bold py-3 px-6 lg:px-8 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors w-full sm:w-auto"
            >
              <PhoneCall className="w-5 h-5 mr-2 flex-shrink-0" />
              Call +91 9917162727
            </a>
            <a 
              href="mailto:bobbyambulance@gmail.com" 
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 lg:px-8 rounded-lg flex items-center justify-center hover:bg-white hover:text-[#0097b2] transition-colors w-full sm:w-auto"
            >
              <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}