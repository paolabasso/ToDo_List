import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import TaskDetails from './components/TaskDatails';
import Home from './components/Home';



const App = () => {
  // let message = 'To Do List!';
  

  // código para consumir uma api
  // useEffect(() => {
	// 	const fetchTasks = async () => {
	// 		const { data } = await axios.get(
	// 			"https://jsonplaceholder.cypress.io/todos?_limit=10"
	// 		);

	// 		setTasks(data);
	// 	};

	// 	fetchTasks();
	// }, []);



  return (
    <Router>
      <div className="container">
        <Header/>
        <Route
          path="/"
          exact
          component={Home}
        />
        <Route
        path="/detail/:taskId"
        exact
        component={TaskDetails}
        />
        <Route
        path="/new"
        exact
        component={TaskDetails}
        />
        
      </div>
    </Router>
  );
};
export default App;
