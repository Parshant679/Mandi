const express = require("express");
const cookieParser = require("cookie-parser");
const app = new express();
const routes = require("./Routes/useRouter");
const connectDB = require("./db/dboConnection");
require("dotenv").config({ path: "../server/.env" });
const PORT = process.env.PORT || 3000;

app.use(routes);
app.use(cookieParser);
app.use(express.json());
app.listen(PORT, (req, res) => {
  console.log("server listening at 3000");
});

connectDB();
