export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 animate-pulse">
                    Contacto
                </h2>
                <p className="text-xl mb-16 text-gray-300">
                    Mis redes sociales para que me sigas.!
                </p>
                <span>Tengo novia y la amo mucho   🥰</span>
                <a
                    href="https://www.instagram.com/liz_fonseca18?igsh=MTRrNnp4dDludXg0dw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center p-4 overflow-hidden text-lg font-medium text-purple-600 rounded-lg shadow-2xl group-hover:shadow-xl group-hover:ring-2 group-hover:ring-offset-2 group-hover:ring-blue-400 transition-all duration-300"
                >
                    <span className="absolute left-0 block w-full h-0 transition-all duration-200 opacity-100 group-hover:h-12 ease"></span>
                    <span className="relative mr-5">Mi novia</span>
                </a>
                <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-12">

                    <a
                        href="https://www.linkedin.com/in/wildo-fariña-gómez-3500522b9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center p-4 overflow-hidden text-lg font-medium text-blue-300 rounded-lg shadow-2xl group-hover:shadow-xl group-hover:ring-2 group-hover:ring-offset-2 group-hover:ring-blue-400 transition-all duration-300"
                    >
                        <span className="absolute left-0 block w-full h-0 transition-all duration-200 opacity-100 group-hover:h-12 ease"></span>
                        <span className="relative">LinkedIn</span>
                    </a>
                    <a
                        href="https://www.instagram.com/wildodevpy?igsh=MW81M2lqN3IxNmk3Yw%3D%3D&utm-source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center p-4 overflow-hidden text-lg font-medium text-pink-300 rounded-lg shadow-2xl group-hover:shadow-xl group-hover:ring-2 group-hover:ring-offset-2 group-hover:ring-pink-400 transition-all duration-300"
                    >
                        <span className="absolute left-0 block w-full h-0 transition-all duration-200 opacity-100 group-hover:h-12 ease"></span>
                        <span className="relative">Instagram</span>
                    </a>
                    <a
                        href="https://github.com/WildoFari"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center p-4 overflow-hidden text-lg font-medium text-indigo-300 rounded-lg shadow-2xl group-hover:shadow-xl group-hover:ring-2 group-hover:ring-offset-2 group-hover:ring-indigo-400 transition-all duration-300"
                    >
                        <span className="absolute left-0 block w-full h-0 transition-all duration-200 opacity-100 group-hover:h-12 ease"></span>
                        <span className="relative">GitHub</span>
                    </a>
                </div>
            </div>
        </section>
    );
}