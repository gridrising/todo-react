import React from "react";
import styles from "../TodoList/TodoList.module.css";

function ToDo({
  todoId,
  todoContent,
  completedOrNot,
  deleteTodo,
  switchCompleted,
}) {
  return (
    <li className={completedOrNot} key={todoId}>
      <input
        className={styles.checkCompleted}
        type='checkbox'
        onChange={() => switchCompleted(todoId)}
        checked={completedOrNot === styles.completed ? true : false}
      />
      {todoContent}
      <button className={styles.deleteToDo} onClick={() => deleteTodo(todoId)}>
        X
      </button>
    </li>
  );
}

export default ToDo;
