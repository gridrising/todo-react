import React from "react";

const TodoList = ({ todos, deleteTodo }) => {
  const listOftodo = todos.map((todo) => (
    <li className='to-do-list__item' key={todo.id}>
      {todo.content}
      <button className='delete-todo' onClick={() => deleteTodo(todo.id)}>
        X
      </button>
    </li>
  ));
  return <div>{listOftodo}</div>;
};

export default TodoList;
