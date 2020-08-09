import React from "react";
import ToDo from "./ToDo";
import "./todoList.css";

const TodoList = ({ todos, deleteTodo, switchCompleted }) => {
  const listOfTodo = todos.map((todo) => {
    return (
      <ToDo
        key={todo.id}
        completed={todo.completed ? " to-do-list__item--completed" : ""}
        todoId={todo.id}
        todoContent={todo.content}
        deleteTodo={deleteTodo}
        switchCompleted={switchCompleted}
      />
    );
  });
  console.log(listOfTodo);
  const listOfCompleted = listOfTodo.filter((todo) => todo);
  return <ul>{listOfTodo}</ul>;
};

export default TodoList;
