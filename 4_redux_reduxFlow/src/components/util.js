export const todoGenerator = text => ({ text, id: Date.now(), checked: false });
export const updateCheckStatus = (todoItems, id) => {
  console.log("updateCheckStatus");
  return todoItems
    .map(todo => (todo.id === id ? { ...todo, checked: !todo.checked } : todo))
    .sort((todo1, todo2) => todo1.checked - todo2.checked);
};
export const deleteTodoItem = (todoItems, id) => {
  console.log("deleteTodoItem");
  return todoItems.filter(todo => todo.id !== id);
};
