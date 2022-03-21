import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./AddTask.css";
import Button from './Button';

const AddTask = ({handleTaskAddition}) => {
  const history = useHistory();

  const [inputData, setInputData] = useState('')

  const handleInputChange = (e) => {
        setInputData(e.target.value);
  } 

  const handleAddTaskClick = () => {
    history.push('/new')
  }

  return ( 
    <div className="add-task-container">
      <div className="add-task-button-container">
      <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
   );
};
 
export default AddTask;