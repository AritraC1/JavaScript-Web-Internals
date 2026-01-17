// Objects

// 1. Creating Objects

// Object literal (most common)
const user = {
  name: "Alex",
  age: 25,
  isAdmin: false,
};

console.log("User:", user);

// Using new Object()
const car = new Object();
car.brand = "Toyota";
car.year = 2022;

console.log("Car:", car);

// 2. Accessing Properties

// Dot notation
console.log("User name:", user.name);

// Bracket notation (useful for dynamic keys)
console.log("User age:", user["age"]);

const key = "isAdmin";
console.log("Is admin:", user[key]);

// 3. Adding, Updating, Deleting Properties

// Add
user.email = "alex@example.com";

// Update
user.age = 26;

// Delete
delete user.isAdmin;

console.log("Updated user:", user);

// 4. Nested Objects

const student = {
  id: 1,
  name: "Sam",
  address: {
    city: "New York",
    zip: 10001,
    geo: {
      lat: 40.7128,
      lng: -74.006,
    },
  },
};

console.log("Student city:", student.address.city);
console.log("Student latitude:", student.address.geo.lat);

// 5. Objects vs Arrays (Key Difference)

const arr = ["a", "b", "c"];
const obj = { 0: "a", 1: "b", 2: "c" };

console.log(arr[0]); // array index
console.log(obj[0]); // object key

// Arrays are ordered, objects are key-value based

// 6. Object Methods (Functions inside Objects)

const person = {
  firstName: "Jordan",
  lastName: "Lee",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log("Full name:", person.fullName());

// Arrow functions are NOT good for `this`
const badExample = {
  value: 10,
  getValue: () => {
    return this.value; // undefined
  },
};

console.log("Arrow function this:", badExample.getValue());

// 7. Looping Through Objects

// for...in loop
for (let key in user) {
  console.log(key, ":", user[key]);
}

// Object.keys
console.log("Keys:", Object.keys(user));

// Object.values
console.log("Values:", Object.values(user));

// Object.entries
Object.entries(user).forEach(([key, value]) => {
  console.log(`Entry -> ${key}: ${value}`);
});

// 8. Copying Objects (IMPORTANT)

// Shallow copy
const userCopy1 = Object.assign({}, user);
const userCopy2 = { ...user };

userCopy2.name = "Changed";

console.log("Original user:", user);
console.log("Copied user:", userCopy2);

// Nested objects are still shared (shallow copy!)
const nestedCopy = { ...student };
nestedCopy.address.city = "Los Angeles";

console.log("Original student city:", student.address.city); // changed!

// 9. Deep Copy (Simple Way)

const deepCopy = JSON.parse(JSON.stringify(student));
deepCopy.address.city = "Chicago";

console.log("Deep copy city:", deepCopy.address.city);
console.log("Original student city:", student.address.city);

// 10. Checking Properties

console.log("Has name?", "name" in user);
console.log("Has password?", user.hasOwnProperty("password"));

// 11. Destructuring Objects

const { name, age, email } = user;
console.log("Destructured:", name, age, email);

// Renaming variables
const { name: userName, age: userAge } = user;
console.log("Renamed:", userName, userAge);

// Nested destructuring
const {
  address: {
    city,
    geo: { lat },
  },
} = student;

console.log("City:", city, "Lat:", lat);

// 12. Objects with Dynamic Keys

const role = "admin";

const permissions = {
  [role]: true,
};

console.log("Permissions:", permissions);

// 13. Array of Objects (Very Common)

const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Tablet", price: 600 },
];

// Find
const expensive = products.find((p) => p.price > 1000);
console.log("Expensive product:", expensive);

// Filter
const affordable = products.filter((p) => p.price < 1000);
console.log("Affordable products:", affordable);

// Map
const productNames = products.map((p) => p.name);
console.log("Product names:", productNames);

// 14. Object.freeze & Object.seal

const settings = {
  theme: "dark",
  version: 1,
};

Object.freeze(settings);
settings.theme = "light"; // ignored
console.log("Frozen settings:", settings);

const config = {
  debug: true,
};

Object.seal(config);
config.debug = false; // allowed
config.newProp = true; // not allowed
console.log("Sealed config:", config);
