import { useState } from "react";
import { todoGenerator } from "./util";

export const AddTodo = ({ onAddTodo }) => {
  const [text, setText] = useState("");
  const submitTodo = () => {
    if (text === "") return;
    onAddTodo(todoGenerator(text));
    setText("");
  };
  return (
    <div className="header">
      <h2 style={{ margin: "5px" }}>JavaScript/React Todo App</h2>
      <code style={{ margin: "5px" }}>Redux(Prop drilling)</code>
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
