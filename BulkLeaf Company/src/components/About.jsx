import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../image/mainimg - Copy.png';

const About = () => {
  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Our Story</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            Redefining Bulk Supply with <br />
            <span className="text-primary">Sustainable Manufacturing</span>
          </h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            BulkLeaf is a leading name in the paper plate manufacturing industry, dedicated to providing high-quality, eco-friendly disposable solutions. We specialize in large-scale production, serving wholesalers, event planners, and the catering industry across the region.
          </p>
          <div className="space-y-4 mb-8">
            {[
              "High-grade raw materials for superior finish",
              "Advanced automated manufacturing processes",
              "Environmentally conscious production cycle",
              "Wholesale pricing models for bulk orders"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
          <button className="px-8 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors">
            Learn More About Us
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] group">
            <img 
              src={aboutImg} 
              alt="BulkLeaf Manufacturing" 
              className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/5 rounded-full -z-10" />
          <div className="absolute -top-10 -left-10 w-32 h-32 border-4 border-primary/20 rounded-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
