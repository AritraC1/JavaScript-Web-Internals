// Arrow Function

// Basic arrow function with no parameters
const greet = () => {
  console.log("Hello, world!");
};

greet();

// Arrow function with one parameter
// Parentheses are optional for a single parameter
const square = (x) => {
  return x * x;
};

console.log(square(5));

// Arrow function with multiple parameters
const add = (a, b) => {
  return a + b;
};

console.log(add(3, 7));

// Implicit return
// If the function body is a single expression, you can omit curly braces and return
const multiply = (a, b) => a * b;

console.log(multiply(4, 6));

// Returning an object literal
// Wrap the object in parentheses to avoid ambiguity with function body
const createUser = (name, age) => ({ name: name, age: age });

console.log(createUser("Alice", 25));

// Arrow function with default parameters
const greetUser = (name = "Guest") => `Welcome, ${name}!`;

console.log(greetUser());
console.log(greetUser("Bob"));

// Arrow functions and higher-order functions
// Using arrow functions as callbacks
const numbers = [1, 2, 3, 4, 5];

// Map returns a new array by applying a function to each element
const doubled = numbers.map((num) => num * 2);
console.log(doubled);

// Filter returns a new array containing only elements that pass the test
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

// Reduce combines all elements into a single value
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// Arrow functions and 'this'
// Unlike normal functions, arrow functions do not have their own 'this'
// They use 'this' from the surrounding lexical scope
const person = {
  name: "John",
  hobbies: ["reading", "gaming"],
  printHobbies: function () {
    // 'this' here refers to the person object
    this.hobbies.forEach((hobby) => {
      // Arrow function inherits 'this' from printHobbies
      console.log(`${this.name} likes ${hobby}`);
    });
  },
};

person.printHobbies();

// Arrow functions cannot be used as constructors
// They do not have a 'prototype' property
// This would throw an error if uncommented
// const Person = (name) => { this.name = name; }
// const p = new Person("Alice");

// Arrow functions with rest parameters
const sumAll = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sumAll(1, 2, 3, 4, 5));

// Immediately Invoked Arrow Function Expression (IIAFE)
(() => {
  console.log("This runs immediately!");
})();

// Arrow functions with conditional logic
const checkEvenOdd = (num) => (num % 2 === 0 ? "Even" : "Odd");

console.log(checkEvenOdd(10));
console.log(checkEvenOdd(7));

// Using arrow functions in async/await or promises
const fetchData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    const data = await response.json();
    console.log("Fetched data:", data);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

fetchData();

// Arrow function returning another arrow function (currying)
const multiplyBy = (a) => (b) => a * b;

const double = multiplyBy(2);
console.log(double(5)); // 10

const triple = multiplyBy(3);
console.log(triple(5)); // 15
