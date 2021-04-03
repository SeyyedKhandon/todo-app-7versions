import { TodoItem } from "./todoItem";
import { deleteTodoItem, updateCheckStatus } from "./useTodo";

export const TodoList = ({ todoItems, onCheck, onDelete }) => {
  return (
    <ul>
      {todoItems.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onCheck={() => onCheck(updateCheckStatus(todoItems, todo.id))}
          onDelete={() => onDelete(deleteTodoItem(todoItems, todo.id))}
        />
      ))}
    </ul>
  );
};
