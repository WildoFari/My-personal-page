export default function Contact() {
    return (
        <section id="contact" className="py-50 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <div className="container mx-auto px-4 py-5 md:py-2 text-center">
                <h2 className="text-5xl font-extrabold mb-1 md:mb-2 text-gray-300 hover:text-white cursor-default bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 ">
                    Contacto
                </h2>
                <p className="text-xl mb-2 hover:text-white text-gray-500 cursor-default">
                    Conectá conmigo en redes sociales o seguí mi camino como desarrollador 🚀
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/wildo-fariña-gómez-3500522b9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center px-6 py-3 font-medium text-blue-300 rounded-lg shadow-xl transition-all duration-300 hover:ring-2 hover:ring-blue-400 hover:bg-gray-900 hover:bg-blue-900/30"
                    >
                        <span className="relative">LinkedIn</span>
                    </a>

                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/wildodevpy?igsh=MW81M2lqN3IxNmk3Yw%3D%3D&utm-source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center px-6 py-3 font-medium text-pink-300 rounded-lg shadow-xl transition-all duration-300 hover:ring-2 hover:ring-pink-400 hover:bg-gray-900 hover:bg-pink-900/30"
                    >
                        <span className="relative">Instagram</span>
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/WildoFari"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center px-6 py-3 font-medium text-indigo-300 rounded-lg shadow-xl transition-all duration-300 hover:ring-2 hover:ring-indigo-400 hover:bg-gray-900 hover:bg-indigo-900/30"
                    >
                        <span className="relative">GitHub</span>
                    </a>
                </div>

                <p className="text-sm mb-5 cursor-default text-pink-300 font-normal mt-4">
                    Tengo novia 🥰
                </p>

                <a
                    href="https://www.instagram.com/liz_fonseca18?igsh=MTRrNnp4dDludXg0dw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mb-6 px-5 py-2 bg-pink-100 text-pink-700 text-xs rounded-full shadow-md hover:bg-pink-200 transition duration-300"
                >
                    💖 Perfil de mi novia
                </a>
            </div>
        </section>
    );
}