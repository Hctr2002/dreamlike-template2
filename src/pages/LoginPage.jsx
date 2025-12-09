import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className="min-h-[60vh] flex items-center justify-center py-12 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                <h2 className="text-2xl font-bold text-center text-slate-900 mb-8">Iniciar Sesión</h2>

                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                            placeholder="tu@email.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Contraseña</label>
                        <input
                            type="password"
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                            <span className="text-slate-600">Recordarme</span>
                        </label>
                        <a href="#" className="text-primary hover:underline">¿Olvidaste tu contraseña?</a>
                    </div>

                    <button className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors">
                        Ingresar
                    </button>
                </form>

                <p className="text-center text-sm text-slate-600 mt-8">
                    ¿No tienes cuenta? <Link to="/register" className="text-primary font-bold hover:underline">Regístrate aquí</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
