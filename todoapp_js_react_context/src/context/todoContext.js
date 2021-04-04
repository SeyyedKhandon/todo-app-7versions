import { createContext, useState } from "react";

const TodoContext = createContext();

export const TodoContextProvider = props => {
  const [todoItems, setTodoItems] = useState([]);
  return (
    <TodoContext.Provider value={{ todoItems, setTodoItems }}>
      {props.children}
    </TodoContext.Provider>
  );
};
