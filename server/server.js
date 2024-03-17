const express = require("express");
const cors = require("cors");
const app = new express();
require("dotenv").config({ path: "../server/.env" });
const cookieParser = require("cookie-parser");
const connectDB = require("./db/dboConnection");
const PORT = process.env.PORT;
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.get("/", (req, res) => {
  res.json({ msg: "This is Example" });
});

app.use("/user", require("./Routes/useRouter"));
app.use("/api", require("./Routes/categoryRoutes"));
app.use("/api", require("./Routes/productRouter"));
app.listen(PORT, (req, res) => {
  console.log("server listening at", PORT);
});

connectDB();
