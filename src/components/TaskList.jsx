import React, { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [showCompleted, setShowCompleted] = useState(false);

  const addTaskHandler = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), name: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = showCompleted 
    ? tasks.filter(task => task.completed)
    : tasks;

  return (
    <div>
      <input 
        type="text" 
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Nova tarefa..."
      />
      <button onClick={addTaskHandler}>Adicionar Tarefa</button>
      <button onClick={() => setShowCompleted(!showCompleted)}>
        {showCompleted ? "Mostrar Todas" : "Mostrar Concluídas"}
      </button>
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>
            <input 
              type="checkbox" 
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            {task.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
