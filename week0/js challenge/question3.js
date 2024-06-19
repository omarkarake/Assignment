// Object Transformations
const fullName = (person) => `${person.firstName} ${person.lastName}`;

const isAdult = (person) => person.age >= 18;

const filterByAge = (people, minAge) =>
  people.filter((person) => person.age >= minAge);

// Example usage:
const person1 = { firstName: "John", lastName: "Doe", age: 20 };
const person2 = { firstName: "Jane", lastName: "Smith", age: 17 };
const people = [person1, person2];

console.log(fullName(person1)); //okay, this should return: "John Doe"
console.log(isAdult(person1)); //should return: true
console.log(isAdult(person2)); //should return: false
console.log(filterByAge(people, 18)); // [{ firstName: 'John', lastName: 'Doe', age: 20 }]
