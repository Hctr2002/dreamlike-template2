import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, AlertTriangle, ShieldCheck, BarChart3, Package, FileText, ArrowRight, Lock } from 'lucide-react';

// Helper component for the chart icon
const TrendingDownIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
        <polyline points="17 18 23 18 23 12"></polyline>
    </svg>
);

const PresentationPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 'pain',
            content: (
                <div className="h-full flex flex-col justify-center px-12 md:px-24">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                            <AlertTriangle className="text-red-500" size={32} />
                        </div>
                        <h2 className="text-4xl font-bold text-white tracking-tight">EL COSTO DEL SILENCIO</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h3 className="text-6xl font-bold text-white leading-tight">
                                ¿Cuánto vale tu <span className="text-red-500">Stock</span> hoy?
                            </h3>
                            <p className="text-2xl text-slate-400 font-light">
                                La incertidumbre operativa no es un riesgo. Es una pérdida garantizada.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 bg-red-500/5 border border-red-500/10 rounded-xl hover:bg-red-500/10 transition-colors">
                                    <span className="text-red-500 font-bold text-xl">01</span>
                                    <p className="text-slate-300">Fugas de inventario invisibles.</p>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-red-500/5 border border-red-500/10 rounded-xl hover:bg-red-500/10 transition-colors">
                                    <span className="text-red-500 font-bold text-xl">02</span>
                                    <p className="text-slate-300">Dependencia crítica de procesos manuales.</p>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-red-500/5 border border-red-500/10 rounded-xl hover:bg-red-500/10 transition-colors">
                                    <span className="text-red-500 font-bold text-xl">03</span>
                                    <p className="text-slate-300">Ceguera financiera en tiempo real.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-red-500/20 blur-[100px] rounded-full animate-pulse"></div>
                            <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl backdrop-blur-sm">
                                <div className="flex justify-between items-end mb-4">
                                    <div className="space-y-1">
                                        <p className="text-sm text-slate-500 uppercase tracking-wider">Pérdida Estimada Mensual</p>
                                        <p className="text-5xl font-bold text-white tracking-tighter">$2.5M+</p>
                                    </div>
                                    <div className="text-red-500 flex items-center gap-1 text-sm font-bold bg-red-500/10 px-2 py-1 rounded">
                                        <TrendingDownIcon /> -15% Margen
                                    </div>
                                </div>
                                <div className="h-48 flex items-end gap-2">
                                    {[40, 65, 45, 70, 50, 30, 45, 20].map((h, i) => (
                                        <div key={i} className="flex-1 bg-slate-800 rounded-t-sm relative overflow-hidden group">
                                            <div
                                                className="absolute bottom-0 left-0 w-full bg-red-500/50 transition-all duration-500 group-hover:bg-red-500"
                                                style={{ height: `${h}%` }}
                                            ></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'dashboard',
            content: (
                <div className="h-full flex flex-col justify-center px-8 md:px-16">
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-mono mb-2">
                                MVP VISTA 1 // CERO ERROR
                            </div>
                            <h2 className="text-4xl font-bold text-white tracking-tight">DASHBOARD_CENTRAL.HTML</h2>
                            <p className="text-slate-400 mt-2">Control total en una sola pantalla. La verdad operativa.</p>
                        </div>
                    </div>

                    {/* Mockup Container */}
                    <div className="flex-1 bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-2xl relative backdrop-blur-sm">
                        {/* Mock Header */}
                        <div className="h-12 bg-slate-800 border-b border-slate-700 flex items-center px-4 justify-between">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="text-xs text-slate-500 font-mono">DREAMLIKE_OS v1.0</div>
                        </div>

                        {/* Mock Content */}
                        <div className="p-6 grid grid-cols-3 gap-6 h-full">
                            {/* Stat Cards */}
                            <div className="col-span-3 grid grid-cols-4 gap-4 h-32">
                                {[
                                    { label: 'Ventas Hoy', val: '$1.2M', color: 'text-green-400' },
                                    { label: 'Pedidos Activos', val: '24', color: 'text-blue-400' },
                                    { label: 'Stock Crítico', val: '3 Items', color: 'text-red-400' },
                                    { label: 'Clientes Nuevos', val: '+12', color: 'text-purple-400' }
                                ].map((stat, i) => (
                                    <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 flex flex-col justify-center hover:bg-slate-800 transition-colors">
                                        <p className="text-slate-500 text-xs uppercase tracking-wider">{stat.label}</p>
                                        <p className={`text-2xl font-bold ${stat.color} mt-1`}>{stat.val}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Main Chart Area */}
                            <div className="col-span-2 bg-slate-800/30 border border-slate-700 rounded-lg p-4 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                    <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <BarChart3 size={64} className="text-slate-700" />
                                </div>
                                <p className="text-slate-400 text-sm font-mono absolute top-4 left-4">RENDIMIENTO EN TIEMPO REAL</p>
                            </div>

                            {/* Activity Feed */}
                            <div className="col-span-1 bg-slate-800/30 border border-slate-700 rounded-lg p-4">
                                <p className="text-slate-400 text-sm font-mono mb-4">ACTIVIDAD RECIENTE</p>
                                <div className="space-y-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="flex items-center gap-3 text-xs text-slate-300 p-2 hover:bg-slate-800 rounded transition-colors">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                            <span>Nueva orden #202{i} procesada</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'inventory',
            content: (
                <div className="h-full flex flex-col justify-center px-8 md:px-16">
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <div className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-mono mb-2">
                                MVP VISTA 2 // AUTONOMÍA
                            </div>
                            <h2 className="text-4xl font-bold text-white tracking-tight">GESTION_DE_INVENTARIO.HTML</h2>
                            <p className="text-slate-400 mt-2">Blindaje de stock. Nunca más una venta perdida.</p>
                        </div>
                    </div>

                    {/* Mockup Container */}
                    <div className="flex-1 bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-2xl relative backdrop-blur-sm">
                        {/* Mock Header */}
                        <div className="h-12 bg-slate-800 border-b border-slate-700 flex items-center px-4 justify-between">
                            <div className="flex gap-4 text-sm text-slate-400">
                                <span className="text-white font-bold border-b-2 border-green-500 pb-3 translate-y-3.5">Inventario</span>
                                <span>Movimientos</span>
                                <span>Proveedores</span>
                            </div>
                        </div>

                        {/* Mock Table */}
                        <div className="p-6">
                            <div className="w-full bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden">
                                <div className="grid grid-cols-5 bg-slate-800 p-3 text-xs font-bold text-slate-400 uppercase tracking-wider">
                                    <div className="col-span-2">Producto</div>
                                    <div>SKU</div>
                                    <div>Stock</div>
                                    <div className="text-right">Estado</div>
                                </div>
                                {[
                                    { name: 'Taladro Percutor 18V', sku: 'MAK-18V-001', stock: 15, status: 'Optimal', color: 'text-green-400' },
                                    { name: 'Sierra Circular Pro', sku: 'BOS-CIR-002', stock: 4, status: 'Low Stock', color: 'text-yellow-400' },
                                    { name: 'Set Brocas Titanio', sku: 'MIL-SET-003', stock: 42, status: 'Optimal', color: 'text-green-400' },
                                    { name: 'Lijadora Orbital', sku: 'DEW-LIJ-004', stock: 0, status: 'Critical', color: 'text-red-400' },
                                    { name: 'Esmeril Angular', sku: 'MAK-ESM-005', stock: 8, status: 'Warning', color: 'text-yellow-400' },
                                ].map((item, i) => (
                                    <div key={i} className="grid grid-cols-5 p-4 border-t border-slate-700 items-center hover:bg-slate-700/30 transition-colors group">
                                        <div className="col-span-2 flex items-center gap-3">
                                            <div className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center group-hover:bg-slate-600 transition-colors">
                                                <Package size={16} className="text-slate-400 group-hover:text-white" />
                                            </div>
                                            <span className="text-slate-200 font-medium group-hover:text-white">{item.name}</span>
                                        </div>
                                        <div className="text-slate-400 text-sm font-mono">{item.sku}</div>
                                        <div className="text-white font-bold">{item.stock}</div>
                                        <div className={`text-right text-xs font-bold ${item.color}`}>{item.status}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'finance',
            content: (
                <div className="h-full flex flex-col justify-center px-8 md:px-16">
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-mono mb-2">
                                MVP VISTA 3 // PREPARACIÓN
                            </div>
                            <h2 className="text-4xl font-bold text-white tracking-tight">MODULO_DE_FINANZAS.HTML</h2>
                            <p className="text-slate-400 mt-2">Facturación simplificada. Listo para escalar.</p>
                        </div>
                    </div>

                    {/* Mockup Container */}
                    <div className="flex-1 bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-2xl relative flex backdrop-blur-sm">
                        {/* Sidebar */}
                        <div className="w-64 bg-slate-800 border-r border-slate-700 p-4 hidden md:block">
                            <div className="space-y-2">
                                <div className="p-2 bg-blue-600/20 text-blue-400 rounded-lg font-medium flex items-center gap-2">
                                    <FileText size={18} /> Facturas
                                </div>
                                <div className="p-2 text-slate-400 hover:bg-slate-700/50 rounded-lg transition-colors flex items-center gap-2">
                                    <BarChart3 size={18} /> Reportes
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-8 flex flex-col items-center justify-center bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-80">
                            <div className="bg-white text-slate-900 w-full max-w-md rounded-lg shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                                <div className="flex justify-between items-center mb-8">
                                    <h3 className="font-bold text-2xl tracking-tight">INVOICE</h3>
                                    <div className="text-right">
                                        <p className="text-xs text-slate-500">#INV-2025-001</p>
                                        <p className="text-xs text-slate-500">Dic 09, 2025</p>
                                    </div>
                                </div>
                                <div className="space-y-4 mb-8">
                                    <div className="h-4 bg-slate-100 rounded w-1/2"></div>
                                    <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                                </div>
                                <div className="border-t border-b border-slate-100 py-4 space-y-2 mb-8">
                                    <div className="flex justify-between text-sm">
                                        <span>Servicios Digitales</span>
                                        <span className="font-mono">$100.000</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span>Implementación</span>
                                        <span className="font-mono">$50.000</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-lg">TOTAL</span>
                                    <span className="font-bold text-xl text-blue-600 font-mono">$150.000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'closing',
            content: (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-12 px-4">
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-500/30 blur-[80px] rounded-full animate-pulse"></div>
                        <ShieldCheck size={80} className="text-blue-500 relative z-10" />
                    </div>

                    <div className="space-y-6 relative z-10">
                        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                            BLINDAJE <span className="text-blue-500">INMEDIATO</span>
                        </h2>
                        <p className="text-2xl text-slate-300 max-w-2xl mx-auto font-light">
                            100 UF. Autonomía Operativa. <br />
                            <span className="text-slate-500 text-lg">El primer paso hacia el Ecosistema Total (1500 UF).</span>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl relative z-10">
                        <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl backdrop-blur-sm hover:bg-slate-800 transition-colors">
                            <h4 className="text-white font-bold mb-2">Fase I (AHORA)</h4>
                            <p className="text-slate-400 text-sm">Control de Stock & Dashboard</p>
                        </div>
                        <div className="flex items-center justify-center text-slate-600">
                            <ArrowRight size={24} />
                        </div>
                        <div className="bg-slate-800/30 border border-slate-700/50 p-6 rounded-xl backdrop-blur-sm opacity-50">
                            <h4 className="text-slate-300 font-bold mb-2">Fase II (VISIÓN)</h4>
                            <p className="text-slate-500 text-sm">Ecosistema Total & IA</p>
                        </div>
                    </div>

                    <button className="relative z-10 group bg-white text-slate-900 px-12 py-5 rounded-full text-xl font-bold transition-all flex items-center gap-4 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:scale-105">
                        <Lock size={20} className="text-blue-600" />
                        ACTIVAR FASE I
                    </button>
                </div>
            )
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="fixed inset-0 bg-slate-950 text-slate-200 font-sans overflow-hidden z-[100]">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black opacity-80"></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>

            {/* Content Container */}
            <div className="relative z-10 w-full h-full animate-fade-in">
                {slides[currentSlide].content}
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-8 right-8 flex gap-4 z-20">
                <button
                    onClick={prevSlide}
                    className="p-4 rounded-full bg-slate-800/50 hover:bg-slate-700 text-white backdrop-blur-sm border border-slate-700 transition-colors"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="p-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white backdrop-blur-sm shadow-lg shadow-blue-600/20 transition-colors"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Progress Indicator */}
            <div className="absolute bottom-8 left-8 flex gap-2 z-20">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-12 bg-blue-500' : 'w-4 bg-slate-700'
                            }`}
                    />
                ))}
            </div>

            {/* Slide Counter */}
            <div className="absolute top-8 right-8 font-mono text-slate-500 text-sm">
                {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </div>
        </div>
    );
};

export default PresentationPage;
