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
  render() {
    return (
      <div>
        <FilterButtons pressFilterButton={this.pressFilterButton} />
        <TodoList
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          filter={this.state.currentButton}
          switchCompleted={this.switchCompleted}
        />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoApp;
