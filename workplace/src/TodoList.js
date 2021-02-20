import React from 'react';
import Todo from './Todo';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const TodoList = (props) => {
  const classes = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  return (
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
          {props.todos.map( todo =>
            <Todo
              key={todo.id}
              {...todo}
            />
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TodoList;