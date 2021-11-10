const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "/public")));

app.all("/home", (request, response) => {
  response.sendFile(path.join(__dirname, "views", "home.html"));
});

app.all("/about", (request, response) => {
  response.sendFile(path.join(__dirname, "views", "about.html"));
});

app.all("/works", (request, response) => {
  response.sendFile(path.join(__dirname, "views", "works.html"));
});

app.all("/gallery", (request, response) => {
  response.sendFile(path.join(__dirname, "views", "gallery.html"));
});

app.listen(4000, () => {
  console.log("Server Running");
});
