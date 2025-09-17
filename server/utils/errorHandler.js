class ErrorHandler extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
  
      // Preserve the stack trace for debugging
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  const handleError = (err, req, res, next) => {
    let { message, statusCode } = err;
  
    // Default values if not provided
    statusCode = statusCode || 500;
    message = message || 'Internal Server Error';
  
    res.status(statusCode).json({
      success: false,
      error: {
        message,
        statusCode,
      },
    });
  };
  
  module.exports = {
    ErrorHandler,
    handleError,
  };
  