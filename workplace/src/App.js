import React, { Component } from 'react';

class App extends Component {
  
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
    return (
      <div className="app">
        <h1>todoアプリ</h1>
        <ul>
          <li>{this.state.todos[0]}</li>
          <li>{this.state.todos[1]}</li>
        </ul>
      </div>
    )
  }
}

export default App