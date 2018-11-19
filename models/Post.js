<<<<<<< HEAD
const mongoose = require("mongoose");
=======
const mongoose = require('mongoose');
>>>>>>> 484c1f94508c8483f5655412942a9e233435d3e1
const Schema = mongoose.Schema;

//Create new Schema Model
const PostSchema = new Schema({
<<<<<<< HEAD
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  text: {
    type: String,
    required: true
  },
  //so that posts/comments won't go away if a person deletes account
  name: {
    //will come from user state
    type: String
  },
  avatar: {
    type: String
  },
  likes: [
    //user id will go into array
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
      text: {
        type: String,
        required: true
      },
      name: {
        //will come from user state
        type: String
      },
      avatar: {
        type: String
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model("post", PostSchema);
=======
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	text: {
		type: String,
		required: true
	},
	//so that posts/comments won't go away if a person deletes account
	name: {//will come from user state
		type: String	
	},
	avatar: {
		type: String
	},
	likes: [//user id will go into array
		{
			user: {
				type: Schema.Types.ObjectId,
				ref: 'users'
			}
		}
	],
	comments: [
		{
			user: {
				type: Schema.Types.ObjectId,
				ref: 'users'
		},
		text: {
			type: String,
			required: true
		},
		name: {//will come from user state
			type: String	
		},
		avatar: {
			type: String
			}
		}
	],
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Post = mongoose.model('post', PostSchema);
>>>>>>> 484c1f94508c8483f5655412942a9e233435d3e1
