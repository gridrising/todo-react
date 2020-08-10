import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoApp from "./components/TodoApp/TodoApp";
import { Provider } from "react-redux";
import { store } from "./components/redux/store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
