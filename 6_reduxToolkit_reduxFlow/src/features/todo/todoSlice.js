import { createSlice } from "@reduxjs/toolkit";
import { deleteTodoItem, updateCheckStatus } from "../../components/util";

export const todoSlice = createSlice({
  name: "todo",
  initialState: { todoItems: [] },
  reducers: {
    add: (state, action) => {
      state.todoItems.push(action.payload);
    },
    remove: (state, action) => {
      state.todoItems = deleteTodoItem(state.todoItems, action.payload);
    },
    check: (state, action) => {
      state.todoItems = updateCheckStatus(state.todoItems, action.payload);
    }
  }
});

export const { add, remove, check } = todoSlice.actions;

export default todoSlice.reducer;
