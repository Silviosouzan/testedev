import React, { useEffect, useState } from 'react';
import './Card.css'; 


const fetchUserData = async () => {
  try {
    
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    
    
    console.log('Dados recebidos da API:', data);
    
    
    const filteredUsers = data.filter(user => user.username.toLowerCase().startsWith('c'));
    
    
    console.log('Usuários filtrados:', filteredUsers);
    
    return filteredUsers; 
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    return []; 
  }
};

const Tarefa2 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUserData(); 
      setUsers(data); 
    };

    fetchData();
  }, []);

  return (
    <div className="card">
      <div className="card-header">Usuários com a letra C</div>
      <div className="card-body">
        {users.length > 0 ? (
          <ul>
            {users.map(user => (
              <li key={user.id}>{user.username}</li>
            ))}
          </ul>
        ) : (
          <p>Nenhum usuário encontrado com o username começando com 'C'.</p>
        )}
      </div>
    </div>
  );
};

export default Tarefa2;
