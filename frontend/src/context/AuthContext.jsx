// src/context/AuthContext.jsx
import { createContext, useState, useEffect } from 'react';

// Criar contexto
export const AuthContext = createContext();

// Provider
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Aqui você pode recuperar o usuário do localStorage ou cookies se quiser
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
