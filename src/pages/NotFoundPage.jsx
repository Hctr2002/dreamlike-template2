import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage = () => {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-9xl font-bold text-primary/10">404</h1>
            <h2 className="text-3xl font-bold text-slate-900 -mt-12 mb-4">Página no encontrada</h2>
            <p className="text-slate-600 mb-8 max-w-md">
                Lo sentimos, la página que estás buscando no existe o ha sido movida.
            </p>
            <Link
                to="/"
                className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors"
            >
                <Home size={20} /> Volver al Inicio
            </Link>
        </div>
    );
};

export default NotFoundPage;
