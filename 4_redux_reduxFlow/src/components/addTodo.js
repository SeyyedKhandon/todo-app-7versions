import { useState } from "react";
import { connect } from "react-redux";
import { actionTypes } from "../store/actionTypes";
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
      <code style={{ margin: "5px" }}>Redux (Redux Flow)</code>
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

const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: todoItem =>
      dispatch({ type: actionTypes.ADD_TODO_ITEM, todoItem })
  };
};
export default connect(null, mapDispatchToProps)(AddTodo);
