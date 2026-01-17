import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import plateImg from '../image/plateimg.png';
import thonnaiImg from '../image/thonnaiimg.jpg';
import BookingForm from './BookingForm';

const Products = () => {
  const [activeTab, setActiveTab] = useState('silver');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const silverPlates = [
    { size: '6″', usage: 'Snacks' },
    { size: '7″', usage: 'Starters' },
    { size: '8″', usage: 'Small Meals' },
    { size: '9″', usage: 'Regular Meals' },
    { size: '10″', usage: 'Buffet' },
    { size: '12″', usage: 'Grand Events' }
  ];

  const tags = ['Catering', 'Events', 'Hotels', 'Functions'];

  return (
    <section id="products" className="section-padding bg-gray-50 rounded-[2rem] md:rounded-[3rem] my-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Collection</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose from our range of high-quality silver paper plates and traditional eco-friendly thonnai plates.
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <div className="bg-white p-1.5 rounded-full shadow-sm border border-gray-100 flex gap-2">
          <button
            onClick={() => setActiveTab('silver')}
            className={`px-8 py-2.5 rounded-full font-semibold transition-all ${
              activeTab === 'silver' ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            Silver Paper Plates
          </button>
          <button
            onClick={() => setActiveTab('thonnai')}
            className={`px-8 py-2.5 rounded-full font-semibold transition-all ${
              activeTab === 'thonnai' ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            Thonnai Plates
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'silver' ? (
          <motion.div
            key="silver"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {silverPlates.map((plate, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 text-center flex flex-col items-center group hover:border-primary/30 transition-all"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 mb-4 flex items-center justify-center group-hover:from-primary/10 group-hover:to-accent/10 transition-colors">
                  <img src={plateImg} alt={`Silver Plate ${plate.size}`} className="w-16 h-16 object-contain" />
                </div>
                <span className="text-2xl font-black text-gray-800 mb-1">{plate.size}</span>
                <p className="text-xs text-primary font-bold uppercase tracking-wider mb-4">{plate.usage}</p>
                <button
                  onClick={() => setSelectedProduct(`Silver Plate ${plate.size}`)}
                  className="w-full py-2 bg-gray-900 text-white rounded-xl text-sm font-bold hover:bg-primary transition-colors mt-auto"
                >
                  Book Now
                </button>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="thonnai"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-video bg-gray-200">
               <img 
                src={thonnaiImg} 
                alt="Thonnai Plates" 
                className="object-cover w-full h-full"
               />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Traditional Thonnai Plates</h3>
              <p className="text-gray-600 text-lg mb-6">
                Our thonnai plates are crafted from naturally fallen leaves, making them 100% compostable and sustainable. Perfect for traditional meals and cultural events.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 bg-accent/10 text-secondary rounded-full text-sm font-bold">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => setSelectedProduct('Traditional Thonnai Plate')}
                  className="btn-primary"
                >
                  Book Now
                </button>
                <button className="bg-white border-2 border-gray-200 hover:border-primary text-gray-700 px-8 py-3 rounded-full font-bold transition-all">
                  View Bulk Pricing
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking Form Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <BookingForm 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Products;
