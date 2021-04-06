import { useRecoilState } from "recoil";
import { todoAtom } from "../state/todoAtom";
import { TodoItem } from "./todoItem";

export const TodoList = () => {
  const [todoItems] = useRecoilState(todoAtom);

  return (
    <ul>
      {todoItems.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
