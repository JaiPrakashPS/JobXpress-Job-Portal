export const sendToken = (user, statusCode, res, message) => {
  // Generate JWT Token using the getJWTToken method from the user model
  const token = user.getJWTToken();

  // Ensure COOKIE_EXPIRE is in the correct format and calculate the cookie expiration time
  const options = {
    expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000), // COOKIE_EXPIRE is in days and converted to milliseconds
    httpOnly: true, // Make sure the cookie is accessible only via HTTP requests for security
  };
  console.log(options);
  

  // Send the token in a cookie and return the response with success message, user data, and the token
  res.status(statusCode)
    .cookie("token", token, options) // Store token in cookie
    .json({
      success: true,
      user,
      message,
      token, // Include the token in the response body
    });
};
