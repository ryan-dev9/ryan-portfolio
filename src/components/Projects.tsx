'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Star, Eye } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      id: 1,
      title: 'RX-Prompts',
      description: 'A front-end prompts solution built with Next.js, featuring user authentication, payment integration, and admin dashboard.',
      image: '/rx-prompts.png',
      technologies: ['Next.js', 'JavaScript', 'Tailwindcss', 'Framer-motion', 'Shade-cn'],
      github: 'https://github.com/ryan-dev9/rx-prompts',
      live: 'https://rx-prompts.vercel.app',
      stats: { stars: 142, views: '2.1k' },
      featured: true,
    },
    {
      id: 2,
      title: 'RD-Blog',
      description: 'A collaborative blog platform with real-time updates, drag-and-drop functionality, and team workspaces.',
      image: '/rd-blog.png',
      technologies: ['Next.js', 'Node.js', 'Tailwind', 'Motion'],
      github: 'https://github.com/ryan-dev9/rdblog',
      live: 'https://rdblog.vercel.app',
      stats: { stars: 89, views: '1.5k' },
      featured: true,
    },
    {
      id: 3,
      title: 'Lockify - The Password manager app',
      description: 'A password management full stack web app made with Next-js, Tailwind, Framer-motion, lucide-react, MongoDB.',
      image: '/lockify.png',
      technologies: ['Next-js', 'Tailwind CSS', 'Framer-motion', 'Node.js','Express', 'MongoDB'],
      github: 'https://github.com/yourname/weather-dashboard',
      live: 'https://weather-dashboard-demo.vercel.app',
      stats: { stars: 0, views: '0' },
      featured: false,
    },
    // {
    //   id: 4,
    //   title: 'Portfolio Website',
    //   description: 'A responsive portfolio website with modern animations, dark mode support, and optimized performance.',
    //   image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
    //   technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    //   github: 'https://github.com/yourname/portfolio',
    //   live: 'https://portfolio-demo.vercel.app',
    //   stats: { stars: 234, views: '3.2k' },
    //   featured: false,
    // },
    // {
    //   id: 5,
    //   title: 'Social Media Analytics',
    //   description: 'An analytics dashboard for social media metrics with data visualization and automated reporting features.',
    //   image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
    //   technologies: ['React', 'Chart.js', 'Express', 'PostgreSQL', 'Redis'],
    //   github: 'https://github.com/yourname/social-analytics',
    //   live: 'https://analytics-demo.vercel.app',
    //   stats: { stars: 156, views: '1.8k' },
    //   featured: false,
    // },
    // {
    //   id: 6,
    //   title: 'Recipe Sharing Platform',
    //   description: 'A community-driven recipe sharing platform with user profiles, recipe collections, and rating system.',
    //   image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop',
    //   technologies: ['Next.js', 'Firebase', 'Tailwind CSS', 'React Query'],
    //   github: 'https://github.com/yourname/recipe-platform',
    //   live: 'https://recipes-demo.vercel.app',
    //   stats: { stars: 98, views: '1.2k' },
    //   featured: false,
    // },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const ProjectCard = ({ project, index, isFeatured = false }: { project: typeof projects[0], index: number, isFeatured?: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
      className={`group relative bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
        isFeatured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={400}
          className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
            isFeatured ? 'h-64 md:h-80' : 'h-48'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Overlay Links */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
          >
            <Github size={18} className="text-white" />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
          >
            <ExternalLink size={18} className="text-white" />
          </a>
        </div>

        {/* Stats */}
        <div className="absolute bottom-4 left-4 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center space-x-1 text-white text-sm">
            <Star size={16} />
            <span>{project.stats.stars}</span>
          </div>
          <div className="flex items-center space-x-1 text-white text-sm">
            <Eye size={16} />
            <span>{project.stats.views}</span>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-foreground group-hover:text-blue-600 transition-colors duration-300">
            {project.title}
          </h3>
        </div>

        <p className="text-foreground/70 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-foreground/10 text-foreground/70 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4 pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 text-sm border border-foreground/20 rounded-lg hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-300"
          >
            <Github size={16} />
            <span>Code</span>
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            >
              Featured Projects
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '4rem' } : { width: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded mb-6"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-foreground/60 max-w-2xl mx-auto"
            >
              Here are some of the projects I&apos;ve worked on. Each one represents a unique challenge 
              and showcases different aspects of my development skills.
            </motion.p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} isFeatured />
            ))}
          </div>

          {/* Other Projects */}
          <div className="mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center"
            >
             Pending Projects
            </motion.h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index + featuredProjects.length} />
            ))}
          </div>

          {/* View More */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/ryan-dev9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Github size={20} />
              <span>View More on GitHub</span>
              <ExternalLink size={16} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
