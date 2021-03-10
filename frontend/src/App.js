import React from 'react';
import Form from './Form';
import Todo from './Todo';

const App = () => {
  const [todos, setTodos] = React.useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      e.target.title.value
    ]);
    e.target.title.value = '';
  };

  return (
    <div className="app">
      <div class="container-xl px-10 py-10 bg-indigo-200">
        <h1>todoアプリ</h1>
        <Form handleAdd = {handleAdd} />
        <Todo todos = {todos} />
      </div>
    </div>
  )
}

export default App;