function isValidPassword(password) {
  return password.length > 8 && !password.includes("password");
}

console.log(isValidPassword("asash")); // not valid
console.log(isValidPassword("asgdfsdga@fhgdhfgdh")); // valid
console.log(isValidPassword("asjhgdghddfgdpassword")); // not valid
