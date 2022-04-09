const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const ApiError = require('../helpers/ApiError');

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return next(new ApiError('User not found', 404));
  }

  if (!bcrypt.compare(password, user.password)) {
    return next(new ApiError('Invalid password for this user', 404));
  }

  const accessToken = generateAccessToken({ id: user._id, email: user.email });

  const refreshToken = generateRefreshToken({
    id: user._id,
    email: user.email,
  });
  // Save refresh Token in DB
  user.token = refreshToken;

  try {
    await user.save();
  } catch (err) {
    next(new ApiError('Internal error: Error while saving to database', 500));
  }

  res.cookie('JWT', accessToken, {
    maxAge: 864000000,
    httpOnly: true,
  });

  res.status(200).send({ status: 200, message: 'Login successfully' });
};

const registerUser = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ApiError('Fill all required fields', 400));
  }

  // Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    return next(new ApiError('User of this email already exists', 400));
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  try {
    const user = await User.create({
      email,
      password: hashedPassword,
    });

    if (user) {
      res.status(201).json({
        status: 201,
        message: 'User created',
        email: user.email,
      });
    }
  } catch (err) {
    next(new ApiError(err, 400));
  }
};

const logoutUser = (req, res) => {
  res.cookie('JWT', '', {
    maxAge: 86400000,
    httpOnly: true,
  });
  res.status(200).send({ status: 200, message: 'Logout successfully' });
};

const generateAccessToken = (data) => {
  return jwt.sign(data, process.env.TOKEN_SECRET, { expiresIn: '15m' });
};

const generateRefreshToken = (data) => {
  return jwt.sign(data, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: '7d',
  });
};

module.exports = {
  loginUser,
  registerUser,
  logoutUser,
};
