import { useRecoilState } from "recoil";
import { todoAtom } from "../state/todoAtom";
import { deleteTodoItem, updateCheckStatus } from "./util";

export const TodoItem = ({ todo: { text, id, checked } }) => {
  const [todoItems, setTodoItems] = useRecoilState(todoAtom);

  const onClose = e => {
    e.stopPropagation();
    setTodoItems(deleteTodoItem(todoItems, id));
  };

  return (
    <li
      title={new Date(id)}
      className={checked ? "checked" : ""}
      onClick={() => setTodoItems(updateCheckStatus(todoItems, id))}
    >
      {text}
      <span className="close" onClick={onClose}>
        ×
      </span>
    </li>
  );
};
