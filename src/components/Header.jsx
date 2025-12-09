import React, { useState } from 'react';
import { MapPin, Clock, Search, ShoppingCart, User, Menu, ChevronDown, Phone } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const categories = [
        { name: 'Herramientas', slug: 'herramientas', subcategories: ['Manuales', 'Eléctricas', 'Inalámbricas', 'Jardín'] },
        { name: 'Electricidad', slug: 'electricidad', subcategories: ['Cables', 'Interruptores', 'Iluminación', 'Tableros'] },
        { name: 'Gasfitería', slug: 'gasfiteria', subcategories: ['Cañerías', 'Llaves', 'Baño', 'Cocina'] },
        { name: 'Seguridad', slug: 'seguridad', subcategories: ['Cámaras', 'Cerraduras', 'Alarmas', 'EPP'] },
    ];

    return (
        <header className="w-full bg-white shadow-sm z-50 relative">
            {/* Top Bar */}
            <div className="bg-slate-900 text-slate-300 text-xs py-2">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <span className="flex items-center gap-1"><Clock size={14} /> Lun-Vie: 8:30 - 18:30 | Sáb: 9:00 - 14:00</span>
                        <span className="flex items-center gap-1"><MapPin size={14} /> Av. Providencia 1234, Santiago</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1"><Phone size={14} /> +56 2 2345 6789</span>
                        <Link to="/tracking" className="hover:text-white transition-colors">Seguimiento</Link>
                        <Link to="/help" className="hover:text-white transition-colors">Ayuda</Link>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between gap-8">
                    {/* Logo */}
                    <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate('/')}>
                        <h1 className="text-2xl font-bold text-primary tracking-tight">Dreamlike<span className="text-slate-900">.cl</span></h1>
                    </div>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-2xl relative hidden md:block">
                        <input
                            type="text"
                            placeholder="¿Qué estás buscando hoy?"
                            className="w-full pl-4 pr-12 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-primary text-white rounded-md hover:bg-blue-700 transition-colors">
                            <Search size={18} />
                        </button>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => navigate('/login')}
                            className="flex flex-col items-center gap-1 text-slate-600 hover:text-primary transition-colors"
                        >
                            <User size={24} />
                            <span className="text-xs font-medium hidden sm:block">Mi Cuenta</span>
                        </button>
                        <button
                            onClick={() => navigate('/cart')}
                            className="flex flex-col items-center gap-1 text-slate-600 hover:text-primary transition-colors relative"
                        >
                            <div className="relative">
                                <ShoppingCart size={24} />
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">3</span>
                            </div>
                            <span className="text-xs font-medium hidden sm:block">Carro</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mega Menu / Navigation */}
            <div className="border-t border-slate-100 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-8 h-12">
                        <button
                            className="flex items-center gap-2 font-semibold text-slate-900 hover:text-primary transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <Menu size={20} />
                            Categorías
                        </button>

                        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
                            {categories.map((cat) => (
                                <div key={cat.name} className="group relative h-12 flex items-center">
                                    <Link to={`/category/${cat.slug}`} className="flex items-center gap-1 hover:text-primary transition-colors">
                                        {cat.name} <ChevronDown size={14} />
                                    </Link>
                                    {/* Dropdown */}
                                    <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-b-lg border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                        <ul className="py-2">
                                            {cat.subcategories.map((sub) => (
                                                <li key={sub}>
                                                    <Link to={`/category/${cat.slug}`} className="block px-4 py-2 hover:bg-slate-50 hover:text-primary">
                                                        {sub}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                            <Link to="/category/ofertas" className="text-red-600 hover:text-red-700">Ofertas</Link>
                            <Link to="/category/marcas" className="hover:text-primary">Marcas</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
