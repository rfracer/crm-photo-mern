const express = require('express');
const router = express.Router();

const {
  loginUser,
  registerUser,
  logoutUser,
} = require('../controllers/userController');

router.post('/login', loginUser);
router.post('/', registerUser);
router.post('/logout', logoutUser);

module.exports = router;
