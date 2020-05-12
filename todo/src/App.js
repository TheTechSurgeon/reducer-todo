import React,{useState,useReducer,useEffect} from 'react';
import {initialState, reducer} from "./reducer/reducer" 
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm'


function App(){
  const [newTask,setNewTask] = useState()
  const [state,dispatch]= useReducer(reducer,initialState)
  console.log(initialState)

  useEffect(()=>{
    localStorage
    .setItem("cart",
    JSON
    .stringify(state))
  },[state])

  const handleChanges = event =>{
    setNewTask(event.target.value)
  }
  const handleSubmit = event =>{
    event.preventDefault()
    dispatch({type:"ADD_TASK",payload:newTask})
  }
  const toggleCompleted = clickId =>{
    dispatch({type: "TOGGLE_COMPLETED",payload:clickId})
  }
  const clearCompleted = event =>{
    event.preventDefault();
    dispatch({type: "CLEAR_COMPLETED"})
  }
  return (
    <div className="App">
      <header className="App-header">
        <TodoForm
          handleSubmit={handleSubmit}
          handleChanges={handleChanges}
          clear={clearCompleted}/>
          <Todo state={state}toggleCompleted={toggleCompleted}/>
      </header>
    </div>
  )
}

export default App;
