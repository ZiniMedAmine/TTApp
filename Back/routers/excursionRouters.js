const express = require("express");
const router = express.Router();
const Excursion = require("../models/Excursion");

// create
router.put("/", async (req, res) => {
  const newExcursion = req.body;
  const result = await Excursion.create(newExcursion);
  console.log("New Excursion created");
  res.json(result);
});

// update
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  await Excursion.updateOne({ _id: id }, data);
  console.log("Excursion updated");
  res.json({ message: "Excursion updated" });
});

//delete
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Excursion.deleteOne({ _id: id });
  console.log("Excursion deleted");
  res.json({ message: "Excursion deleted" });
});

//get all excursions
router.get("/all", async (req, res) => {
  const excursions = await Excursion.find();
  res.json(excursions);
});

module.exports = router;
