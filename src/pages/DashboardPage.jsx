import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, Package, ShoppingBag, Users, TrendingUp, Settings } from 'lucide-react';
import AdminProductList from '../components/AdminProductList';

const DashboardPage = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    if (!user) return null;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar / Profile Card */}
                <aside className="w-full md:w-64 flex-shrink-0">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
                        <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-slate-50"
                        />
                        <h2 className="text-xl font-bold text-slate-900">{user.name}</h2>
                        <p className="text-slate-500 text-sm mb-6">{user.role === 'admin' ? 'Administrador' : 'Cliente'}</p>

                        <nav className="space-y-2 text-left">
                            <button className="w-full flex items-center gap-3 px-4 py-2 bg-slate-50 text-primary font-medium rounded-lg">
                                <Settings size={18} /> General
                            </button>
                            {user.role === 'client' && (
                                <button className="w-full flex items-center gap-3 px-4 py-2 text-slate-600 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors">
                                    <ShoppingBag size={18} /> Mis Pedidos
                                </button>
                            )}
                            <button
                                onClick={handleLogout}
                                className="w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors mt-4"
                            >
                                <LogOut size={18} /> Cerrar Sesión
                            </button>
                        </nav>
                    </div>
                </aside>

                {/* Main Content */}
                <div className="flex-1">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-slate-900">Panel de Control</h1>
                        <p className="text-slate-500">Bienvenido de vuelta, {user.name}</p>
                    </div>

                    {user.role === 'admin' ? (
                        <div className="space-y-8">
                            {/* Admin Stats */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                                            <TrendingUp size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500">Ventas Totales</p>
                                            <h3 className="text-2xl font-bold text-slate-900">$4.2M</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-green-100 text-green-600 rounded-lg">
                                            <Package size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500">Productos</p>
                                            <h3 className="text-2xl font-bold text-slate-900">142</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
                                            <Users size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500">Clientes</p>
                                            <h3 className="text-2xl font-bold text-slate-900">1,204</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Product Management */}
                            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                                <div className="p-6 border-b border-slate-100">
                                    <h3 className="text-lg font-bold text-slate-900">Gestión de Productos</h3>
                                </div>
                                <AdminProductList />
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            {/* Client Stats */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-orange-100 text-orange-600 rounded-lg">
                                            <Package size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500">Pedidos Activos</p>
                                            <h3 className="text-2xl font-bold text-slate-900">2</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                                            <ShoppingBag size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500">Total Comprado</p>
                                            <h3 className="text-2xl font-bold text-slate-900">$450.000</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Orders */}
                            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                                <div className="p-6 border-b border-slate-100">
                                    <h3 className="text-lg font-bold text-slate-900">Últimos Pedidos</h3>
                                </div>
                                <div className="p-6 text-center text-slate-500 py-12">
                                    <Package size={48} className="mx-auto mb-4 opacity-20" />
                                    <p>Aquí verás el historial de tus compras recientes.</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
