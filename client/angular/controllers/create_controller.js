app.controller('CreateController', function(UserFactory, BucketlistFactory, $http, $location){
	console.log('initializing CreateController...');

	var self = this;
	self.bucketlists = [];
	self.new_bucketlist_errors = [];
	self.newBucketlist = {};

	self.index = function(){
		BucketlistFactory.index(function(res){
			self.bucketlists = res.data;
			console.log(self.bucketlists);
		})
	}
	self.create = function(newBucketlist){
		console.log(newBucketlist)
		self.new_bucketlist_errors = [];
		UserFactory.session(function(user){
			newBucketlist.user = user._id;
			BucketlistFactory.create(newBucketlist, function(res){
				console.log(res);
				self.newBucketlist = {};
				if(res.data.errors){
					for(key in res.data.errors){
						var error = res.data.errors[key];
						self.new_bucketlist_errors.push(error.message);
					}
				} else {
					$location.url('/dashboard');
				}
			})
		})
	}
	self.destroy = function(bucketlist_id){
		BucketlistFactory.destroy(bucketlist_id, self.index);
	}

})