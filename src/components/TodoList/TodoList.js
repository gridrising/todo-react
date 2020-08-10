import React from "react";
import ToDo from "../ToDo/ToDo";
import styles from "./TodoList.module.css";

const TodoList = ({
  searchText,
  todos,
  deleteTodo,
  switchCompleted,
  currentButton,
}) => {
  const listOfTodo = todos.map((todo) => {
    return (
      <ToDo
        key={todo.id}
        completedOrNot={todo.completed ? styles.completed : styles.toDo}
        todoId={todo.id}
        todoContent={todo.content}
        deleteTodo={deleteTodo}
        switchCompleted={switchCompleted}
      />
    );
  });
  const listOfCompleted = listOfTodo.filter(
    (todo) => todo.props.completedOrNot === styles.completed
  );
  const listOfUncompleted = listOfTodo.filter(
    (todo) => todo.props.completedOrNot === styles.toDo
  );
  const listWillDisplay =
    currentButton === "all"
      ? listOfTodo
      : currentButton === "completed"
      ? listOfCompleted
      : listOfUncompleted;
  const listWillDisplayWithSearch = listWillDisplay.filter((todo) =>
    todo.props.todoContent.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <ul className={styles.list}>
      {searchText ? listWillDisplayWithSearch : listWillDisplay}
    </ul>
  );
};

export default TodoList;
