import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Truck, CheckCircle, Boxes } from 'lucide-react';

const Trust = () => {
  const stats = [
    {
      icon: <Leaf className="text-primary" size={32} />,
      title: "Eco-Friendly Production",
      desc: "100% biodegradable materials used in manufacturing."
    },
    {
      icon: <Boxes className="text-primary" size={32} />,
      title: "Bulk Supply Capability",
      desc: "Efficiently handling orders of all scales and sizes."
    },
    {
      icon: <CheckCircle className="text-primary" size={32} />,
      title: "Quality Checked Products",
      desc: "Strict quality control for every batch produced."
    },
    {
      icon: <Truck className="text-primary" size={32} />,
      title: "On-Time Delivery",
      desc: "Reliable logistics ensuring timely dispatch always."
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center border border-gray-100"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="mb-6 p-4 bg-primary/5 rounded-2xl"
              >
                {stat.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{stat.title}</h3>
              <p className="text-gray-600 leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
