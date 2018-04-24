const router = require("express").Router();
const artController = require("../../controllers/artController");

// Matches with "/api/art"
router.route("/")
  .get(artController.findAll)
  .post(artController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  // .get(articleController.findById)
  // .put(articleController.update)
  // .delete(articleController.remove);

module.exports = router;
