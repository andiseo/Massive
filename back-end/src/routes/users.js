const express = require('express');
const router = express.Router();
const UserController = require('../controller/users.js')
//CREATE - POST
router.post('/', UserController.createNewUsers)
//READ - GET
router.get('/', UserController.getAllUsers)
router.get('/Sign', UserController.getCheckUsers)
//Update - PATCH
router.patch('/:idUser', UserController.updateUsers)
//Delete - Delete
router.delete('/:idUser', UserController.deleteUser)


module.exports = router;