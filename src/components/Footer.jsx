import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6">Dreamlike<span className="text-primary">.cl</span></h2>
                        <p className="text-sm leading-relaxed mb-6">
                            Tu socio confiable en materiales de construcción, ferretería y electricidad. Calidad garantizada para profesionales y hogar.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Enlaces Rápidos</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/about" className="hover:text-primary transition-colors">Sobre Nosotros</Link></li>
                            <li><Link to="/stores" className="hover:text-primary transition-colors">Nuestras Tiendas</Link></li>
                            <li><Link to="/catalogs" className="hover:text-primary transition-colors">Catálogos</Link></li>
                            <li><Link to="/blog" className="hover:text-primary transition-colors">Blog Técnico</Link></li>
                            <li><Link to="/careers" className="hover:text-primary transition-colors">Trabaja con Nosotros</Link></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Servicio al Cliente</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-primary transition-colors">Centro de Ayuda</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Seguimiento de Pedido</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Cambios y Devoluciones</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Términos y Condiciones</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Contacto</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-primary flex-shrink-0" />
                                <span>Av. Providencia 1234, Of. 505<br />Santiago, Chile</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-primary flex-shrink-0" />
                                <span>+56 2 2345 6789</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-primary flex-shrink-0" />
                                <span>contacto@dreamlike.cl</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>&copy; 2024 Dreamlike.cl. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <span className="hover:text-slate-400 cursor-pointer">Mapa del Sitio</span>
                        <span className="hover:text-slate-400 cursor-pointer">Cookies</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
