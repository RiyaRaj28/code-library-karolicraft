const {Router} = require('express');
const snippetController = require('../controllers/snippetController');

const router = Router();

router.get('/allsnippets', snippetController.getAllSnippets)
router.get('/allsnippets/:snippetId', snippetController.getSnippet)
router.post('/addsnippet', snippetController.addSnippet)

module.exports = router;