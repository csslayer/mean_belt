var mongoose = require('mongoose');
var User = mongoose.model('User');
var Bucketlist = mongoose.model('Bucketlist');

module.exports = {
	index: function(req, res){
		Bucketlist.find({}).populate({
			path: 'user',
			model: 'User'
		}).sort('-createdAt').exec(function(err, bucketlists){
			if(err){
				return res.json(err);
			}
			return res.json(bucketlists);
		})
	},
	create: function(req, res){
		console.log(req.body)
		Bucketlist.create(req.body, function(err, bucketlist){
			if(err){
				return res.json(err);
			}
			//the findbyidandupdate way
			User.findByIdAndUpdate(req.body.user, { $push : { bucketlists: bucketlist._id }}, function(err, user){
				if(err){
					return res.json(err);
				}
				return res.json(bucketlist);
			})
		})
	},
	show: function(req, res){
		Bucketlist.findById(req.params.id).populate({
			path: 'bucketlists',
			model: 'Bucketlist',
			populate: {
				path: 'user',
				model: 'User'
			}
		})
		.exec(function(err, bucketlist){
			if(err){
				return res.json(err);
			}
			return res.json(bucketlist);
		})
	},
	destroy: function(req, res){
		console.log(req.params.id)
		Bucketlist.findByIdAndRemove(req.params.id, function(err, bucketlist){
			if(err){
				return res.json(err);
			}
			return res.json(bucketlist);
		})
	},
	checkList: function(req, res){
		console.log(req.body)
		Bucketlist.findById(req.params.id, function(err, bucketlist){
			if(err){
				return res.json(err)
			}
			bucketlist.complete = !bucketlist.complete;
			bucketlist.save(function(err, bucketlist){
				if(err){
					return res.json(err);
				}
				return res.json(bucketlist);
			})
		})
	}
}
