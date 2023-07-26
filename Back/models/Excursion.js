const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const excursionSchema = new Schema({
  matricule: { type: String, required: true },
  nom: { type: String, required: true },
  age: { type: Number, required: true },
  typeChambre: { type: String, required: true },
});

module.exports = mongoose.model("Excursion", excursionSchema);
