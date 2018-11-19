<<<<<<< HEAD
const mongoose = require("mongoose");
=======
const mongoose = require('mongoose');
>>>>>>> 484c1f94508c8483f5655412942a9e233435d3e1
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
<<<<<<< HEAD
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);
=======
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	avatar: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now
	},
});

module.exports = User = mongoose.model('users', UserSchema);
>>>>>>> 484c1f94508c8483f5655412942a9e233435d3e1
