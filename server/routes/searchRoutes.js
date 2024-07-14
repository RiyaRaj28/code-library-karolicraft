const { Router } = require("express");
const searchController = require("../controllers/searchController");

const router = Router();

router.put(
  "/handleFeaturedSnippets/:id",
  searchController.handleFeaturedSnippets
);
router.get("/getsnippetbytitle", searchController.getSnippetByTitle);

module.exports = router;
