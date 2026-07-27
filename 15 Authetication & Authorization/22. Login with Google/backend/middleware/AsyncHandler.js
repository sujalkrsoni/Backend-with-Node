const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => {
    console.log({
      statusCode: err.statusCode,
      message: err.message,
      stack: err.stack,
    });
    next(err);
  });
};


export default asyncHandler;