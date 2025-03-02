"use client";

import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-xl font-bold">Mi Página</a>

                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>

                <ul className={`md:flex gap-6 ${isOpen ? "block" : "hidden"} md:block`}>
                    <li><a href="#about" className="hover:text-gray-400">Sobre mí</a></li>
                    <li><a href="#passions" className="hover:text-gray-400">Mis pasiones</a></li>
                    <li><a href="#projects" className="hover:text-gray-400">Proyectos</a></li>
                    <li><a href="#gallery" className="hover:text-gray-400">Galería</a></li>
                    <li><a href="#contact" className="hover:text-gray-400">Contacto</a></li>
                </ul>
            </div>
        </nav>
    );
}
