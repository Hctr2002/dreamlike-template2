import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for persisted user session
        const storedUser = localStorage.getItem('dreamlike_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        // Mock authentication logic
        if (email === 'admin@dreamlike.cl' && password === 'admin123') {
            const adminUser = {
                name: 'Administrador',
                email: 'admin@dreamlike.cl',
                role: 'admin',
                avatar: 'https://ui-avatars.com/api/?name=Admin&background=2563EB&color=fff'
            };
            setUser(adminUser);
            localStorage.setItem('dreamlike_user', JSON.stringify(adminUser));
            return { success: true };
        }

        if (email === 'cliente@dreamlike.cl' && password === 'cliente123') {
            const clientUser = {
                name: 'Cliente Demo',
                email: 'cliente@dreamlike.cl',
                role: 'client',
                avatar: 'https://ui-avatars.com/api/?name=Cliente+Demo&background=random'
            };
            setUser(clientUser);
            localStorage.setItem('dreamlike_user', JSON.stringify(clientUser));
            return { success: true };
        }

        return { success: false, message: 'Credenciales inválidas' };
    };

    const register = (name, email, password) => {
        // Mock registration logic (defaults to client role)
        const newUser = {
            name,
            email,
            role: 'client',
            avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`
        };
        setUser(newUser);
        localStorage.setItem('dreamlike_user', JSON.stringify(newUser));
        return { success: true };
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('dreamlike_user');
    };

    const value = {
        user,
        login,
        register,
        logout,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
