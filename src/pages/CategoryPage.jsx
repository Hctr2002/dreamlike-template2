import React from 'react';
import { useParams } from 'react-router-dom';
import { Filter, ChevronDown } from 'lucide-react';

const CategoryPage = () => {
    const { id } = useParams();
    const categoryName = id ? id.charAt(0).toUpperCase() + id.slice(1).replace('-', ' ') : 'Categoría';

    // Mock products
    const products = Array.from({ length: 8 }).map((_, i) => ({
        id: i + 1,
        name: `Producto Ejemplo ${i + 1}`,
        price: Math.floor(Math.random() * 100000) + 5000,
        image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=2070&auto=format&fit=crop"
    }));

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-slate-900">{categoryName}</h1>
                <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50">
                    <Filter size={20} /> Filtros <ChevronDown size={16} />
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-all">
                        <div className="h-48 bg-slate-100 rounded-t-xl overflow-hidden">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-slate-900 mb-2">{product.name}</h3>
                            <p className="text-xl font-bold text-primary">
                                {new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(product.price)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;
