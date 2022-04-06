const notFoundURL = (req, res, next) => {
  const error = new Error('404 page not found');
  error.status = 404;
  next(error);
};

const catchErrors = (error, req, res, next) => {
  res.status(error.status).json({
    error: {
      status: error.status || 500,
      message: error.message || 'Internal Server Error',
    },
  });
};

module.exports = {
  notFoundURL,
  catchErrors,
};
