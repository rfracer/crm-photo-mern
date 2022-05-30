const jwt = require('jsonwebtoken');
const ApiError = require('../helpers/ApiError');
const { generateAccessToken } = require('../helpers/tokensGenerator');

const auth = async (req, res, next) => {
  const token = req.cookies.JWT;

  if (!token) {
    res.set('Cache-Control', 'no-store');
    return next(new ApiError('Unauthenticated', 401));
  }

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) {
      const refreshToken = req.cookies.JWT_REFRESH;
      res.set('Cache-Control', 'no-store');

      if (!refreshToken) return next(new ApiError('Unauthenticated', 401));

      jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, user) => {
          if (err) return next(new ApiError('Forbidden - token expired', 401));
          req.user = user;
          const { id, email, settings } = user;
          const accessToken = generateAccessToken({
            id: id,
            email: email,
            settings: settings,
          });

          res.cookie('JWT', accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
          });
        }
      );
    } else {
      req.user = user;
    }
    next();
  });
};

module.exports = { auth };
