const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const connectToMongoDB = require("./connection/mongoDbConnection");
const urlRoutes = require("./routes/url");

dotenv.config();

// Declarations
const app = express();
const PORT_NUMBER = process.env.PORT;

// Database
connectToMongoDB();

// Middlewares
app.use(express.json());
app.use(cors());

// Set View Engine (SSR Setup)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve Static Files (CSS, images)
app.use(express.static(path.join(__dirname, "public")));

// UI Route (SSR)
app.get("/", (req, res) => {
  res.render("index", {
    title: "URL Shortener",
    shortLink: "fram.ly/try",
    redirectLink: "app.fram.ly/register",
  });
});

// Routes
app.use("/api", urlRoutes);

// Start Server
app.listen(PORT_NUMBER, () => [
  console.log(`The server is running on http://localhost:${PORT_NUMBER}`),
]);
