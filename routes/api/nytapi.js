const router = require("express").Router();
const nytController = require("../../controllers/nyt-controller");


router.route("/:search")
  .get(nytController.search);


module.exports = router;
