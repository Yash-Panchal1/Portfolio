// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Something went wrong';

  // Mongoose validation error (schema rules fail)
  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = Object.values(err.errors).map((e) => e.message).join(', ');
  }

  // Galat _id format
  if (err.name === 'CastError') {
    statusCode = 400;
    message = 'Invalid id';
  }

  // Duplicate key (jaise same slug)
  if (err.code === 11000) {
    statusCode = 409;
    message = 'A record with that value already exists';
  }

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    errors: Array.isArray(err.errors) ? err.errors : [],
    ...(process.env.NODE_ENV === 'production' ? {} : { stack: err.stack }),
  });
};

export default errorHandler;