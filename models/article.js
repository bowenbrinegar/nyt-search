const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  image: String,
  summary: { type: String, required: true },
  link: { type: String, required: true }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
