const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  // if there is a name there, it equals data.name, or it is an empty string and will pass down to errors.name
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  //Check if name entered has enough characters
  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }
  // Check if name field is empty
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  // If no email is entered
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }
  // Check if email is valid
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  // Check if password field is empty
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  // Check that password has enough characters
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
  // Check if password2 field is empty
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password field is required";
  }
  // Check to see if password2 matches password
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
