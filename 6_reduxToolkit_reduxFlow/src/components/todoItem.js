import { useDispatch } from "react-redux";
import * as todoReducer from "../features/todo/todoSlice";
export const TodoItem = ({ todo: { text, id, checked } }) => {
  const dispatch = useDispatch();
  const onClose = e => {
    e.stopPropagation();
    dispatch(todoReducer.remove(id));
  };

  return (
    <li
      title={new Date(id)}
      className={checked ? "checked" : ""}
      onClick={() => dispatch(todoReducer.check(id))}
    >
      {text}
      <span className="close" onClick={onClose}>
        ×
      </span>
    </li>
  );
};
