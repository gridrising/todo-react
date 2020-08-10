import { INCREMENT } from "../action-types";
const initialState = {
  todos: [],
  currentButton: "",
  searchText: "",
  number: 0,
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, number: state.number + 1 };
    default:
      return state;
  }
};

export default rootReducer;
