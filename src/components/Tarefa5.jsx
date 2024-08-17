import React from 'react';
import './Card.css';

const mergeArrays = (array1, array2) => {
  const merged = new Map();

  array1.forEach(item => merged.set(item.id, { ...item }));
  array2.forEach(item => merged.set(item.id, { ...merged.get(item.id), ...item }));

  return Array.from(merged.values());
};

const Tarefa5 = () => {
  const array1 = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 }
  ];

  const array2 = [
    { id: 1, age: 26, email: 'alice@example.com' },
    { id: 3, name: 'Charlie', age: 22 }
  ];

  const mergedArray = mergeArrays(array1, array2);

  return (
    <div className="card">
      <div className="card-header">Arrays</div>
      <div className="card-body">
        <ul>
          {mergedArray.map(item => (
            <li key={item.id}>
              {item.id}: {item.name ? item.name : ''} {item.age ? `- ${item.age}` : ''} {item.email ? `- ${item.email}` : ''}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tarefa5;
