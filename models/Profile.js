<<<<<<< HEAD
const mongoose = require("mongoose");
=======
const mongoose = require('mongoose');
>>>>>>> 484c1f94508c8483f5655412942a9e233435d3e1
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
<<<<<<< HEAD
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  company: {
    type: String
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  status: {
    type: String,
    required: true
  },
  skills: {
    type: [String], //an array of strings
    required: true
  },
  bio: {
    type: String
  },
  githubusername: {
    type: String
  },
  experience: [
    {
      title: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      location: {
        type: String
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
        //will have a checkbox to say 'current'
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  education: [
    {
      school: {
        type: String,
        required: true
      },
      degree: {
        type: String,
        required: true
      },
      fieldofstudy: {
        type: String,
        required: true
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
        //will have a checkbox to say 'current'
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
=======
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	handle: {
		type: String,
		required: true,
		max: 40
	},
	company: {
		type: String
	},
	website: {
		type: String
	},
	location: {
		type: String
	},
	status: {
		type: String,
		required: true
	},
	skills: {
		type: [String], //an array of strings
		required: true
	},
	bio: {
		type: String
	},
	githubusername: {
		type: String
	},
	experience: [
		{
			title: {
				type: String,
				required: true
			},
			company: {
				type: String,
				required: true
			},
			location: {
				type: String,
			},
			from: {
				type: Date,
				required: true
			},
			to: {
				type: Date,
				//will have a checkbox to say 'current'
			},
			current: {
				type: Boolean,
				default: false
			},
			description: {
				type: String
			}
		}
	],
	education: [
		{
			school: {
				type: String,
				required: true
			},
			degree: {
				type: String,
				required: true
			},
			fieldofstudy: {
				type: String,
				required: true
			},
			from: {
				type: Date,
				required: true
			},
			to: {
				type: Date,
				//will have a checkbox to say 'current'
			},
			current: {
				type: Boolean,
				default: false
			},
			description: {
				type: String
			}
		}
	],
	social: {
		youtube: {
			type: String
		},
		twitter: {
			type: String
		},
		facebook: {
			type: String
		},
		linkedin: {
			type: String
		},
		instagram: {
			type: String
		}
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
>>>>>>> 484c1f94508c8483f5655412942a9e233435d3e1
