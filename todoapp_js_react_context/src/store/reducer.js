import { deleteTodoItem, updateCheckStatus } from "../components/useTodo";
import { actionTypes } from "./actionTypes";

const initialState = {
  todoItems: []
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO_ITEM:
      return { todoItems: [...state.todoItems, action.todoItem] };

    case actionTypes.CHECK_TODO_ITEM:
      return { todoItems: updateCheckStatus(state.todoItems, action.id) };
    case actionTypes.REMOVE_TODO_ITEM:
      return { todoItems: deleteTodoItem(state.todoItems, action.id) };

    default:
      break;
  }
  return state;
};
