const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sampleSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Sample = mongoose.model("Book", sampleSchema);

module.exports = Sample;
