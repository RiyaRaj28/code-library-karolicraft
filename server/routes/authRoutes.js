const {Router} = require('express');
const authController = require('../controllers/authController');

const router = Router();

router.post('/login', authController.login)
router.delete('/logout', authController.logout)
router.post('/addAdminUser', authController.addAdminUser)
router.delete('/deleteAdminUser/:id', authController.deleteAdminUser)
router.get('/getAllUsers', authController.getAllUsers)


module.exports = router;