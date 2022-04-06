const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  const token = req.cookies.JWT;

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;
    next();
  });
};

module.exports = { auth };
