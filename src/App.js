import React, { useState } from 'react';
import './App.css';
import Form from "./components/FormComponents";
import TodoList from "./components/TodoListComponents";


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
