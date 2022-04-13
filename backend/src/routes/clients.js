const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/authMiddleware');
const {
  getAllClients,
  getClient,
  addClient,
  deleteClient,
  updateClient,
} = require('../controllers/clientController');

router.get('/', auth, getAllClients);
router.get('/:id', auth, getClient);
router.post('/', auth, addClient);
router.delete('/:id', auth, deleteClient);
router.put('/:id', auth, updateClient);

module.exports = router;
