import React from 'react';
import Todo from './Todo';
import TodoList from './TodoList';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
      }
    ]
  );

  const classes = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  return (
    <div className="app">
      <h1>todoアプリ</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="sample table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Body</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map( todo =>
              <Todo
                key={todo.id}
                {...todo}
              />
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <TodoList />
    </div>
  )
}

export default App;
