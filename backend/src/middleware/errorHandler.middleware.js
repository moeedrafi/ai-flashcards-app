export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server error",
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};
