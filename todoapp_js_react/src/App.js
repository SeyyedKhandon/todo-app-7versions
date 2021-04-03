import { useState } from "react";
import "./App.css";
import { AddTodo } from "./components/addTodo";
import { TodoList } from "./components/todoList";
import { deleteTodoItem, updateCheckStatus } from "./components/useTodo";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const onAddTodo = todo => {
    setTodoItems([...todoItems, todo]);
  };
  return (
    <>
      <AddTodo onAddTodo={onAddTodo} />
      <TodoList
        todoItems={todoItems}
        onCheck={id => setTodoItems(updateCheckStatus(todoItems, id))}
        onDelete={id => setTodoItems(deleteTodoItem(todoItems, id))}
      />
    </>
  );
}

export default App;
