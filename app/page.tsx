'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import WorkSection from './components/WorkSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        className="custom-cursor"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
        }}
      />
      
      <div className="relative min-h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/50 mix-blend-multiply" />
        </div>

        <div className="relative container mx-auto px-4 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 font-space-grotesk">
              <span className="text-gradient">Valentin</span>{' '}
              <span className="text-gradient">Schmitt</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Creative Developer & Digital Artist
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center gap-6"
            >
              <a
                href="#work"
                className="px-8 py-3 bg-white text-black rounded-full hover-effect font-medium"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-white rounded-full hover-effect"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-32 text-center"
          >
            <p className="text-lg text-gray-400">
              Scroll to explore
            </p>
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-4"
            >
              ↓
            </motion.div>
          </motion.div>
        </div>
      </div>

      <WorkSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
