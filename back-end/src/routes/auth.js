// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controller/auth');
const verifyToken = require('../middleware/auth');

router.post('/login', authController.login);
router.get('/protected', verifyToken, (req, res) => {
  // Endpoint yang dilindungi oleh token JWT
  res.status(200).send('This is a protected route.');
});

module.exports = router;
