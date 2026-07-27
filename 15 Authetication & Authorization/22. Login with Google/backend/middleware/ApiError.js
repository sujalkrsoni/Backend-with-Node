/**
 * Custom API error class that extends the built-in Error class.
 * This class is used to handle API-specific errors with additional properties.
 */
class ApiError extends Error {
  /**
   * Creates an instance of ApiError.
   * @param {number} statusCode - HTTP status code for the error
   * @param {string} message - Error message to be displayed
   */
  constructor(statusCode, message) {
    super(message);

    this.statusCode = statusCode; // HTTP status code for the error response
    this.message = message; // Error message
    this.success = false; // Indicates that the request was unsuccessful
    this.name = this.constructor.name; // Set the error name to the class name

    // Capture the stack trace for better error debugging
    Error.captureStackTrace(this, this.constructor);
  }
}

export default ApiError; 