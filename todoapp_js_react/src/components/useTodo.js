export const todoGenerator = text => ({ text, id: Date.now(), checked: false });
export const updateCheckStatus = (todoItems, id) => {
  console.log("updateCheckStatus");
  return todoItems.map(todo =>
    todo.id === id ? { ...todo, checked: !todo.checked } : todo
  );
};
export const deleteTodoItem = (todoItems, id) => {
  console.log("deleteTodoItem");
  return todoItems.filter(todo => todo.id !== id);
};
