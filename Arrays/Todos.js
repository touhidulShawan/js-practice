// Array
const todos = [
  "Buy eggs",
  "Buy bread",
  "Go to gym",
  "Do the HW",
  "Buy pen & paper"
];

console.log(`You have ${todos.length} todos`);
// use of index
console.log(`Todo: ${todos[0]}`);
console.log(`Todo: ${todos[1]}`);
console.log(`Todo: ${todos[2]}`);
console.log(`Todo: ${todos[3]}`);
console.log(`Todo: ${todos[4]}`);
console.log("===========================");
// useof callback fuction
todos.map(function(todo) {
  console.log(`Todo: ${todo}`);
});
console.log("===========================");

// arrow function
todos.map(todo => {
  console.log(`Todo: ${todo}`);
});
console.log("===========================");
