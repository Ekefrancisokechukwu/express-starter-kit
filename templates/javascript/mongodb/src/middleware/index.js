// Example middleware
exports.authMiddleware = (req, res, next) => {
  // Add authentication logic here
  next();
};
