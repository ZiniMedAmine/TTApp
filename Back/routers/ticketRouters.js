const express = require("express");
const router = express.Router();
const Ticket = require("../models/Ticket");

// create
router.put("/", async (req, res) => {
  const newTicket = req.body;
  const result = await Ticket.create(newTicket);
  console.log("New ticket created");
  res.json(result);
});

// update
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  await Ticket.updateOne({ _id: id }, data);
  console.log("Ticket updated");
  res.json({ message: "Ticket updated" });
});

//delete
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Ticket.deleteOne({ _id: id });
  console.log("Ticket deleted");
  res.json({ message: "Ticket deleted" });
});

//get all tickets
router.get("/all", async (req, res) => {
  const tickets = await Ticket.find();
  res.json(tickets);
});

module.exports = router;
