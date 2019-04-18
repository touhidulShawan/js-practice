let min = 1;
let max = 5;

function guessNumber(num) {
  let guessNum = Math.floor(Math.random() * (max - min + 1)) + min;
  if (num === guessNum) {
    return "Your are correct";
  } else {
    return "Incorrect guess ! try again";
  }
}

console.log(guessNumber(3));
