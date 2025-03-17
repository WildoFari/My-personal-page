export default function Gallery() {
    return (
        <section id="gallery" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Galería
                </h2>
                <div className="text-center">
                    <p className="text-lg mb-10 text-gray-300">
                        Algunas fotos y momentos especiales: "Próximamente"
                    </p>
                    <div className="animate-pulse inline-block p-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                        </svg>
                    </div>
                </div>
                {/* Espacio para futuras imágenes */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Aquí irían las imágenes cuando estén disponibles */}
                    <div className="rounded-lg overflow-hidden shadow-md bg-gray-700 aspect-w-16 aspect-h-9">
                        <div className="flex items-center justify-center h-full text-gray-500">
                            Próximamente
                        </div>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md bg-gray-700 aspect-w-16 aspect-h-9">
                        <div className="flex items-center justify-center h-full text-gray-500">
                            Próximamente
                        </div>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md bg-gray-700 aspect-w-16 aspect-h-9">
                        <div className="flex items-center justify-center h-full text-gray-500">
                            Próximamente
                        </div>
                    </div>
                    {/* ... más imágenes aquí */}
                </div>
            </div>
        </section>
    );
}