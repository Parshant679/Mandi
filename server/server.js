const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config({ path: "../server/.env" });
const app = new express();
const connectDB = require("./db/dboConnection");
const PORT = process.env.PORT;
app.use(cookieParser);
app.use(express.json());
app.get("/", (req, res) => {
  res.send("welcome to server ... ");
});
app.use("/user", require("./Routes/useRouter"));
app.use("/api", require("./Routes/categoryRoutes"));
app.use("/api", require("./Routes/productRouter"));
app.listen(PORT, (req, res) => {
  console.log("server listening at 3000");
});

connectDB();
