var mongoose = require('mongoose');

var BucketlistSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	title: {
		type: String,
		required: true, minlength: 5,
	},
	description: {
		type: String,
		required: true, minlength: 10,
	},
	complete: {
		type: Boolean,
		default: false
	}
}, {timestamps: true})

mongoose.model('Bucketlist', BucketlistSchema)