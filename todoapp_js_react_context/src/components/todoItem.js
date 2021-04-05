import { useContext } from "react";
import { actionTypes } from "../context/actionTypes";
import { TodoContext } from "../context/todoContext";

export const TodoItem = ({ todo: { text, id, checked } }) => {
  const { dispatch } = useContext(TodoContext);
  const onClose = e => {
    e.stopPropagation();
    dispatch({ type: actionTypes.REMOVE_TODO_ITEM, id });
  };
  const onCheck = () => dispatch({ type: actionTypes.CHECK_TODO_ITEM, id });
  return (
    <li
      title={new Date(id)}
      className={checked ? "checked" : ""}
      onClick={onCheck}
    >
      {text}
      <span className="close" onClick={onClose}>
        ×
      </span>
    </li>
  );
};
