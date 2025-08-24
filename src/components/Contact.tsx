import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "VISIT US",
      details: ["North Guwahati", "Barchandra Grand", "Assam"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "CALL US",
      details: ["7002788513"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "EMAIL US",
      details: ["lovlinaboxingacademy@gmail.com"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "HOURS",
      details: ["Monday - Saturday", "09:00 AM - 6:00 PM"],
      color: "from-blue-500 to-blue-600"
    }
  ];

  const socialLinks = [
    { 
      icon: <Instagram className="w-6 h-6" />, 
      name: "@LovlinaBoxingAcademy", 
      color: "hover:text-pink-500",
      url: "https://www.instagram.com/lovlinaboxingacademy?igsh=MXJkajF2ejNkazM0ag%3D%3D&utm_source=qr"
    },
    { 
      icon: <Facebook className="w-6 h-6" />, 
      name: "Lovlina Boxing Academy", 
      color: "hover:text-blue-600",
      url: "#" // replace with real FB link
    },
    { 
      icon: <Twitter className="w-6 h-6" />, 
      name: "@LovlinaAcademy", 
      color: "hover:text-blue-400",
      url: "#" // replace with real Twitter link
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
            GET IN <span className="bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">TOUCH</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions or want to join the academy? Reach out to us today and be a part of a movement to transform lives through boxing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${info.color} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {info.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{info.title}</h4>
              <div className="space-y-2">
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-300">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              JOIN THE <span className="text-red-500">ACADEMY</span>
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Ready to unleash your potential? Contact us today and take the first step towards becoming a champion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a 
                href="tel:7002788513"
                className="group bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>CALL NOW</span>
              </a>
              
              <a 
                href="mailto:lovlinaboxingacademy@gmail.com"
                className="group border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>EMAIL US</span>
              </a>
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-xl font-bold text-white mb-6">FOLLOW OUR JOURNEY</h4>
            <div className="flex justify-center space-x-8">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center space-x-2 text-gray-300 ${social.color} transition-colors duration-300`}
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                  <span className="hidden sm:inline font-medium">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
