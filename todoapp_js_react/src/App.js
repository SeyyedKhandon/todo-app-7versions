import { useState } from "react";
import "./App.css";
import { TodoItem } from "./components/todoItem";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const onAddTodo = () => {
    setTodoItems([
      ...todoItems,
      { text: todoInput, id: Date.now(), checked: false }
    ]);
    setTodoInput("");
  };
  const onCheck = id => {
    console.log("onCheck");
    setTodoItems(
      todoItems.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };
  const onDelete = id => {
    console.log("onDelete");
    setTodoItems(todoItems.filter(todo => todo.id !== id));
  };

  return (
    <>
      <div className="header">
        <h2 style={{ margin: "5px" }}>JavaScript/React Todo App</h2>
        <input
          type="text"
          placeholder="Title..."
          value={todoInput}
          onChange={e => setTodoInput(e.target.value)}
          onKeyUp={e => (e.key === "Enter" ? onAddTodo() : null)}
        />
        <span onClick={onAddTodo} className="addBtn">
          Add
        </span>
      </div>

      <ul>
        {todoItems.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCheck={onCheck}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
