import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 md:pt-20 pb-10 rounded-t-[2rem] md:rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Leaf className="text-primary w-8 h-8" />
              <span className="text-2xl font-bold tracking-tight">
                Bulk<span className="text-primary">Leaf</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Leading manufacturer of premium silver paper plates and traditional thonnai plates. Sustainable, reliable, and scalable bulk supply solutions.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              {['Home', 'About Us', 'Process', 'Why Us', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Products</h4>
            <ul className="space-y-4 text-gray-400">
              {['Silver Paper Plates', 'Thonnai Plates', 'Bulk Quote', 'Custom Orders', 'Price List'].map((item) => (
                <li key={item}>
                  <a href="#products" className="hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Phone: +91 63793 62078</li>
              <li>WhatsApp: +91 63793 62078</li>
              <li>Email: bulkleaf2026@gmail.com</li>
              <li>Address: Shop No.42, Pattu Poochi 2nd street, K.pudhur, Madurai - 625 007</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {currentYear} BulkLeaf Manufacturing. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
