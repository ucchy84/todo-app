import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App'

class App extends React.Component {
  
  // constructor() {
  //   super();
  //   this.state = {
  //     todos: [
  //       {
  //         id: 1,
  //         title: "Hello, React!",
  //         body: "React始めました!",
  //         done: false
  //       },
  //       {
  //         id: 2,
  //         title: "Hello, Redux!",
  //         body: "Reduxも始めました!",
  //         done: false
  //       },
  //     ]
  //   }
  // }

  render() {
    const todos = [
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
    ];
    

    return (
      <div className="app">
        <ul>
          <li>{todos[0].title}</li>
          <li>{todos[1].title}</li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);