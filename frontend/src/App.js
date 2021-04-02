import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import List from './List';
import Diary from './Diary';
import Form from './Form';
// import axios from 'axios';

const App = () => {
  // const [todos, setTodos] = React.useState([]);

  // React.useEffect(() => {
  //   fetchTodos();
  // }, []);

  // const fetchTodos = () => {
  //   axios.get('http://localhost:8080/todos')
  //     .then(res => {
  //       setTodos(res.data);
  //     })
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const task = { task: e.target.task.value };
  //   axios.post('http://localhost:8080/todo', task)
  //     .then(res => {
  //       setTodos([
  //         ...todos,
  //         res.data,
  //       ])
  //     })
  //   e.target.task.value = '';
  // }

  return (
    <div className="app">
      <Router>
        <Header />
        <main>
          <div class="max-w-5xl mx-auto py-6 sm:px-6 lg:px-8">
            <Route exact path='/' component={List}/>
            <Route exact path='/Diary' component={Diary}/>
            <Route exact path='/Form' component={Form} />
          </div>
        </main>
      </Router>
    </div>
  )
}

export default App;