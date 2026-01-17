import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import heroImg from '../image/mainimg - Copy.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="section-padding relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6"
          >
            #1 Bulk Supplier in India
          </motion.span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
            Eco-Friendly <br />
            <span className="text-primary">Disposable Plate</span> <br />
            Manufacturer
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg">
            Premium silver paper plates in 6 versatile sizes and traditional thonnai plates. Sustainable solutions for bulk catering and events.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/6379362078', '_blank')}
              className="btn-primary flex items-center gap-2"
            >
              Get Bulk Quote <ArrowRight size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '#products'}
              className="bg-white border-2 border-gray-200 hover:border-primary text-gray-700 px-6 py-2 rounded-full font-medium flex items-center gap-2 transition-all"
            >
              Order Now
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
               <img 
                src={heroImg} 
                alt="Eco-friendly plates"
                className="object-cover w-full h-full opacity-90"
               />
            </div>
          </div>
          {/* Decorative floating card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-xl z-20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                ✓
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Daily Production</p>
                <p className="text-lg font-bold">50,000+ Units</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
