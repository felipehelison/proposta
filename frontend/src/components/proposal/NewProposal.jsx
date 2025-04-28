import React, { useState } from 'react';

export default function NewProposal() {
  const [form, setForm] = useState({ client: '', value: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert('Proposta cadastrada!');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-100 to-indigo-300 p-8">
      <form onSubmit={handleSubmit} className="w-full max-w-lg rounded-2xl bg-white/70 p-8 shadow-2xl backdrop-blur-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Nova Proposta</h2>
        <input className="input-base mb-4" type="text" placeholder="Cliente" required value={form.client} onChange={(e) => setForm({ ...form, client: e.target.value })} />
        <input className="input-base mb-4" type="text" placeholder="Valor (R$)" required value={form.value} onChange={(e) => setForm({ ...form, value: e.target.value })} />
        <textarea className="input-base mb-6" rows="4" placeholder="Descrição" required value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <button type="submit" className="btn-primary w-full">Salvar Proposta</button>
      </form>
    </div>
  );
}
