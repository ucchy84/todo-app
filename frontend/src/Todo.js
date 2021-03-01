import React from 'react';

const Todo = (props) => {
  const listTodos = props.todos.map((todo, i) => 
    <li key={i}>{todo}</li>
  );

  return (
    <div>
      <ul class="list-disc">
        {listTodos}
      </ul>
    </div>
  )
}

export default Todo;