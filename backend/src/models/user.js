const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      minlength: 4,
      maxlength: 50,
      trim: true,
      required: [true, 'E-mail is required'],
      match: [
        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        'Invalid email structure',
      ],
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    settings: {
      currency: {
        type: String,
        default: 'PLN',
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
