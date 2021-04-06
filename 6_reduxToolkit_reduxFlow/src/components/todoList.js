import { TodoItem } from "./todoItem";
import { useSelector } from "react-redux";

export const TodoList = () => {
  const todoItems = useSelector(state => state.todo).todoItems;
  return (
    <ul>
      {todoItems.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
