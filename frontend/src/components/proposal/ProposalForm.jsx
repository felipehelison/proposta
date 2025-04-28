import React, { useState } from 'react';

function ProposalForm() {
  const [proposalData, setProposalData] = useState({
    clientId: '',
    description: '',
    amount: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar a proposta para o backend ou salvar no estado
    console.log(proposalData);
  };

  return (
    <div className="proposal-form-container">
      <h2>Criar Proposta</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="clientId">Cliente</label>
          <input
            type="text"
            id="clientId"
            placeholder="ID do Cliente"
            value={proposalData.clientId}
            onChange={(e) => setProposalData({ ...proposalData, clientId: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="description">Descrição</label>
          <textarea
            id="description"
            placeholder="Descrição da proposta"
            value={proposalData.description}
            onChange={(e) => setProposalData({ ...proposalData, description: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="amount">Valor</label>
          <input
            type="number"
            id="amount"
            placeholder="Valor da Proposta"
            value={proposalData.amount}
            onChange={(e) => setProposalData({ ...proposalData, amount: e.target.value })}
          />
        </div>
        <button type="submit">Criar Proposta</button>
      </form>
    </div>
  );
}

export default ProposalForm;
