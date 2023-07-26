const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./dbConn");
const userRouters = require("./routers/userRouters");
const ticketRouters = require("./routers/ticketRouters");
const sportRouters = require("./routers/sportRouters");
const excursionRouters = require("./routers/excursionRouters");

const cors = require("cors");
require("dotenv").config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/users", userRouters);
app.use("/ticket", ticketRouters);
app.use("/sport", sportRouters);
app.use("/excursion", excursionRouters);

app.post("/create", (req, res) => {
  res.json({ id: req.params.id });
});

mongoose.connection.once("open", () => {
  console.log("Connected to Database !");
  app.listen(process.env.PORT || 3001, () => {
    console.log("started in http://localhost:3001/");
  });
});
