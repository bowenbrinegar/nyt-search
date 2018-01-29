const router = require("express").Router();
const dbRoutes = require("./dbapi");
const nytRoutes = require("./nytapi");

// Book routes
router.use("/db", dbRoutes);
router.use("/nyt", nytRoutes);

module.exports = router;
