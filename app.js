// app.js

const express = require("express");
const path = require("path");
const pageRoutes = require("./routes/pageRoutes");

const app = express();
const port = 3000;

// Global messages array - needed for message persistance, please do not touch
const messages = [];

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); // To parse form data
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Pass messages array to the router
app.use((req, res, next) => {
  req.messages = messages;
  next();
});

app.use("/", pageRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
