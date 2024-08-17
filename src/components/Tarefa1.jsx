import React from 'react';
import './Card.css'; 

function transformData(users) {
  return users
    .filter(user => user.isActive)
    .map(({ id, name }) => ({ id, name }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

const Tarefa1 = () => {
  const users = [
    { id: 1, name: 'Silvio', age: 45, isActive: true },
    { id: 2, name: 'Jane', age: 32, isActive: false },
    { id: 3, name: 'Laila', age: 28, isActive: true },
    { id: 4, name: 'Carlos', age: 38, isActive: true }
  ];

  const transformedUsers = transformData(users);

  return (
    <div className="card">
      <div className="card-header">Usuários</div>
      <div className="card-body">
        <ul>
          {transformedUsers.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tarefa1;
