import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const Todo = (props) => {
  return (
    <TableRow key={props.id}>
      <TableCell component="th" scope="row">
        {props.id}
      </TableCell>
      <TableCell align="right">{props.title}</TableCell>
      <TableCell align="right">{props.body}</TableCell>
    </TableRow>
  )
}

export default Todo;