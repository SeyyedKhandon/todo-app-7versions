import { useState } from "react";
import "./App.css";
import { AddTodo } from "./components/addTodo";
import { TodoList } from "./components/todoList";

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
        onCheck={items => setTodoItems(items)}
        onDelete={items => setTodoItems(items)}
      />
    </>
  );
}

export default App;
