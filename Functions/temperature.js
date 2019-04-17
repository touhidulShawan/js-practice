function tempConverter(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5 / 9);
  return celsius;
}

// let fahrenheit = Number(window.prompt("Enter a temperature in Fahrenheit: "));
let fahrenheit = 32;

let result = tempConverter(fahrenheit);
console.log(result);
