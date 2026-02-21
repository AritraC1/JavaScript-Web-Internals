// const http = require("http");
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express(); // app is basically a handler function
const PORT_NUMBER = process.env.PORT;

app.get("/", (req, res) => {
  return res.send("Hello from homepage");
});

app.get("/about", (req, res) => {
  return res.send(
    "Hello from about page, Hey " + req.query.name + " you are " + req.query.age,
  );
});

// const myServer = http.createServer(app); // not reqd in express

app.listen(PORT_NUMBER, () => {
  console.log(`Server is running on port number: ${PORT_NUMBER}`);
});
