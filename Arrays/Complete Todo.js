const todos = [
  { text: "Do Homework", isComplete: false },
  { text: "Buy bread", isComplete: true },
  { text: "Buy eggs", isComplete: false },
  { text: "Go to gym", isComplete: true }
];

// show all my todos
const showTodos = () => {
  todos.map(todo => {
    console.log(`My todos: ${todo.text}`);
  });
};
// Delete todos

const deleteTodo = (todos, todoText) => {
  const index = todos.findIndex(todo => {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });

  if (index > -1) {
    todos.splice(index, 1);
  }
};

showTodos();
deleteTodo(todos, "go to gym");
console.log("==========================");
showTodos();
