"use client";

import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Cierra el menú al hacer clic en un enlace
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-3 fixed w-full top-0 z-50 shadow-md transition-shadow duration-300">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                {/* Logo/Título a la izquierda */}
                <a href="#" className="text-2xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors duration-300 tracking-tight">
                    Mi Página
                </a>

                {/* Menú de navegación a la derecha en desktop, hamburguesa en mobile */}
                <div className="flex items-center">
                    <button
                        className="md:hidden text-white focus:outline-none ml-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Abrir menú"
                    >
                        <svg
                            className="h-7 w-7 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.829-4.828 4.829a1 1 0 0 1-1.414-1.414l4.829-4.828-4.829-4.828a1 1 0 1 1 1.414-1.414l4.828 4.829 4.829-4.829a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.829z"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                                />
                            )}
                        </svg>
                    </button>
                    <ul
                        className={`md:flex flex-col md:flex-row md:items-center md:gap-10 gap-4 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden md:flex"}`}
                    >
                    <li>
                        <a
                            href="#about"
                            onClick={handleLinkClick}
                            className="block md:inline hover:text-gray-300 transition-colors duration-300"
                        >
                            Sobre mí
                        </a>
                    </li>
                    <li>
                        <a
                            href="#passions"
                            onClick={handleLinkClick}
                            className="block md:inline hover:text-gray-300 transition-colors duration-300"
                        >
                            Mis pasiones
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            onClick={handleLinkClick}
                            className="block md:inline hover:text-gray-300 transition-colors duration-300"
                        >
                            Proyectos
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            onClick={handleLinkClick}
                            className="block md:inline hover:text-gray-300 transition-colors duration-300"
                        >
                            Contacto
                        </a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}
