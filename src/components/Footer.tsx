'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Heart, Instagram } from 'lucide-react';

function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      href: 'https://github.com/ryan-dev9',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/ryan-developer-62a981378/',
    },
    {
      name: 'Instagram',
      icon: <Instagram size={20} />,
      href: 'https://www.instagram.com/ryan_dev97/',
    },
    {
      name: 'Twitter',
      icon: <Twitter size={20} />,
      href: 'https://x.com/RyanDev97',
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      href: 'mailto:ryandeveloper97@gmail.com',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground/10 border-t border-foreground/10">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold text-foreground hover:text-blue-600 transition-colors duration-300"
            >
              Ryan Developer
            </button>
            <p className="text-foreground/60 mt-2">Full Stack Developer</p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8"
          >
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.querySelector(`#${item.toLowerCase()}`);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                } }
                className="text-foreground/70 hover:text-foreground transition-colors duration-300 font-medium"
              >
                {item}
              </button>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  duration: 0.3,
                  delay: 0.5 + index * 0.1
                }}
                viewport={{ once: true }}
                className="p-3 rounded-full bg-foreground/10 hover:bg-black  text-foreground/60 hover:text-foreground transition-all duration-500"
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="h-px bg-foreground/10 max-w-md" />

          {/* Copyright and Credits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-2"
          >
            <p className="text-foreground/60 text-sm flex items-center justify-center gap-1">
              Made with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500"
              >
                <Heart size={14} fill="currentColor" />
              </motion.span>{' '}
              using Next.js & Tailwind CSS
            </p>
            <p className="text-foreground/50 text-lg">
              © {new Date().getFullYear()} Ryan Developer. All rights reserved.
            </p>
          </motion.div>

          {/* Back to Top Indicator */}
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-foreground/40 hover:text-foreground/60 scale-150 text-xs font-medium transition-colors duration-300"
          >
            ↑ Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
