import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Filter, ChevronDown, ShoppingCart } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';

const CategoryPage = () => {
    const { id } = useParams();
    const { products } = useProducts();
    const { addToCart } = useCart();

    const categoryName = id ? id.charAt(0).toUpperCase() + id.slice(1).replace('-', ' ') : 'Catálogo';

    // Filter products based on category slug
    // If id is undefined or 'ofertas'/'marcas' (for now), we might show all or specific logic
    // For this demo, if it matches a known category, filter. Else show all.
    const filteredProducts = products.filter(product => {
        if (!id) return true;
        if (id === 'ofertas') return true; // Show all for offers for now
        if (id === 'marcas') return true; // Show all for brands for now
        return product.category.toLowerCase() === id.toLowerCase();
    });

    // If no products found (maybe because of mismatch or empty category), show all or empty message
    const displayProducts = filteredProducts.length > 0 ? filteredProducts : (id === 'ofertas' || id === 'marcas' ? products : []);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">{categoryName}</h1>
                    <p className="text-slate-500 mt-1">{displayProducts.length} productos encontrados</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50">
                    <Filter size={20} /> Filtros <ChevronDown size={16} />
                </button>
            </div>

            {displayProducts.length === 0 ? (
                <div className="text-center py-16 bg-slate-50 rounded-xl">
                    <p className="text-slate-500 text-lg">No se encontraron productos en esta categoría.</p>
                    <Link to="/" className="text-primary font-bold hover:underline mt-2 inline-block">Volver al inicio</Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {displayProducts.map((product) => (
                        <div key={product.id} className="bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-all group flex flex-col">
                            <Link to={`/product/${product.id}`} className="block relative h-48 bg-slate-100 rounded-t-xl overflow-hidden">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                {product.stock <= 5 && (
                                    <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                        ¡Últimas unidades!
                                    </span>
                                )}
                            </Link>
                            <div className="p-4 flex-1 flex flex-col">
                                <p className="text-xs text-slate-500 mb-1">{product.brand}</p>
                                <Link to={`/product/${product.id}`} className="block">
                                    <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2 hover:text-primary transition-colors">{product.name}</h3>
                                </Link>
                                <div className="mt-auto flex items-center justify-between">
                                    <p className="text-xl font-bold text-slate-900">
                                        {new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(product.price)}
                                    </p>
                                    <button
                                        onClick={() => addToCart(product)}
                                        className="p-2 bg-slate-100 text-slate-600 rounded-full hover:bg-primary hover:text-white transition-colors"
                                        title="Agregar al carro"
                                    >
                                        <ShoppingCart size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CategoryPage;
