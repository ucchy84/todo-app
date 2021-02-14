import React from 'react';

class Todo extends React.Component {

  render() {
    const className = 'unDone'
    const link = this.props.done ? '元に戻す' : '完了'

    return (
      <li className={className}>
        <span>{this.props.id}</span>
        <span>{this.props.title}</span>
        <a href="">{link}</a>
        <p>{this.props.body}</p>
      </li>
    )

  }
}

export default Todo