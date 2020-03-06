// ------ Module Required
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// --------- Files Required
const db = require("./connection/connection");
const auth = require("./routes/auth");
const jade = require("./routes/cardsRoutes/jade");

// -------- App use Methods

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

// ----------- APi Routes

app.use("/api/auth", auth);
app.use("/api/jade", jade);

app.listen(process.env.PORT, () => {
  console.log("Server Running Successfully", process.env.PORT);
});
