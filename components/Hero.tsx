'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-4xl text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Creative Developer
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Crafting immersive digital experiences with modern web technologies
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a 
            href="#projects" 
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border-2 border-indigo-600 hover:bg-indigo-600/10 text-white rounded-lg font-semibold transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
