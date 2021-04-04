import { useState } from "react";
import { todoGenerator } from "./useTodo";
import { useDispatch } from "react-redux";
import * as todoReducer from "../features/todo/todoSlice";

export const AddTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const submitTodo = () => {
    if (text === "") return;
    dispatch(todoReducer.add(todoGenerator(text)));
    setText("");
  };
  return (
    <div className="header">
      <h2 style={{ margin: "5px" }}>JavaScript/React Todo App</h2>
      <input
        type="text"
        placeholder="Title..."
        value={text}
        tabIndex={1}
        autoFocus
        onChange={e => setText(e.target.value)}
        onKeyUp={e => (e.key === "Enter" ? submitTodo() : null)}
      />
      <span onClick={submitTodo} className="addBtn">
        Add
      </span>
    </div>
  );
};
