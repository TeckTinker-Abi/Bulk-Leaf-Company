import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';

const CTA = () => {
  return (
    <section className="section-padding">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-gradient-to-r from-primary to-secondary p-10 md:p-20 text-center text-white shadow-2xl"
      >
        {/* Animated Background Circles */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-80 h-80 bg-white/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl"
        />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
            Looking for reliable silver paper plates <br className="hidden md:block" />
            or thonnai plates in bulk?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Get the best wholesale rates and premium quality products delivered right to your doorstep.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '#products'}
              className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg shadow-xl flex items-center gap-3 hover:bg-gray-50 transition-colors"
            >
              Order Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: ["0 0 0 0px rgba(255,255,255,0.4)", "0 0 0 20px rgba(255,255,255,0)"] 
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              onClick={() => window.open('https://wa.me/6379362078', '_blank')}
              className="bg-accent text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl flex items-center gap-3 transition-colors"
            >
              <MessageCircle size={24} /> Bulk Quote
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
