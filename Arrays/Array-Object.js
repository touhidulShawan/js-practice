const notes = [
  { title: "Do Homework", isComplete: false },
  { title: "Buy eggs", isComplete: true },
  { title: "Go to gym", isComplete: false },
  {}
];

console.log(notes);

// find a index of a item

let index = notes.findIndex(note => {
  return note.isComplete === true;
});

// console.log(index);
//
// notes.findIndex((note, index) => {
//   console.log(`Notes: ${note.title} & Index: ${index}`);
// });
