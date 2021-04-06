import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoAtom } from "../state/todoAtom";
import { todoGenerator } from "./util";

export const AddTodo = () => {
  const [text, setText] = useState("");
  const [todoItems, setTodoItems] = useRecoilState(todoAtom);

  const submitTodo = () => {
    if (text === "") return;
    setTodoItems([...todoItems, todoGenerator(text)]);
    setText("");
  };
  return (
    <div className="header">
      <h2 style={{ margin: "5px" }}>JavaScript/React Todo App</h2>
      <code style={{ margin: "5px" }}>Recoil</code>
      <div>
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
    </div>
  );
};
