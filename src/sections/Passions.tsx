"use client";

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import { motion } from 'framer-motion';

interface PassionItemProps {
    icon: string;
    title: string;
    description: string;
    images: string[];
    className?: string;
}


function PassionItem({ icon, title, description, images }: PassionItemProps) {
    const swiperRef = useRef<SwiperCore | null>(null);

    return (
        <motion.div
        className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-2xl transition-transform duration-300 hover:scale-105 hover:rotate-1 ring-1 ring-gray-200 hover:ring-2 hover:ring-blue-400 group"
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
        <h3 className="text-xl font-semibold mb-2 text-gray-700 group-hover:text-blue-600">{title}</h3>
        <p className="text-gray-600 text-center mb-4 text-sm md:text-base">{description}</p>
    

            <div className="relative w-full">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    className="w-full rounded-lg overflow-hidden"
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg" />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-md hover:bg-gray-50 bg-opacity-20 bg-gray-50 text-gray-900 rounded-full p-3 shadow-md z-10"
                    onClick={() => swiperRef.current?.slidePrev()}
                    aria-label="Imagen anterior"
                    type="button"
                    style={{ display: images.length > 1 ? 'block' : 'none' }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-gray-50 bg-opacity-20 bg-gray-50 text-gray-900 rounded-full p-2 shadow-md z-10"
                    onClick={() => swiperRef.current?.slideNext()}
                    aria-label="Imagen siguiente"
                    type="button"
                    style={{ display: images.length > 1 ? 'block' : 'none' }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </motion.div>
    );
}

export default function Passions() {
    const passionItems = [
        {
            icon: "💻",
            title: "Desarrollo Web",
            description: "Código, creatividad y experiencias interactivas.",
            images: ["/images/web1.jpg", "/images/web2.jpg", "/images/web3.jpg"],
            className: "bg-gradient-to-br from-green-300 to-blue-300"
        },
        {
            icon: "🚴",
            title: "Andar en bicicleta",
            description: "Cada pedaleada es una nueva aventura, un nuevo amanecer o atardecer.",
            images: ["/images/bike1.jpg", "/images/bike2.jpg", "/images/bike3.jpg"],
            className: "bg-gradient-to-br from-yellow-300 to-orange-300"
        },
        {
            icon: "🏃",
            title: "Trail Running",
            description: "Superación, aire fresco y libertad en cada zancada.",
            images: ["/images/trail1.jpg", "/images/trail2.jpg", "/images/trail3.jpg", "/images/trail4.jpg"],
            className: "bg-gradient-to-br from-red-300 to-pink-300"
        },
        {
            icon: "🎨",
            title: "Anime",
            description: "Imaginación sin límites en cada episodio, de quienes aprendi a nunca rendirme.",
            images: ["/images/anime1.jpg", "/images/anime2.jpg", "/images/anime3.jpg", "/images/anime4.jpg", "/images/anime5.jpg", "/images/anime6.jpg"],
            className: "bg-gradient-to-br from-purple-300 to-blue-300"
        },
        {
            icon: "🌍",
            title: "Viajar",
            description: "Nuevos paisajes, culturas y con el trail running",
            images: ["/images/travel1.jpg", "/images/travel2.jpg", "/images/travel3.jpg", "/images/travel4.jpg", "/images/travel5.jpg"],
            className: "bg-gradient-to-br from-green-300 to-yellow-300"
        },
        {
            icon: "🎵",
            title: "Música",
            description: "Ritmos y melodías que cuentan historias, que valen la pena escuchar.",
            images: ["/images/music1.jpg", "/images/music2.jpg", "/images/music3.jpg"],
            className: "bg-gradient-to-br from-blue-300 to-green-300"
        },
        {
            icon: "🎮",
            title: "Videojuegos",
            description: "Estrategia, exploración y desafíos en cada partida.",
            images: ["/images/games1.jpg", "/images/games2.jpg", "/images/games3.jpg", "/images/games4.jpg"],
            className: "bg-gradient-to-br from-red-300 to-orange-300"
        },
        {
            icon: "📚",
            title: "Lectura",
            description: "Un viaje sin fronteras a través de las palabras.",
            images: ["/images/reading1.jpg", "/images/reading2.jpg", "/images/reading3.jpg", "/images/reading4.jpg"],
            className: "bg-gradient-to-br from-purple-300 to-pink-300"
        }
    ];

    return (
        <section id="passions" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl font-bold text-center mb-12 text-gray-800"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Descubre lo que me mueve 🚀
                </motion.h2>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    {passionItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1
                            }}
                        >
                            <PassionItem 
                                {...item}
                                className={`${item.className} shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]`}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
