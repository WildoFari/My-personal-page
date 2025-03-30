"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';

interface PassionItemProps {
    icon: string;
    title: string;
    description: string;
    images: string[];
}

function PassionItem({ icon, title, description, images }: PassionItemProps) {
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
            <p className="text-gray-600 text-center mb-4">{description}</p>

            <Swiper spaceBetween={10} slidesPerView={1} className="w-full rounded-lg overflow-hidden">
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </motion.div>
    );
}

export default function Passions() {
    return (
        <section id="passions" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl font-bold text-center mb-12 text-gray-800"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Descubre lo que me mueve 🚀
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <PassionItem icon="💻" title="Desarrollo Web" description="Código, creatividad y experiencias interactivas." images={["/images/web1.jpg", "/images/web2.jpg", "/images/web3.jpg"]} />
                    <PassionItem icon="🚴" title="Andar en bicicleta" description="Cada pedaleada es una nueva aventura." images={["/images/bike1.jpg", "/images/bike2.jpg", "/images/bike3.jpg"]} />
                    <PassionItem icon="🏃" title="Trail Running" description="Superación, aire fresco y libertad en cada zancada." images={["/images/trail1.jpg", "/images/trail2.jpg", "/images/trail3.jpg"]} />
                    <PassionItem icon="🎨" title="Anime" description="Imaginación sin límites en cada episodio." images={["/images/anime1.jpg", "/images/anime2.jpg", "/images/anime3.jpg", "/images/anime4.jpg"]} />
                    <PassionItem icon="🌍" title="Viajar" description="Nuevos paisajes, culturas y experiencias inolvidables." images={["/images/travel1.jpg", "/images/travel2.jpg", "/images/travel3.jpg"]} />
                    <PassionItem icon="🎵" title="Música" description="Ritmos y melodías que cuentan historias." images={["/images/music1.jpg", "/images/music2.jpg", "/images/music3.jpg"]} />
                    <PassionItem icon="🎮" title="Videojuegos" description="Estrategia, exploración y desafíos en cada partida." images={["/images/games1.jpg", "/images/games2.jpg", "/images/games3.jpg"]} />
                    <PassionItem icon="📷" title="Fotografía" description="Instantes convertidos en recuerdos inmortales." images={["/images/photo1.jpg", "/images/photo2.jpg", "/images/photo3.jpg"]} />
                    <PassionItem icon="📚" title="Lectura" description="Un viaje sin fronteras a través de las palabras." images={["/images/reading1.jpg", "/images/reading2.jpg", "/images/reading3.jpg"]} />
                    <PassionItem icon="🏋️" title="Gimnasio y Fitness" description="Disciplina, esfuerzo y bienestar en cada repetición." images={["/images/fitness1.jpg", "/images/fitness2.jpg", "/images/fitness3.jpg"]} />
                    <PassionItem icon="🎬" title="Cine y Series" description="Historias que emocionan y transportan." images={["/images/movies1.jpg", "/images/movies2.jpg", "/images/movies3.jpg"]} />
                    <PassionItem icon="🔧" title="Tecnología" description="Innovación que transforma la realidad." images={["/images/tech1.jpg", "/images/tech2.jpg", "/images/tech3.jpg"]} />
                </div>
            </div>
        </section>
    );
}
