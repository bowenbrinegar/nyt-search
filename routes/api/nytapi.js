const router = require("express").Router();
const nytController = require("../../controllers/nyt-controller");

router.route("/:search")
  .get(nytController.search);

router.route("/popular")
  .get(nytController.mostPopular)




module.exports = router;
