import React from 'react';
import Card from './Card';
import Tarefa1 from './Tarefa1';
import Tarefa2 from './Tarefa2';
import Tarefa3 from './Tarefa3';
import Tarefa4 from './Tarefa4';
import Tarefa5 from './Tarefa5';
import TaskList from './TaskList';
import './App.css';

const App = () => {
  const handleCardClick = (task) => {
    console.log(`Card ${task} clicked`);
  };

  return (
    <div className="app-container">
      <Card 
        title="" 
        description="" 
        onClick={() => handleCardClick('Tarefa 1')} 
      >
        <Tarefa1 />
      </Card>
      <Card 
        title="Tarefa 2" 
        description="" 
        onClick={() => handleCardClick('Tarefa 2')} 
      >
        <Tarefa2 />
      </Card>
      <Card 
        title="Tarefa 3" 
        description="" 
        onClick={() => handleCardClick('Tarefa 3')} 
      >
        <Tarefa3 />
      </Card>
      <Card 
        title="Tarefa 4" 
        description="" 
        onClick={() => handleCardClick('Tarefa 4')} 
      >
        <Tarefa4 />
      </Card>
      <Card 
        title="Tarefa 5" 
        description="" 
        onClick={() => handleCardClick('Tarefa 5')} 
      >
        <Tarefa5 />
      </Card>
      <Card 
        title="TaskList, Não consegui" 
        description="TaskList" 
        onClick={() => handleCardClick('TaskList')} 
      >
        <TaskList />
      </Card>
    </div>
  );
};

export default App;
