const express = require("express");
const router = express.Router();
const Sport = require("../models/Sport");

// create
router.put("/", async (req, res) => {
  const newSport = req.body;
  const result = await Sport.create(newSport);
  console.log("New sport created");
  res.json(result);
});

// update
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  await Sport.updateOne({ _id: id }, data);
  console.log("Sport updated");
  res.json({ message: "Sport updated" });
});

//delete
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Sport.deleteOne({ _id: id });
  console.log("Sport deleted");
  res.json({ message: "Sport deleted" });
});

//get all sports
router.get("/all", async (req, res) => {
  const sports = await Sport.find();
  res.json(sports);
});

module.exports = router;
