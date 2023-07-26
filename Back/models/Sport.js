const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sportSchema = new Schema({
  matricule: { type: String, required: true },
  nom: { type: String, required: true },
  etat: { type: String, required: true },
  typeSport: { type: String, required: true },
});

module.exports = mongoose.model("Sport", sportSchema);
