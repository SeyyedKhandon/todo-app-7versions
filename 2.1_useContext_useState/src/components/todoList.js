import { useContext } from "react";
import { TodoContext } from "../context/todoContext";
import { TodoItem } from "./todoItem";

export const TodoList = () => {
  const { todoItems } = useContext(TodoContext);

  return (
    <ul>
      {todoItems.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
