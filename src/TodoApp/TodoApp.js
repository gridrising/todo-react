import React, { Component } from "react";
import "../TodoList/TodoList";
import TodoList from "../TodoList/TodoList";
import AddTodo from "../AddTodo/AddTodo";
import FilterButtons from "../FilterButtons/FilterButtons";
import Search from "../Search/Search";
import styles from "./MainContent.module.css";

export class TodoApp extends Component {
  state = {
    todos: [],
    currentButton: "all",
    searchText: "",
  };
  pressFilterButton = (currentButton) => {
    this.setState({ currentButton: currentButton });
  };
  addTodo = (todoText) => {
    let todos = [
      ...this.state.todos,
      { id: Math.random(), content: todoText, completed: false },
    ];
    this.setState({ todos: todos });
  };
  deleteTodo = (id) => {
    let undeletedTodo = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: undeletedTodo });
  };
  switchCompleted = (id) => {
    let newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        if (todo.completed === false) {
          return { ...todo, completed: true };
        } else {
          return { ...todo, completed: false };
        }
      } else {
        return { ...todo };
      }
    });
    this.setState({ todos: newTodos });
  };
  handleClick = (e) => {
    console.log(e.target);
    switch (e.target.textContent) {
      case "All":
        this.setState({
          currentButton: "all",
        });
        break;
      case "Completed":
        this.setState({
          currentButton: "completed",
        });
        break;
      case "Uncompleted":
        this.setState({
          currentButton: "uncompleted",
        });
        break;
      default:
        break;
    }
  };
  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };
  render() {
    return (
      <div className={styles.mainContent}>
        <Search
          searchText={this.state.searchText}
          handleChange={this.handleChange}
        />
        <FilterButtons
          currentButton={this.state.currentButton}
          handleClick={this.handleClick}
        />
        <TodoList
          searchText={this.state.searchText}
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          filter={this.state.currentButton}
          switchCompleted={this.switchCompleted}
          currentButton={this.state.currentButton}
        />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoApp;
