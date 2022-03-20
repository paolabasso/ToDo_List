import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

import './App.css';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks.jsx';

const App = () => {
  // let message = 'To Do List!';
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar programação',
      completed: false
    },
    {
      id: '2',
      title: 'Ler Algoritmo Mestre',
      completed: true
    },
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) return { ...task, completed: !task.completed}

      return task;
    });

    setTasks(newTasks);

  };

  const handleTaskAddition = (taskTitle) => {
      const newTasks = [ ...tasks,{
        title: taskTitle,
        id: uuidv4(0),
        completed: false,
      },
    ];

    setTasks(newTasks);
  }

  return (
    <div>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick}/>
      </div>
    </div>
  );
};
export default App;
