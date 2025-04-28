import React from 'react';

const stages = ["Novo", "Em Progresso", "Concluído"];

export default function Pipeline() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-8">
      <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">Funil de Propostas</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stages.map((stage) => (
          <div key={stage} className="rounded-2xl bg-white/80 p-6 shadow-2xl backdrop-blur-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{stage}</h3>
            <div className="flex flex-col gap-2">
              <div className="rounded-lg bg-gray-100 p-4 text-gray-700">Proposta Exemplo 1</div>
              <div className="rounded-lg bg-gray-100 p-4 text-gray-700">Proposta Exemplo 2</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
