import axios from 'axios';
import { useState, useEffect } from 'react';
import TodoFrom from './TodoForm';
import TodoList from './TodoList';
import './App.css';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import TodoView from './TodoView';
function App() {
  return (
    <BrowserRouter>
    <Switch>
        <Route path="/view/:num" component={TodoView}/>
      </Switch>
      <div>
      <h1>Todo</h1>
      <TodoFrom loadContent={loadContent}/><br/>
      <TodoList lists={listcontent} todoDelete={todoDelete}/>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
