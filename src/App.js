import React, { useState } from "react";
import Form from './Form';
import "./App.css"
const App = () => {
  const [todos, setTodos] = useState([]);

  const toggleComplete = (i) => setTodos(todos.map((todo, k) => k === i ? { ...todo, complete: !todo.complete }: todo))
  return (
    <div>
      <Form onSubmit={text => setTodos([{text, complete: false}, ...todos])}/>
      <div>
        {
          todos.map(({text, complete}, i) => (
            <p 
            key={i+text} 
            style= {
              {
                textDecoration: complete ? "line-through" : ""
              }
            }
            onClick={() => toggleComplete(i)}>{text}</p>
          ))
        }
      </div>
      <button onClick={() => {setTodos([])}}>Reset</button>
    </div>
    
  );
};

export default App
