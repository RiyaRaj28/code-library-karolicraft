const {Router} = require('express');
const searchController = require('../controllers/searchController');

const router = Router();

router.get('/getfeaturedsnippets', searchController.getFeaturedSnippets)
router.get('/getsnippetbytitle', searchController.getSnippetByTitle)
router.get('/getsnippetsbylanguage', searchController.getSnippetsByLanguage)

module.exports = router;