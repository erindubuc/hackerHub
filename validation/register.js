const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // in order to get an empty string for Validator
  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';

  // if the name is not the required length
  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  // if the name field is empty
  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  // if the email field is empty
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  // if email is not valid
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  // if password field is empty
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  // if password is not between 6 and 30 chars
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  // if password2 is empty
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm Password field is required';
  } else {

    // to confirm that password2 matches password
    if (!Validator.equals(data.password, data.password2)) {
      errors.password2 = 'Passwords must match';
    }
  }


  return {
    errors,
    isValid: isEmpty(errors)
  };
};