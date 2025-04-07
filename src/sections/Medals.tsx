"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface MedalProps {
    icon: string;
    title: string;
    date: string;
    description: string;
}

function Medal({ icon, title, date, description }: MedalProps) {
    return (
        <motion.div
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-2xl transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.span
                role="img"
                aria-label={title}
                className="text-6xl mb-4"
                whileHover={{ rotate: 10 }}
            >
                {icon}
            </motion.span>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-500 mb-2">{date}</p>
            <p className="text-gray-600 text-center">{description}</p>
        </motion.div>
    );
}

export default function Medals() {
    return (
        <section id="medals" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl font-bold text-center mb-12 text-gray-800"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Mis Logros y Medallas 🏆
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Medal 
                        icon="🥇" 
                        title="Maratón de Santiago" 
                        date="Abril 2024"
                        description="Completé mi primera maratón en un tiempo de 4:15:00" 
                    />
                    <Medal 
                        icon="🏃" 
                        title="Trail Running Andes" 
                        date="Marzo 2024"
                        description="30km de trail running en la cordillera de los Andes" 
                    />
                    <Medal 
                        icon="🚴" 
                        title="Gran Fondo Santiago" 
                        date="Febrero 2024"
                        description="160km en bicicleta por los alrededores de Santiago" 
                    />
                    <Medal 
                        icon="💻" 
                        title="Hackathon Innovación" 
                        date="Enero 2024"
                        description="Primer lugar en hackathon de innovación tecnológica" 
                    />
                    <Medal 
                        icon="🏊" 
                        title="Travesía Acuática" 
                        date="Diciembre 2023"
                        description="Completé mi primera travesía a nado en aguas abiertas" 
                    />
                    <Medal 
                        icon="🎯" 
                        title="Certificación Full Stack" 
                        date="Noviembre 2023"
                        description="Completé la certificación de desarrollo Full Stack" 
                    />
                </div>
            </div>
        </section>
    );
}
