const notFoundMiddleware = (req, res) =>
  res.status(404).json({
    success: false,
    error: {
      message: `Not Found - ${req.originalUrl}`,
    },
  });

module.exports = notFoundMiddleware;
