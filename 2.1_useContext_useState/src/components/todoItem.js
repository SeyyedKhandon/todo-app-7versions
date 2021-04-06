import { useContext } from "react";
import { deleteTodoItem, updateCheckStatus } from "./util";
import { TodoContext } from "../context/todoContext";

export const TodoItem = ({ todo: { text, id, checked } }) => {
  const { todoItems, setTodoItems } = useContext(TodoContext);
  const onClose = e => {
    e.stopPropagation();
    setTodoItems(deleteTodoItem(todoItems, id));
  };
  const onCheck = () => setTodoItems(updateCheckStatus(todoItems, id));
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
