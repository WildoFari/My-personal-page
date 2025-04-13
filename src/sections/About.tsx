'use client';

import Image from 'next/image';
import profileImage from '../../public/images/profile.jpg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { FaCode, FaRoad, FaMapSigns, FaCalculator } from 'react-icons/fa';

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
        transition: {
          duration: 0.8,
          ease: 'easeOut',
        },
      });
    } else {
      animation.start({
        opacity: 0,
        y: 50,
        transition: {
          duration: 0.8,
          ease: 'easeOut',
        },
      });
    }
  }, [inView, animation]);

  const spinAnimation = useAnimation();

  useEffect(() => {
    spinAnimation.start({
      rotate: 360,
      transition: {
        loop: Infinity,
        duration: 12,
        ease: 'linear',
      },
    });
  }, [spinAnimation]);

  const profileImageAnimation = useAnimation();

  useEffect(() => {
    profileImageAnimation.start({
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    });
  }, [profileImageAnimation]);

  return (
    <motion.section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white px-6 md:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div ref={ref} className="max-w-4xl mx-auto text-center relative px-4 sm:px-6 md:px-0">
        <motion.h2
          className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-10 sm:mb-14 tracking-tight"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={animation}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          ¡Hola Mundo! Soy WilDev
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl md:text-3xl leading-relaxed text-gray-900 dark:text-gray-300 mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={animation}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Un alma curiosa que se pierde entre líneas de código y senderos de montaña.
        </motion.p>
      </div>

      <div className="flex justify-center">
        <motion.div
          className="relative w-56 h-56 sm:w-64 sm:h-64"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={profileImageAnimation}
        >
          <Image
            src={profileImage}
            alt="Foto de WilDev"
            width={256}
            height={256}
            className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-blue-600 dark:border-blue-400"
          />
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-blue-600 dark:border-blue-400"
            animate={spinAnimation}
          ></motion.div>
        </motion.div>
      </div>

      <div ref={ref} className="mt-16 max-w-6xl mx-auto">
        <h3 className="text-4xl font-semibold text-center mb-10 text-gray-900 dark:text-white">
          Un Poco Sobre Mí
        </h3>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={animation}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
            staggerChildren: 0.2,
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FaCode className="text-4xl text-blue-500 mb-4" />
            <h4 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Desarrollo Web</h4>
            <p className="text-gray-600 dark:text-gray-400">Creando magia digital, un 'Hola Mundo' a la vez.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FaMapSigns className="text-4xl text-green-500 mb-4" />
            <h4 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Mi Viaje</h4>
            <p className="text-gray-600 dark:text-gray-400">Este es mi viaje, estas son mis metas, y cada paso que doy es una parte de mi historia.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FaRoad className="text-4xl text-yellow-500 mb-4" />
            <h4 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Trail Running</h4>
            <p className="text-gray-600 dark:text-gray-400">Conectando con la naturaleza, un sendero a la vez.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FaCalculator className="text-4xl text-purple-500 mb-4" />
            <h4 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Contabilidad</h4>
            <p className="text-gray-600 dark:text-gray-400">Formándome en contabilidad para entender el lenguaje de los negocios.</p>
          </motion.div>

        </motion.div>
      </div>
    </motion.section>
  );
}