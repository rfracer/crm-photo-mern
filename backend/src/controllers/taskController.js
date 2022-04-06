const Task = require('../models/tasks');
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

module.exports = {
  getAllTasks,
};
