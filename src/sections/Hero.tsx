import React from 'react';

export default function Hero() {
    return (
        <section className="relative bg-gradient-to-r from-teal-200 via-green-300 to-blue-200 py-32 text-center">
            <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url('/images/hero-bg-light.jpg')` }}></div>
            <div className="container mx-auto px-4 relative z-10">
                <h1 className="text-4xl font-bold mb-4 text-gray-900 leading-tight">¡Hola! Soy WilDev</h1>
                <p className="text-lg mb-8 text-gray-700 max-w-2xl mx-auto">
                    Bienvenido a mi espacio personal, donde comparto mi viaje, mis pasiones y mis proyectos.
                </p>
                <a
                    href="#about"
                    className="bg-white text-green-700 py-3 px-8 rounded-full font-semibold hover:bg-green-100 transition duration-300 shadow-md"
                >
                    Conóceme más
                </a>
            </div>
        </section>
    );
}