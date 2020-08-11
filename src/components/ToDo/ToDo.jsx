import React from "react";
import styles from "../TodoList/TodoList.module.css";
import { connect } from "react-redux";
import { changeCompleted } from "../redux/actions/actions";
import { deleteTodo } from "../redux/actions/actions";

export const ToDo = ({
  completedStyle,
  todoId,
  todoContent,
  changeCompleted,
  deleteTodo,
}) => {
  return (
    <li className={completedStyle} key={todoId}>
      <input
        className={styles.checkCompleted}
        type='checkbox'
        onChange={() => changeCompleted(todoId)}
        checked={completedStyle === styles.completed ? true : false}
      />
      {todoContent}
      <button className={styles.deleteToDo} onClick={() => deleteTodo(todoId)}>
        X
      </button>
    </li>
  );
};

const mapDispatchToProps = {
  changeCompleted,
  deleteTodo,
};

export default connect(null, mapDispatchToProps)(ToDo);
