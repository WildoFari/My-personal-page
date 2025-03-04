'use client';

import Image from 'next/image';
import profileImage from '../../public/images/profile.jpg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

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
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={animation}
        >
          ¡Hola Mundo! Soy WilDev
        </motion.h2>
        <motion.p
          className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={animation}
        >
          Un alma curiosa que se pierde entre líneas de código y senderos de montaña. Me encanta crear cosas nuevas, ya sean digitales o experiencias al aire libre.
        </motion.p>
      </div>

      <div className="flex justify-center">
        <div className="relative w-64 h-64">
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
        <h3 className="text-3xl font-semibold text-center mb-8">Un Poco de mi</h3>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={animation}
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-xl font-semibold mb-2">Desarrollo Web</h4>
            <p className="text-gray-600 dark:text-gray-400">Creando magia digital, un 'Hola Mundo' a la vez.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-xl font-semibold mb-2">Mi Viaje</h4>
            <p className="text-gray-600 dark:text-gray-400">Este es mi viaje, estas son mis metas, y cada paso que doy es una parte de mi historia.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-xl font-semibold mb-2">Trail Running</h4>
            <p className="text-gray-600 dark:text-gray-400">Conectando con la naturaleza, un sendero a la vez.</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}