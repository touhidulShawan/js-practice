const notes = ["note 1", "note 2", "note 3", "note 4"];

// add notes at the end
notes.push("note 5");
notes.push("note 6");
notes.push("note 7");
notes.push("note 8");
// remove note from the end
notes.pop();

//remove from start
notes.shift();

// add at first
notes.unshift('note 1');
// output
console.log(`you have ${notes.length} notes`);
notes.map(note => {
    console.log(`Notes are: ${note}`);
});
