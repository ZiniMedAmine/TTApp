const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

router.put("/signup", async (req, res) => {
  const newUser = req.body;
  const Result = await User.create(newUser);
  console.log("New user created : " + Result.nom);
  res.json(Result);
});

router.post("/verify", async (req, res) => {
  const token = req.body.token;
  if (!token) return res.status(403).json({ message: "ta9t tarif" });

  jwt.verify(token, process.env.TOKEN_SECRET, function (err, decoded) {
    if (decoded && !err) res.json({ verified: true });
    else res.status(403).json({ verified: false });
  });
});

router.post("/login", async (req, res) => {
  const { matricule, password } = req.body;

  if (!matricule || !password)
    return res
      .status(403)
      .json({ message: "matricule and password are required" });

  const user = await User.findOne({ matricule: matricule, password: password });

  if (!user) return res.status(403).json({ message: "Incorrect login" });

  delete user.password;

  const token = jwt.sign(
    { _id: user._id, nom: user.nom },
    process.env.TOKEN_SECRET,
    {
      expiresIn: "1d",
    }
  );

  res.json({ token: token });
});

module.exports = router;
