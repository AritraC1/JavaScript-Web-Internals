const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const connectToMongoDB = require("./connection/mongoDbConnection");
const urlRoutes = require("./routes/url");
const userRoutes = require("./routes/user");
const { restrictToLoggedInUserOnly } = require("./middlewares/auth");

dotenv.config();

// Declarations
const app = express();
const PORT_NUMBER = process.env.PORT;

// Database
connectToMongoDB();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Set View Engine (SSR Setup)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve Static Files (CSS, images)
app.use(express.static(path.join(__dirname, "public")));

// UI Routes (SSR)
// First page: signup
app.get("/", (req, res) => {
  return res.render("signup");
});

// Login page
app.get("/login", (req, res) => {
  return res.render("signin");
});

// App UI (after signin)
app.get("/app", (req, res) => {
  return res.render("index", {
    title: "URL Shortener",
    shortLink: "fram.ly/try",
    redirectLink: "app.fram.ly/register",
  });
});

// Routes
app.use("/api", restrictToLoggedInUserOnly, urlRoutes);
app.use("/user", userRoutes);

// Start Server
app.listen(PORT_NUMBER, () => {
  console.log(`The server is running on http://localhost:${PORT_NUMBER}`);
});
