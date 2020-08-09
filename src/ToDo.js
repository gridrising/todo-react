import React from "react";

function ToDo({ todoId, todoContent, completed, deleteTodo, switchCompleted }) {
  return (
    <li
      className={"to-do-list__item" + completed}
      key={todoId}
      onClick={() => switchCompleted(todoId)}
    >
      {todoContent}
      <button
        className="delete-todo"
        onClick={() => deleteTodo(todoId)}
        key={todoId}
      >
        X
      </button>
    </li>
  );
}

export default ToDo;
