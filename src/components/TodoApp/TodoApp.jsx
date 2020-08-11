import React from "react";
import "../TodoList/TodoList";
import TodoList from "../TodoList/TodoList";
import AddTodo from "../AddTodo/AddTodo";
import FilterButtons from "../FilterButtons/FilterButtons";
import Search from "../Search/Search";
import styles from "./MainContent.module.css";

const TodoApp = () => {
  return (
    <div className={styles.mainContent}>
      <Search />
      <FilterButtons />
      <TodoList />
      <AddTodo />
    </div>
  );
};

export default TodoApp;
