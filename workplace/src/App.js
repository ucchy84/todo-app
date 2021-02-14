import React from 'react';
import Todo from './Todo';

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          title: "Hello, React!",
          body: "React始めました!",
          done: false
        },
        {
          id: 2,
          title: "Hello, Redux!",
          body: "Reduxも始めました!",
          done: false
        },
      ]
    }
  }

  render() {
    const todos = this.state.todos.map( todo =>
      <Todo
        key={todo.id}
        {...todo}
      />
    )
    return (
      <div className="app">
        <h1>todoアプリ</h1>
        <ul>
          {todos}
        </ul>
      </div>
    )
  }
}

export default App