import React, { createContext, useState, useContext } from 'react';

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
    // Initial mock data
    const initialProducts = [
        {
            id: 1,
            name: "Taladro Percutor Inalámbrico 18V",
            brand: "Makita",
            price: 129990,
            stock: 15,
            category: "Herramientas",
            image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2078&auto=format&fit=crop"
        },
        {
            id: 2,
            name: "Set de Destornilladores Pro",
            brand: "Stanley",
            price: 24990,
            stock: 42,
            category: "Herramientas",
            image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 3,
            name: "Foco LED Exterior 50W",
            brand: "Phillips",
            price: 15990,
            stock: 100,
            category: "Iluminación",
            image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=1935&auto=format&fit=crop"
        },
        {
            id: 4,
            name: "Cámara de Seguridad WiFi",
            brand: "Dahua",
            price: 45990,
            stock: 8,
            category: "Seguridad",
            image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?q=80&w=2097&auto=format&fit=crop"
        },
        {
            id: 5,
            name: "Multímetro Digital Auto",
            brand: "Fluke",
            price: 89990,
            stock: 5,
            category: "Electricidad",
            image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    const [products, setProducts] = useState(initialProducts);

    const addProduct = (product) => {
        const newProduct = {
            ...product,
            id: Date.now(), // Simple ID generation
            image: product.image || "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=2070&auto=format&fit=crop"
        };
        setProducts([...products, newProduct]);
    };

    const updateProduct = (id, updatedData) => {
        setProducts(products.map(p => p.id === id ? { ...p, ...updatedData } : p));
    };

    const deleteProduct = (id) => {
        setProducts(products.filter(p => p.id !== id));
    };

    return (
        <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
            {children}
        </ProductContext.Provider>
    );
};
