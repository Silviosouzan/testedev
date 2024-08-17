import React from 'react';
import './Card.css';

const groupByCategory = (items) => {
  return items.reduce((acc, item) => {
    const { category } = item;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});
};

const Tarefa4 = () => {
  const items = [
    { id: 1, name: 'maca', category: 'fruta' },
    { id: 2, name: 'cenoura', category: 'vegetal' },
    { id: 3, name: 'banana', category: 'fruta' },
    { id: 4, name: 'brocolis', category: 'vegetal' },
  ];

  const groupedItems = groupByCategory(items);

  return (
    <div className="card">
      <div className="card-header">Itens e Categoria</div>
      <div className="card-body">
        {Object.entries(groupedItems).map(([category, items]) => (
          <div key={category}>
            <h3>{category}</h3>
            <ul>
              {items.map(item => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tarefa4;
