import { createContext, useReducer } from "react";
import { todoReducer } from "./todoReducer";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todoItems, dispatch] = useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{ todoItems, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
