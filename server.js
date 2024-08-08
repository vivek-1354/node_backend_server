// const express = require("express");   // old way by defaule commenJs

import express from "express"; // new way by es6 module

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Guys! Welcome to my first express server");
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send("Your id is " + id);
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
