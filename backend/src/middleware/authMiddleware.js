const jwt = require('jsonwebtoken');
const ApiError = require('../helpers/ApiError');

const auth = async (req, res, next) => {
  const token = req.cookies.JWT;

  if (!token) return next(new ApiError('Unauthenticated', 401));

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) return next(new ApiError('Forbidden', 403));

    req.user = user;
    next();
  });
};

module.exports = { auth };
