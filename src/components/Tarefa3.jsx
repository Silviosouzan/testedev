import React from 'react';
import './Card.css'; 

const countOccurrences = (array) => {
  return array.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
};

const Tarefa3 = () => {
  const strings = [
    'apple', 'banana', 'apple', 'orange', 'banana', 'apple'
  ];

  const occurrences = countOccurrences(strings);

  return (
    <div className="card">
      <div className="card-header">Strings</div>
      <div className="card-body">
        <ul>
          {Object.entries(occurrences).map(([string, count]) => (
            <li key={string}>
              {string}: {count}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tarefa3;
