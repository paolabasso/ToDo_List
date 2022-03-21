import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { CreateTask, GetTaskById, UpdateTask } from '../services/TaskService';

import Button from './Button';

import './TaskDetails.css'

const TaskDetails = () => {
  const params = useParams();
  const history = useHistory();
  const [task, setTask] = useState({});

  const handleBackButtonClick = () => {
    history.push("/");
  };

  useEffect (() => {
    const fetchTask = async () => {
      if(params.taskId){
        const { data } = await GetTaskById(params.taskId);
        setTask(data);
      }
    }
    fetchTask();
  }, [params]);

  const handleTaskTitle = (event) => {
    const taskUpdated = { ...task}
    taskUpdated.title = event.target.value;

    setTask(taskUpdated);
  }

  const handleTaskDescription = (event) => {
    const taskUpdated = { ...task}
    taskUpdated.description = event.target.value;

    setTask(taskUpdated);
  }

  const handleSubmitUpdate = (event) => {
    event.preventDefault();
    if(!task.title){
      window.alert('Adicione um título.')
    return;
    }
    if(params.taskId){
      UpdateTask(task)
    } else {
      CreateTask(task)
    }
  }

  return ( 
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
    
      
      <form className="task-details-container" onSubmit={handleSubmitUpdate}>
      <textarea placeholder='Title' className='task-title' value={task.title} onChange={handleTaskTitle}/>
      <textarea placeholder='Description' value={task.description} onChange={handleTaskDescription}/>        
      <Button type='submit' >Atualizar</Button> 
      
      </form>
    </>
   );
};
 
export default TaskDetails;