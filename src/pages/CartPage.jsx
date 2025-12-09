import React from 'react';
import { Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-8">Tu Carro de Compras</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                    {[1, 2].map((item) => (
                        <div key={item} className="flex gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                            <div className="w-24 h-24 bg-slate-100 rounded-lg flex-shrink-0">
                                <img
                                    src="https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2078&auto=format&fit=crop"
                                    alt="Product"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between mb-2">
                                    <h3 className="font-bold text-slate-900">Taladro Percutor Inalámbrico</h3>
                                    <button className="text-red-500 hover:text-red-600"><Trash2 size={18} /></button>
                                </div>
                                <p className="text-sm text-slate-500 mb-4">Makita</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center border border-slate-200 rounded-lg">
                                        <button className="px-3 py-1 hover:bg-slate-50">-</button>
                                        <span className="px-3 py-1 font-medium">1</span>
                                        <button className="px-3 py-1 hover:bg-slate-50">+</button>
                                    </div>
                                    <span className="font-bold text-slate-900">$129.990</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm sticky top-4">
                        <h3 className="font-bold text-lg mb-4">Resumen de Compra</h3>
                        <div className="space-y-2 mb-4 text-sm">
                            <div className="flex justify-between text-slate-600">
                                <span>Subtotal</span>
                                <span>$259.980</span>
                            </div>
                            <div className="flex justify-between text-slate-600">
                                <span>Despacho</span>
                                <span>$4.990</span>
                            </div>
                            <div className="border-t border-slate-100 pt-2 mt-2 flex justify-between font-bold text-lg text-slate-900">
                                <span>Total</span>
                                <span>$264.970</span>
                            </div>
                        </div>
                        <button className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                            Ir a Pagar <ArrowRight size={18} />
                        </button>
                        <Link to="/" className="block text-center text-primary text-sm font-medium mt-4 hover:underline">
                            Seguir Comprando
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
