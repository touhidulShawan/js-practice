// Get a tempareture value in fahrenheit and convert to celsius and kelvin;

let fahrenheit = Number(window.prompt("Enter tempareture in fahrenheit: "));

// To celsius

let celsius = (fahrenheit - 32) * (5 / 9);

// To Kalvin

let kalvin = (fahrenheit - 32) * (5 / 9) + 273.15;

alert(`Celsius of given temp : ${celsius} And To Kalvin: ${kalvin}`);
