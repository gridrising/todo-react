import React, { useState } from "react";
import styles from "./AddTodo.module.css";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions/actions";

export const AddTodo = ({ addTodo }) => {
  const [todoText, setTodoText] = useState("");
  const handleChange = (e) => {
    setTodoText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todoText);
    setTodoText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.addInput}
        type='text'
        placeholder='What need to do?'
        onChange={handleChange}
        value={todoText}
      />
    </form>
  );
};

const mapDispatchToProps = {
  addTodo,
};

export default connect(null, mapDispatchToProps)(AddTodo);
