import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todoItems, setTodoItems] = useState([]);
  return (
    <TodoContext.Provider value={{ todoItems, setTodoItems }}>
      {children}
    </TodoContext.Provider>
  );
};
