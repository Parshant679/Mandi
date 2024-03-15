const express = require("express");
const app = new express();
app.get("/", (req, res) => {
  res.send("<h1>this is server</h1>");
});

app.listen(8080, (req, res) => {
  console.log("server started...");
});
