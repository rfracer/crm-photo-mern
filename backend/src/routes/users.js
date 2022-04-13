const express = require('express');
const router = express.Router();

const {
  loginUser,
  registerUser,
  logoutUser,
  getUser,
} = require('../controllers/userController');

router.post('/login', loginUser);
router.post('/register', registerUser);
router.post('/logout', logoutUser);
router.get('/me', getUser);

module.exports = router;
