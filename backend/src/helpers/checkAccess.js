const checkAccess = (Object, req) => {
  return Object.user.toString() === req.user.id;
};

module.exports = {
  checkAccess,
};
