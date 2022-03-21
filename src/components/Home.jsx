import React, { useEffect, useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import { DeleteTask, GetTasks, CreateTask } from '../services/TaskService';
import AddTask from './AddTask';
import Tasks from './Tasks';



const Home = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await GetTasks();
      setTasks(data);
    };

    fetchTasks();
  }, []);

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

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)
    
    setTasks(newTasks)
    DeleteTask(taskId)
  }

  return ( 

    <>
    <AddTask handleTaskAddition={handleTaskAddition} />
                <Tasks 
                tasks={tasks} 
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}
                />
    </>
   );
}
 
export default Home;
