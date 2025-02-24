'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 border-y-2 border-black ${
        hasScrolled ? 'py-2' : 'py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        background: hasScrolled 
          ? 'linear-gradient(to right, rgba(147, 51, 234, 0.9), rgba(219, 39, 119, 0.9))' 
          : 'linear-gradient(to right, rgba(147, 51, 234, 0.7), rgba(219, 39, 119, 0.7))',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className="relative z-10"
        >
          <Link href="/" className="text-2xl font-bold text-white hover:text-gradient">
            VS
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 relative z-10">
          {menuItems.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -2 }}
              className="relative"
            >
              <Link
                href={item.href}
                className="text-white hover:text-gray-200 transition-colors font-medium"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Navigation Button */}
        <motion.button
          className="md:hidden flex flex-col space-y-1.5 z-50"
          onClick={() => setIsOpen(!isOpen)}
          initial={false}
          animate={isOpen ? "open" : "closed"}
        >
          <motion.span
            className="w-6 h-0.5 bg-white block"
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white block"
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white block"
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          />
        </motion.button>

        {/* Mobile Menu */}
        <motion.div
          className="fixed inset-0 bg-gradient-to-r from-purple-600/95 to-pink-600/95 backdrop-blur-lg flex items-center justify-center md:hidden"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          style={{ display: isOpen ? "flex" : "none" }}
        >
          <div className="flex flex-col items-center space-y-8">
            {menuItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.1 }}
                className="relative"
              >
                <Link
                  href={item.href}
                  className="text-2xl text-white hover:text-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
} 