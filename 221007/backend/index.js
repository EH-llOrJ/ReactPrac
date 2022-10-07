const express = require("express");
const ejs = require("ejs");
const app = express();
const PORT = process.env.PORT || 8000;

// app.set("view engine", "ejs");
// app.set("views", "./views");

app.listen(PORT, () => {
  console.log(PORT, "서버 열림");
});
