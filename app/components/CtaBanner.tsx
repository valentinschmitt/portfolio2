'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function CtaBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 relative"
    >
      <div className="container mx-auto max-w-6xl flex items-center justify-center gap-4 flex-wrap">
        <span className="font-medium">
          🚀 Get a FREE Web Presence AI Audit for Your Business
        </span>
        <a
          href="#contact"
          onClick={() => setIsVisible(false)}
          className="bg-white text-purple-600 px-4 py-1 rounded-full text-sm font-medium hover:bg-opacity-90 transition-opacity"
        >
          Claim Now
        </a>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors"
          aria-label="Close banner"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </motion.div>
  );
} 