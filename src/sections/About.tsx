'use client';

import Image from 'next/image';
import profileImage from '../../public/images/profile.jpg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { FaCode, FaRoad, FaMapSigns } from 'react-icons/fa';

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
      });
    } else {
      animation.start({
        opacity: 0,
        y: 50,
      });
    }
  }, [inView, animation]);

  const spinAnimation = useAnimation();

  useEffect(() => {
    spinAnimation.start({
      rotate: 360,
      transition: {
        loop: Infinity,
        duration: 10,
        ease: 'linear',
      },
    });
  }, [spinAnimation]);

  return (
    <motion.section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white px-6 md:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div ref={ref} className="max-w-4xl mx-auto text-center relative px-4 sm:px-6 md:px-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 rounded-3xl -z-10"></div>

        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-10 sm:mb-14 tracking-tight shadow-md text-shadow-lg"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={animation}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          ¡Hola Mundo! Soy WilDev
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-900 dark:text-gray-300 mb-8 sm:mb-10 shadow-md text-shadow-sm"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={animation}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Un alma curiosa que se pierde entre líneas de código y senderos de montaña. Me encanta crear cosas nuevas, ya sean digitales o experiencias al aire libre.
        </motion.p>

        <div className="w-32 sm:w-40 h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-md mb-10 sm:mb-12"></div>
      </div>

      <div className="flex justify-center">
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
          <Image
            src={profileImage}
            alt="Foto de WilDev"
            width={256}
            height={256}
            className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-blue-600 dark:border-blue-400 object-top"
          />
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-blue-600 dark:border-blue-400"
            animate={spinAnimation}
          ></motion.div>
        </div>
      </div>

      <div ref={ref} className="mt-16 max-w-3xl mx-auto">
        <h3 className="text-4xl font-semibold text-center mb-10 text-gray-900 dark:text-white relative">
          Un Poco de mi
          <div className="absolute left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full bottom-[-10px]"></div>
        </h3>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={animation}
        >
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)' }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
          >
            <FaCode className="text-4xl text-blue-500 mb-4" />
            <h4 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Desarrollo Web</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-5">Creando magia digital, un 'Hola Mundo' a la vez.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300">
              Leer Más
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)' }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
          >
            <FaMapSigns className="text-4xl text-green-500 mb-4" />
            <h4 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Mi Viaje</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-5">Este es mi viaje, estas son mis metas, y cada paso que doy es una parte de mi historia.</p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300">
              Leer Más
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)' }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
          >
            <FaRoad className="text-4xl text-yellow-500 mb-4" />
            <h4 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Trail Running</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-5">Conectando con la naturaleza, un sendero a la vez.</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300">
              Leer Más
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}