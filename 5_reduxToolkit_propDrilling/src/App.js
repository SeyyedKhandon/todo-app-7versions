import { useSelector, useDispatch } from "react-redux";
import { add, check, remove } from "./features/todo/todoSlice";
import "./App.css";
import { AddTodo } from "./components/addTodo";
import { TodoList } from "./components/todoList";

function App() {
  const todoItems = useSelector(state => state.todo.todoItems);
  const dispatch = useDispatch();
  return (
    <>
      <AddTodo onAddTodo={todoItem => dispatch(add(todoItem))} />
      <TodoList
        todoItems={todoItems}
        onCheck={id => dispatch(check(id))}
        onDelete={id => dispatch(remove(id))}
      />
    </>
  );
}
export default App;
