'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLocale } from '../hooks/useLocale';

export default function AboutSection() {
  const { dictionary, isLoading } = useLocale();
  
  const skills = [
    'React', 'TypeScript', 'Next.js', 'Three.js',
    'WebGL', 'GSAP', 'TailwindCSS', 'Node.js',
    'Creative Development', 'UI/UX Design'
  ];

  if (isLoading) return null;

  return (
    <section id="about" className="py-20 px-4 bg-black/50">
      <div className="container mx-auto max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          {dictionary.about.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative w-full aspect-square max-w-md mx-auto md:mx-0 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-600/20 to-pink-600/20"
            >
              <Image
                src="/valentinschmitt.jpg"
                alt="Valentin Schmitt - Web Expert"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>

            <div className="space-y-4 text-gray-300">
              <p>{dictionary.about.intro}</p>
              <p>{dictionary.about.background}</p>
              <p>{dictionary.about.passion}</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">{dictionary.about.skillsTitle}</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">{dictionary.about.ctaTitle}</h3>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            {dictionary.about.ctaButton}
          </a>
        </motion.div>
      </div>
    </section>
  );
} 