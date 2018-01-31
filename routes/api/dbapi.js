const router = require("express").Router();
const dbController = require("../../controllers/db-controller");


router.route("/")
  .get(dbController.findAll)
  .post(dbController.create)


router.route("/clear/:title")
  .get(dbController.clear)


module.exports = router;
