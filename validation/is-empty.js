<<<<<<< HEAD
const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);
=======
const isEmpty = (value) => 
		value === undefined ||
		value === null ||
		(typeof value === 'object' && Object.keys(value).length === 0) ||
		(typeof value === 'string' && value.trim().length === 0);
>>>>>>> 484c1f94508c8483f5655412942a9e233435d3e1

module.exports = isEmpty;
