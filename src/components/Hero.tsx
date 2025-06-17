'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-off-white">
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="meta-text mb-6"
          >
            Ayman Hassen
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="headline-massive mb-8 max-w-4xl mx-auto"
          >
            Hi, I'm Ayman.<br />
            <span className="text-deep-charcoal/70">People. Product. Ops.</span><br />
            <span className="text-deep-charcoal/70">I ship what matters.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="body-large text-deep-charcoal/60 mb-12 max-w-2xl mx-auto"
          >
            From sneaker bots to Nike dashboards. From fixing iPhones to designing how people use Macs. From DIY divorces to AI tools with soul.<br />
            I move fast, think deep, and build for people first.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              See My Work
            </motion.a>
            
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-ghost"
            >
              Who TF Is Ayman
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-deep-charcoal/40"
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>

      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.03 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-deep-charcoal rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.02 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 0.5 }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"
        />
      </div>
    </section>
  );
};

export default Hero; 