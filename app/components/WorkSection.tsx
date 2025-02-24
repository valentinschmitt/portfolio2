'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "Project One",
    description: "A creative web application showcasing modern design principles",
    image: "/project1.jpg",
    tags: ["React", "Three.js", "GSAP"],
    link: "#"
  },
  {
    title: "Project Two",
    description: "Interactive 3D experience with cutting-edge technology",
    image: "/project2.jpg",
    tags: ["WebGL", "Three.js", "TypeScript"],
    link: "#"
  },
  {
    title: "Project Three",
    description: "Innovative digital solution for modern problems",
    image: "/project3.jpg",
    tags: ["Next.js", "TailwindCSS", "Firebase"],
    link: "#"
  }
];

export default function WorkSection() {
  return (
    <section id="work" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Work</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of projects that showcase my passion for creative development
            and digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="project-card group"
            >
              <a href={project.link} className="block h-full relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10" />
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 