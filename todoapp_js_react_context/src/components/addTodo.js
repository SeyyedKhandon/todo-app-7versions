import { useContext, useState } from "react";
import { todoGenerator } from "./useTodo";
import { TodoContext } from "../context/todoContext";
import { actionTypes } from "../context/actionTypes";
export const AddTodo = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TodoContext);
  const submitTodo = () => {
    if (text === "") return;
    dispatch({
      type: actionTypes.ADD_TODO_ITEM,
      todoItem: todoGenerator(text)
    });
    setText("");
  };
  return (
    <div className="header">
      <h2 style={{ margin: "5px" }}>JavaScript/React Todo App</h2>
      <code style={{ margin: "5px" }}>useContext+useReducer</code>
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
