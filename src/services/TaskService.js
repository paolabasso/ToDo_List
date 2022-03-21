import { v4 as uuidv4 } from 'uuid';

let Tasks = [
  {
    id: '1',
    title: 'Estudar programação',
    description: 'SOS',
    completed: false
  },
  {
    id: '2',
    title: 'Ler Algoritmo Mestre',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis debitis quibusdam facilis iusto possimus',
    completed: true
  }
];

const GetTasks = () => {
  console.log(Tasks);
  return { data: Tasks };
};

const GetTaskById = taskId => {
  const task = Tasks.find(task => {
    return task.id === taskId;
  });
  return { data: task };
};

const CreateTask = newTask => {
  const task = {
    title: newTask.title,
    id: uuidv4(0),
    description: newTask.description,
    completed: false
  };
  Tasks.push(task);
};

const UpdateTask = taskUpdated => {
  const taskIndex = Tasks.findIndex(task => {
    return task.id == taskUpdated.id;
  });
  Tasks.splice(taskIndex, 1);
  Tasks.push(taskUpdated);
};

const DeleteTask = taskId => {
  console.log(taskId);
  const taskIndex = Tasks.findIndex(task => {
    return task.id == taskId;
  });
  console.log(taskIndex);
  Tasks.splice(taskIndex, 1);

  console.log(Tasks);
};

export { GetTasks, GetTaskById, UpdateTask, DeleteTask, CreateTask };
