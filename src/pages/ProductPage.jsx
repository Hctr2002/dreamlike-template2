import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Star, ShoppingCart, Truck, ShieldCheck, Check } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';

const ProductPage = () => {
    const { id } = useParams();
    const { products } = useProducts();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [added, setAdded] = useState(false);

    useEffect(() => {
        const foundProduct = products.find(p => p.id === parseInt(id));
        setProduct(foundProduct);
    }, [id, products]);

    const handleAddToCart = () => {
        if (product) {
            addToCart(product);
            setAdded(true);
            setTimeout(() => setAdded(false), 2000);
        }
    };

    if (!product) return <div className="container mx-auto px-4 py-16 text-center">Cargando producto...</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Image Gallery */}
                <div className="space-y-4">
                    <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="aspect-square bg-slate-100 rounded-lg cursor-pointer hover:ring-2 hover:ring-primary overflow-hidden">
                                <img src={product.image} alt="" className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div>
                    <span className="text-primary font-semibold text-sm">{product.brand}</span>
                    <h1 className="text-3xl font-bold text-slate-900 mt-1 mb-4">{product.name}</h1>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex text-yellow-400">
                            {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={20} fill="currentColor" />)}
                        </div>
                        <span className="text-slate-500">(124 reseñas)</span>
                    </div>

                    <div className="text-4xl font-bold text-slate-900 mb-8">
                        {new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(product.price)}
                        <span className="text-lg text-slate-400 font-normal line-through ml-4">
                            {new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(product.price * 1.3)}
                        </span>
                    </div>

                    <p className="text-slate-600 mb-8 leading-relaxed">
                        Producto de alta calidad marca {product.brand}, ideal para trabajos profesionales y domésticos.
                        Cuenta con garantía de fábrica y soporte técnico especializado. Stock disponible: {product.stock} unidades.
                    </p>

                    <div className="flex gap-4 mb-8">
                        <button
                            onClick={handleAddToCart}
                            className={`flex-1 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${added
                                    ? 'bg-green-600 text-white hover:bg-green-700'
                                    : 'bg-primary text-white hover:bg-blue-600'
                                }`}
                        >
                            {added ? (
                                <>
                                    <Check size={20} /> Agregado
                                </>
                            ) : (
                                <>
                                    <ShoppingCart size={20} /> Agregar al Carro
                                </>
                            )}
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
