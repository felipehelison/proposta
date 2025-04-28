import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-4">Página não encontrada</p>
      <Link to="/" className="text-blue-500 hover:underline">Voltar para Login</Link>
    </div>
  );
};

export default NotFound;
