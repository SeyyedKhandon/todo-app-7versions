import { connect } from "react-redux";
import TodoItem from "./todoItem";

export const TodoList = ({ todoItems }) => {
  return (
    <ul>
      {todoItems.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    todoItems: state.todoItems
  };
};
export default connect(mapStateToProps)(TodoList);
