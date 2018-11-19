<<<<<<< HEAD
const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // Check if email is valid
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // If no email is entered
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  // Check if password field is empty
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
=======
const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
	let errors = {};
	
	data.email = !isEmpty(data.email) ? data.email : '';
	data.password = !isEmpty(data.password) ? data.password : '';
	data.password2 = !isEmpty(data.password2) ? data.password2 : '';
	
	// Check if email is valid
	if(!Validator.isEmail(data.email)) {
		errors.email = 'Email is invalid';
	}
	
	// If no email is entered
	if(Validator.isEmpty(data.email)) {
		errors.email = 'Email field is required';
	}
	
	// Check if password field is empty
	if(Validator.isEmpty(data.password)) {
		errors.password = 'Password field is required';
	}
	
	return {
		errors,
		isValid: isEmpty(errors)
	}
}
>>>>>>> 484c1f94508c8483f5655412942a9e233435d3e1
