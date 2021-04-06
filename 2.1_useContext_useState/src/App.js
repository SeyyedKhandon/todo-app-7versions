import "./App.css";
import { AddTodo } from "./components/addTodo";
import { TodoList } from "./components/todoList";
import { TodoContextProvider } from "./context/todoContext";

function App() {
  return (
    <TodoContextProvider>
      <AddTodo />
      <TodoList />
    </TodoContextProvider>
  );
}

export default App;
