app.controller('BucketlistController', function(BucketlistFactory, UserFactory, $routeParams, $cookies, $location){
	console.log('initializing BucketlistController...')

	var self = this;
	self.bucketlists = [];
	self.new_bucketlist_errors = [];
	self.newBucketlist = {};

	self.index = function(){
		BucketlistFactory.index(function(res){
			self.bucketlists = res.data;
		})
	}
})