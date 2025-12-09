import React from 'react';
import { ArrowRight, Zap, Wrench, Home, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';

const BentoGrid = () => {
    const categories = [
        {
            id: 1,
            title: "Hogar Inteligente",
            subtitle: "Automatización y Control",
            icon: <Home className="w-6 h-6 text-white" />,
            image: "https://images.unsplash.com/photo-1558002038-1091a166111c?q=80&w=2070&auto=format&fit=crop",
            size: "col-span-1 md:col-span-2 row-span-2",
            color: "from-blue-600 to-blue-900"
        },
        {
            id: 2,
            title: "Electricidad Domiciliaria",
            subtitle: "Seguridad para tu hogar",
            icon: <Zap className="w-6 h-6 text-white" />,
            image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop",
            size: "col-span-1 row-span-1",
            color: "from-amber-500 to-amber-700"
        },
        {
            id: 3,
            title: "Gasfitería",
            subtitle: "Soluciones hidráulicas",
            icon: <Droplets className="w-6 h-6 text-white" />,
            image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=2070&auto=format&fit=crop",
            size: "col-span-1 row-span-1",
            color: "from-cyan-500 to-cyan-700"
        },
        {
            id: 4,
            title: "Herramientas Manuales",
            subtitle: "Calidad profesional",
            icon: <Wrench className="w-6 h-6 text-white" />,
            image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=2070&auto=format&fit=crop",
            size: "col-span-1 md:col-span-2 row-span-1",
            color: "from-slate-600 to-slate-900"
        }
    ];

    return (
        <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Soluciones Integrales</h2>
                        <p className="text-slate-600">Encuentra todo lo que necesitas por categoría</p>
                    </div>
                    <a href="#" className="flex items-center gap-2 text-primary font-semibold hover:text-blue-700 transition-colors">
                        Ver todas las categorías <ArrowRight size={20} />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[600px]">
                    {categories.map((cat) => (
                        <div
                            key={cat.id}
                            className={`relative group overflow-hidden rounded-2xl shadow-md cursor-pointer ${cat.size}`}
                        >
                            {/* Background Image */}
                            <img
                                src={cat.image}
                                alt={cat.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-80 group-hover:opacity-90 transition-opacity`}></div>

                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                                <div className="mb-auto bg-white/20 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    {cat.icon}
                                </div>

                                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-2xl font-bold mb-1">{cat.title}</h3>
                                    <p className="text-slate-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        {cat.subtitle}
                                    </p>
                                    <Link to={`/category/${cat.title.toLowerCase().replace(' ', '-')}`} className="inline-flex items-center gap-2 text-sm font-semibold border-b border-white/0 group-hover:border-white/100 transition-all pb-0.5">
                                        Explorar <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
