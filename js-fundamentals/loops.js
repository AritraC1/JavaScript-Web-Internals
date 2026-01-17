// Loops

// Basic for loop
// Syntax: for(initialization; condition; increment)
for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i}`);
}

// for loop with decrement
for (let i = 5; i > 0; i--) {
  console.log(`Countdown: ${i}`);
}

// for loop with multiple variables
for (let i = 0, j = 10; i < j; i++, j--) {
  console.log(`i=${i}, j=${j}`);
}

// while loop
// Executes code as long as the condition is true
let count = 0;
while (count < 5) {
  console.log(`While loop count: ${count}`);
  count++;
}

// do...while loop
// Executes code at least once before checking the condition
let num = 0;
do {
  console.log(`Do-While iteration: ${num}`);
  num++;
} while (num < 3);

// Iterating over arrays
const fruits = ["apple", "banana", "cherry"];

// Traditional for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for...of loop
// Ideal for iterating over array elements directly
for (const fruit of fruits) {
  console.log(fruit);
}

// for...in loop
// Iterates over keys/indexes in objects or arrays
const person = { name: "Alice", age: 25, city: "Paris" };

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Array methods as loop alternatives
// forEach - executes a function for each element
fruits.forEach((fruit) => console.log(`forEach: ${fruit}`));

// map - creates a new array by applying a function
const lengths = fruits.map((fruit) => fruit.length);
console.log(lengths);

// filter - returns a new array with elements that pass a test
const longFruits = fruits.filter((fruit) => fruit.length > 5);
console.log(longFruits);

// reduce - combines elements into a single value
const allLengths = fruits.reduce((acc, fruit) => acc + fruit.length, 0);
console.log(allLengths);

// Nested loops
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}

// Using break to exit a loop early
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("Breaking at i=5");
    break;
  }
  console.log(i);
}

// Using continue to skip current iteration
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    console.log("Skipping 2");
    continue;
  }
  console.log(i);
}

// Loops with objects and arrays together
const users = [
  { name: "John", active: true },
  { name: "Jane", active: false },
  { name: "Bob", active: true },
];

for (const user of users) {
  if (!user.active) continue;
  console.log(`${user.name} is active`);
}

// Infinite loop (use carefully)
// while (true) {
//   console.log("This would run forever");
//   break; // Prevents actual infinite loop
// }

// Looping over strings
const message = "Hello";
for (const char of message) {
  console.log(char);
}

// Looping with destructuring
const points = [
  [1, 2],
  [3, 4],
  [5, 6],
];
for (const [x, y] of points) {
  console.log(`x=${x}, y=${y}`);
}

// Using loops with arrow functions
const nums = [1, 2, 3, 4, 5];
const squares = [];
nums.forEach((num) => squares.push(num * num));
console.log(squares);

// Combining loops and conditionals
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}
