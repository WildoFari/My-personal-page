import React from 'react';

interface PassionItemProps {
    icon: string;
    title: string;
    description: string;
}

function PassionItem({ icon, title, description }: PassionItemProps) {
    return (
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <span role="img" aria-label={title} className="text-6xl mb-4">{icon}</span>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">{title}</h3>
            <p className="text-gray-600 text-center">{description}</p>
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
                        icon=""
                        title="Disciplina"
                        description="Enfoque, dedicación y esfuerzo para alcanzar mis metas."
                    />
                    <PassionItem
                        icon=""
                        title="Andar en bicicleta"
                        description="Recorriendo horizontes sobre dos ruedas."
                    />
                    <PassionItem
                        icon="⛰️"
                        title="Trail Running"
                        description="Conexión con la naturaleza y superación personal."
                    />
                    <PassionItem
                        icon=""
                        title="Anime"
                        description="Historias que inspiran y mundos por descubrir."
                    />
                </div>
            </div>
        </section>
    );
}