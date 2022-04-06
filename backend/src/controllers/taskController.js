const Task = require('../models/task');
const { checkAccess } = require('../helpers/checkAccess');
const ApiError = require('../helpers/ApiError');

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    if (!tasks.length) {
      return next(new ApiError('Not found any tasks', 404));
    }
    res.status(200).json({ status: 200, data: tasks });
  } catch (err) {
    return next(new ApiError(err, 404));
  }
};

const addTask = async (req, res, next) => {
  const { name, priority } = req.body;

  if (!name || !priority) {
    return next(new ApiError('Please fill all fields', 400));
  }

  const task = await new Task({
    name,
    priority,
    user: req.user.id,
  }).save();

  if (!task) {
    return next(new ApiError('Error while saving to databases', 500));
  }
  res
    .status(201)
    .send({ status: 201, data: task, message: 'Task was created' });
};

const updateTask = async (req, res, next) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return next(new ApiError('Task of this id not found', 404));
  }

  if (!checkAccess(task, req)) {
    return next(new ApiError("You don't have access to this resource", 403));
  }

  if (!req.body.name) {
    return next(new ApiError('Fill all fields', 400));
  }

  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!updatedTask) {
    return next(new ApiError('Error while saving to databases', 500));
  }

  res.status(200).json({ message: 'Ok', data: updatedTask });
};

const deleteTask = async (req, res, next) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return next(new ApiError('Task of this id not found', 404));
  }

  if (!checkAccess(task, req)) {
    return next(new ApiError("You don't have access to this resource", 403));
  }

  try {
    task.remove();
  } catch (err) {
    return next(new ApiError(err, 500));
  }

  res.status(200).json({ message: 'Ok', data: task });
};

module.exports = {
  getAllTasks,
  addTask,
  updateTask,
  deleteTask,
};
