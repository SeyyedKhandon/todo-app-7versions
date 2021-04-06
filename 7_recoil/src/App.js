import "./App.css";
import { AddTodo } from "./components/addTodo";
import { TodoList } from "./components/todoList";
import { RecoilRoot } from "recoil";
function App() {
  return (
    <RecoilRoot>
      <AddTodo />
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
