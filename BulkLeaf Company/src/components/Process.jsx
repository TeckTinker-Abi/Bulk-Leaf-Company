import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Activity, Search, Package } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <Layers size={24} />,
      title: "Raw Material Selection",
      desc: "Premium eco-conscious materials sourced responsibly."
    },
    {
      icon: <Activity size={24} />,
      title: "Plate Forming",
      desc: "Precision molding using modern machinery."
    },
    {
      icon: <Search size={24} />,
      title: "Quality Inspection",
      desc: "Rigorous checks for durability and finish."
    },
    {
      icon: <Package size={24} />,
      title: "Packing & Dispatch",
      desc: "Secure bulk packaging for safe transport."
    }
  ];

  return (
    <section id="process" className="section-padding">
      <div className="text-center mb-16">
        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Our Method</span>
        <h2 className="text-4xl font-bold text-gray-900">Manufacturing Excellence</h2>
      </div>

      <div className="grid md:grid-cols-4 gap-8 relative">
        {/* Connector Line (Hidden on Mobile) */}
        <div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-gray-100 -z-10" />
        
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 border border-gray-100">
              {step.icon}
            </div>
            <div className="relative">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary border-2 border-white">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[200px] mx-auto">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Process;
