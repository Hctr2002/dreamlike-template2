import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, ShoppingCart, Truck, ShieldCheck } from 'lucide-react';

const ProductPage = () => {
    const { id } = useParams();

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Image Gallery */}
                <div className="space-y-4">
                    <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2078&auto=format&fit=crop"
                            alt="Product"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="aspect-square bg-slate-100 rounded-lg cursor-pointer hover:ring-2 hover:ring-primary"></div>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div>
                    <span className="text-primary font-semibold text-sm">Makita</span>
                    <h1 className="text-3xl font-bold text-slate-900 mt-1 mb-4">Taladro Percutor Inalámbrico 18V</h1>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex text-yellow-400">
                            {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={20} fill="currentColor" />)}
                        </div>
                        <span className="text-slate-500">(124 reseñas)</span>
                    </div>

                    <div className="text-4xl font-bold text-slate-900 mb-8">
                        $129.990
                        <span className="text-lg text-slate-400 font-normal line-through ml-4">$189.990</span>
                    </div>

                    <p className="text-slate-600 mb-8 leading-relaxed">
                        Potente taladro percutor ideal para trabajos profesionales. Incluye 2 baterías de litio, cargador rápido y maletín de transporte. Garantía de 3 años.
                    </p>

                    <div className="flex gap-4 mb-8">
                        <button className="flex-1 bg-primary text-white py-4 rounded-xl font-bold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                            <ShoppingCart size={20} /> Agregar al Carro
                        </button>
                        <button className="px-6 py-4 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-colors">
                            ❤
                        </button>
                    </div>

                    <div className="space-y-4 border-t border-slate-100 pt-6">
                        <div className="flex items-center gap-3 text-slate-600">
                            <Truck size={20} className="text-primary" />
                            <span>Despacho gratis en Santiago</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-600">
                            <ShieldCheck size={20} className="text-primary" />
                            <span>Garantía extendida disponible</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
