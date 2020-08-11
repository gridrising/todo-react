import React from "react";
import ToDo from "../ToDo/ToDo";
import styles from "./TodoList.module.css";
import { connect } from "react-redux";

export const TodoList = ({ todos, currentButton, searchText }) => {
  const listOfTodo = todos.map((todo) => {
    return (
      <ToDo
        key={todo.id}
        completedStyle={todo.completed ? styles.completed : styles.toDo}
        todoId={todo.id}
        todoContent={todo.content}
      />
    );
  });
  const listOfCompleted = listOfTodo.filter(
    (todo) => todo.props.completedStyle === styles.completed
  );
  const listOfUncompleted = listOfTodo.filter(
    (todo) => todo.props.completedStyle === styles.toDo
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

const mapStateToProps = (state) => ({
  todos: state.todos,
  currentButton: state.currentButton,
  searchText: state.searchText,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
