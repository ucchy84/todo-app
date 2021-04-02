import React from 'react';

const Todo = (props) => {

  const listTodos = props.todos.map(todo => 
    <li key={todo.id}>{todo.task}</li>
  );

  return (
    <div>
      <ul class="list-disc">
        {listTodos}
      </ul>
    </div>
  );
}

export default Todo;