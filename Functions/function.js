// Multiple value

function multiply(first_number, second_number) {
  return first_number * second_number;
}

console.log(multiply(5, 9));

// Default value

function student(name = "Shawan", score = 20) {
  console.log(name);
  console.log(score);
}

student();
