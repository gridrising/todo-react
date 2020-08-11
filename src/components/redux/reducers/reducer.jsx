import {
  DELETE_TODO,
  ADD_TODO,
  CHANGE_COMPLETED,
  CHANGE_FILTER,
  SEARCH_BY_TEXT,
} from "../action-types";
const initialState = {
  todos: [],
  currentButton: "all",
  searchText: "",
  number: 0,
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { content: action.text, id: Math.random(), completed: false },
        ],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case CHANGE_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, completed: !todo.completed };
          } else {
            return { ...todo };
          }
        }),
      };
    case CHANGE_FILTER:
      return {
        ...state,
        currentButton: action.filter.toLowerCase(),
      };
    case SEARCH_BY_TEXT:
      return {
        ...state,
        searchText: action.text.toLowerCase(),
      };
    default:
      return state;
  }
};

export default rootReducer;
