import React from 'react';
import Form from './Form';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = React.useState(
    [
      {
        id: 1,
        title: "hello, React!",
        body: "React始めました!",
        done: false,
      },
      {
        id: 2,
        title: "Hello Redux!",
        body: "Reduxも始めました",
        done: false,
      },
      {
        id: 3,
        title: "Hello Redux!",
        body: "Reduxも始めました",
        done: false,
      },
      {
        id: 4,
        title: "Hello Redux!",
        body: "Reduxも始めました",
        done: false,
      },
      {
        id: 5,
        title: "Hello Redux!",
        body: "Reduxも始めました",
        done: false,
      },
    ]
  );

  return (
    <div className="app">
      <h1>todoアプリ</h1>
      <Form />
      <TodoList todos = {todos} />
    </div>
  )
}

export default App;