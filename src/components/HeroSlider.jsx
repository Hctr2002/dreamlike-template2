import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
    const slides = [
        {
            id: 1,
            title: "Iluminación LED Industrial",
            subtitle: "Hasta 40% de descuento en proyectos",
            description: "Tecnología eficiente para grandes espacios. Cotiza tu proyecto con nosotros.",
            image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=1935&auto=format&fit=crop",
            cta: "Ver Catálogo",
            color: "bg-slate-900"
        },
        {
            id: 2,
            title: "Kits de Instalación Eléctrica",
            subtitle: "Todo lo que necesitas en un solo lugar",
            description: "Herramientas certificadas y materiales de primera calidad para profesionales.",
            image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
            cta: "Comprar Kits",
            color: "bg-blue-900"
        },
        {
            id: 3,
            title: "Herramientas de Precisión",
            subtitle: "Nuevas llegadas: Serie Pro",
            description: "Descubre la nueva línea de herramientas manuales y eléctricas de alta gama.",
            image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=2070&auto=format&fit=crop",
            cta: "Explorar",
            color: "bg-slate-800"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-[500px] overflow-hidden bg-slate-100">
            {/* Slides */}
            <div
                className="flex transition-transform duration-500 ease-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide) => (
                    <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
                        {/* Background Image with Overlay */}
                        <div className="absolute inset-0">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                            <div className={`absolute inset-0 ${slide.color} opacity-60 mix-blend-multiply`}></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent"></div>
                        </div>

                        {/* Content */}
                        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center text-white z-10">
                            <div className="max-w-xl space-y-6 animate-fade-in-up">
                                <span className="inline-block px-3 py-1 bg-primary/90 text-white text-xs font-bold rounded-full uppercase tracking-wider mb-2">
                                    Destacado
                                </span>
                                <h2 className="text-5xl font-bold leading-tight">{slide.title}</h2>
                                <p className="text-xl text-slate-200 font-light">{slide.subtitle}</p>
                                <p className="text-slate-300">{slide.description}</p>
                                <Link to="/category/ofertas" className="flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:translate-x-1 w-fit">
                                    {slide.cta} <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Controls */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-colors z-20"
            >
                <ChevronLeft size={32} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-colors z-20"
            >
                <ChevronRight size={32} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-primary w-8' : 'bg-white/50 hover:bg-white/80'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
