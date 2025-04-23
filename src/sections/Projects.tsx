export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 text-center">Proyectos</h2>
                <p className="text-lg text-center mb-10">Aquí puedes ver mi proyecto principal y el que está en desarrollo:</p>
                <div className="mb-8 p-6 rounded-lg shadow-xl bg-gradient-to-br from-gray-800 to-gray-700">
                    <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
                        Proyecto Completado: Aplicación de Finanzas
                    </h3>
                    <p className="text-gray-300">
                        Aplicación web para gestionar finanzas personales. Permite crear presupuestos, registrar gastos e ingresos, y visualizar informes financieros.
                        Tecnologías: React, Node.js, Express, MongoDB.
                        <a href="https://finance-tracker-ruddy-five.vercel.app/" className="text-blue-400 hover:underline block mt-2">
                            Finance Tracket
                        </a>
                    </p>
                </div>
                <div className="p-5 rounded-lg shadow-xl bg-gradient-to-br from-gray-800 to-gray-700">
                    <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
                        El siguiente siempre ya esta en camino
                    </h3>
                    {/* <p className="text-gray-300">
                        Se viene el proyecto sobre la web de WilDev, donde podras ver mi viaje, mis pasiones y mis proyectos.
                    </p> */}
                </div>
            </div>
        </section>
    );
}