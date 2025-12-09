import React from 'react';
import { Truck, ShieldCheck, CreditCard, Headphones } from 'lucide-react';

const ServiceBanner = () => {
    const services = [
        {
            icon: <Truck size={32} />,
            title: "Despacho a Obra",
            description: "En menos de 24 horas"
        },
        {
            icon: <ShieldCheck size={32} />,
            title: "Garantía Total",
            description: "Productos certificados"
        },
        {
            icon: <CreditCard size={32} />,
            title: "Pago Seguro",
            description: "Transbank y Webpay"
        },
        {
            icon: <Headphones size={32} />,
            title: "Soporte Experto",
            description: "Asesoría técnica gratis"
        }
    ];

    return (
        <section className="bg-primary py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="flex items-center gap-4 text-white p-4 rounded-xl hover:bg-white/10 transition-colors cursor-default">
                            <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                                {service.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">{service.title}</h3>
                                <p className="text-blue-100 text-sm">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceBanner;
