import { TodoItem } from "./todoItem";

export const TodoList = ({ todoItems, onCheck, onDelete }) => {
  return (
    <ul>
      {todoItems.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onCheck={() => onCheck(todo.id)}
          onDelete={() => onDelete(todo.id)}
        />
      ))}
    </ul>
  );
};
