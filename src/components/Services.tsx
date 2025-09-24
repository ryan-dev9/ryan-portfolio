"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const services = [
    {
        title: "Landing Page",
        description:
            "High-converting, modern landing pages tailored to your brand and goals. Perfect for product launches, events, or lead generation.",
        price: "$99",
    },
    {
        title: "Business Website",
        description:
            "Professional multi-page websites for businesses, startups, or personal brands. Includes contact forms, about, and service sections.",
        price: "$249",
    },
    {
        title: "Full-stack / E-commerce Website",
        description:
            "Robust, scalable web applications or e-commerce stores with user authentication, payment integration, and admin dashboard.",
        price: "$499",
    },
];

const Services = () => {
    const [isOpen, setIsOpen] = useState(false);

      const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      // Get header height (fallback to 72px if not found)
      const header = document.querySelector('header') || document.querySelector('nav');
      const headerHeight = header ? header.clientHeight : 72;
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementTop - headerHeight - 8, // 8px extra space
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };

    return (
        <section id="services" className="py-18 bg-foreground/5 min-h-screen">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
                        >
                            Services
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "4rem" }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"
                        ></motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="text-lg text-foreground/60 max-w-2xl mx-auto mt-6"
                        >
                            I offer a range of web development services to help you build your online presence and grow your business.
                        </motion.p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, idx) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + idx * 0.2, duration: 0.7 }}
                                className="bg-background rounded-xl shadow-lg p-8 flex flex-col items-start hover:shadow-2xl transition-shadow duration-300 border border-foreground/10"
                            >
                                <h3 className="text-2xl font-semibold text-foreground mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-foreground/70 mb-6 flex-1">
                                    {service.description}
                                </p>
                                <div className="w-full flex items-center gap-4">

                                <span className="text-lg font-bold text-blue-600 bg-blue-600/10 px-4 py-2 rounded-full">
                                    {service.price}
                                </span>
                                <button  onClick={() => scrollToSection('#contact')} className=" block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
                                    Hire me
                                </button>
                                </div>
                              
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
