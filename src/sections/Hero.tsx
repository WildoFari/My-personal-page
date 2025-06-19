import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fadeIn');
                }
            });
        });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <section className="relative bg-gradient-to-r from-teal-200 via-green-300 to-blue-200 py-32 text-center overflow-hidden" ref={containerRef}>
            <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url('/images/hero-bg-light.jpg')` }}></div>
            <div className="container mx-auto px-4 relative z-10">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold mb-4 text-gray-900 leading-tight"
                >
                    ¡Hola! Soy WilDev
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg mb-8 text-gray-700 max-w-2xl mx-auto"
                >
                    Bienvenido a mi espacio personal, donde comparto mi viaje, mis pasiones y mis proyectos.
                </motion.p>
                <motion.a
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    href="#about"
                    className="bg-white text-green-700 py-3 px-8 rounded-full font-semibold hover:bg-green-100 transition-all duration-300 shadow-md transform hover:shadow-lg"
                >
                    Conóceme más
                </motion.a>
            </div>
        </section>
    );
}