const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const ApiError = require('../helpers/ApiError');
const {
  generateAccessToken,
  generateRefreshToken,
} = require('../helpers/tokensGenerator');

const getUser = async (req, res, next) => {
  res.set('Cache-Control', 'no-store');
  res.status(200).send({
    status: 200,
    user: req.user ? req.user : null,
  });
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return next(new ApiError('User not found', 404));
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return next(new ApiError('Invalid password for this user', 404));
  }

  const accessToken = generateAccessToken({
    id: user._id,
    email: user.email,
    settings: user.settings,
  });

  const refreshToken = generateRefreshToken({
    id: user._id,
    email: user.email,
    settings: user.settings,
  });

  try {
    await user.save();
  } catch (err) {
    next(new ApiError('Internal error: Error while saving to database', 500));
  }

  res.cookie('JWT', accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
  });

  res.cookie('JWT_REFRESH', refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
  });

  res.status(200).send({
    status: 200,
    user: { email: email, settings: user.settings },
    message: 'Login successfully',
  });
};

const registerUser = async (req, res, next) => {
  const { email, password, confirmPassword } = req.body;

  if (!email || !password || !confirmPassword) {
    return next(new ApiError('Fill all required fields', 400));
  }

  if (password !== confirmPassword) {
    return next(new ApiError("Passwords didn't match", 400));
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
    maxAge: 0,
    httpOnly: true,
    secure: true,
    sameSite: 'none',
  });
  res.cookie('JWT_REFRESH', '', {
    maxAge: 0,
    httpOnly: true,
    secure: true,
    sameSite: 'none',
  });
  res.status(200).send({ status: 200, message: 'Logout successfully' });
};

const changePassword = async (req, res, next) => {
  if (req.user.email === 'test@test.com') {
    return next(new ApiError('Demo account password cannot be chanaged', 400));
  }

  const { password, confirmPassword } = req.body;

  if (!password || !confirmPassword) {
    return next(new ApiError('Fill all required fields', 400));
  }

  if (password !== confirmPassword) {
    return next(new ApiError("Passwords didn't match", 400));
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Update user password - PATCH
  try {
    const updatedUser = await User.findByIdAndUpdate(req.user.id, {
      password: hashedPassword,
    });

    if (updatedUser) {
      res.status(200).json({
        status: 200,
        message: 'Password updated',
      });
    }
  } catch (err) {
    next(new ApiError(err, 400));
  }
};

module.exports = {
  loginUser,
  registerUser,
  logoutUser,
  getUser,
  changePassword,
};
