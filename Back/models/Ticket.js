const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  matricule: { type: String, required: true },
  nom: { type: String, required: true },
  nbr_ticket: { type: Number, required: true },
  type: { type: String, required: true },
  offre: { type: String, required: true },
});

module.exports = mongoose.model("Ticket", ticketSchema);
