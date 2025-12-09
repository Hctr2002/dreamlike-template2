import React from 'react';
import { ShoppingCart, Star, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const FlashOffers = () => {
    const products = [
        {
            id: 1,
            name: "Taladro Percutor Inalámbrico 18V",
            brand: "Makita",
            price: 129990,
            originalPrice: 189990,
            rating: 4.8,
            reviews: 124,
            image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2078&auto=format&fit=crop",
            discount: "-32%"
        },
        {
            id: 2,
            name: "Set de Destornilladores Pro",
            brand: "Stanley",
            price: 24990,
            originalPrice: 35990,
            rating: 4.5,
            reviews: 89,
            image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=2070&auto=format&fit=crop",
            discount: "-30%"
        },
        {
            id: 3,
            name: "Foco LED Exterior 50W",
            brand: "Phillips",
            price: 15990,
            originalPrice: 22990,
            rating: 4.7,
            reviews: 256,
            image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=1935&auto=format&fit=crop",
            discount: "-30%"
        },
        {
            id: 4,
            name: "Cámara de Seguridad WiFi",
            brand: "Dahua",
            price: 45990,
            originalPrice: 69990,
            rating: 4.6,
            reviews: 180,
            image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?q=80&w=2097&auto=format&fit=crop",
            discount: "-34%"
        },
        {
            id: 5,
            name: "Multímetro Digital Auto",
            brand: "Fluke",
            price: 89990,
            originalPrice: 110990,
            rating: 4.9,
            reviews: 310,
            image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
            discount: "-19%"
        }
    ];

    const formatPrice = (price) => {
        return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(price);
    };

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-3xl font-bold text-slate-900">Ofertas Relámpago</h2>
                    <div className="flex items-center gap-2 bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-bold animate-pulse">
                        <Clock size={16} />
                        Termina en 04:23:15
                    </div>
                </div>

                <div className="relative">
                    <div className="flex gap-6 overflow-x-auto pb-8 snap-x scrollbar-hide">
                        {products.map((product) => (
                            <Link
                                to={`/product/${product.id}`}
                                key={product.id}
                                className="min-w-[280px] bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group snap-start block"
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden rounded-t-xl bg-slate-100">
                                    <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                                        {product.discount}
                                    </span>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <button className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-md text-slate-900 hover:text-primary hover:scale-110 transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                                        <ShoppingCart size={20} />
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <p className="text-xs text-slate-500 font-medium mb-1">{product.brand}</p>
                                    <h3 className="font-bold text-slate-900 mb-2 line-clamp-2 h-12">{product.name}</h3>

                                    <div className="flex items-center gap-1 mb-3">
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                                            ))}
                                        </div>
                                        <span className="text-xs text-slate-400">({product.reviews})</span>
                                    </div>

                                    <div className="flex items-end justify-between">
                                        <div>
                                            <p className="text-xs text-slate-400 line-through mb-0.5">{formatPrice(product.originalPrice)}</p>
                                            <p className="text-xl font-bold text-red-600">{formatPrice(product.price)}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FlashOffers;
