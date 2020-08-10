import React, { Component } from "react";
import styles from "./AddTodo.module.css";

export class AddTodo extends Component {
  state = {
    todoText: null,
  };
  handleChange = (e) => {
    this.setState({
      todoText: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.todoText);
    e.target.lastChild.value = "";
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className={styles.addInput}
            type='text'
            placeholder='What need to do?'
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
