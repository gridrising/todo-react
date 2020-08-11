import { DELETE_TODO } from "../action-types";
import { CHANGE_COMPLETED } from "../action-types";
import { ADD_TODO } from "../action-types";
import { CHANGE_FILTER } from "../action-types";
import { SEARCH_BY_TEXT } from "../action-types";
export const addTodo = (payload) => {
  return { type: ADD_TODO, text: payload };
};
export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, id: payload };
};
export const changeCompleted = (payload) => {
  return { type: CHANGE_COMPLETED, id: payload };
};
export const changeFilter = (payload) => {
  return { type: CHANGE_FILTER, filter: payload };
};
export const searchByText = (payload) => ({
  type: SEARCH_BY_TEXT,
  text: payload,
});
