import { connect } from "react-redux";
import "./App.css";
import { AddTodo } from "./components/addTodo";
import { TodoList } from "./components/todoList";
import { actionTypes } from "./store/actionTypes";

function App(props) {
  return (
    <>
      <AddTodo onAddTodo={props.onAddTodo} />
      <TodoList
        todoItems={props.todoItems}
        onCheck={props.onCheck}
        onDelete={props.onDelete}
      />
    </>
  );
}
const mapStateToProps = state => {
  return {
    todoItems: state.todoItems
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: todoItem =>
      dispatch({ type: actionTypes.ADD_TODO_ITEM, todoItem }),
    onCheck: id => dispatch({ type: actionTypes.CHECK_TODO_ITEM, id }),
    onDelete: id => dispatch({ type: actionTypes.REMOVE_TODO_ITEM, id })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
