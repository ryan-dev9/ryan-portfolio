'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Zap, Globe, Database, Smartphone } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    { name: 'Frontend Development', icon: <Code size={24} />, level: 90 },
    { name: 'UI/UX Design', icon: <Palette size={24} />, level: 85 },
    { name: 'Performance Optimization', icon: <Zap size={24} />, level: 88 },
    { name: 'Web Technologies', icon: <Globe size={24} />, level: 92 },
    { name: 'Database Management', icon: <Database size={24} />, level: 82 },
    { name: 'Mobile Development', icon: <Smartphone size={24} />, level: 78 },
  ];

  const technologies = [
    'React', 'Next.js', 'JavaScript', 'Node.js', 'Python', 'MySQL',
    'MongoDB', 'GSAP', 'Shadecn', 'Git', 'Tailwind CSS', 'Framer Motion'
  ];

  return (
    <section id="about" className="py-20 bg-foreground/5" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '4rem' } : { width: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"
            ></motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Personal Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Passionate Developer & Creative Problem Solver
              </h3>
              
              <div className="prose prose-lg max-w-none text-foreground/80 space-y-4">
                <p>
                  With over 4 months of experience in web development, I specialize in creating 
                  modern, scalable, and user-friendly applications. My journey began with a 
                  curiosity for how things work on the web, and it has evolved into a passion 
                  for crafting exceptional digital experiences.
                </p>
                
                <p>
                  I believe in writing clean, maintainable code and staying up-to-date with 
                  the latest technologies and best practices. My approach combines technical 
                  expertise with creative problem-solving to deliver solutions that not only 
                  work flawlessly but also delight users.
                </p>
                
                <p>
                  When I&apos;m not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with the 
                  developer community through blogs and meetups.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">3+</div>
                  <div className="text-foreground/60 text-sm">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">4+</div>
                  <div className="text-foreground/60 text-sm">Months Exp.</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600">5+</div>
                  <div className="text-foreground/60 text-sm">Happy Clients</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-6">Skills & Expertise</h3>
              
              {/* Skill Bars */}
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 1.0 + index * 0.1, duration: 0.6 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="text-blue-600">{skill.icon}</div>
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-foreground/60">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-foreground/10 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ delay: 1.2 + index * 0.1, duration: 1.0, ease: 'easeOut' }}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="pt-6"
              >
                <h4 className="text-lg font-semibold text-foreground mb-4">Technologies I Work With</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 1.6 + index * 0.05, duration: 0.4 }}
                      className="px-3 py-1 bg-foreground/10 text-foreground/80 rounded-full text-sm hover:bg-foreground/20 transition-colors duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
