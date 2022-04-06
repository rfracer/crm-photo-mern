const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/authMiddleware');
const {
  getAllTasks,
  addTask,
  deleteTask,
  updateTask,
} = require('../controllers/taskController');


router.get('/', auth, getAllTasks);
router.post('/', auth, addTask);
router.delete('/:id', auth, deleteTask);
router.put('/:id', auth, updateTask);

module.exports = router;