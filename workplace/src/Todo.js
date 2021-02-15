import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class Todo extends React.Component {

  render() {
    // const className = 'unDone'
    // const link = this.props.done ? '元に戻す' : '完了'

    return (
      <TableRow key={this.props.id}>
        <TableCell component="th" scope="row">
          {this.props.id}
        </TableCell>
        <TableCell align="right">{this.props.title}</TableCell>
        <TableCell align="right">{this.props.body}</TableCell>
      </TableRow>
    )

  }
}

export default Todo