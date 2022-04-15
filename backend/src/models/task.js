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
    checked: {
      type: Boolean,
      default: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true, // created_at / updated_at
  }
);

module.exports = mongoose.model('Task', taskSchema);
