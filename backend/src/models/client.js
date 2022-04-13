const mongoose = require('mongoose');

const clientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Client name is empty'],
    },
    category: {
      type: String,
      required: [true, 'Please add category of the job'],
    },
    date: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    value: {
      type: Number,
      required: [true, 'Please add value of the job'],
    },
    alreadyPaid: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      default: 'Lead',
      enum: {
        values: ['lead', 'contract', 'completed'],
        message: '{VALUE} is not supported',
      },
    },
    address: {
      type: String,
      default: '',
    },
    info: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true, // created_at / updated_at
  }
);

module.exports = mongoose.model('Client', clientSchema);
