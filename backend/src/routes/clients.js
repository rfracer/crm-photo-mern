const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/authMiddleware');
const {
  getAllClients,
  getClient,
  addClient,
  deleteClient,
  updateClient,
  getAllTest,
} = require('../controllers/clientController');

router.get('/', auth, getAllClients);
router.get('/test', getAllTest);
router.get('/:id', auth, getClient);
router.post('/', addClient);
router.delete('/:id', deleteClient);
router.put('/:id', auth, updateClient);

module.exports = router;
