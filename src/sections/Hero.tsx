export default function Hero() {
    return (
        <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-20 text-center">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-4">¡Hola! Soy WildoDev</h1>
                <p className="text-lg mb-8">
                    Bienvenido a mi página personal. Aquí comparto cosas sobre mi vida y pasiones.
                </p>
                <a
                    href="#about"
                    className="bg-white text-indigo-600 py-3 px-8 rounded-full font-semibold hover:bg-indigo-100 transition duration-300"
                >
                    Conóceme más
                </a>
            </div>
        </section>
    );
}