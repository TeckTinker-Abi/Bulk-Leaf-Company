import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import contactBg from '../image/mainimg - Copy.png';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="text-primary" />,
      label: "Call Us",
      value: "+91 79044 17586",
      href: "tel:+917904417586"
    },
    {
      icon: <MessageCircle className="text-primary" />,
      label: "WhatsApp",
      value: "+91 79044 17586",
      href: "https://wa.me/917904417586"
    },
    {
      icon: <Mail className="text-primary" />,
      label: "Email",
      value: "bulkleaf2026@gmail.com",
      href: "mailto:bulkleaf2026@gmail.com"
    },
    {
      icon: <MapPin className="text-primary" />,
      label: "Location",
      value: "Shop No.42, Pattu Poochi 2nd street, Alagar Kovil Main Road, K.pudhur, Madurai - 625 007",
      href: "https://maps.app.goo.gl/viQ7S9ro48qjiPkh9"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-gray-600 text-lg mb-10">
            Have questions about our products or bulk pricing? Our team is here to help you. Reach out to us through any of the channels below.
          </p>
          
          <div className="space-y-8">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-start gap-6 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-xl font-semibold text-gray-800 group-hover:text-primary transition-colors">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-100 min-h-[400px] relative"
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center z-20">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mb-6 text-primary">
              <MapPin size={40} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Store Location</h3>
            <p className="text-gray-500 mb-6 max-w-xs">Shop No.42, Pattu Poochi 2nd street, K.pudhur, Madurai - 625 007</p>
            <button 
              onClick={() => window.open('https://maps.app.goo.gl/viQ7S9ro48qjiPkh9', '_blank')}
              className="px-6 py-2 bg-primary text-white rounded-full font-bold shadow-md hover:shadow-lg transition-all relative z-30"
            >
              Open in Google Maps
            </button>
          </div>
          {/* Image overlay to make it look like a map */}
          <img 
            src={contactBg} 
            alt="Map Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
