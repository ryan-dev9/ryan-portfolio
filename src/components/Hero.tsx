'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg md:text-xl text-foreground/70 font-light"
            >
              Hello, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Ryan Developer
              </span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-2xl md:text-4xl lg:text-5xl font-light text-foreground/80"
            >
              Full Stack Web Developer
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed"
            >
              I craft beautiful, responsive web applications with modern technologies.
              Passionate about clean code, user experience, and innovative solutions.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="flex justify-center space-x-6"
            >
              <Link
                href="https://github.com/ryan-dev9"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-all duration-300 transform hover:scale-110"
              >
                <Github size={24} className="text-foreground/70 hover:text-foreground" />
              </Link>
              <Link
                href="https://linkedin.com/in/ryan-dev9"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={24} className="text-foreground/70 hover:text-foreground" />
              </Link>
              <Link
                href="mailto:ryandeveloper97@gmail.com"
                className="p-3 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={24} className="text-foreground/70 hover:text-foreground" />
              </Link>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
            >
              <button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Discover My Work
              </button>
              <a
                href="/resume.pdf"
                download="Ryan_Resume.pdf"
                className="px-8 py-4 border-2 border-foreground/20 text-foreground rounded-full font-medium text-lg hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-300"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <button
              onClick={scrollToAbout}
              className="flex flex-col items-center text-foreground/50 hover:text-foreground/70 transition-colors duration-300"
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowDown size={20} />
              </motion.div>
            </button>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
