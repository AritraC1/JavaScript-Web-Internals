// File Handling

const fs = require("fs"); // fs - file system

// Synchronous
// fs.writeFileSync("./nodejs/hello-world/test.txt", "Hello world");

// Async
// fs.writeFile("./nodejs/hello-world/test.txt", "Hello Async", (err) => {});

// const result1 = fs.readFileSync("./nodejs/hello-world/contact.txt", "utf-8");
// console.log(result1);

// // Async does not return anything
// fs.readFile("./nodejs/hello-world/contact.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log(result);
//   }
// });

// Add new items in the file
fs.appendFileSync(
  "./nodejs/hello-world/test.txt",
  `\n${Date.now()} Hey there\n`,
);

// Copy file
fs.cpSync("./nodejs/hello-world/test.txt", "./nodejs/hello-world/copy.txt");

// Delete
fs.unlinkSync("./nodejs/hello-world/copy.txt");
console.log(fs.statSync("./nodejs/hello-world/test.txt").isFile);
