import React, { Component } from "react";
import "./TodoList";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import FilterButtons from "./FilterButtons";

export class TodoApp extends Component {
  state = {
    todos: [
      { id: 1, content: "my plans1", completed: false },
      { id: 2, content: "my plans2", completed: false },
      { id: 3, content: "my plans3", completed: false },
    ],
    currentButton: "all",
  };
  pressFilterButton = (currentButton) => {
    this.setState({ currentButton: currentButton });
  };
  addTodo = (todoText) => {
    let todos = [...this.state.todos, { id: Math.random(), content: todoText }];
    this.setState({ todos: todos });
  };
  deleteTodo = (id) => {
    let undeletedTodo = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: undeletedTodo });
  };
  render() {
    return (
      <div>
        <FilterButtons pressFilterButton={this.pressFilterButton} />
        <TodoList
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          filter={this.state.currentButton}
        />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoApp;
