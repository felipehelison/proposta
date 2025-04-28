import React, { useState } from 'react';

function FunilKanban() {
  const [stages, setStages] = useState([
    { name: 'Prospects', items: [] },
    { name: 'Propostas Enviadas', items: [] },
    { name: 'Fechado', items: [] },
  ]);

  const addItem = (stageIndex, item) => {
    const newStages = [...stages];
    newStages[stageIndex].items.push(item);
    setStages(newStages);
  };

  const handleDragStart = (e, stageIndex, itemIndex) => {
    e.dataTransfer.setData('stageIndex', stageIndex);
    e.dataTransfer.setData('itemIndex', itemIndex);
  };

  const handleDrop = (e, stageIndex) => {
    const sourceStageIndex = e.dataTransfer.getData('stageIndex');
    const sourceItemIndex = e.dataTransfer.getData('itemIndex');
    
    const sourceItem = stages[sourceStageIndex].items[sourceItemIndex];
    
    const newStages = [...stages];
    
    // Remove item da fase de origem
    newStages[sourceStageIndex].items.splice(sourceItemIndex, 1);
    
    // Adiciona o item à nova fase
    newStages[stageIndex].items.push(sourceItem);
    
    setStages(newStages);
  };

  return (
    <div className="kanban-container">
      <h2>Funil de Vendas</h2>
      <div className="kanban-columns">
        {stages.map((stage, stageIndex) => (
          <div
            key={stageIndex}
            className="kanban-column"
            onDrop={(e) => handleDrop(e, stageIndex)}
            onDragOver={(e) => e.preventDefault()}
          >
            <h3>{stage.name}</h3>
            {stage.items.length > 0 ? (
              <ul>
                {stage.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    draggable
                    onDragStart={(e) => handleDragStart(e, stageIndex, itemIndex)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Nenhuma proposta nesta fase</p>
            )}
            <button onClick={() => addItem(stageIndex, `Nova Proposta ${stage.items.length + 1}`)}>
              Adicionar Proposta
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FunilKanban;
