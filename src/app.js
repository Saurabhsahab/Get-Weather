const express = require("express");
require("dotenv").config();
const hbs = require("hbs");
const path = require("path");
const app = express();
const port = process.env.PORT;

const base = path.join(__dirname, "../public");
const vp = path.join(__dirname, "../templates/views");
const pp = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", vp);
hbs.registerPartials(pp);
app.use(express.static(base));

const api = process.env.API_KEY;

app.get("", (req, res) => {
  res.render("index");
});

app.get("/home", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather", {
    api: api,
  });
});

app.get("*", (req, res) => {
  res.render("404er", {
    a: "Oops! Page Not Found",
  });
});

app.listen(port, () => {
  console.log("server is working ");
});
