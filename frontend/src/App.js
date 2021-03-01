import React, { useEffect } from 'react';
import Form from './Form';
import Todo from './Todo';

const App = () => {
  const [todo, setTodos] = React.useState([]);

  React.useEffect(() => {
    const todosRef = db.collection("todos");
    todosRef.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, doc.data())
      });
    });
  });

  const handleAdd = (e) => {
    e.preventDefault();
    setTodos([
      ...todo,
      e.target.title.value
    ]);
    e.target.title.value = '';
  };

  return (
    <div className="app">
      <div class="container-xl px-10 py-10 bg-indigo-200">
        <h1>todoアプリ</h1>
        <Form handleAdd = {handleAdd} />
        <Todo todos = {todo} />
      </div>
    </div>
  )
}

export default App;