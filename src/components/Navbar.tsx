"use client";

import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-4 fixed w-full top-0 z-50 shadow-md transition-shadow duration-300">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors duration-300">Mi Página</a>

                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="h-6 w-6 fill-current"
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
                    className={`md:flex gap-6 ${isOpen ? "block mt-4 md:mt-0" : "hidden"} md:block transition-all duration-300 ease-in-out`}
                >
                    <li>
                        <a
                            href="#about"
                            className="hover:text-gray-300 transition-colors duration-300 ease-in-out"
                            style={{ transitionDelay: "0.2s" }}
                        >
                            Sobre mí
                        </a>
                    </li>
                    <li>
                        <a
                            href="#passions"
                            className="hover:text-gray-300 transition-colors duration-300 ease-in-out"
                            style={{ transitionDelay: "0.3s" }}
                        >
                            Mis pasiones
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="hover:text-gray-300 transition-colors duration-300 ease-in-out"
                            style={{ transitionDelay: "0.4s" }}
                        >
                            Proyectos
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="hover:text-gray-300 transition-colors duration-300 ease-in-out"
                            style={{ transitionDelay: "0.7s" }}
                        >
                            Contacto
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}