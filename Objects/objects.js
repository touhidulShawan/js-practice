// Challenge Area
/*
Create a Person object
with Name, age, location property
then print X is Y yeaer and lives in Z
*/

let person = {
  name: "Mike",
  age: 23,
  loction: "California"
};

console.log(
  `${person.name} is ${person.age} years and lives in ${person.loction}`
);

person.age = 27;
person.loction = "China";

console.log(
  `${person.name} is ${person.age} years and lives in ${person.loction}`
);
