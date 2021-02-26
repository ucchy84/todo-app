import React from 'react';
import Form from './Form';
import TodoList from './TodoList';
import Container from '@material-ui/core/Container';

const App = () => {
  const [todos, setTodos] = React.useState(
    [
      {
        id: 1,
        title: "フンボルトペンギン",
        body: "ペンギン",
        done: false,
      },
      {
        id: 2,
        title: "皇帝ペンギン",
        body: "ペンギン",
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
      <Container maxWidth="sm">
        <h1>todoアプリ</h1>
        <Form />
        <TodoList todos = {todos} />
      </Container>
    </div>
  )
}

export default App;