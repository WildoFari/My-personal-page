"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface PassionItemProps {
    icon: string;
    title: string;
    description: string;
    images: string[]; // Agregamos imágenes a cada pasión
}

function PassionItem({ icon, title, description, images }: PassionItemProps) {
    return (
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <span role="img" aria-label={title} className="text-6xl mb-4">{icon}</span>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">{title}</h3>
            <p className="text-gray-600 text-center mb-4">{description}</p>

            {/* Carrusel de imágenes */}
            <Swiper spaceBetween={10} slidesPerView={1} className="w-full rounded-lg overflow-hidden">
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default function Passions() {
    return (
        <section id="passions" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Mis pasiones</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <PassionItem
                        icon="🚴"
                        title="Andar en bicicleta"
                        description="Recorriendo horizontes sobre dos ruedas."
                        images={["/images/profile.jpg", "/images/bike2.jpg", "/images/bike3.jpg"]}
                    />

                    <PassionItem
                        icon="🏃"
                        title="Trail Running"
                        description="Conexión con la naturaleza y superación personal."
                        images={["/images/trail1.jpg", "/images/trail2.jpg", "/images/trail3.jpg"]}
                    />

                    <PassionItem
                        icon="🎨"
                        title="Anime"
                        description="Historias que inspiran y mundos por descubrir."
                        images={["/images/anime1.jpg", "/images/anime2.jpg", "/images/anime3.jpg"]}
                    />

                    <PassionItem
                        icon="💻"
                        title="Desarrollo Web"
                        description="Construyendo experiencias digitales innovadoras."
                        images={["/images/web1.jpg", "/images/web2.jpg", "/images/web3.jpg"]}
                    />

                    <PassionItem
                        icon="🌍"
                        title="Viajar"
                        description="Descubriendo nuevas ciudades y paisajes impresionantes."
                        images={["/images/travel1.jpg", "/images/travel2.jpg", "/images/travel3.jpg"]}
                    />

                    <PassionItem
                        icon="🎵"
                        title="Música"
                        description="Melodías que acompañan cada momento de mi vida."
                        images={["/images/music1.jpg", "/images/music2.jpg", "/images/music3.jpg"]}
                    />

                    <PassionItem
                        icon="🎮"
                        title="Videojuegos"
                        description="Desafíos, estrategias y mundos por explorar."
                        images={["/images/games1.jpg", "/images/games2.jpg", "/images/games3.jpg"]}
                    />

                    <PassionItem
                        icon="📷"
                        title="Fotografía"
                        description="Capturando instantes que cuentan historias."
                        images={["/images/photo1.jpg", "/images/photo2.jpg", "/images/photo3.jpg"]}
                    />

                    <PassionItem
                        icon="📚"
                        title="Lectura"
                        description="Aprendiendo y explorando ideas sin límites."
                        images={["/images/reading1.jpg", "/images/reading2.jpg", "/images/reading3.jpg"]}
                    />

                    <PassionItem
                        icon="🏋️"
                        title="Gimnasio y Fitness"
                        description="Disciplina y constancia para una vida saludable."
                        images={["/images/fitness1.jpg", "/images/fitness2.jpg", "/images/fitness3.jpg"]}
                    />

                    <PassionItem
                        icon="🎬"
                        title="Cine y Series"
                        description="Narrativas que emocionan e inspiran."
                        images={["/images/movies1.jpg", "/images/movies2.jpg", "/images/movies3.jpg"]}
                    />

                    <PassionItem
                        icon="🔧"
                        title="Tecnología"
                        description="Explorando innovaciones que transforman el mundo."
                        images={["/images/tech1.jpg", "/images/tech2.jpg", "/images/tech3.jpg"]}
                    />

                </div>
            </div>
        </section>
    );
}
