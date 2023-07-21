const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.put("/signup", async (req, res) => {
  const newUser = req.body;
  const Result = await User.create(newUser);
  console.log("New user created : " + Result.nom);
  res.json(Result);
});

module.exports = router;
