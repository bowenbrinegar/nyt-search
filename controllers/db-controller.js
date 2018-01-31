const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Article
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body)
    db.Article.findOne({title: req.body.title})
      .then(result => {
        !result ?
          db.Article
            .create(req.body)
            .then(dbModel => console.log(dbModel))
            .catch(err => res.status(422).json(err)) :
          res.send("already exists")
      }).catch(err => console.log(err))
  },
  clear: function(req, res) {
    console.log(req.body.title)
    db.Article.remove({title: req.params.title})
      .then(result => res.send(result))
      .catch(err => console.log(err))
  }
};