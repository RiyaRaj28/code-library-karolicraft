const { Router } = require("express");
const snippetController = require("../controllers/snippetController");
const upload = require("../middlewares/multerConfig");
const router = Router();

router.get("/allsnippets", snippetController.getAllSnippets);
router.get("/allsnippets/:snippetId", snippetController.getSnippet);
router.post(
  "/addsnippet",
  upload.single("image"),
  snippetController.addSnippet
);

router.put(
  "/allsnippets/:snippetId",
  upload.single("image"),
  snippetController.updateSnippet
);

router.delete("/allsnippets/:snippetId", snippetController.deleteSnippet);
router.get("/searchSnippet", snippetController.searchSnippet);
router.get("/getsnippetsbylanguage", snippetController.getSnippetsByLanguage);

module.exports = router;
