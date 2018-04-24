const router = require("express").Router();
const articleRoutes = require("./articles");
const nytRoutes = require("./nyt");
const artRoutes = require("./art");

// NYT routes
router.use("/articles", articleRoutes);
router.use("/art", artRoutes);
router.use("/nyt", nytRoutes);

module.exports = router;
