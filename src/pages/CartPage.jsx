import React from 'react';
import { Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage = () => {
    const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

    const formatPrice = (price) => {
        return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(price);
    };

    if (cartItems.length === 0) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShoppingBag size={48} className="text-slate-400" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Tu carro está vacío</h2>
                <p className="text-slate-500 mb-8">Parece que aún no has agregado productos.</p>
                <Link to="/" className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-blue-600 transition-colors">
                    Volver a la tienda
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-8">Tu Carro de Compras</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                            <div className="w-24 h-24 bg-slate-100 rounded-lg flex-shrink-0 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between mb-2">
                                    <h3 className="font-bold text-slate-900 line-clamp-1">{item.name}</h3>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 hover:text-red-600 p-1 hover:bg-red-50 rounded transition-colors"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                                <p className="text-sm text-slate-500 mb-4">{item.brand}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center border border-slate-200 rounded-lg">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="px-3 py-1 hover:bg-slate-50 text-slate-600"
                                            disabled={item.quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <span className="px-3 py-1 font-medium text-slate-900 min-w-[2rem] text-center">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="px-3 py-1 hover:bg-slate-50 text-slate-600"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <span className="font-bold text-slate-900">{formatPrice(item.price * item.quantity)}</span>
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
                                <span>{formatPrice(cartTotal)}</span>
                            </div>
                            <div className="flex justify-between text-slate-600">
                                <span>Despacho</span>
                                <span>Por calcular</span>
                            </div>
                            <div className="border-t border-slate-100 pt-2 mt-2 flex justify-between font-bold text-lg text-slate-900">
                                <span>Total</span>
                                <span>{formatPrice(cartTotal)}</span>
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
