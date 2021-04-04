import { connect } from "react-redux";
import { actionTypes } from "../store/actionTypes";

const TodoItem = ({ todo: { text, id, checked }, onCheck, onDelete }) => {
  const onClose = e => {
    e.stopPropagation();
    onDelete(id, e);
  };

  return (
    <li
      title={new Date(id)}
      className={checked ? "checked" : ""}
      onClick={() => onCheck(id)}
    >
      {text}
      <span className="close" onClick={onClose}>
        ×
      </span>
    </li>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onCheck: id => dispatch({ type: actionTypes.CHECK_TODO_ITEM, id }),
    onDelete: id => dispatch({ type: actionTypes.REMOVE_TODO_ITEM, id })
  };
};
export default connect(null, mapDispatchToProps)(TodoItem);
