import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Briefcase, Zap, Globe } from 'lucide-react';

const WhyUs = () => {
  const features = [
    {
      icon: <ShieldCheck size={28} />,
      title: "100% Eco Friendly",
      desc: "Completely biodegradable products that care for the planet."
    },
    {
      icon: <Cpu size={28} />,
      title: "Modern Machinery",
      desc: "Using the latest technology for consistent product quality."
    },
    {
      icon: <Briefcase size={28} />,
      title: "Bulk Orders Supported",
      desc: "Scaling production to meet even the largest supply needs."
    },
    {
      icon: <Zap size={28} />,
      title: "Best Wholesale Pricing",
      desc: "Competitive rates designed for profitable bulk buying."
    },
    {
      icon: <Globe size={28} />,
      title: "Reliable Delivery",
      desc: "A logistics network that ensures your stock arrives on time."
    }
  ];

  return (
    <section id="why-us" className="section-padding bg-gray-900 text-white rounded-[2rem] md:rounded-[3rem] my-10 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-0" />
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose BulkLeaf?</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            We combine traditional values with modern manufacturing to deliver the best disposable solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                boxShadow: '0 0 25px rgba(16, 185, 129, 0.2)'
              }}
              className="glass border-white/10 p-8 rounded-3xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
