const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Task name is required'],
    },
    priority: {
      type: String,
      default: 'low',
    },
  },
  {
    timestamps: true, // created_at / updated_at
  }
);

module.exports = mongoose.model('Task', taskSchema);
