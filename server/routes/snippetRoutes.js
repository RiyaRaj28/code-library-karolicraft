const {Router} = require('express');
const snippetController = require('../controllers/snippetController');

const router = Router();

router.get('/allsnippets', snippetController.getAllSnippets)
router.get('/allsnippets/:snippetId', snippetController.getSnippet)
router.post('/addsnippet', snippetController.addSnippet)
router.put('/allsnippets/:snippetId', snippetController.updateSnippet)
router.delete('/allsnippets/:snippetId', snippetController.deleteSnippet)

module.exports = router;