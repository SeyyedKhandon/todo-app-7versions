import { deleteTodoItem, updateCheckStatus } from "../components/util";
import { actionTypes } from "./actionTypes";

export const todoReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO_ITEM:
      return [...state, action.todoItem];

    case actionTypes.CHECK_TODO_ITEM:
      return updateCheckStatus(state, action.id);
    case actionTypes.REMOVE_TODO_ITEM:
      return deleteTodoItem(state, action.id);

    default:
      break;
  }
  return state;
};
