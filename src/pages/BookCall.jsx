import React from 'react';
import { InlineWidget } from 'react-calendly';
import { motion } from 'framer-motion';

export default function BookCall() {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <motion.h1
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="text-4xl font-bold text-center mb-4 border-b-4 border-blue-500 w-fit mx-auto pb-4"
            >
              Book a Call
            </motion.h1>
            {/* <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-52 h-1 bg-blue-500"></div> */}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center text-gray-600 text-xl leading-relaxed"
          >
            <p className="mb-4">
              Ready to bring your vision to life? Schedule a free consultation to discuss your 3D visualization needs.
            </p>
          </motion.div>
        </div>

        {/* Calendly Integration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full"
        >
          <InlineWidget
            url="https://calendly.com/pjproductiondesign/30min"
            styles={{
              height: '800px',
              width: '100%',
              overflow: 'hidden'
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
