import React, { useState } from 'react';

export default function RegisterClient() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert('Cliente cadastrado!');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-100 to-green-300 p-8">
      <form onSubmit={handleSubmit} className="w-full max-w-md rounded-2xl bg-white/70 p-8 shadow-2xl backdrop-blur-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Cadastrar Cliente</h2>
        <input className="input-base mb-4" type="text" placeholder="Nome" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input className="input-base mb-4" type="email" placeholder="E-mail" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input className="input-base mb-6" type="text" placeholder="Telefone" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        <button type="submit" className="btn-primary w-full">Cadastrar</button>
      </form>
    </div>
  );
}
