const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/authMiddleware');

const {
  loginUser,
  registerUser,
  logoutUser,
  getUser,
  changePassword,
} = require('../controllers/userController');

router.post('/login', loginUser);
router.post('/register', registerUser);
router.post('/logout', logoutUser);
router.patch('/password', auth, changePassword);
router.get('/me', auth, getUser);

module.exports = router;
