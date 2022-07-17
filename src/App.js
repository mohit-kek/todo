import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Todo from './Components/Todo';
import TodoForm from './Components/TodoForm';
import { useState } from 'react';

function App() {
  const [todoId,setTodoId]= useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<TodoForm todoId={todoId} setTodoId={setTodoId}/>} />
        <Route path="/todo" exact element={<Todo setTodoId={setTodoId}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;